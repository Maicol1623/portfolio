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

/* ---------- page basics that work without 3D ---------- */
// opening of the dot: a (0..1) pops it in, big, in the middle; v goes 1 -> 0 while it flies into the full stop
const intro = { a: motion ? 0 : 1, v: motion ? 1 : 0 };
const hooks = { landed: null };
copyButton();
navTheme();
const shop = shopState();
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
  }
} else {
  H.classList.add('gl');
  start3D();
}
// start the opening only when frames flow (the first shader compile can hold the GPU for a moment)
if (heroTl) { let n = 0, lt = 0; const f = (t) => { n = lt && t - lt < 50 ? n + 1 : 0; lt = t; if (n >= 2) heroTl.play(); else requestAnimationFrame(f); }; requestAnimationFrame(f); }

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
  const IMG = '../assets/img/';
  const imgCache = {};
  function loadImg(name) {
    if (!imgCache[name]) imgCache[name] = new Promise((res) => { const i = new Image(); i.decoding = 'async'; i.onload = () => res(i); i.onerror = () => res(null); i.src = IMG + name; });
    return imgCache[name];
  }
  // every photo material starts with a 1px grey map, so its shader is the final one from frame one
  const blank = new THREE.DataTexture(new Uint8Array([214, 218, 224, 255]), 1, 1);
  blank.colorSpace = THREE.SRGBColorSpace; blank.needsUpdate = true; blank.userData.keep = true;
  const photoMat = (o) => new THREE.MeshStandardMaterial(Object.assign({ map: blank, roughness: 0.55 }, o));
  // the "before" photo: same picture, washed out and a bit crooked, done in the shader (no pixel loops)
  function dullMat() {
    const m = photoMat({ roughness: 0.8 });
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n' +
        'float mkL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));\n' +
        'diffuseColor.rgb = mix(vec3(mkL), diffuseColor.rgb, 0.25) * vec3(0.62, 0.6, 0.56) + vec3(0.035, 0.03, 0.02);');
    };
    m.customProgramCacheKey = () => 'mk-dull';
    return m;
  }
  const baseTex = {};
  function photoTex(name, aspect, zoom = 1, ox = 0.5, oy = 0.5, mat, tilt = 0) {
    loadImg(name).then((img) => {
      if (!img) return;
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

  /* SITE: a page that assembles itself, the dot becomes the round call button */
  const site = stage($('[data-stage=site]'), 10.7, (g) => {
    const card = new THREE.Group(); g.add(card);
    const base = mesh(box(5.2, 9.6, 0.3, 0.42, 6), M.white); card.add(base);
    const head = new THREE.Group(); card.add(head);
    head.add(mesh(box(4.6, 1.0, 0.12, 0.2), M.navy));
    const nameTex = canvasTex(1024, 220, (x, w, h) => {
      const name = shop.name();
      const s = fitText(x, name, '760 $px "Mona Sans"', w - 40, 120);
      x.fillStyle = '#f5f5f2'; x.textBaseline = 'middle'; x.fillText(name, 20, h / 2 + s * 0.04);
    });
    const nameP = mesh(new THREE.PlaneGeometry(4.3, 0.92), new THREE.MeshBasicMaterial({ map: nameTex, transparent: true, toneMapped: false }));
    nameP.position.z = 0.07; head.add(nameP);
    const photoM = photoMat();
    const img = mesh(rrect(4.6, 3.1, 0.28), photoM); card.add(img);
    const title = mesh(box(3.5, 0.36, 0.07, 0.1), M.lineDark);
    const lines = [4.2, 3.7, 2.7].map((w) => mesh(box(w, 0.16, 0.05, 0.06), M.line));
    const bars = [title].concat(lines);
    bars.forEach((b) => { b.geometry.translate(b.geometry.parameters.width / 2, 0, 0); card.add(b); });
    const chip1 = new THREE.Group(); chip1.add(mesh(box(2.1, 0.6, 0.1, 0.25), M.chip));
    const gd = mesh(sphereGeo, M.green); gd.scale.setScalar(0.13); gd.position.set(-0.68, 0, 0.08); chip1.add(gd);
    const cl = mesh(box(1.1, 0.13, 0.04, 0.05), M.line); cl.position.set(0.12, 0, 0.06); chip1.add(cl);
    const chip2 = mesh(box(1.7, 0.6, 0.1, 0.25), M.chip);
    card.add(chip1, chip2);
    const book = new THREE.Group(); card.add(book);
    book.add(mesh(box(2.9, 0.9, 0.16, 0.42), M.navy));
    const bookTex = canvasTex(512, 160, (x, w, h) => { x.fillStyle = '#f5f5f2'; x.font = '700 64px "Inter"'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('Prenota', w / 2, h / 2 + 4); });
    const bookP = mesh(new THREE.PlaneGeometry(2.4, 0.75), new THREE.MeshBasicMaterial({ map: bookTex, transparent: true, toneMapped: false }));
    bookP.position.z = 0.09; book.add(bookP);
    const ring = mesh(new THREE.RingGeometry(0.62, 0.7, 64), new THREE.MeshBasicMaterial({ color: 0xfdc800, transparent: true, opacity: 0, depthWrite: false }));
    card.add(ring);
    const FAB = new THREE.Vector3(1.62, -3.95, 0.15 + 0.56);
    ring.position.set(FAB.x, FAB.y, 0.16);
    return {
      aspect: 0.62, fillD: 1.22, card, nameTex, photoM, FAB, fabR: 0.56, ring,
      pose(p, t) {
        const a = eOut(seg(p, 0, 0.18));
        card.rotation.set(lerp(0.5, 0.1, a) + Math.sin(t * 0.7) * 0.015, lerp(-1.0, -0.34, a) + eIO(seg(p, 0.6, 1)) * 0.5, lerp(-0.12, 0, a));
        card.position.set(0, lerp(-3, 0, a) + Math.sin(t * 0.9) * 0.06, 0);
        card.scale.setScalar(lerp(0.55, 1, a));
        const h1 = eOut(seg(p, 0.1, 0.25));
        head.position.set(0, lerp(7, 3.95, h1), lerp(3, 0.22, h1)); head.scale.setScalar(lerp(0.6, 1, h1));
        const i1 = eOut(seg(p, 0.18, 0.33));
        img.position.set(0, 1.6, lerp(6, 0.16, i1)); img.scale.setScalar(lerp(1.35, 1, i1)); img.visible = i1 > 0.001;
        bars.forEach((b, i) => { const q = eOut(seg(p, 0.28 + i * 0.035, 0.4 + i * 0.035)); b.scale.set(Math.max(q, 1e-3), 1, 1); b.visible = q > 0.002; b.position.set(-2.3, [-0.45, -1.05, -1.4, -1.75][i], 0.18); });
        const c1 = eBack(seg(p, 0.4, 0.48)), c2 = eBack(seg(p, 0.44, 0.52));
        chip1.position.set(-1.25, -2.55, 0.2); chip1.scale.setScalar(Math.max(c1, 1e-3));
        chip2.position.set(0.85, -2.55, 0.2); chip2.scale.setScalar(Math.max(c2, 1e-3));
        const b1 = eBack(seg(p, 0.47, 0.56));
        book.position.set(-0.85, -3.95, 0.22); book.scale.setScalar(Math.max(b1, 1e-3));
      },
    };
  });

  /* MAP: a map lying on the table, the dot drops on it and becomes the pin */
  const mapS = stage($('[data-stage=map]'), 12, (g) => {
    const tilt = new THREE.Group(); g.add(tilt);
    const spin = new THREE.Group(); tilt.add(spin);
    spin.add(mesh(box(9.4, 6.8, 0.36, 0.5, 6), M.navyMatte));
    const mapTex = canvasTex(1024, 740, (x, w, h) => {
      const r = rand(7);
      x.fillStyle = '#eceff3'; x.fillRect(0, 0, w, h);
      x.fillStyle = '#c9e5c4'; x.beginPath(); x.ellipse(170, 560, 190, 120, -0.3, 0, Math.PI * 2); x.fill();
      x.strokeStyle = '#9fcbe8'; x.lineWidth = 46; x.lineCap = 'round';
      x.beginPath(); x.moveTo(-40, 120); x.bezierCurveTo(260, 200, 420, 40, 700, 150); x.bezierCurveTo(860, 210, 960, 110, 1080, 160); x.stroke();
      x.fillStyle = '#dde2e9';
      for (let i = 0; i < 26; i++) { const bx = 40 + (i % 7) * 140 + r() * 30, by = 250 + Math.floor(i / 7) * 120 + r() * 20; x.beginPath(); x.roundRect ? x.roundRect(bx, by, 96 + r() * 20, 76 + r() * 14, 10) : x.rect(bx, by, 96, 76); x.fill(); }
      x.strokeStyle = '#ffffff'; x.lineWidth = 22;
      [[0, 230, 1024, 250], [0, 470, 1024, 440], [300, 0, 330, 740], [640, 0, 610, 740], [0, 700, 1024, 600]].forEach((l) => { x.beginPath(); x.moveTo(l[0], l[1]); x.lineTo(l[2], l[3]); x.stroke(); });
      x.strokeStyle = '#ffd24a'; x.lineWidth = 30; x.beginPath(); x.moveTo(-20, 380); x.bezierCurveTo(300, 330, 600, 420, 1050, 330); x.stroke();
    });
    const mapP = mesh(rrect(9.0, 6.4, 0.36), new THREE.MeshStandardMaterial({ map: mapTex, roughness: 0.8 }));
    mapP.position.z = 0.185; spin.add(mapP);
    const PIN = new THREE.Vector3(0.7, -0.2, 0);
    const needle = mesh(new THREE.ConeGeometry(0.24, 1.9, 40), M.navy);
    needle.rotation.x = -Math.PI / 2; needle.geometry.translate(0, -0.95, 0);
    const needleG = new THREE.Group(); needleG.position.set(PIN.x, PIN.y, 0.19); needleG.add(needle); spin.add(needleG);
    const shadow = mesh(new THREE.CircleGeometry(0.9, 48), new THREE.MeshBasicMaterial({ color: 0x1c293c, transparent: true, opacity: 0.18, depthWrite: false }));
    shadow.position.set(PIN.x + 0.25, PIN.y - 0.1, 0.19); spin.add(shadow);
    const rings = [0, 1, 2].map(() => { const m = mesh(new THREE.RingGeometry(0.62, 0.74, 64), new THREE.MeshBasicMaterial({ color: 0xfdc800, transparent: true, opacity: 0, depthWrite: false })); m.position.set(PIN.x, PIN.y, 0.2); spin.add(m); return m; });
    const cards = [
      { ic: 'clock', tx: 'Orari giusti', at: [-3.1, 1.6, 2.0] },
      { ic: 'phone', tx: 'Chiama', at: [-2.9, -1.55, 1.5] },
      { ic: 'chat', tx: 'WhatsApp', at: [3.4, 1.9, 2.6] },
      { ic: 'camera', tx: 'Foto vere', at: [3.3, -1.7, 1.9] },
    ].map((c) => {
      const grp = new THREE.Group();
      grp.add(mesh(box(2.9, 1.1, 0.14, 0.3), M.white));
      const t = canvasTex(640, 240, (x, w, h) => { icon(x, c.ic, 100, h / 2, 92, '#1c293c'); x.fillStyle = '#1c293c'; fitText(x, c.tx, '650 $px "Inter"', w - 190, 76); x.textBaseline = 'middle'; x.fillText(c.tx, 170, h / 2 + 4); });
      const pl = mesh(new THREE.PlaneGeometry(2.64, 0.99), new THREE.MeshBasicMaterial({ map: t, transparent: true, toneMapped: false })); pl.position.z = 0.08; grp.add(pl);
      spin.add(grp); return { grp, at: c.at };
    });
    const face = new THREE.Quaternion();
    const title = new THREE.Group();
    title.add(mesh(box(5.0, 1.5, 0.16, 0.32), M.white));
    const titleTex = canvasTex(1024, 300, (x, w, h) => {
      const name = shop.name();
      x.fillStyle = '#1c293c'; fitText(x, name, '760 $px "Mona Sans"', w - 70, 112); x.textBaseline = 'alphabetic'; x.fillText(name, 36, 150);
      x.fillStyle = '#56627a'; x.font = '560 54px "Inter"'; x.fillText(shop.cat() + ' · ', 36, 236);
      const cw = x.measureText(shop.cat() + ' · ').width; x.fillStyle = '#1f9d58'; x.fillText('Aperto', 36 + cw, 236);
    });
    const tp = mesh(new THREE.PlaneGeometry(4.7, 1.38), new THREE.MeshBasicMaterial({ map: titleTex, transparent: true, toneMapped: false })); tp.position.z = 0.09; title.add(tp);
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
        cards.forEach((c, i) => {
          const q = eBack(seg(p, 0.38 + i * 0.07, 0.5 + i * 0.07));
          c.grp.position.set(c.at[0], c.at[1], lerp(0.2, c.at[2], q) + Math.sin(t * 1.1 + i) * 0.06);
          c.grp.quaternion.copy(face); c.grp.scale.setScalar(Math.max(q, 1e-3) * 1.22); c.grp.visible = q > 0.002;
        });
        const ti = eBack(seg(p, 0.62, 0.74));
        title.position.set(-0.2, 3.9, lerp(0.2, 3.1, ti)); title.quaternion.copy(face); title.scale.setScalar(Math.max(ti, 1e-3) * 1.12); title.visible = ti > 0.002;
      },
    };
  });

  /* GRID: nine tiles fly into a profile grid, the dot hops on each and flips it */
  const gridS = stage($('[data-stage=grid]'), 11.6, (g) => {
    const card = new THREE.Group(); g.add(card);
    card.add(mesh(box(6.6, 9.4, 0.26, 0.44, 6), M.white));
    const avatarM = photoMat({ roughness: 0.6 });
    const avatar = mesh(new THREE.CircleGeometry(0.78, 64), avatarM); avatar.position.set(-2.3, 3.55, 0.15); card.add(avatar);
    const avRing = mesh(new THREE.TorusGeometry(0.95, 0.09, 20, 80), M.yellow); avRing.position.set(-2.3, 3.55, 0.2); card.add(avRing);
    const handleTex = canvasTex(1024, 200, (x, w, h) => { const hd = shop.handle(); x.fillStyle = '#1b1b1b'; fitText(x, hd, '700 $px "Inter"', w - 30, 92); x.textBaseline = 'middle'; x.fillText(hd, 10, h / 2 + 4); });
    const handle = mesh(new THREE.PlaneGeometry(3.6, 0.7), new THREE.MeshBasicMaterial({ map: handleTex, transparent: true, toneMapped: false })); handle.position.set(0.55, 3.85, 0.15); card.add(handle);
    [2.6, 1.8].forEach((w, i) => { const l = mesh(box(w, 0.15, 0.04, 0.06), M.line); l.position.set(-1.05 + w / 2, 3.18 - i * 0.34, 0.15); card.add(l); });
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
        at: new THREE.Vector3((c - 1) * (T + GAP), 1.02 - row * (T + GAP), 0.22),
        from: new THREE.Vector3((r() - 0.5) * 18, (r() - 0.5) * 16, 2 + r() * 7),
        rot: new THREE.Euler((r() - 0.5) * 3, (r() - 0.5) * 5, (r() - 0.5) * 2),
        delay: r() * 0.08,
      });
    }
    const ORDER = [0, 1, 2, 5, 4, 3, 6, 7, 8];
    return {
      aspect: 0.66, fillD: 1.16, card, tiles, ORDER, avatar, avatarM, avRing, handleTex, tileR: 0.42, flipAt: [],
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
    const disc = mesh(discG, M.navyMatte); grp.add(disc);
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

  /* ---------- personalisation: name and kind change the textures ---------- */
  const SETS = {
    food: { hero: ['t-hero.jpg', 1, 0.5, 0.45], tiles: [['t-ravioli.jpg'], ['t-tagliatelle.jpg'], ['t-tiramisu.jpg'], ['t-gnocchi.jpg'], ['t-dehors.jpg'], ['t-hero.jpg', 1.3, 0.3, 0.5], ['t-ravioli.jpg', 1.7, 0.8, 0.3], ['t-tiramisu.jpg', 1.6, 0.2, 0.7], ['t-tagliatelle.jpg', 1.6, 0.7, 0.8]], avatar: 't-tagliatelle.jpg' },
    hair: { hero: ['s-piega.jpg', 1, 0.5, 0.42], tiles: [['s-colore.jpg'], ['s-liscio.jpg'], ['s-piega.jpg'], ['s-ricci.jpg'], ['s-sposa.jpg'], ['s-treccia.jpg'], ['s-ricci.jpg', 1.6, 0.3, 0.7], ['s-colore.jpg', 1.6, 0.6, 0.3], ['s-liscio.jpg', 1.7, 0.4, 0.6]], avatar: 's-treccia.jpg' },
    bake: { hero: ['g-banco.jpg', 1, 0.5, 0.5], tiles: [['g-croissant.jpg'], ['g-focaccia.jpg'], ['g-pagnotta.jpg'], ['g-grissini.jpg'], ['g-impasto.jpg'], ['g-farina.jpg'], ['g-banco.jpg', 1.4, 0.25, 0.5], ['g-croissant.jpg', 1.6, 0.7, 0.4], ['g-focaccia.jpg', 1.6, 0.3, 0.7]], avatar: 'g-pagnotta.jpg' },
  };
  function applyKind() {
    const set = SETS[shop.kind()] || SETS.food;
    photoTex(set.hero[0], 4.6 / 3.1, set.hero[1], set.hero[2], set.hero[3], site.photoM);
    gridS.tiles.forEach((tl, i) => { const s = set.tiles[i]; photoTex(s[0], 1, s[1] || 1, s[2] === undefined ? 0.5 : s[2], s[3] === undefined ? 0.5 : s[3], tl.front); const rr = rand(31 + i * 7); photoTex(s[0], 1, (s[1] || 1) * 1.3, 0.5 + (rr() - 0.5) * 0.5, 0.5 + (rr() - 0.5) * 0.5, tl.back, (rr() - 0.5) * 0.2); });
    photoTex(set.avatar, 1, 1.2, 0.5, 0.5, gridS.avatarM);
  }
  function applyName() { [site.nameTex, mapS.titleTex, gridS.handleTex].forEach((t) => t.userData.draw()); }
  shop.on(() => { applyName(); applyKind(); });
  applyKind();
  const fontsReady = D.fonts && D.fonts.load ? Promise.all([D.fonts.load('760 64px "Mona Sans"'), D.fonts.load('650 64px "Inter"')]).catch(() => {}) : Promise.resolve();
  fontsReady.then(() => { redrawAll(); dirty = true; });
  function redrawAll() { scene.traverse((o) => { const m = o.material; if (m && m.map && m.map.userData && m.map.userData.draw) m.map.userData.draw(); }); }

  /* ---------- the dot's path ---------- */
  const tmp = V(), tmp2 = V();
  const anchorEls = {};
  $$('.dot[data-dot]').forEach((el) => { anchorEls[el.getAttribute('data-dot')] = el; });
  const domDot = (el) => (out) => { const r = el.getBoundingClientRect(); toWorld(r.left + r.width / 2, r.top + r.height / 2, out.p); out.r = (r.width / 2) * k; return out; };
  const local = (obj, v, rad) => (out) => { obj.updateWorldMatrix(true, false); out.p.copy(v).applyMatrix4(obj.matrixWorld); const s = obj.getWorldScale(tmp2).x; out.r = rad * s; return out; };
  const keys = [];
  let words = [], wordFs = 30;

  function buildKeys(sts) {
    keys.length = 0;
    const add = (y, at, o) => keys.push(Object.assign({ y, at }, o || {}));
    const heroEl = anchorEls.hero;
    add(0, domDot(heroEl));
    add(vh * 0.16, domDot(heroEl));
    // reading: one key per word, small hops
    const rs = sts.read;
    if (rs && words.length) {
      const L = rs.end - rs.start, n = words.length;
      words.forEach((w, i) => {
        add(rs.start + L * (0.04 + (i / (n - 1)) * 0.8), (out) => { const r = w.getBoundingClientRect(); toWorld(r.left + r.width / 2, r.top + wordFs * 0.18, out.p); out.r = wordFs * 0.15 * k; out.p.y += out.r; return out; }, { hop: wordFs * 0.2 * k, word: i });
      });
      add(rs.end, keys[keys.length - 1].at);
    }
    const pv = anchorEls.prova;
    const pr = sts.prova;
    if (pv && pr) { add(pr.start, domDot(pv)); add(pr.end, domDot(pv)); }
    const ss = sts.site, sl = ss.end - ss.start;
    add(ss.start + sl * 0.58, local(site.card, site.FAB, site.fabR), { land: 'site' });
    add(ss.start + sl * 0.95, local(site.card, site.FAB, site.fabR));
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
    const av = new THREE.Vector3(-2.3, 3.55, 0.2 + 0.5);
    add(gs.start + gl * 0.9, local(gridS.card, av, 0.5), { hop: 2 });
    add(gs.start + gl * 0.97, local(gridS.card, av, 0.5));
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
    const pinLen = (f) => () => '+=' + Math.round(W.innerHeight * f);
    const readEl = $('.read');
    words = splitWords($('.read-p'));
    sts.read = ScrollTrigger.create({ trigger: readEl, start: 'top top', end: pinLen(1.7), pin: true, anticipatePin: 1 });
    sts.prova = ScrollTrigger.create({ trigger: '#prova', start: 'top 62%', end: 'bottom 70%' });
    sts.site = ScrollTrigger.create({ trigger: '#sito', start: 'top top', end: pinLen(2.3), pin: true, anticipatePin: 1 });
    sts.map = ScrollTrigger.create({ trigger: '#google', start: 'top top', end: pinLen(2.2), pin: true, anticipatePin: 1 });
    sts.grid = ScrollTrigger.create({ trigger: '#instagram', start: 'top top', end: pinLen(2.8), pin: true, anticipatePin: 1 });
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
    still(site.card, site.FAB, site.fabR);
    still(mapS.spin, new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, mapS.headZ), mapS.pinR);
    still(logoS.grp, logoS.SLOT, logoS.slotR);
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
    if (intro.v > 0 || poke.v > 0) return;
    const [sx, sy] = dotScreen(), rr = Math.max(30, (Math.abs(dot.scale.y) / k) * 1.8);
    if (Math.hypot(e.clientX - sx, e.clientY - sy) < rr) hop(1);
  }, { passive: true });

  /* ---------- frame ---------- */
  const out = { p: V(), r: 1, i: 0, t: 0 };
  const prev = V(), vel = V(), up = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion();
  let ys = W.pageYOffset, last = performance.now(), time = 0, squash = 0, landSeen = {};
  const landFx = { site: () => ringPulse(site.ring), map: () => mapS.rings.forEach((r, i) => ringPulse(r, i * 0.16)), tile: () => {}, logo: () => {} };
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
      if (motion) { const st = s === site ? sts.site : s === mapS ? sts.map : s === gridS ? sts.grid : sts.sign; s.p = st ? clamp((ys - st.start) / Math.max(1, st.end - st.start)) : 1; }
      s.pose(s.p, time, ptr.sx, ptr.sy);
    }
    if (motion && sts.how) how.set((ys - sts.how.start) / Math.max(1, sts.how.end - sts.how.start));
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
      if (motion && intro.v === 0 && ys < 4 && poke.v === 0) { idle += dt; if (idle > 6) { idle = 0; hop(0.45); } } else if (ys >= 4) idle = 0;
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
    }
    // with no scene on screen and the dot standing still, the last frame is still right: skip drawing it again (saves battery)
    if (motion) {
      let still = true;
      for (const s of stages) if (s.visible) { still = false; break; }
      if (still) {
        const p = dot.position, sc = dot.scale, qq = dot.quaternion;
        const sig = [p.x, p.y, p.z, sc.x, sc.y, sc.z, qq.x, qq.y, qq.z, qq.w, dot.visible ? 1 : 0, heroRing.visible ? heroRing.material.opacity : -1].map((v) => Math.round(v * 1e4)).join();
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
    words.forEach((w, i) => w.classList.toggle('on', i <= idx));
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
    const s = { site, map: mapS, grid: gridS, logo: logoS }[name];
    const at = { site: local(site.card, site.FAB, site.fabR), map: local(mapS.spin, new THREE.Vector3(mapS.PIN.x, mapS.PIN.y, mapS.headZ), mapS.pinR), grid: local(gridS.card, new THREE.Vector3(-2.3, 3.55, 0.7), 0.5), logo: local(logoS.grp, logoS.SLOT, logoS.slotR) }[name];
    stages.forEach((o) => { o.el = o === s ? o.el : D.createElement('div'); });
    keys.length = 0; keys.push({ y: 0, at }); posterDot = name === 'grid'; dirty = true; // the others already have their still dot
    return !!s;
  };
}

/* ---------- DOM motion: titles, words, prices, band, examples ---------- */
function startDomMotion() {
  flaps();
  prices();
  band();
  exTilt();
  tryName();
}
function heroType() {
  const h1 = $('.hero-h');
  const tl = gsap.timeline({ paused: true });
  // on a slow connection the headline has already been on screen for a while: keep it, skip the opening
  const late = performance.now() > 2800;
  if (h1 && SplitText && !late) {
    const split = SplitText.create($$('.hw', h1), { type: 'chars', charsClass: 'hc' });
    gsap.set(split.chars, { fontStretch: '75%', fontWeight: 300, yPercent: 46, opacity: 0 });
    gsap.set('.nav', { y: -18, opacity: 0 });
    gsap.set('.hero-foot', { y: 26, opacity: 0 });
    tl.to(split.chars, {
      fontStretch: '125%', fontWeight: 860, yPercent: 0, opacity: 1, duration: 1.15, ease: 'expo.out', stagger: 0.028,
      onComplete() { gsap.set(split.chars, { clearProps: 'fontStretch,fontWeight' }); if (fine) reactive(split.chars); },
    }, 0.72)
      .to('.nav', { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, 1.25)
      .to('.hero-foot', { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out' }, 1.4)
      .to(intro, { a: 1, duration: 0.7, ease: 'back.out(1.9)' }, 0)
      .to(intro, { v: 0, duration: 1.05, ease: 'power3.inOut', onComplete: () => hooks.landed && hooks.landed() }, 0.8);
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
function exTilt() {
  const card = $('.ex-card'), img = $('.ex-img');
  if (!card || !fine) return;
  card.addEventListener('pointermove', (e) => { const r = card.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; img.style.transform = 'rotateY(' + (px * 10).toFixed(2) + 'deg) rotateX(' + (-py * 8).toFixed(2) + 'deg) translateZ(20px)'; img.style.boxShadow = (12 - px * 10).toFixed(1) + 'px ' + (12 - py * 10).toFixed(1) + 'px 0 #1b1b1b'; });
  card.addEventListener('pointerleave', () => { img.style.transform = ''; img.style.boxShadow = ''; });
}
function tryName() {
  const big = $('#shop-big');
  if (!big) return;
  const render = (animateLast) => {
    const name = shop.name();
    big.innerHTML = '';
    Array.from(name).forEach((ch, i, arr) => { const s = D.createElement('span'); s.className = 'c'; s.textContent = ch === ' ' ? ' ' : ch; big.appendChild(s); if (animateLast && i === arr.length - 1 && gsap) gsap.fromTo(s, { fontStretch: '75%', yPercent: 30, opacity: 0 }, { fontStretch: '125%', yPercent: 0, opacity: 1, duration: 0.6, ease: 'expo.out' }); });
  };
  render(false);
  let lastLen = shop.name().length;
  shop.on(() => { const n = shop.name().length; render(n > lastLen); lastLen = n; });
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
  let len = 1, stops = [], lastT = -1;
  api.ok = true;
  api.measure = () => {
    const tr = track.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + Math.round(tr.width) + ' ' + Math.round(tr.height));
    const pts = ns.map((n) => { const r = n.getBoundingClientRect(); return [r.left - tr.left + r.width / 2, r.top - tr.top + r.height / 2]; });
    let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      if (Math.abs(a[1] - b[1]) < 4) d += ' L' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
      else { const my = (a[1] + b[1]) / 2; d += ' C' + a[0].toFixed(1) + ' ' + my.toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + my.toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1); }
    }
    path.setAttribute('d', d);
    len = path.getTotalLength() || 1;
    path.style.strokeDasharray = len + ' ' + len;
    stops = pts.map((p) => { let best = 0, bd = 1e9; for (let s = 0; s <= 80; s++) { const q = path.getPointAtLength((len * s) / 80); const dd = Math.hypot(q.x - p[0], q.y - p[1]); if (dd < bd) { bd = dd; best = s / 80; } } return best; });
    lastT = -1; api.set(api.t);
  };
  api.set = (t) => {
    t = clamp(t); api.t = t;
    if (Math.abs(t - lastT) < 1e-4) return;
    lastT = t;
    path.style.strokeDashoffset = String(len * (1 - t));
    lis.forEach((li, i) => li.classList.toggle('on', stops.length > 0 && t >= stops[i] - 0.01));
  };
  api.screen = (t) => {
    api.set(t);
    const tr = track.getBoundingClientRect(), q = path.getPointAtLength(len * clamp(t));
    return { x: tr.left + q.x, y: tr.top + q.y, r: 13 };
  };
  api.measure();
  if (!motion) api.set(1);
  return api;
}

/* ---------- shop name and kind, shared by the preview and the WhatsApp links ---------- */
function shopState() {
  const input = $('#shop'), radios = $$('input[name=kind]'), subs = [];
  const CAT = { food: 'Ristorante', hair: 'Parrucchiere', bake: 'Panetteria' };
  let name = '', kind = 'food';
  try { const s = JSON.parse(localStorage.getItem('mk-shop') || 'null'); if (s) { name = String(s.name || '').slice(0, 28); kind = CAT[s.kind] ? s.kind : 'food'; } } catch (e) {}
  if (input) input.value = name;
  radios.forEach((r) => { r.checked = r.value === kind; });
  const api = {
    name: () => name.trim() || 'Il tuo negozio',
    kind: () => kind,
    cat: () => CAT[kind],
    handle: () => '@' + ((name.trim() || 'iltuonegozio').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'iltuonegozio'),
    on: (f) => subs.push(f),
  };
  function wa() {
    const base = 'https://wa.me/393715399463?text=';
    const msg = name.trim() ? 'Ciao Maicol, ho visto il tuo sito. Il mio negozio è ' + name.trim() + ' (' + CAT[kind].toLowerCase() + '). Mi prepari la prova gratis?' : 'Ciao Maicol, ho visto il tuo sito';
    $$('[data-wa]').forEach((a) => { a.href = base + encodeURIComponent(msg); });
  }
  function save() { try { localStorage.setItem('mk-shop', JSON.stringify({ name, kind })); } catch (e) {} }
  let tmr = 0;
  if (input) input.addEventListener('input', () => { name = input.value.slice(0, 28); wa(); clearTimeout(tmr); tmr = setTimeout(save, 400); subs.forEach((f) => f()); });
  radios.forEach((r) => r.addEventListener('change', () => { if (r.checked) { kind = r.value; wa(); save(); subs.forEach((f) => f()); } }));
  const form = $('.try-form');
  if (form) form.addEventListener('submit', (e) => { e.preventDefault(); if (input) input.blur(); const t = $('#sito'); if (t) (lenis ? lenis.scrollTo(t) : t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })); });
  wa();
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
