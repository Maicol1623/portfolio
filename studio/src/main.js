/* mk digital studio, sito personale.
   One fixed WebGL canvas over the page. Every 3D group is glued to a DOM "stage" and
   assembled by the scroll progress of its section. The yellow dot of the logo travels
   between anchors (heading full stops, words, the scenes, the logo) along arcs.
   GSAP + ScrollTrigger pin the sections, SplitText splits the titles, Lenis smooths
   the scroll with a mouse. Without WebGL the page shows posters and real CSS dots. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { findShops, shopDetails, parseHours, openNow, statusText, hoursText, kindOf, catOf } from './shopfinder.js';

window.mkStudio = true;
const W = window, D = document, H = D.documentElement;
const $ = (s, c) => (c || D).querySelector(s);
const $$ = (s, c) => Array.from((c || D).querySelectorAll(s));
const gsap = W.gsap, ScrollTrigger = W.ScrollTrigger, SplitText = W.SplitText;
const reduced = !!(W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches);
const fine = !!(W.matchMedia && W.matchMedia('(hover: hover) and (pointer: fine)').matches);
const motion = !!(gsap && ScrollTrigger) && H.classList.contains('motion') && !reduced;
if (!motion) H.classList.remove('motion');

/* ---------- small math ---------- */
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (p, a, b) => clamp((p - a) / (b - a));
const eOut = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));            // expo.out
const eIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // power3.inOut
const eBack = (t) => { const c = 1.7, c3 = c + 1; return 1 + c3 * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const eSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
function rand(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

/* the visitor's shop starts as an invented example (its hours are invented too, like the shop) */
const KIND_CAT = { food: 'Ristorante', hair: 'Parrucchiere', bake: 'Forno', other: 'Negozio' };
const DEMO = { name: 'Trattoria da Ines', kind: 'food', cat: 'Trattoria', city: '', addr: '', hours: 'Tu-Su 12:00-15:00, 19:00-23:00', web: '', osm: '', src: 'demo' };

/* ---------- page basics that work without 3D ---------- */
// opening of the dot: a (0..1) pops it in, big, in the middle; v goes 1 -> 0 while it flies into the full stop
const intro = { a: motion ? 0 : 1, v: motion ? 1 : 0 };
const hooks = { landed: null };
copyButton();
navTheme();
dock();
compare();
const shop = shopStore();
const phone = phoneUI(shop);
const find = finder(shop);
const how = howLine();

let lenis = null;
if (motion) {
  gsap.registerPlugin(ScrollTrigger);
  if (SplitText) gsap.registerPlugin(SplitText);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (fine && W.Lenis) {
    lenis = new W.Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    H.classList.add('lenis');
  }
}
anchors();
// the opening is built first and played after the 3D scene exists, so its first second never stutters
const heroTl = motion ? heroType() : null;
W.mkHero = heroTl;

/* ---------- WebGL ---------- */
const canvas = $('#gl');
let renderer = null;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (e) { renderer = null; }
if (!renderer) {
  H.classList.add('no-gl');
  intro.v = 0; intro.a = 1;
  if (motion) {
    startDomMotion();
    ScrollTrigger.create({ trigger: '.steps-track', start: 'top 72%', end: 'bottom 55%', onUpdate: (s) => how.set(s.progress), onRefresh: () => how.measure() });
    // without the 3D dot the phone still builds itself as it scrolls in, and stops on the finished page
    ScrollTrigger.create({ trigger: '#sito', start: 'top 85%', end: 'top 10%', onUpdate: (s) => phone.pose(s.progress * 0.6), onRefresh: (s) => phone.pose(s.progress * 0.6) });
  } else phone.pose(0.6);
} else {
  H.classList.add('gl');
  start3D();
}
// start the opening only when frames flow (the first shader compile can hold the GPU for a moment)
// (on a slow phone it starts anyway after a second: the headline must never wait for the 3D)
if (heroTl) {
  let n = 0, lt = 0, done = false;
  const go = () => { if (!done) { done = true; heroTl.play(); } };
  const f = (t) => { if (done) return; n = lt && t - lt < 50 ? n + 1 : 0; lt = t; if (n >= 2) go(); else requestAnimationFrame(f); };
  requestAnimationFrame(f); setTimeout(go, 700);
}

function start3D() {
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  const DPR = Math.min(W.devicePixelRatio || 1, fine ? 2 : 1.75);
  renderer.setPixelRatio(DPR);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  const keyL = new THREE.DirectionalLight(0xffffff, 1.5); keyL.position.set(-6, 9, 12); scene.add(keyL);
  const rimL = new THREE.DirectionalLight(0xdfe8ff, 0.6); rimL.position.set(8, -3, 6); scene.add(rimL);
  scene.add(new THREE.AmbientLight(0xffffff, 0.22));

  const FOV = 30, CAM_Z = 60;
  const camera = new THREE.PerspectiveCamera(FOV, 1, 1, 400);
  camera.position.set(0, 0, CAM_Z);
  let vw = 1, vh = 1, k = 1; // k: world units per css px on the z = 0 plane
  let lastSig = ''; // what the last drawn frame showed, to skip drawing the same thing again
  function resize() {
    vw = W.innerWidth; vh = W.innerHeight;
    renderer.setSize(vw, vh, false);
    lastSig = '';
    camera.aspect = vw / vh; camera.updateProjectionMatrix();
    k = (2 * CAM_Z * Math.tan((FOV * Math.PI) / 360)) / vh;
  }
  resize();
  W.addEventListener('resize', resize);
  const V = () => new THREE.Vector3();
  const toWorld = (x, y, out) => (out || V()).set((x - vw / 2) * k, -(y - vh / 2) * k, 0);

  /* materials */
  const M = {
    yellow: new THREE.MeshPhysicalMaterial({ color: 0xfdc800, roughness: 0.26, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06 }),
    navy: new THREE.MeshPhysicalMaterial({ color: 0x1c293c, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.2, envMapIntensity: 0.55 }),
    navyMatte: new THREE.MeshPhysicalMaterial({ color: 0x1c293c, roughness: 0.55, specularIntensity: 0.22, clearcoat: 0.18, clearcoatRoughness: 0.35, envMapIntensity: 0.3 }),
    // the logo disc: almost no reflection, and a base a little darker than the brand navy: lit, it reads as #1c293c
    disc: new THREE.MeshPhysicalMaterial({ color: 0x171f2b, roughness: 0.72, metalness: 0, specularIntensity: 0.22, envMapIntensity: 0.08 }),
    white: new THREE.MeshPhysicalMaterial({ color: 0xf7f7f4, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.3 }),
    paper: new THREE.MeshPhysicalMaterial({ color: 0xe6e9ee, roughness: 0.6, clearcoat: 0.2 }),
    line: new THREE.MeshStandardMaterial({ color: 0xc9ced6, roughness: 0.7 }),
    lineDark: new THREE.MeshStandardMaterial({ color: 0x1c293c, roughness: 0.6 }),
    chip: new THREE.MeshStandardMaterial({ color: 0xeef0f3, roughness: 0.65 }),
    green: new THREE.MeshPhysicalMaterial({ color: 0x2db36a, roughness: 0.3, clearcoat: 0.8 }),
  };
  const box = (w, h, d, r, s = 4) => new RoundedBoxGeometry(w, h, d, s, Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3));
  const mesh = (g, m) => new THREE.Mesh(g, m);
  const sphereGeo = new THREE.SphereGeometry(1, 64, 48);

  /* rounded rectangle with 0..1 uvs, for photos and labels */
  function rrect(w, h, r) {
    const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
    s.lineTo(x + w, y + h - r); s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
    s.lineTo(x + r, y + h); s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
    s.lineTo(x, y + r); s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
    const g = new THREE.ShapeGeometry(s, 10);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (p.getX(i) - x) / w, (p.getY(i) - y) / h);
    return g;
  }

  let dirty = true; // reduced motion only renders when something changed
  let posterDot = false;
  let posterMode = false; // a still poster never says "open now": it would be wrong most of the day
  /* canvas textures */
  function canvasTex(w, h, draw) {
    const c = D.createElement('canvas'); c.width = w; c.height = h;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.userData.draw = () => { const x = c.getContext('2d'); x.clearRect(0, 0, w, h); draw(x, w, h); t.needsUpdate = true; };
    t.userData.draw();
    return t;
  }
  const ICON = {
    clock: 'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5V12l3 2',
    phone: 'M5.5 3.5h3.2l1.8 4.6-2.3 1.5a11 11 0 0 0 6.2 6.2l1.5-2.3 4.6 1.8v3.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z',
    chat: 'M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z',
    camera: 'M4 8h3l1.6-2.5h6.8L17 8h3v11H4zM12 9.9a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6z',
  };
  function icon(x, name, cx, cy, size, color) {
    if (!W.Path2D) return;
    x.save(); x.translate(cx - size / 2, cy - size / 2); x.scale(size / 24, size / 24);
    x.strokeStyle = color; x.lineWidth = 2.1; x.lineCap = 'round'; x.lineJoin = 'round';
    x.stroke(new Path2D(ICON[name])); x.restore();
  }
  function fitText(x, text, font, maxW, size) {
    let s = size; x.font = font.replace('$', s);
    while (x.measureText(text).width > maxW && s > 12) { s -= 2; x.font = font.replace('$', s); }
    return s;
  }

  /* photos: same-origin images, cropped with uv repeat/offset, plus a dull "before" copy */
  const IMG = 'img/p/';
  const imgCache = {};
  function loadImg(name) {
    if (!imgCache[name]) imgCache[name] = new Promise((res) => { const i = new Image(); i.decoding = 'async'; i.onload = () => res(i); i.onerror = () => res(null); i.src = IMG + name; });
    return imgCache[name];
  }
  // every photo material starts with a 1px grey map, so its shader is the final one from frame one
  const blank = new THREE.DataTexture(new Uint8Array([214, 218, 224, 255]), 1, 1);
  blank.colorSpace = THREE.SRGBColorSpace; blank.needsUpdate = true; blank.userData.keep = true;
  const photoMat = () => new THREE.MeshBasicMaterial({ map: blank, toneMapped: false });
  // the "before" photo: same picture, washed out and a bit crooked, done in the shader (no pixel loops)
  function dullMat() {
    const m = photoMat();
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n' +
        'float mkL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));\n' +
        'diffuseColor.rgb = mix(vec3(mkL), diffuseColor.rgb, 0.25) * vec3(0.62, 0.6, 0.56) + vec3(0.035, 0.03, 0.02);');
    };
    m.customProgramCacheKey = () => 'mk-dull';
    return m;
  }
  const baseTex = {};
  let kindGen = 0;
  function photoTex(name, aspect, zoom = 1, ox = 0.5, oy = 0.5, mat, tilt = 0) {
    const g0 = kindGen;
    loadImg(name).then((img) => {
      if (!img || g0 !== kindGen) return;
      if (!baseTex[name]) { const b = new THREE.Texture(img); b.colorSpace = THREE.SRGBColorSpace; b.anisotropy = 4; b.needsUpdate = true; baseTex[name] = b; }
      const t = baseTex[name].clone();
      const ia = img.naturalWidth / img.naturalHeight;
      let rx = 1, ry = 1;
      if (ia > aspect) rx = aspect / ia; else ry = ia / aspect;
      rx /= zoom; ry /= zoom;
      t.repeat.set(rx, ry); t.offset.set((1 - rx) * ox, (1 - ry) * oy);
      if (tilt) { t.center.set(0.5, 0.5); t.rotation = tilt; }
      if (mat.map && mat.map !== t && !mat.map.userData.keep) mat.map.dispose();
      mat.map = t; mat.color.set(0xffffff);
      dirty = true;
    });
  }

  /* ---------- the dot ---------- */
  const dot = mesh(sphereGeo, M.yellow);
  dot.renderOrder = 2;
  scene.add(dot);
  dot.visible = false;
  const fabIcon = mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (x, w, h) => icon(x, 'phone', w / 2, h / 2, 132, '#1b1b1b')), transparent: true, opacity: 0, depthTest: false, depthWrite: false, toneMapped: false }));
  fabIcon.renderOrder = 3; fabIcon.visible = false; scene.add(fabIcon);
  let fabOn = false;

  /* ---------- stages ---------- */
  const stages = [];
  function stage(el, designH, build) {
    const g = new THREE.Group(); scene.add(g);
    const s = { el, g, designH, p: 0, visible: false, ...build(g) };
    stages.push(s);
    return s;
  }
  function placeStage(s) {
    const r = s.el.getBoundingClientRect();
    s.visible = r.bottom > -vh * 0.3 && r.top < vh * 1.3 && r.height > 0;
    s.g.visible = s.visible;
    // keep placing hidden stages too: the dot may still be parked on one (the logo, at the very bottom)
    if (r.height <= 0) return;
    toWorld(r.left + r.width / 2, r.top + r.height / 2, s.g.position);
    // on wide screens the stage is a whole column: leave more air around the object
    const sc = Math.min(r.height, r.width / (s.aspect || 0.9)) * k / (s.designH * (vw >= 960 ? s.fillD || 1 : 1));
    s.g.scale.setScalar(sc);
  }

  /* flat UI panels (unlit, like real screens) and soft shadows instead of boxes */
  function rr(x, a, b, w, h, r) { x.beginPath(); if (x.roundRect) x.roundRect(a, b, w, h, r); else { x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); } }
  const panelTex = (w, h, rad, paint, bg = '#ffffff') => canvasTex(w, h, (x) => { x.fillStyle = bg; rr(x, 0, 0, w, h, rad); x.fill(); paint(x, w, h); });
  const panel = (tex, w, h) => mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
  // a blurred rounded rectangle: drawn off the canvas so only its shadow lands on it
  const shadowTex = (() => {
    const c = D.createElement('canvas'); c.width = 256; c.height = 256; const x = c.getContext('2d');
    x.shadowColor = 'rgba(6,12,22,1)'; x.shadowBlur = 34; x.shadowOffsetX = 1000;
    x.fillStyle = '#000'; rr(x, 52 - 1000, 52, 152, 152, 30); x.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const softShadow = (w, h, o = 0.35) => { const m = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: o, depthWrite: false, toneMapped: false })); m.renderOrder = 1; return m; };

  /* MAP: a map lying on the table, the dot drops on it and becomes the pin */
  const mapS = stage($('[data-stage=map]'), 12, (g) => {
    const tilt = new THREE.Group(); g.add(tilt);
    const spin = new THREE.Group(); tilt.add(spin);
    const boardSh = softShadow(12.4, 9.8, 0.42); boardSh.position.set(0.5, -0.6, -0.5); spin.add(boardSh);
    spin.add(mesh(box(9.4, 6.8, 0.36, 0.5, 6), M.navyMatte));
    const mapTex = canvasTex(1024, 740, (x, w, h) => {
      const r = rand(7);
      x.fillStyle = '#eef0f3'; x.fillRect(0, 0, w, h);
      x.fillStyle = '#cfe8c9'; x.beginPath(); x.ellipse(170, 560, 190, 120, -0.3, 0, Math.PI * 2); x.fill();
      x.strokeStyle = '#a7d0ec'; x.lineWidth = 46; x.lineCap = 'round';
      x.beginPath(); x.moveTo(-40, 120); x.bezierCurveTo(260, 200, 420, 40, 700, 150); x.bezierCurveTo(860, 210, 960, 110, 1080, 160); x.stroke();
      x.fillStyle = '#e1e5eb';
      for (let i = 0; i < 26; i++) { const bx = 40 + (i % 7) * 140 + r() * 30, by = 250 + Math.floor(i / 7) * 120 + r() * 20; rr(x, bx, by, 96 + r() * 20, 76 + r() * 14, 10); x.fill(); }
      x.strokeStyle = '#ffffff'; x.lineWidth = 22;
      [[0, 230, 1024, 250], [0, 470, 1024, 440], [300, 0, 330, 740], [640, 0, 610, 740], [0, 700, 1024, 600]].forEach((l) => { x.beginPath(); x.moveTo(l[0], l[1]); x.lineTo(l[2], l[3]); x.stroke(); });
      x.strokeStyle = '#ffd24a'; x.lineWidth = 30; x.beginPath(); x.moveTo(-20, 380); x.bezierCurveTo(300, 330, 600, 420, 1050, 330); x.stroke();
    });
    const mapP = mesh(rrect(9.0, 6.4, 0.36), new THREE.MeshBasicMaterial({ map: mapTex, toneMapped: false }));
    mapP.position.z = 0.185; spin.add(mapP);
    const PIN = new THREE.Vector3(0.7, -0.2, 0);
    const needle = mesh(new THREE.ConeGeometry(0.24, 1.9, 40), M.navy);
    needle.rotation.x = -Math.PI / 2; needle.geometry.translate(0, -0.95, 0);
    const needleG = new THREE.Group(); needleG.position.set(PIN.x, PIN.y, 0.19); needleG.add(needle); spin.add(needleG);
    // the pin's shadow: long and soft, falling to the lower right
    const pinSh = softShadow(2.6, 1.0, 0.5); pinSh.rotation.z = -0.55; pinSh.position.set(PIN.x + 0.85, PIN.y - 0.55, 0.2); spin.add(pinSh);
    const rings = [0, 1, 2].map(() => { const m = mesh(new THREE.RingGeometry(0.62, 0.74, 64), new THREE.MeshBasicMaterial({ color: 0xfdc800, transparent: true, opacity: 0, depthWrite: false })); m.position.set(PIN.x, PIN.y, 0.2); spin.add(m); return m; });
    const cards = [
      { ic: 'clock', tx: 'Orari giusti', at: [-3.1, 1.6, 2.0] },
      { ic: 'phone', tx: 'Chiama', at: [-2.9, -1.55, 1.5] },
      { ic: 'chat', tx: 'WhatsApp', at: [3.4, 1.9, 2.6] },
      { ic: 'camera', tx: 'Foto vere', at: [3.3, -1.7, 1.9] },
    ].map((c) => {
      const grp = new THREE.Group();
      const t = panelTex(640, 240, 70, (x, w, h) => { icon(x, c.ic, 104, h / 2, 88, '#1c293c'); x.fillStyle = '#1c293c'; fitText(x, c.tx, '650 $px "Inter"', w - 200, 74); x.textBaseline = 'middle'; x.fillText(c.tx, 176, h / 2 + 4); });
      grp.add(panel(t, 2.9, 1.09));
      const sh = softShadow(3.9, 2.2, 0.32); spin.add(sh);
      spin.add(grp); return { grp, at: c.at, sh };
    });
    const face = new THREE.Quaternion();
    const title = new THREE.Group();
    const titleTex = panelTex(1024, 300, 64, (x, w, h) => {
      const s = shop.get(), st = s.src === 'typed' || posterMode ? null : shop.status();
      x.fillStyle = '#1c293c'; fitText(x, s.name, '760 $px "Mona Sans"', w - 80, 104); x.textBaseline = 'alphabetic'; x.fillText(s.name, 44, 146);
      const tail = st ? (st.open ? 'Aperto ora' : 'Chiuso ora') : s.city;
      const head = s.cat + (tail ? ' · ' : '');
      x.fillStyle = '#56627a'; fitText(x, head + (tail || ''), '560 $px "Inter"', w - 88, 52); x.fillText(head, 44, 232);
      if (tail) { const cw = x.measureText(head).width; x.fillStyle = st ? (st.open ? '#1f9d58' : '#c0392b') : '#56627a'; x.fillText(tail, 44 + cw, 232); }
    });
    title.add(panel(titleTex, 5.0, 1.46));
    const titleSh = softShadow(6.6, 2.8, 0.3); spin.add(titleSh);
    spin.add(title);
    return {
      aspect: 0.95, tilt, spin, needleG, rings, cards, title, titleTex, PIN, pinR: 0.6, headZ: 0.19 + 1.9 + 0.42,
      pose(p, t) {
        const a = eOut(seg(p, 0, 0.18));
        tilt.rotation.set(lerp(-1.4, -0.84, a), 0, 0);
        tilt.position.set(0, lerp(-2.5, -0.6, a), 0);
        tilt.scale.setScalar(lerp(0.7, 1, a));
        spin.rotation.z = lerp(0.35, 0, a) + eIO(seg(p, 0.66, 1)) * -0.32 + Math.sin(t * 0.5) * 0.01;
        g.updateWorldMatrix(true, true); spin.getWorldQuaternion(face).invert();
        const n = eOut(seg(p, 0.24, 0.34));
        needleG.scale.set(1, 1, Math.max(n, 1e-3)); needleG.visible = n > 0.002;
        pinSh.visible = n > 0.002; pinSh.scale.set(Math.max(n, 1e-3), 1, 1); pinSh.position.set(PIN.x + 0.85 * n, PIN.y - 0.55 * n, 0.2);
        cards.forEach((c, i) => {
          const q = eBack(seg(p, 0.38 + i * 0.07, 0.5 + i * 0.07));
          const z = lerp(0.2, c.at[2], q) + Math.sin(t * 1.1 + i) * 0.06;
          c.grp.position.set(c.at[0], c.at[1], z);
          c.grp.quaternion.copy(face); c.grp.scale.setScalar(Math.max(q, 1e-3) * 1.22); c.grp.visible = q > 0.002;
          // the shadow lies on the map, further and softer the higher the card floats
          c.sh.position.set(c.at[0] + z * 0.3, c.at[1] - z * 0.42, 0.2); c.sh.scale.setScalar(Math.max(q, 1e-3) * (1 + z * 0.12)); c.sh.material.opacity = 0.34 * clamp(q) / (1 + z * 0.25); c.sh.visible = q > 0.002;
        });
        const ti = eBack(seg(p, 0.62, 0.74));
        const tz = lerp(0.2, 3.1, ti);
        title.position.set(-0.2, 3.9, tz); title.quaternion.copy(face); title.scale.setScalar(Math.max(ti, 1e-3) * 1.12); title.visible = ti > 0.002;
        titleSh.position.set(-0.2 + tz * 0.3, 3.9 - tz * 0.42, 0.2); titleSh.scale.setScalar(Math.max(ti, 1e-3)); titleSh.material.opacity = 0.3 * clamp(ti) / (1 + tz * 0.25); titleSh.visible = ti > 0.002;
      },
    };
  });

  /* GRID: nine posts fly into a profile grid, the dot hops on each and turns it from before to after */
  const gridS = stage($('[data-stage=grid]'), 11.6, (g) => {
    const card = new THREE.Group(); g.add(card);
    const cardSh = softShadow(9.2, 12.6, 0.4); cardSh.position.set(0.45, -0.7, -0.4); card.add(cardSh);
    const headTex = panelTex(1024, 1460, 70, (x, w) => {
      const s = shop.get(), hd = shop.handle();
      x.fillStyle = '#1b1b1b'; fitText(x, hd, '700 $px "Inter"', w - 400, 64); x.textBaseline = 'alphabetic'; x.fillText(hd, 360, 150);
      x.fillStyle = '#1b1b1b'; fitText(x, s.name, '600 $px "Inter"', w - 400, 46); x.fillText(s.name, 360, 222);
      x.fillStyle = '#6b6b6b'; fitText(x, s.city ? s.cat + ', ' + s.city : s.cat, '450 $px "Inter"', w - 400, 42); x.fillText(s.city ? s.cat + ', ' + s.city : s.cat, 360, 282);
    });
    card.add(panel(headTex, 6.6, 9.4));
    const avatarM = photoMat();
    const avatar = mesh(new THREE.CircleGeometry(0.78, 64), avatarM); avatar.position.set(-2.3, 3.55, 0.02); card.add(avatar);
    const avRing = mesh(new THREE.TorusGeometry(0.95, 0.09, 20, 80), M.yellow); avRing.position.set(-2.3, 3.55, 0.06); card.add(avRing);
    const T = 1.98, GAP = 0.08, tiles = [];
    const r = rand(11);
    for (let i = 0; i < 9; i++) {
      const c = i % 3, row = Math.floor(i / 3);
      const grp = new THREE.Group();
      grp.add(mesh(box(T, T, 0.1, 0.08, 2), M.white));
      const front = photoMat();
      const back = dullMat();
      const f = mesh(rrect(T - 0.02, T - 0.02, 0.08), front); f.position.z = 0.052; grp.add(f);
      const b = mesh(rrect(T - 0.02, T - 0.02, 0.08), back); b.position.z = -0.052; b.rotation.y = Math.PI; grp.add(b);
      card.add(grp);
      tiles.push({
        grp, front, back,
        at: new THREE.Vector3((c - 1) * (T + GAP), 1.02 - row * (T + GAP), 0.12),
        from: new THREE.Vector3((r() - 0.5) * 18, (r() - 0.5) * 16, 2 + r() * 7),
        rot: new THREE.Euler((r() - 0.5) * 3, (r() - 0.5) * 5, (r() - 0.5) * 2),
        delay: r() * 0.08,
      });
    }
    const ORDER = [0, 1, 2, 5, 4, 3, 6, 7, 8];
    // the dot ends as the small badge on the story ring, not on the face
    const BADGE = new THREE.Vector3(-2.3 + 0.95 * Math.cos(-0.8), 3.55 + 0.95 * Math.sin(-0.8), 0.06 + 0.3);
    return {
      aspect: 0.66, fillD: 1.16, card, tiles, ORDER, avatar, avatarM, avRing, headTex, tileR: 0.42, flipAt: [], BADGE, badgeR: 0.3,
      pose(p, t) {
        const a = eOut(seg(p, 0, 0.16));
        card.rotation.set(lerp(0.35, 0.06, a) + Math.sin(t * 0.6) * 0.012, lerp(0.9, 0.22, a) - eIO(seg(p, 0.86, 1)) * 0.36, 0);
        card.scale.setScalar(lerp(0.55, 1, a));
        card.position.set(0, lerp(-2.5, 0, a), 0);
        tiles.forEach((tl, i) => {
          const q = eIO(seg(p, 0.05 + tl.delay, 0.3 + tl.delay));
          tl.grp.position.lerpVectors(tl.from, tl.at, q);
          const fl = this.flipAt[i] !== undefined ? eOut(seg(p, this.flipAt[i], this.flipAt[i] + 0.05)) : 0;
          tl.grp.rotation.set(tl.rot.x * (1 - q), Math.PI + tl.rot.y * (1 - q) - Math.PI * fl, tl.rot.z * (1 - q));
        });
        const ar = eBack(seg(p, 0.9, 0.97));
        avRing.scale.setScalar(Math.max(ar, 1e-3)); avRing.visible = ar > 0.002;
      },
    };
  });

  /* LOGO: the navy disc and the white mk; the dot goes home */
  const logoS = stage($('[data-stage=logo]'), 12.4, (g) => {
    const grp = new THREE.Group(); g.add(grp);
    const R = 5.4, S = R / 540;
    const circle = new THREE.Shape(); circle.absarc(0, 0, R, 0, Math.PI * 2, false);
    const discG = new THREE.ExtrudeGeometry(circle, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 8, curveSegments: 96 });
    discG.translate(0, 0, -0.25);
    const disc = mesh(discG, M.disc); grp.add(disc);
    const FRONT = 0.25 + 0.2;
    const path = 'M175.3 713.9H265.1V577.8C265.1 556.2 276.8 542.7 295 542.7C313.7 542.7 325.3 556.2 325.3 577.8V713.9H410.7V577.8C410.7 556.2 422.4 542.7 440.3 542.7C459 542.7 470.9 556.2 470.9 577.8V713.9H560.7V555.3C560.7 504.3 527.9 471.3 480.3 471.3C446.8 471.3 415.4 487.7 403.5 520.7C394.1 487.5 366 471.3 334.8 471.3C303.3 471.3 274.8 487.5 261.5 523.2V476.7H175.3ZM579.4 713.9H669.2V648.1L682.2 631.9L732.5 713.9H834.5L748.3 580.9L831.8 476.7H730.3L670.1 554H669.2V379.2H579.4Z';
    const data = new SVGLoader().parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="' + path + '"/></svg>');
    const letters = [];
    data.paths.forEach((sp) => sp.toShapes().forEach((shape) => {
      const lg = new THREE.ExtrudeGeometry(shape, { depth: 26, bevelEnabled: true, bevelThickness: 5, bevelSize: 4, bevelSegments: 4, curveSegments: 16 });
      // flip y with a half turn (a negative scale would turn the faces inside out), then bring the front back to z = 0+
      lg.translate(-540, -540, 0); lg.scale(S, S, S); lg.rotateX(Math.PI); lg.translate(0, 0, (26 + 5) * S);
      const m = mesh(lg, M.white); m.position.z = FRONT - 0.05; grp.add(m); letters.push(m);
    }));
    letters.sort((a, b) => { a.geometry.computeBoundingBox(); b.geometry.computeBoundingBox(); return a.geometry.boundingBox.min.x - b.geometry.boundingBox.min.x; });
    const SLOT = new THREE.Vector3((886 - 540) * S, -(675.9 - 540) * S, FRONT + 38 * S * 0.82);
    return {
      aspect: 0.9, grp, letters, SLOT, slotR: 38 * S * 1.08,
      pose(p, t, px, py) {
        const a = eOut(seg(p, 0, 0.42));
        grp.rotation.set(lerp(0.6, 0, a) + py * 0.18 + Math.sin(t * 0.8) * 0.02, lerp(-Math.PI * 1.1, 0, a) + px * 0.32, 0);
        grp.scale.setScalar(lerp(0.6, 1, a));
        letters.forEach((l, i) => { const q = eBack(seg(p, 0.3 + i * 0.08, 0.5 + i * 0.08)); l.position.z = lerp(-1.6, FRONT - 0.05, q); l.scale.setScalar(Math.max(lerp(0.7, 1, q), 1e-3)); l.visible = q > 0.002; });
      },
    };
  });

  /* ---------- personalisation: the shop changes the grid, the title, the handle ---------- */
  // six real photos and three designed posts (initial, hours, address), no repeats; shops without photos get designed posts only
  const SETS = {
    food: { tiles: ['t-ravioli.webp', 'D:mono', 't-tagliatelle.webp', 't-dehors.webp', 't-tiramisu.webp', 'D:hours', 'D:where', 't-gnocchi.webp', 't-hero.webp'], avatar: 't-tagliatelle.webp' },
    hair: { tiles: ['s-colore.webp', 'D:mono', 's-liscio.webp', 's-ricci.webp', 's-piega.webp', 'D:hours', 'D:where', 's-sposa.webp', 's-treccia.webp'], avatar: 's-treccia.webp' },
    bake: { tiles: ['g-croissant.webp', 'D:mono', 'g-focaccia.webp', 'g-pagnotta.webp', 'g-banco.webp', 'D:hours', 'g-impasto.webp', 'g-grissini.webp', 'g-farina.webp'], avatar: 'g-pagnotta.webp' },
    other: { tiles: ['D:mono', 'D:word:Novità', 'D:hours', 'D:word:In negozio', 'D:where', 'D:word:Chi siamo', 'D:word:Ti aspettiamo', 'D:dots', 'D:word:Grazie'], avatar: 'D:mono' },
  };
  const PAL = {
    food: { bg: ['#8f2a1c', '#f2e9dc', '#2a1d17'], fg: ['#fff6ea', '#2a1d17', '#f2e9dc'], font: '"Instrument Serif"', w: 400, up: false },
    hair: { bg: ['#171313', '#efe8e5', '#c9b2a6'], fg: ['#f6efec', '#171313', '#171313'], font: '"Mona Sans"', w: 800, up: true },
    bake: { bg: ['#3b2412', '#f7ecd2', '#d7a54a'], fg: ['#f7ecd2', '#3b2412', '#3b2412'], font: '"Mona Sans"', w: 850, up: false },
    other: { bg: ['#1e3b33', '#f1ede4', '#d9a441'], fg: ['#f1ede4', '#1e3b33', '#1e3b33'], font: '"Mona Sans"', w: 780, up: false },
  };
  function designTex(type, i, s) {
    const P = PAL[s.kind] || PAL.other;
    const c = D.createElement('canvas'); c.width = 512; c.height = 512;
    const x = c.getContext('2d');
    const k0 = type === 'mono' ? 0 : type === 'hours' ? 1 : type === 'where' ? 2 : (i % 3);
    x.fillStyle = P.bg[k0]; x.fillRect(0, 0, 512, 512);
    x.fillStyle = P.fg[k0]; x.textBaseline = 'alphabetic';
    const face = (px) => P.w + ' ' + px + 'px ' + P.font;
    const up = (t) => (P.up ? t.toUpperCase() : t);
    const w = parseHours(s.hours), place = [s.addr, s.city].filter(Boolean);
    if (type === 'hours' && !(w && s.src !== 'typed')) type = 'word:Ti aspettiamo';
    if (type === 'where' && !(s.src === 'osm' && place.length)) type = 'word:Vieni a trovarci';
    if (type === 'mono') {
      // the initial of the name itself: "Trattoria da Ines" gives I, not T or D
      let nm = s.name.trim();
      for (let k = 0; k < 4; k++) nm = nm.replace(/^(?:(?:il|lo|la|i|gli|le|un|una|da|dal|dalla|dai|di|del|della|dei|al|alla|ai|bar|caff[eè]|forno|trattoria|osteria|ristorante|pizzeria|panificio|pasticceria|gelateria|enoteca|macelleria|salone|parrucchier[ei]|barbiere|negozio)\s+|l['’]\s*)/i, '');
      const ch = (nm[0] || s.name[0] || 'm').toUpperCase();
      x.textAlign = 'center'; x.font = face(330); x.fillText(ch, 256, 368);
      x.globalAlpha = 0.85; fitText(x, up(s.name), face('$'), 420, 34); x.fillText(up(s.name), 256, 462); x.globalAlpha = 1;
    } else if (type === 'hours') {
      x.textAlign = 'left'; x.font = face(76); x.fillText(up('Orari'), 44, 128);
      const lines = []; hoursText(w).split(' · ').forEach((gr) => { const m = /^(\S+(?:, \S+)*) (.*)$/.exec(gr); if (m) { lines.push([m[1], true]); m[2].split(', ').forEach((t) => lines.push([t, false])); } });
      let y = 214; lines.slice(0, 6).forEach(([t, b]) => { x.font = (b ? '650 ' : '500 ') + '34px "Inter"'; x.fillText(t, 44, y); y += b ? 48 : 44; });
    } else if (type === 'where') {
      x.textAlign = 'left'; x.font = face(64); x.fillText(up('Dove siamo'), 44, 128);
      x.font = '600 36px "Inter"'; let y = 220; place.forEach((t) => { fitText(x, t, '600 $px "Inter"', 424, 36); x.fillText(t, 44, y); y += 52; });
    } else if (type === 'dots') {
      for (let r = 0; r < 6; r++) for (let q = 0; q < 6; q++) { x.beginPath(); x.arc(56 + q * 80, 56 + r * 80, r === 2 && q === 3 ? 26 : 9, 0, Math.PI * 2); x.fillStyle = r === 2 && q === 3 ? '#fdc800' : P.fg[k0]; x.fill(); }
    } else {
      const word = up(type.replace(/^word:/, ''));
      x.textAlign = 'center'; const sz = fitText(x, word, face('$'), 430, 92); x.fillText(word, 256, 256 + sz * 0.34);
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return t;
  }
  function setMap(mat, t) { if (mat.map && mat.map !== t && !mat.map.userData.keep) mat.map.dispose(); mat.map = t; mat.color.set(0xffffff); dirty = true; }
  function applyKind() {
    kindGen++;
    const s = shop.get(), set = SETS[s.kind] || SETS.other;
    gridS.tiles.forEach((tl, i) => {
      const src = set.tiles[i];
      if (src.startsWith('D:')) { const t = designTex(src.slice(2), i, s); setMap(tl.front, t); setMap(tl.back, t); return; }
      photoTex(src, 1, 1, 0.5, 0.5, tl.front);
      const rr = rand(31 + i * 7); photoTex(src, 1, 1.3, 0.5 + (rr() - 0.5) * 0.5, 0.5 + (rr() - 0.5) * 0.5, tl.back, (rr() - 0.5) * 0.2);
    });
    if (set.avatar.startsWith('D:')) setMap(gridS.avatarM, designTex('mono', 0, s)); else photoTex(set.avatar, 1, 1.2, 0.5, 0.5, gridS.avatarM);
  }
  function applyName() { [mapS.titleTex, gridS.headTex].forEach((t) => t.userData.draw()); dirty = true; }
  shop.on(() => { applyName(); applyKind(); });
  applyKind();
  const fontsReady = D.fonts && D.fonts.load ? Promise.all([D.fonts.load('760 64px "Mona Sans"'), D.fonts.load('650 64px "Inter"'), D.fonts.load('400 64px "Instrument Serif"')]).catch(() => {}) : Promise.resolve();
  fontsReady.then(() => { redrawAll(); applyKind(); dirty = true; });
  function redrawAll() { scene.traverse((o) => { const m = o.material; if (m && m.map && m.map.userData && m.map.userData.draw) m.map.userData.draw(); }); }

  /* ---------- the dot's path ---------- */
  const tmp = V(), tmp2 = V();
  const anchorEls = {};
  $$('.dot[data-dot]').forEach((el) => { anchorEls[el.getAttribute('data-dot')] = el; });
  const domDot = (el) => (out) => { const r = el.getBoundingClientRect(); toWorld(r.left + r.width / 2, r.top + r.height / 2, out.p); out.r = (r.width / 2) * k; return out; };
  const local = (obj, v, rad) => (out) => { obj.updateWorldMatrix(true, false); out.p.copy(v).applyMatrix4(obj.matrixWorld); const s = obj.getWorldScale(tmp2).x; out.r = rad * s; return out; };
  const keys = [], fabKeys = [];
  let words = [], wordFs = 30;

  function buildKeys(sts) {
    keys.length = 0;
    const add = (y, at, o) => keys.push(Object.assign({ y, at }, o || {}));
    const heroEl = anchorEls.hero;
    // the opening: the headline's full stop, or wherever the search has sent the dot (the lens, a result, the circle)
    const heroAt = (out) => { const a = find.anchor(); if (!a) return domDot(heroEl)(out); toWorld(a.x, a.y, out.p); out.r = a.r * k; return out; };
    const heroBox = $('.hero');
    add(0, heroAt);
    add(Math.max(vh * 0.16, (heroBox ? heroBox.offsetHeight : vh) - vh * 0.55), heroAt);
    // reading: one key per word, small hops
    const rs = sts.read;
    if (rs && words.length) {
      const L = rs.end - rs.start, n = words.length;
      words.forEach((w, i) => {
        add(rs.start + L * (0.04 + (i / (n - 1)) * 0.8), (out) => { const r = w.getBoundingClientRect(); toWorld(r.left + r.width / 2, r.top + wordFs * 0.16, out.p); out.r = wordFs * 0.21 * k; out.p.y += out.r; return out; }, { hop: wordFs * 0.34 * k, word: i });
      });
      add(rs.end, keys[keys.length - 1].at);
    }
    // the site: the dot lands on the phone and becomes its round call button
    const ss = sts.site, sl = ss.end - ss.start, fab = phone.fab;
    if (fab) {
      const fabAt = (out) => { const r = fab.getBoundingClientRect(); toWorld(r.left + r.width / 2, r.top + r.height / 2, out.p); out.r = (r.width / 2) * k; return out; };
      add(ss.start + sl * 0.56, fabAt, { land: 'site' }); fabKeys[0] = keys[keys.length - 1];
      add(ss.start + sl * 0.97, fabAt); fabKeys[1] = keys[keys.length - 1];
    }
    const ms = sts.map, ml = ms.end - ms.start;
    const above = new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, 6), ground = new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, 0.19 + mapS.pinR * 0.92), head = new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, mapS.headZ);
    add(ms.start + ml * 0.12, local(mapS.spin, above, mapS.pinR));
    add(ms.start + ml * 0.24, local(mapS.spin, ground, mapS.pinR), { land: 'map', fall: true });
    add(ms.start + ml * 0.34, local(mapS.spin, head, mapS.pinR));
    add(ms.start + ml * 0.95, local(mapS.spin, head, mapS.pinR));
    const gs = sts.grid, gl = gs.end - gs.start;
    gridS.ORDER.forEach((ti, j) => {
      const f = 0.36 + j * 0.06;
      gridS.flipAt[ti] = f - 0.01;
      const tl = gridS.tiles[ti];
      add(gs.start + gl * f, local(gridS.card, new THREE.Vector3(tl.at.x, tl.at.y, tl.at.z + 0.06 + gridS.tileR), gridS.tileR), { hop: 1.3, land: 'tile' });
    });
    add(gs.start + gl * 0.9, local(gridS.card, gridS.BADGE, gridS.badgeR), { hop: 2 });
    add(gs.start + gl * 0.97, local(gridS.card, gridS.BADGE, gridS.badgeR));
    // how: the dot rides the tip of the yellow line
    const hw = sts.how;
    if (hw && how.ok) {
      const at = (t) => (o) => { const s = how.screen(t); toWorld(s.x, s.y, o.p); o.r = s.r * k; return o; };
      add(hw.start, at(0));
      add(hw.end, at(1), { track: (t, o) => at(t)(o) });
    }
    ['prezzi', 'esempi'].forEach((n) => { const st = sts[n]; if (st && anchorEls[n]) { add(st.start, domDot(anchorEls[n])); add(st.end, domDot(anchorEls[n])); } });
    const sg = sts.sign;
    add(sg.start + (sg.end - sg.start) * 0.62, local(logoS.grp, logoS.SLOT, logoS.slotR), { land: 'logo', hop: 6 });
    add(sg.end + vh * 4, local(logoS.grp, logoS.SLOT, logoS.slotR));
    keys.sort((a, b) => a.y - b.y);
  }

  const A = { p: V(), r: 1 }, B = { p: V(), r: 1 }, tmpC = V();
  let lastLand = -1;
  function dotPose(y, out) {
    if (!keys.length) return false;
    if (y <= keys[0].y) { keys[0].at(A); out.p.copy(A.p); out.r = A.r; return true; }
    let i = 0;
    while (i < keys.length - 1 && keys[i + 1].y <= y) i++;
    if (i >= keys.length - 1) { keys[keys.length - 1].at(A); out.p.copy(A.p); out.r = A.r; out.i = i; return true; }
    const k0 = keys[i], k1 = keys[i + 1];
    const t = clamp((y - k0.y) / Math.max(1, k1.y - k0.y));
    out.i = i; out.t = t;
    if (k1.track) { k1.track(t, out); return true; }
    k0.at(A); k1.at(B);
    if (k0.at === k1.at) { out.p.copy(A.p); out.r = A.r; return true; }
    const d = A.p.distanceTo(B.p);
    // a hop rests on the word (or tile) for the first part, then jumps: it reads like karaoke
    const h = k1.hop ? clamp((t - 0.3) / 0.7) : t;
    const e = k1.fall ? t * t : k1.hop ? h : eIO(t);
    out.p.lerpVectors(A.p, B.p, e);
    out.r = lerp(A.r, B.r, eIO(h));
    const lift = k1.fall ? 0 : k1.hop ? k1.hop * 4 * h * (1 - h) : Math.min(d * 0.32, 9) * Math.sin(Math.PI * t);
    out.p.y += lift; out.p.z += k1.hop || k1.fall ? 0 : Math.min(d * 0.25, 8) * Math.sin(Math.PI * t);
    return true;
  }

  /* ---------- scroll setup ---------- */
  const sts = {};
  if (motion) {
    // phones get shorter pins: the same story in less thumb travel
    const pinLen = (f) => () => '+=' + Math.round(W.innerHeight * (W.innerWidth < 700 ? Math.min(f * 0.8, 1.25) : f));
    const readEl = $('.read');
    words = splitWords($('.read-p'));
    sts.read = ScrollTrigger.create({ trigger: readEl, start: 'top top', end: pinLen(1.15), pin: true, anticipatePin: 1 });
    sts.site = ScrollTrigger.create({ trigger: '#sito', start: 'top top', end: pinLen(1.5), pin: true, anticipatePin: 1 });
    sts.map = ScrollTrigger.create({ trigger: '#google', start: 'top top', end: pinLen(1.4), pin: true, anticipatePin: 1 });
    sts.grid = ScrollTrigger.create({ trigger: '#instagram', start: 'top top', end: pinLen(1.8), pin: true, anticipatePin: 1 });
    sts.how = ScrollTrigger.create({ trigger: '.steps-track', start: 'top 72%', end: 'bottom 55%' });
    sts.prezzi = ScrollTrigger.create({ trigger: '#prezzi', start: 'top 55%', end: 'bottom 75%' });
    sts.esempi = ScrollTrigger.create({ trigger: '#esempi', start: 'top 55%', end: 'bottom 60%' });
    sts.sign = ScrollTrigger.create({ trigger: '#contatti', start: 'top 92%', end: 'top 12%' });
    ScrollTrigger.addEventListener('refresh', () => { wordFs = parseFloat(getComputedStyle($('.read-p')).fontSize) || 30; how.measure(); buildKeys(sts); });
    W.mkDebug = { sts, keys, dot, k: () => k, st: () => ({ ys, i: out.i, t: out.t, lenis: !!lenis, fine }) };
    startDomMotion();
    ScrollTrigger.refresh();
    fontsReady.then(() => ScrollTrigger.refresh());
  } else {
    // still: assembled scenes, the dot sits in the hero headline
    stages.forEach((s) => { s.p = 1; });
    // and a copy of it waits where it would land: the call button, the pin head, the logo
    const still = (parent, at, r) => { const m = mesh(sphereGeo, M.yellow); m.position.copy(at); m.scale.setScalar(r); parent.add(m); };
    phone.pose(0.6);
    still(mapS.spin, new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, mapS.headZ), mapS.pinR);
    still(logoS.grp, logoS.SLOT, logoS.slotR);
    still(gridS.card, gridS.BADGE, gridS.badgeR);
    gridS.ORDER.forEach((ti) => { gridS.flipAt[ti] = 0; });
    buildStatic();
  }
  function buildStatic() { keys.length = 0; keys.push({ y: 0, at: domDot(anchorEls.hero) }); }

  /* ---------- pointer ---------- */
  const ptr = { x: 0, y: 0, sx: 0, sy: 0, cx: -1e4, cy: -1e4 };
  if (fine) W.addEventListener('pointermove', (e) => { ptr.x = e.clientX / vw * 2 - 1; ptr.y = e.clientY / vh * 2 - 1; ptr.cx = e.clientX; ptr.cy = e.clientY; }, { passive: true });
  // play: tap or click the dot and it jumps; with a mouse it leans toward the pointer
  const poke = { v: 0, h: 1 }, mag = { x: 0, y: 0 };
  let idle = 0; // seconds at the top of the page without input: then the full stop hops by itself, once in a while
  const awake = () => { idle = 0; };
  ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart'].forEach((ev) => W.addEventListener(ev, awake, { passive: true }));
  const hop = (h) => { poke.h = h; gsap.fromTo(poke, { v: 0 }, { v: 1, duration: 0.55 + 0.3 * h, ease: 'none', overwrite: true, onComplete: () => { poke.v = 0; wobble(); } }); };
  const dotScreen = () => [dot.position.x / k + vw / 2, vh / 2 - dot.position.y / k];
  if (motion) W.addEventListener('pointerdown', (e) => {
    if (intro.v > 0 || poke.v > 0 || find.anchor()) return;
    const [sx, sy] = dotScreen(), rr = Math.max(30, (Math.abs(dot.scale.y) / k) * 1.8);
    if (Math.hypot(e.clientX - sx, e.clientY - sy) < rr) hop(1);
  }, { passive: true });

  /* ---------- frame ---------- */
  const out = { p: V(), r: 1, i: 0, t: 0 };
  const prev = V(), vel = V(), up = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion();
  let ys = W.pageYOffset, last = performance.now(), time = 0, squash = 0, landSeen = {};
  const landFx = { site: () => { const f = phone.fab; if (!f) return; f.classList.remove('ping'); void f.offsetWidth; f.classList.add('ping'); }, map: () => mapS.rings.forEach((r, i) => ringPulse(r, i * 0.16)), tile: () => {}, logo: () => {} };
  function ringPulse(m, delay = 0) {
    if (!gsap) return;
    gsap.fromTo(m.scale, { x: 1, y: 1 }, { x: 4.2, y: 4.2, duration: 1.1, delay, ease: 'expo.out', overwrite: true });
    gsap.fromTo(m.material, { opacity: 0.9 }, { opacity: 0, duration: 1.1, delay, ease: 'power2.out', overwrite: true });
  }
  function frame() {
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    const y = W.pageYOffset;
    ys = lenis ? y : lerp(ys, y, 1 - Math.exp(-dt * 16));
    if (Math.abs(ys - y) < 0.5) ys = y;
    ptr.sx = lerp(ptr.sx, ptr.x, 1 - Math.exp(-dt * 5)); ptr.sy = lerp(ptr.sy, ptr.y, 1 - Math.exp(-dt * 5));
    // stages
    for (const s of stages) {
      placeStage(s);
      if (!s.visible) continue;
      if (motion) { const st = s === mapS ? sts.map : s === gridS ? sts.grid : sts.sign; s.p = st ? clamp((ys - st.start) / Math.max(1, st.end - st.start)) : 1; }
      s.pose(s.p, time, ptr.sx, ptr.sy);
    }
    if (motion && sts.how) how.set((ys - sts.how.start) / Math.max(1, sts.how.end - sts.how.start));
    if (motion && sts.site && ys > sts.site.start - vh * 1.2 && ys < sts.site.end + vh) phone.pose(clamp((ys - sts.site.start) / Math.max(1, sts.site.end - sts.site.start)), fine ? ptr.sx : 0, fine ? ptr.sy : 0);
    // dot
    let has = dotPose(motion ? ys : 0, out);
    if (has) {
      if (intro.v > 0 || intro.a < 1) {
        const e = 1 - intro.v, m = Math.min(vw, vh);
        toWorld(vw * 0.5, vh * (vw < 700 ? 0.37 : 0.42), tmpC);
        const bigR = m * (vw < 700 ? 0.27 : 0.19) * k;
        tmpC.lerp(out.p, e); tmpC.y += Math.sin(Math.PI * e) * m * 0.2 * k; tmpC.z += Math.sin(Math.PI * e) * 6;
        out.p.copy(tmpC);
        out.r = bigR * Math.pow(out.r / bigR, e) * Math.max(intro.a, 1e-3);
      }
      if (motion && intro.v === 0 && ys < 4 && poke.v === 0 && !find.anchor()) { idle += dt; if (idle > 6) { idle = 0; hop(0.45); } } else if (ys >= 4 || find.anchor()) idle = 0;
      if (poke.v > 0) { const t = poke.v; out.p.y += 4 * t * (1 - t) * Math.max(out.r * 9, 46 * k) * poke.h; }
      if (fine && motion) {
        const sx = out.p.x / k + vw / 2, sy = vh / 2 - out.p.y / k, dx = ptr.cx - sx, dy = ptr.cy - sy, d = Math.hypot(dx, dy);
        const f = d < 150 ? Math.pow(1 - d / 150, 2) * 0.3 : 0;
        mag.x = lerp(mag.x, dx * f, 1 - Math.exp(-dt * 10)); mag.y = lerp(mag.y, dy * f, 1 - Math.exp(-dt * 10));
        out.p.x += mag.x * k; out.p.y -= mag.y * k;
      }
      dot.position.copy(out.p);
      vel.subVectors(out.p, prev).divideScalar(Math.max(dt, 1e-3)); prev.copy(out.p);
      const sp = vel.length() / Math.max(out.r, 1e-3);
      const st = motion ? clamp(sp * 0.012, 0, 0.42) : 0;
      squash = motion ? lerp(squash, st, 1 - Math.exp(-dt * 12)) : 0;
      if (squash > 0.01 && vel.lengthSq() > 1e-6) { q.setFromUnitVectors(up, vel.clone().normalize()); dot.quaternion.copy(q); }
      const s1 = 1 + squash, s2 = 1 / Math.sqrt(s1);
      dot.scale.set(out.r * s2 * (1 + wob.v * 0.28), out.r * s1 * (1 - wob.v * 0.3), out.r * s2 * (1 + wob.v * 0.28));
      dot.visible = motion || posterDot;
      // landings
      if (motion && keys[out.i + 1] && out.t > 0.985) { const kk = keys[out.i + 1]; if (kk.land && landSeen[out.i + 1] !== true) { landSeen[out.i + 1] = true; wobble(); (landFx[kk.land] || (() => {}))(); } }
      if (motion) for (const n in landSeen) if (keys[n] && ys < keys[n].y - 2) delete landSeen[n];
      if (motion && words.length) markWords();
      // on the phone the dot is the call button: its icon fades in once it has landed
      let fi = 0;
      if (motion && fabKeys[0] && fabKeys[1]) fi = clamp((ys - fabKeys[0].y) / 26) * (1 - clamp((ys - fabKeys[1].y) / 26));
      fabIcon.visible = fi > 0.01;
      if (fabIcon.visible) { fabIcon.position.copy(dot.position); fabIcon.position.z += out.r * 1.05; fabIcon.scale.setScalar(out.r * 1.7); fabIcon.material.opacity = fi; }
      if (phone.fab) { const on = fi > 0.5; if (on !== fabOn) { fabOn = on; phone.fab.classList.toggle('is-landed', on); } }
    }
    // with no scene on screen and the dot standing still, the last frame is still right: skip drawing it again (saves battery)
    if (motion) {
      let still = true;
      for (const s of stages) if (s.visible) { still = false; break; }
      if (still) {
        const p = dot.position, sc = dot.scale, qq = dot.quaternion;
        const sig = [p.x, p.y, p.z, sc.x, sc.y, sc.z, qq.x, qq.y, qq.z, qq.w, dot.visible ? 1 : 0, heroRing.visible ? heroRing.material.opacity : -1, fabIcon.visible ? fabIcon.material.opacity : -1].map((v) => Math.round(v * 1e4)).join();
        if (sig === lastSig) return;
        lastSig = sig;
      } else lastSig = '';
    }
    renderer.render(scene, camera);
  }
  const wob = { v: 0 };
  function wobble() { if (gsap) gsap.fromTo(wob, { v: 1 }, { v: 0, duration: 0.7, ease: 'elastic.out(1, 0.35)', overwrite: true }); }
  let lastWord = -2;
  function markWords() {
    const rs = sts.read; if (!rs) return;
    let idx = -1;
    for (let i = 0; i < keys.length; i++) if (keys[i].word !== undefined && keys[i].y <= ys + 1) idx = keys[i].word;
    if (idx === lastWord) return; lastWord = idx;
    words.forEach((w, i) => { w.classList.toggle('on', i <= idx); w.classList.toggle('at', i === idx); });
  }
  let lastY = -1;
  if (motion) gsap.ticker.add(frame);
  else { const loop = () => { const y = W.pageYOffset; if (dirty || y !== lastY) { lastY = y; dirty = false; frame(); } requestAnimationFrame(loop); }; requestAnimationFrame(loop); W.addEventListener('resize', () => { dirty = true; }); }
  D.addEventListener('visibilitychange', () => { last = performance.now(); lastSig = ''; });
  renderer.domElement.addEventListener('webglcontextrestored', () => { lastSig = ''; });

  // ring that spreads from the full stop when the dot lands in it
  const heroRing = mesh(new THREE.RingGeometry(1, 1.14, 64), new THREE.MeshBasicMaterial({ color: 0xfdc800, transparent: true, opacity: 0, depthWrite: false }));
  heroRing.visible = false; scene.add(heroRing);
  const ringT = { s: 1, o: 0 };
  hooks.landed = () => {
    wobble();
    gsap.fromTo(ringT, { s: 1, o: 0.95 }, { s: 5, o: 0, duration: 1.2, ease: 'expo.out', onUpdate: () => { heroRing.position.copy(dot.position); const r = out.r * ringT.s; heroRing.scale.set(r, r, r); heroRing.material.opacity = ringT.o; heroRing.visible = ringT.o > 0.01; } });
  };
  frame(); // first frame now: the dot's shader compiles before the opening starts

  /* warm up after the opening: shaders compile and photos upload while nobody is scrolling yet */
  if (motion) gsap.delayedCall(2.9, warm); else setTimeout(warm, 600);
  function warm() {
    const texs = new Set();
    scene.traverse((o) => { const m = o.material; if (m && m.map) texs.add(m.map); });
    const up = Array.from(texs);
    const next = () => { const t = up.shift(); if (!t) return; if (t.image) renderer.initTexture(t); setTimeout(next, 30); };
    if (renderer.extensions.has('KHR_parallel_shader_compile')) renderer.compileAsync(scene, camera).then(next, next);
    else { renderer.compile(scene, camera); setTimeout(next, 200); }
  }

  /* posters for the no-WebGL fallback can be rendered with ?poster=name */
  W.mkPoster = (name) => {
    const s = { map: mapS, grid: gridS, logo: logoS }[name];
    if (!s) return false;
    stages.forEach((o) => { o.el = o === s ? o.el : D.createElement('div'); });
    keys.length = 0; keys.push({ y: 0, at: (o) => { o.p.set(0, 0, -1000); o.r = 0.001; return o; } }); posterDot = false; dirty = true; // each scene already has its still dot
    posterMode = true; applyName();
    return !!s;
  };
}

/* ---------- DOM motion: titles, words, prices, band, examples ---------- */
function startDomMotion() {
  flaps();
  prices();
  band();
}
function heroType() {
  const h1 = $('.hero-h');
  const tl = gsap.timeline({ paused: true });
  // on a slow connection the headline has already been on screen for a while: keep it, skip the opening
  const late = performance.now() > 1500;
  if (h1 && SplitText && !late) {
    const split = SplitText.create($$('.hw', h1), { type: 'chars', charsClass: 'hc' });
    gsap.set(split.chars, { fontStretch: '75%', fontWeight: 300, yPercent: 46, opacity: 0 });
    gsap.set('.nav', { y: -18, opacity: 0 });
    gsap.set('.hero-foot', { y: 26, opacity: 0 });
    // text first: the words open while the dot pops, then the dot drops into the full stop
    // (lag smoothing is off while it plays, so a busy phone skips frames instead of stretching the opening)
    tl.eventCallback('onStart', () => gsap.ticker.lagSmoothing(0));
    tl.eventCallback('onComplete', () => { if (!lenis) gsap.ticker.lagSmoothing(500, 33); });
    tl.to(split.chars, {
      fontStretch: '125%', fontWeight: 860, yPercent: 0, opacity: 1, duration: 1.05, ease: 'expo.out', stagger: 0.024,
      onComplete() { gsap.set(split.chars, { clearProps: 'fontStretch,fontWeight' }); if (fine) reactive(split.chars); },
    }, 0.12)
      .to('.nav', { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, 0.75)
      .to('.hero-foot', { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out' }, 0.9)
      .to(intro, { a: 1, duration: 0.6, ease: 'back.out(1.9)' }, 0)
      .to(intro, { v: 0, duration: 1, ease: 'power3.inOut', onComplete: () => hooks.landed && hooks.landed() }, 0.6);
  } else { intro.v = 0; intro.a = 1; }
  H.classList.add('go');
  if (h1) gsap.to(h1, { fontStretch: '88%', yPercent: -14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 30%', scrub: true } });
  return tl;
}
function reactive(chars) {
  // the letters near the mouse get heavier, like the dot is pressing on them
  let raf = 0, mx = -1e4, my = -1e4;
  const boxes = () => chars.map((c) => { const r = c.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
  let bx = null;
  W.addEventListener('scroll', () => { bx = null; }, { passive: true });
  W.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
  function tick() {
    raf = 0; if (W.pageYOffset > W.innerHeight) return;
    bx = bx || boxes();
    chars.forEach((c, i) => { const dx = bx[i][0] - mx, dy = bx[i][1] - my, d = Math.sqrt(dx * dx + dy * dy); const f = clamp(1 - d / 260); c.style.fontWeight = Math.round(860 - f * 520); });
  }
}
function flaps() {
  $$('.flap').forEach((el) => {
    if (!SplitText) return;
    const split = SplitText.create(el, { type: 'words,chars', wordsClass: 'fw', charsClass: 'fc' });
    gsap.fromTo(split.chars, { rotateX: -96, opacity: 0 }, { rotateX: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)', stagger: 0.022, scrollTrigger: { trigger: el, start: 'top 82%', once: true } });
  });
}
function prices() {
  $$('.roll').forEach((el) => {
    const txt = el.textContent.trim();
    el.innerHTML = '<span class="sr">' + txt + '</span>';
    const cols = [];
    for (const ch of txt) {
      const span = D.createElement('span'); span.setAttribute('aria-hidden', 'true');
      if (/\d/.test(ch)) {
        span.className = 'dg';
        const inner = D.createElement('span');
        inner.innerHTML = Array.from({ length: 10 }, (_, i) => '<span>' + ((+ch + 1 + i) % 10) + '</span>').join('');
        span.appendChild(inner); cols.push(inner);
      } else span.textContent = ch;
      el.appendChild(span);
    }
    // each column is as wide as the digit it stops on (proportional figures: no slashed zero, no gaps)
    const fit = () => cols.forEach((c) => {
      const m = D.createElement('span'); m.textContent = c.lastChild.textContent; m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
      el.appendChild(m); const fs = parseFloat(getComputedStyle(el).fontSize) || 1; c.parentNode.style.width = (m.getBoundingClientRect().width / fs).toFixed(3) + 'em'; m.remove();
    });
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(fit); else fit();
    gsap.fromTo(cols, { yPercent: 0 }, { yPercent: -90, duration: 1.4, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
}
function band() {
  const inner = $('.band-in');
  if (!inner) return;
  inner.innerHTML += inner.innerHTML;
  let x = 0, v = 0, lastY = W.pageYOffset;
  gsap.ticker.add((t, dtMs) => {
    const y = W.pageYOffset, dy = y - lastY; lastY = y;
    v = lerp(v, dy, 0.12);
    x -= (0.9 + Math.abs(v) * 0.25) * (dtMs / 16.7);
    const w = inner.scrollWidth / 2;
    if (-x > w) x += w;
    inner.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0) skewX(' + clamp(-v * 0.25, -10, 10).toFixed(2) + 'deg)';
  });
}
/* the example, before and after: a range input under the whole phone moves the line */
function compare() {
  const box = $('.ba'), inp = box && $('.ba-in', box);
  if (!box || !inp) return;
  const tb = $('.ba-tag-b', box), ta = $('.ba-tag-a', box);
  let hint = null;
  // the native thumb (64px) travels between its half widths: the line follows the thumb, not the raw value
  const set = (v) => {
    const Wd = box.clientWidth || 1, px = 32 + (v / 100) * (Wd - 64);
    box.style.setProperty('--x', ((px / Wd) * 100).toFixed(2) + '%');
    tb.style.opacity = v < 14 ? '0' : '1'; ta.style.opacity = v > 86 ? '0' : '1';
    inp.setAttribute('aria-valuetext', 'Prima ' + Math.round(v) + ' per cento, dopo ' + (100 - Math.round(v)) + ' per cento');
  };
  const stop = () => { if (hint) { hint.kill(); hint = null; } };
  inp.addEventListener('input', () => { stop(); set(+inp.value); });
  inp.addEventListener('pointerdown', stop);
  W.addEventListener('resize', () => set(+inp.value));
  set(+inp.value);
  // once, the first time it is well in view: the line sweeps to show both sides, then rests in the middle
  if (motion && 'IntersectionObserver' in W) {
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const o = { v: +inp.value }, up = () => set(o.v);
      hint = gsap.timeline({ delay: 0.3, onComplete: () => { inp.value = '50'; hint = null; } })
        .to(o, { v: 80, duration: 0.8, ease: 'power2.inOut', onUpdate: up })
        .to(o, { v: 22, duration: 1.1, ease: 'power2.inOut', onUpdate: up })
        .to(o, { v: 50, duration: 0.9, ease: 'power3.out', onUpdate: up });
    }, { threshold: 0.55 });
    io.observe(box);
  }
}
/* words of the reading paragraph, each in its own span */
function splitWords(p) {
  if (!p) return [];
  const words = p.textContent.trim().split(/\s+/);
  p.innerHTML = words.map((w) => '<span class="w">' + w.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>').join(' ');
  return $$('.w', p);
}

/* the yellow line of "Come lavoro": drawn by scroll, its tip is an anchor for the dot */
function howLine() {
  const track = $('.steps-track'), svg = $('.steps-line'), path = svg && $('path', svg), ns = $$('.steps-list .n'), lis = $$('.steps-list li');
  const api = { ok: false, t: 0, measure() {}, set() {}, screen: () => ({ x: 0, y: 0, r: 12 }) };
  if (!track || !path || !ns.length) return api;
  let len = 1, stops = [], lastT = -1, flat = false, cs = [];
  api.ok = true;
  api.measure = () => {
    const tr = track.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + Math.round(tr.width) + ' ' + Math.round(tr.height));
    const pts = ns.map((n) => { const r = n.getBoundingClientRect(); return [r.left - tr.left + r.width / 2, r.top - tr.top + r.height / 2]; });
    cs = ns.map((n, i) => ({ x: pts[i][0], y: pts[i][1], R: n.getBoundingClientRect().width / 2 }));
    flat = pts.length > 1 && Math.abs(pts[0][1] - pts[1][1]) < 4;
    const gap = 52;
    const first = pts[0], lastP = pts[pts.length - 1];
    pts.unshift(flat ? [first[0] - gap, first[1]] : [first[0], first[1] - gap]);
    pts.push(flat ? [lastP[0] + gap, lastP[1]] : [lastP[0], lastP[1] + gap]);
    let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      if (Math.abs(a[1] - b[1]) < 4) d += ' L' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
      else { const my = (a[1] + b[1]) / 2; d += ' C' + a[0].toFixed(1) + ' ' + my.toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + my.toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1); }
    }
    path.setAttribute('d', d);
    len = path.getTotalLength() || 1;
    path.style.strokeDasharray = len + ' ' + len;
    stops = pts.slice(1, -1).map((p) => { let best = 0, bd = 1e9; for (let s = 0; s <= 80; s++) { const q = path.getPointAtLength((len * s) / 80); const dd = Math.hypot(q.x - p[0], q.y - p[1]); if (dd < bd) { bd = dd; best = s / 80; } } return best; });
    lastT = -1; api.set(api.t);
  };
  api.set = (t) => {
    t = clamp(t); api.t = t;
    if (Math.abs(t - lastT) < 1e-4) return;
    lastT = t;
    path.style.strokeDashoffset = String(len * (1 - t));
    lis.forEach((li, i) => li.classList.toggle('on', stops.length > 0 && t >= stops[i] - 0.01));
  };
  // the line runs through the numbers; the dot goes round them (above, or on the left) so it never hides one
  api.screen = (t) => {
    api.set(t);
    const tr = track.getBoundingClientRect(), q = path.getPointAtLength(len * clamp(t)), rr = 13;
    let x = q.x, y = q.y;
    for (const c of cs) {
      const u = flat ? x - c.x : y - c.y, v = flat ? y - c.y : x - c.x, Dd = c.R + rr + 5;
      if (Math.abs(u) < Dd && Math.abs(v) < Dd) { const off = Math.sqrt(Dd * Dd - u * u); if (flat) y = c.y - off; else x = Math.max(c.x - off, rr + 3 - tr.left); break; }
    }
    return { x: tr.left + x, y: tr.top + y, r: rr };
  };
  api.measure();
  if (!motion) api.set(1);
  return api;
}

/* ---------- the visitor's shop: found on OpenStreetMap, typed, or the invented example ---------- */
function shopStore() {
  const subs = [];
  const str = (v, n) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, n);
  const tidy = (j) => {
    const kind = KIND_CAT[j.kind] ? j.kind : 'other';
    const src = j.src === 'osm' || j.src === 'demo' ? j.src : 'typed';
    return { name: str(j.name, 70) || DEMO.name, kind, cat: str(j.cat, 40) || KIND_CAT[kind], city: str(j.city, 60), addr: str(j.addr, 90), hours: str(j.hours, 240), web: str(j.web, 120), osm: str(j.osm, 40), src };
  };
  let s = Object.assign({}, DEMO);
  try { const j = JSON.parse(localStorage.getItem('mk-shop') || 'null'); if (j && j.name && j.src !== 'demo') s = tidy(j); } catch (e) {}
  const week = () => parseHours(s.hours);
  const api = {
    get: () => s,
    set(next) { s = tidy(next); try { localStorage.setItem('mk-shop', JSON.stringify(s)); } catch (e) {} wa(); subs.forEach((f) => f(s)); },
    reset() { s = Object.assign({}, DEMO); try { localStorage.removeItem('mk-shop'); } catch (e) {} wa(); subs.forEach((f) => f(s)); },
    on: (f) => subs.push(f),
    week,
    status: () => { const w = week(); return w ? openNow(w) : null; },
    place: () => [s.addr, s.city].filter(Boolean).join(', '),
    handle: () => '@' + (s.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'iltuonegozio'),
  };
  function wa() {
    const base = 'https://wa.me/393715399463?text=';
    let msg = 'Ciao Maicol, ho visto il tuo sito';
    if (s.src === 'osm') msg += '. Il mio negozio è ' + s.name + (api.place() ? ', ' + api.place() : '') + (s.osm ? ' (openstreetmap.org/' + s.osm + ')' : '') + '. Mi prepari la prova gratis?';
    else if (s.src === 'typed') msg += '. Il mio negozio è ' + s.name + ' (' + s.cat.toLowerCase() + '). Mi prepari la prova gratis?';
    $$('[data-wa]').forEach((a) => { a.href = base + encodeURIComponent(msg); });
  }
  wa();
  return api;
}

/* ---------- the phone in "Il sito": a small real site for the shop, built by the scroll ---------- */
function phoneUI(store) {
  const root = $('[data-stage=site]');
  const api = { fab: null, pose() {}, measure() {} };
  if (!root) return api;
  const q = (c) => $(c, root);
  const site = q('.ph-site'), page = q('.ph-page'), bar = q('.ph-bar'), hero = q('.ph-hero'), img = q('.ph-img'), nameEl = q('.ph-name'), meta = q('.ph-meta'), brand = q('.ph-brand'),
    btn = q('.ph-btn'), cta = q('.ph-cta'), today = q('.ph-today'), more = q('.ph-more'), ph = q('.ph'), shadow = q('.ph-shadow'), desc = q('.ph-desc'), scr = q('.ph-scr');
  const heads = $$('.ph-h', root), cards = $$('.ph-cards figure', root), hoursP = q('.ph-hours'), whereH = q('.ph-h-where'), whereP = q('.ph-where'), hoursH = q('.ph-h-hours');
  api.fab = q('.ph-fab');
  const IMG = 'img/p/';
  const LOOK = {
    food: { hero: 't-hero.webp', h: 'Dalla nostra cucina', cards: [['t-ravioli.webp', 'Primi fatti a mano'], ['t-tiramisu.webp', 'Dolci della casa']] },
    hair: { hero: 's-piega.webp', h: 'Servizi', cards: [['s-colore.webp', 'Colore'], ['s-ricci.webp', 'Taglio e piega']] },
    bake: { hero: 'g-banco.webp', h: 'Sfornati oggi', cards: [['g-focaccia.webp', 'Focaccia'], ['g-croissant.webp', 'Cornetti']] },
    other: { hero: '', h: '', cards: [] },
  };
  const ctaText = (s) => {
    if (s.kind === 'food') return 'Prenota un tavolo';
    if (s.kind === 'hair') return /estetic|unghie/i.test(s.cat) ? 'Prenota un trattamento' : 'Prenota il tuo turno';
    if (s.kind === 'bake') return /^(Bar|Caffè)/.test(s.cat) ? 'Guarda il menù' : /Pasticceria/.test(s.cat) ? 'Ordina una torta' : 'Ordina per domani';
    if (/Barbiere/.test(s.cat)) return 'Prenota il tuo turno';
    return s.src === 'osm' ? 'Come arrivare' : 'Scrivici su WhatsApp';
  };
  let chars = [], maxScroll = 0, lastKey = '';
  function render(s) {
    const look = LOOK[s.kind] || LOOK.other;
    site.className = 'ph-site k-' + s.kind;
    // letters in spans for the build-up; real spaces between words so the name still wraps
    nameEl.innerHTML = s.name.split(' ').map((w) => Array.from(w).map((ch) => '<span class="c">' + esc(ch) + '</span>').join('')).map((w) => '<span class="wd">' + w + '</span>').join(' ');
    chars = $$('.c', nameEl);
    brand.textContent = s.name;
    meta.textContent = s.city ? s.cat + ' a ' + s.city : s.cat;
    btn.textContent = ctaText(s);
    if (look.hero && img.getAttribute('src') !== IMG + look.hero) img.src = IMG + look.hero;
    heads[0].textContent = look.h || '';
    if (s.kind === 'bake' && /^(Bar|Caffè)/.test(s.cat)) heads[0].textContent = 'Dal nostro banco';
    if (s.kind === 'hair' && /estetic/i.test(s.cat)) heads[0].textContent = 'Trattamenti';
    cards.forEach((f, i) => { const c = look.cards[i]; if (!c) return; const im = $('img', f); if (im.getAttribute('src') !== IMG + c[0]) im.src = IMG + c[0]; $('figcaption', f).textContent = c[1]; });
    // today: real hours only (the example's are invented, like the shop); else the address; else nothing
    const w = store.week(), st = store.status();
    today.hidden = false; today.classList.remove('is-closed', 'is-where', 'is-todo');
    if (st && s.src !== 'typed') { $('span', today).textContent = statusText(st); today.classList.toggle('is-closed', !st.open); }
    else if (s.src === 'osm') { $('span', today).textContent = 'Orari da completare'; today.classList.add('is-todo'); }
    else today.hidden = true;
    const ht = w ? hoursText(w) : '';
    hoursH.hidden = hoursP.hidden = s.src === 'typed';
    hoursP.textContent = ht || 'Da completare: su OpenStreetMap non ci sono ancora.';
    hoursP.classList.toggle('is-todo', !ht);
    const place = store.place();
    whereH.hidden = whereP.hidden = !(s.src === 'osm' && place);
    whereP.textContent = place;
    if (desc) desc.textContent = 'Anteprima: il sito di ' + s.name + (s.src === 'demo' ? ', un negozio inventato,' : '') + ' sul telefono.';
    lastKey = '';
    measure();
  }
  function measure() {
    maxScroll = Math.max(0, page.scrollHeight - scr.clientHeight);
    lastKey = '';
  }
  let pp = -1;
  api.pose = (p, px = 0, py = 0) => {
    const key = p.toFixed(4) + px.toFixed(3) + py.toFixed(3);
    if (key === lastKey) return;
    lastKey = key; pp = p;
    const a = eOut(seg(p, 0, 0.2));
    const turn = eIO(seg(p, 0.62, 1));
    ph.style.transform = 'translate3d(0,' + lerp(24, 0, a).toFixed(2) + '%,0) rotateX(' + (lerp(26, 6, a) - py * 3).toFixed(2) + 'deg) rotateY(' + (lerp(-38, -15, a) + turn * 24 + px * 6).toFixed(2) + 'deg) rotateZ(' + lerp(7, 0, a).toFixed(2) + 'deg) scale(' + lerp(0.82, 1, a).toFixed(4) + ')';
    shadow.style.opacity = (0.25 + 0.75 * a).toFixed(3);
    shadow.style.transform = 'translateX(' + ((-15 + turn * 24) * 0.6).toFixed(1) + '%) scale(' + lerp(0.6, 1, a).toFixed(3) + ',1)';
    // the screen wakes up: photo, then the name letter by letter, then the rest
    const boot = eOut(seg(p, 0.08, 0.28));
    site.style.opacity = boot.toFixed(3);
    img.style.transform = 'scale(' + lerp(1.35, 1, boot).toFixed(4) + ')';
    const nm = seg(p, 0.18, 0.36), n = Math.max(1, chars.length);
    chars.forEach((c, i) => { const t = eOut(clamp((nm - (i / n) * 0.55) / 0.45)); c.style.transform = 'translateY(' + ((1 - t) * 70).toFixed(1) + '%)'; c.style.opacity = t.toFixed(3); });
    const mt = eOut(seg(p, 0.3, 0.4));
    meta.style.opacity = mt.toFixed(3); meta.style.transform = 'translateY(' + ((1 - mt) * 40).toFixed(1) + '%)';
    bar.style.opacity = mt.toFixed(3);
    const bt = eBack(seg(p, 0.36, 0.46));
    cta.style.opacity = clamp(bt).toFixed(3); btn.style.transform = 'scale(' + lerp(0.6, 1, bt).toFixed(4) + ')';
    const td = eOut(seg(p, 0.43, 0.53));
    today.style.opacity = td.toFixed(3); today.style.transform = 'translateX(' + ((1 - td) * -24).toFixed(1) + '%)';
    // after the dot is the call button, the page scrolls inside the phone
    const sc = eIO(seg(p, 0.64, 0.94)) * maxScroll;
    page.style.transform = 'translate3d(0,' + (-sc).toFixed(1) + 'px,0)';
    bar.classList.toggle('is-solid', sc > hero.offsetHeight - bar.offsetHeight - 4);
    more.style.opacity = '1';
  };
  api.measure = () => { measure(); if (pp >= 0) api.pose(pp); };
  api.render = render;
  render(store.get());
  store.on((s) => { render(s); if (pp >= 0) api.pose(pp); });
  W.addEventListener('resize', () => api.measure());
  if (D.fonts && D.fonts.ready) D.fonts.ready.then(() => api.measure());
  return api;
}
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* ---------- "Cerca il tuo negozio": the search, the results, the circle; it tells the 3D dot where to be ---------- */
function finder(store) {
  const box = $('.find');
  const api = { anchor: () => null, busy: false };
  if (!box) return api;
  const form = $('.find-form', box), input = $('#q'), msg = $('.find-msg', box), list = $('.find-list', box), alt = $('.find-alt', box), pick = $('.find-pick', box);
  const lensDot = $('.lens .dot', box), heroDot = $('.dot[data-dot=hero]');
  let ctl = null, results = [], rows = [], state = 'idle', on = -1, pen = null, token = 0;
  const say = (t) => { msg.textContent = t; };
  const center = (el, r) => () => { const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2, r: r || b.width / 2 }; };
  const lensAt = center(lensDot);
  /* the dot's spot: a target (a function, so it sticks to the page while it scrolls) and a hop toward it */
  const mv = { t: 1, from: null, to: null };
  let tw = null;
  function go(to, dur = 0.55) {
    const cur = api.anchor();
    if (!motion || !cur) { mv.to = to; mv.from = null; mv.t = 1; return; }
    const prevTo = mv.to;
    mv.from = mv.t >= 1 && prevTo ? prevTo : (() => { const c = cur; return () => c; })();
    mv.to = to; mv.t = 0;
    if (tw) tw.kill();
    tw = gsap.to(mv, { t: 1, duration: dur, ease: 'none' });
  }
  api.anchor = () => {
    if (!mv.to) return null;
    const b = mv.to();
    if (mv.t >= 1 || !mv.from) return b;
    const a = mv.from(), t = mv.t, e = eIO(t);
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    return { x: lerp(a.x, b.x, e), y: lerp(a.y, b.y, e) - Math.sin(Math.PI * t) * Math.min(d * 0.45, 110), r: lerp(a.r, b.r, e) };
  };
  // from the headline's full stop into the lens when the visitor starts a search
  const fromHero = () => { if (!mv.to) { mv.to = center(heroDot); mv.t = 1; } };
  input.addEventListener('focus', () => { if (state === 'idle' && motion) { fromHero(); go(lensAt, 0.6); } });
  input.addEventListener('blur', () => {
    setTimeout(() => { if (state === 'idle' && D.activeElement !== input && !input.value.trim() && motion) { go(center(heroDot), 0.6); setTimeout(() => { if (state === 'idle' && D.activeElement !== input && mv.t >= 1) mv.to = null; }, 650); } }, 900);
  });
  // the pins below move when this block grows: refresh them first, then scroll the new part into view
  // (a refresh during a smooth scroll stops it, so both happen in the same frame, in this order)
  const settle = (el) => requestAnimationFrame(() => {
    if (ScrollTrigger) ScrollTrigger.refresh();
    if (!el) return;
    const r = el.getBoundingClientRect(), d = Math.min(r.bottom - W.innerHeight + 90, r.top - 96);
    if (r.bottom <= W.innerHeight - 20 || d <= 0) return;
    if (lenis) lenis.scrollTo(lenis.scroll + d, { duration: reduced ? 0 : 1 });
    else W.scrollBy({ top: d, behavior: reduced ? 'auto' : 'smooth' });
  });
  function clear() {
    results = []; rows = []; on = -1; pen = null;
    list.innerHTML = ''; list.classList.remove('is-picked');
    alt.hidden = true; pick.hidden = true; say('');
  }
  function setOn(i) {
    if (state !== 'results' || i === on || !rows[i]) return;
    rows.forEach((r, j) => r.classList.toggle('is-on', j === i));
    on = i; go(center($('.find-mk', rows[i]), 7.5), 0.42);
  }
  function placeLine(r) {
    const where = [r.street ? r.street + (r.num ? ' ' + r.num : '') : '', r.city].filter(Boolean);
    if (r.street && r.city) return r.cat + ' in ' + where.join(', ');
    return r.city ? r.cat + ' a ' + r.city : r.cat;
  }
  function renderRows(list0) {
    list.innerHTML = list0.map((r, i) => '<li><button type="button" class="find-row" data-i="' + i + '"><span class="find-mk" aria-hidden="true"></span><span class="find-nm">' + esc(r.name) + '</span><span class="find-meta">' + esc(placeLine(r)) + '</span></button></li>').join('');
    rows = $$('.find-row', list);
    rows.forEach((row, i) => {
      row.addEventListener('click', () => choose(i));
      row.addEventListener('focus', () => setOn(i));
      if (fine) row.addEventListener('pointerenter', () => setOn(i));
    });
    if (motion && state === 'busy') gsap.from(rows, { y: 16, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.06 });
  }
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (q.length < 3) { say('Scrivi il nome del negozio, e se puoi la città.'); input.focus(); return; }
    if (ctl) ctl.abort();
    ctl = new AbortController();
    const my = ++token;
    clear(); state = 'busy'; api.busy = true;
    form.classList.add('is-busy'); say('Cerco sulla mappa…');
    fromHero(); go(lensAt, 0.5);
    if (!fine) input.blur();
    let res = null, err = false;
    try { [res] = await Promise.all([findShops(q, ctl.signal), new Promise((r) => setTimeout(r, motion ? 700 : 0))]); }
    catch (er) { if (er && er.name === 'AbortError') return; err = true; }
    if (my !== token) return;
    form.classList.remove('is-busy'); api.busy = false;
    if (err || !res || !res.length) {
      state = 'alt';
      say(err ? 'La ricerca adesso non risponde. Riprova tra poco, oppure usa solo il nome.' : 'Non lo trovo sulla mappa. Prova a scriverlo in un altro modo, oppure usa solo il nome.');
      alt.hidden = false; $('.find-use', alt).textContent = 'Usa «' + q.slice(0, 40) + '»';
      go(lensAt, 0.4); settle(alt);
      return;
    }
    results = res;
    say(res.length === 1 ? 'Ho trovato questo. È il tuo?' : 'Ho trovato questi. Qual è il tuo?');
    renderRows(res);
    state = 'results'; on = -1; setOn(0);
    settle(list);
  });
  $('.find-use', alt).addEventListener('click', () => {
    const kind = ($('input[name=kind]:checked', alt) || {}).value || 'food';
    const name = input.value.trim().slice(0, 70);
    if (!name) { input.focus(); return; }
    store.set({ name, kind, cat: KIND_CAT[kind], src: 'typed' });
    state = 'picked';
    alt.hidden = true;
    say('Fatto: le anteprime qui sotto adesso hanno il tuo nome.');
    showPick(null, true);
  });
  async function choose(i) {
    const r = results[i], row = rows[i];
    if (!r || state === 'picked') return;
    state = 'picked'; on = i;
    rows.forEach((x, j) => { x.classList.toggle('is-on', j === i); x.classList.toggle('is-picked', j === i); x.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
    list.classList.add('is-picked');
    say('Eccolo.');
    const drawn = circle(row);
    let det = null;
    try { det = await shopDetails(r.id, ctl ? ctl.signal : undefined); } catch (e) { det = null; }
    const t = det || {};
    const addr = t.street ? t.street + (t.num ? ' ' + t.num : '') : r.street ? r.street + (r.num ? ' ' + r.num : '') : '';
    store.set({ name: r.name, kind: kindOf(r.value, t), cat: catOf(r.value, t), city: t.city || r.city, addr, hours: t.hours || '', web: t.web || '', osm: { N: 'node', W: 'way', R: 'relation' }[r.id[0]] + '/' + r.id.slice(1), src: 'osm' });
    await drawn;
    showPick(store.get(), true);
  }
  function showPick(s, live) {
    const st = s ? store.status() : null, w = s ? store.week() : null;
    const stEl = $('.find-st', pick);
    stEl.hidden = !st;
    if (st) { $('span', stEl).textContent = statusText(st); stEl.classList.toggle('is-closed', !st.open); }
    $('.find-hours', pick).textContent = !s ? 'Anteprime fatte col nome che hai scritto.' : w ? 'Orari: ' + hoursText(w) + '.' : 'Su OpenStreetMap mancano i suoi orari: sul sito e su Google li mettiamo giusti.';
    const web = $('.find-web', pick);
    if (s && s.web) { const host = s.web.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, ''); web.innerHTML = 'Hai già un sito, <b>' + esc(host) + '</b>: te lo controllo e lo sistemo a 79\u202f€, in 48 ore, e paghi dopo.'; }
    else web.textContent = s ? 'Il sito te lo faccio come l\'anteprima qui sotto, a 390\u202f€.' : '';
    pick.hidden = false;
    if (live && motion) gsap.from(pick, { y: 14, opacity: 0, duration: 0.6, ease: 'expo.out' });
    settle(live ? pick : null);
  }
  $('.find-again', box).addEventListener('click', () => {
    token++; if (ctl) ctl.abort();
    clear(); state = 'idle'; api.busy = false; form.classList.remove('is-busy');
    store.reset();
    input.focus(); input.select();
    go(lensAt, 0.5); settle(null);
  });
  /* a hand-drawn circle around the name; the dot is the pen */
  function circle(row, instant) {
    const nm = $('.find-nm', row);
    const NS = 'http://www.w3.org/2000/svg';
    const svg = D.createElementNS(NS, 'svg'); svg.setAttribute('class', 'find-circle'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('preserveAspectRatio', 'none');
    const path = D.createElementNS(NS, 'path'); svg.appendChild(path); nm.appendChild(svg);
    // size the loop from the name: a superellipse needs ~1.19x the half sizes to clear the corners
    const nb = nm.getBoundingClientRect(), room = Math.min(nb.left, W.innerWidth - nb.right) - 6;
    const ax = Math.min(nb.width / 2 * 1.19 + 8, nb.width / 2 + Math.max(10, room)), ay = nb.height / 2 * 1.19 + 7;
    const w = ax * 2 + 8, h = ay * 2 + 8;
    Object.assign(svg.style, { left: ((nb.width - w) / 2).toFixed(1) + 'px', top: ((nb.height - h) / 2).toFixed(1) + 'px', width: w.toFixed(1) + 'px', height: h.toFixed(1) + 'px' });
    svg.setAttribute('viewBox', '0 0 ' + w.toFixed(1) + ' ' + h.toFixed(1));
    const cx = w / 2, cy = h / 2, a0 = -2.45, sweep = Math.PI * 2 + 0.55, N = 96;
    const se = (v) => Math.sign(v) * Math.pow(Math.abs(v), 0.55);
    let d = '';
    for (let i = 0; i <= N; i++) {
      const u = i / N, ang = a0 + sweep * u;
      const f = 1 + 0.03 * Math.sin(u * Math.PI * 3 + 0.8) + u * 0.06;
      const x = cx + se(Math.cos(ang)) * ax * f, y = cy + se(Math.sin(ang)) * ay * f + Math.cos(ang) * 1.5;
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    path.setAttribute('d', d); path.setAttribute('vector-effect', 'non-scaling-stroke');
    const len = path.getTotalLength();
    path.style.strokeDasharray = len + ' ' + len;
    pen = { t: 0 };
    const tip = () => { const q = path.getPointAtLength(len * pen.t), r = svg.getBoundingClientRect(); return { x: r.left + q.x * (r.width / w), y: r.top + q.y * (r.height / h), r: 6.5 }; };
    if (!motion || instant) { path.style.strokeDashoffset = '0'; pen.t = 1; return Promise.resolve(); }
    path.style.strokeDashoffset = String(len);
    return new Promise((res) => {
      go(tip, 0.45);
      gsap.to(pen, { t: 1, duration: 1.05, delay: 0.45, ease: 'power2.inOut', onUpdate: () => { path.style.strokeDashoffset = String(len * (1 - pen.t)); }, onComplete: res });
    });
  }
  /* back from an earlier visit: show the shop already chosen */
  const s0 = store.get();
  if (s0.src === 'osm') {
    input.value = s0.name + (s0.city ? ' ' + s0.city : '');
    results = [{ name: s0.name, cat: s0.cat, street: s0.addr, num: '', city: s0.city }];
    renderRows(results); rows.forEach((r) => r.classList.add('is-picked', 'is-on')); list.classList.add('is-picked');
    state = 'picked';
    // drawn once the fonts are in, so the circle fits the name
    const draw = () => { if (rows[0] && !$('.find-circle', rows[0])) circle(rows[0], true); };
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(draw); else draw();
    say('L\'ultima volta hai scelto questo.');
    showPick(s0, false);
  } else if (s0.src === 'typed') {
    input.value = s0.name; state = 'picked';
    say('Le anteprime qui sotto hanno il nome «' + s0.name + '».');
    showPick(null, false);
  }
  return api;
}

function copyButton() {
  const b = $('#copy');
  if (!b) return;
  const label = $('span', b);
  b.addEventListener('click', () => {
    const done = () => { label.textContent = 'Numero copiato'; setTimeout(() => { label.textContent = 'Copia il numero'; }, 2200); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText('+39 371 539 9463').then(done, () => { label.textContent = '371 539 9463'; });
    else label.textContent = '371 539 9463';
  });
}
// phone only: the WhatsApp bar at the bottom shows after the opening and leaves before the contacts
function dock() {
  const el = $('.dock'), hero = $('.hero'), sign = $('#contatti'), svcs = $$('.svc');
  if (!el || !hero || !sign) return;
  let raf = 0, was = null;
  // it steps aside while a service fills the screen (its price sits at the bottom), and the top button comes back
  const inSvc = (vh) => svcs.some((x) => { const r = x.getBoundingClientRect(); return r.top < vh * 0.55 && r.bottom > vh * 0.6; });
  const upd = () => {
    raf = 0;
    const vh = W.innerHeight, on = W.innerWidth <= 700 && hero.getBoundingClientRect().bottom < vh * 0.3 && sign.getBoundingClientRect().top > vh * 0.85 && !inSvc(vh);
    if (on === was) return;
    was = on; el.classList.toggle('is-on', on); H.classList.toggle('dock-on', on); el.inert = !on;
  };
  const ask = () => { if (!raf) raf = requestAnimationFrame(upd); };
  W.addEventListener('scroll', ask, { passive: true }); W.addEventListener('resize', ask); upd();
}
function navTheme() {
  const nav = $('.nav');
  if (!nav) return;
  const solid = () => nav.classList.toggle('solid', W.pageYOffset > 24);
  W.addEventListener('scroll', solid, { passive: true }); solid();
  if (!('IntersectionObserver' in W)) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) nav.setAttribute('data-nav', e.target.getAttribute('data-theme')); }), { rootMargin: '-3% 0px -96% 0px' });
  $$('[data-theme]').forEach((s) => io.observe(s));
}
function anchors() {
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1), t = id && D.getElementById(id);
    if (!t) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(t, { offset: 0 }); else t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#' + id);
  }));
}
