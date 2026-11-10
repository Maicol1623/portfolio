/* mk digital studio, sito personale (v3).
   The page is plain HTML and works without this file. Here: one small frame loop (no animation library),
   the travelling dot and its stations, the scenes that the scroll builds (the phone, the map, the steps line),
   the shop search on OpenStreetMap, and the WhatsApp messages that carry the visitor's shop.
   Lenis smooths the wheel on computers only. */
import { findShops, shopDetails, parseHours, openNow, statusText, hoursText, kindOf, catOf } from './shopfinder.js';
import { gridHTML, avatarHTML, esc } from './tiles.js';
import { makeDot } from './dot.js';

const W = window, D = document, H = D.documentElement;
const $ = (s, c) => (c || D).querySelector(s);
const $$ = (s, c) => Array.from((c || D).querySelectorAll(s));
const mq = (q) => !!(W.matchMedia && W.matchMedia(q).matches);
const reduced = mq('(prefers-reduced-motion: reduce)');
const fine = mq('(hover: hover) and (pointer: fine)');
const live = H.classList.contains('live') && !reduced;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (p, a, b) => clamp((p - a) / (b - a));
const eOut = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));                       // expo.out
const eIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);    // power3.inOut
const eBack = (t) => { const c = 1.5, c3 = c + 1; return 1 + c3 * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

/* the visitor's shop starts as an invented example (its hours and street are invented too, like the shop) */
const KIND_CAT = { food: 'Ristorante', hair: 'Parrucchiere', bake: 'Forno', other: 'Negozio' };
const CHIP = { food: ['food', 'Ristorante'], bar: ['bake', 'Bar'], bake: ['bake', 'Forno'], hair: ['hair', 'Parrucchiere'], other: ['other', 'Negozio'] };
const DEMO = { name: 'Trattoria da Ines', kind: 'food', cat: 'Trattoria', city: '', addr: 'Via Esempio 12', hours: 'Tu-Su 12:00-15:00, 19:00-23:00', web: '', osm: '', lat: null, lon: null, src: 'demo' };
const WA_BASE = 'https://wa.me/393715399463?text=';

/* ---------- one frame loop for everything; it sleeps when nothing moves ---------- */
const subs = [];
let raf = 0, lastT = 0, until = 0, inLoop = false;
function loop(t) {
  raf = 0; inLoop = true;
  const now = t / 1000, dt = lastT ? Math.min(0.05, now - lastT) : 1 / 60;
  lastT = now;
  let more = false;
  try { for (let i = 0; i < subs.length; i++) if (subs[i](now, dt)) more = true; } finally { inLoop = false; }
  if (more || t < until) raf = requestAnimationFrame(loop); else lastT = 0;
}
// called from inside a frame it only extends the deadline: the frame itself asks for the next one (one loop, never two)
function wake(ms) { const t = performance.now() + (ms || 0); if (t > until) until = t; if (!raf && !inLoop) raf = requestAnimationFrame(loop); }
function onFrame(f) { subs.push(f); wake(); return () => { const i = subs.indexOf(f); if (i >= 0) subs.splice(i, 1); }; }
/* a tween on the same loop: fn(eased 0..1) */
function tween(dur, fn, ease = eOut, done) {
  const t0 = performance.now() / 1000;
  let off = null, dead = false;
  off = onFrame((now) => {
    if (dead) return false;
    const u = clamp((now - t0) / dur);
    fn(ease(u));
    if (u >= 1) { dead = true; off(); if (done) done(); return false; }
    return true;
  });
  return { kill() { if (!dead) { dead = true; off(); } } };
}

/* ---------- the view: scroll and size, read once per frame ---------- */
const V = { vw: W.innerWidth, vh: W.innerHeight, sy: W.pageYOffset, nav: 62, dock: false };
const navEl = $('.nav');
function measureView() { V.vw = W.innerWidth; V.vh = W.innerHeight; V.nav = navEl ? navEl.offsetHeight : 62; }
measureView();

/* ---------- scenes: a section's progress p (0 when it enters at the bottom, 1 when it leaves at the top) ---------- */
const scenes = [];
function addScene(el, pose, still) { if (!el) return null; const s = { el, top: 0, h: 1, p: -1, pose, still }; scenes.push(s); return s; }
function measureScenes() { const sy = W.pageYOffset; scenes.forEach((s) => { const b = s.el.getBoundingClientRect(); s.top = b.top + sy; s.h = b.height || 1; s.p = -1; }); }
function runScenes() {
  for (const s of scenes) {
    const p = clamp((V.sy + V.vh - s.top) / (V.vh + s.h));
    if (Math.abs(p - s.p) > 1e-4) { s.p = p; s.pose(p, s); }
  }
}

/* ---------- page basics ---------- */
const shop = shopStore();
const phone = phoneUI(shop);
const map = mapUI(shop);
const grid = gridUI(shop);
const how = howLine();
const find = finder(shop);
copyButton();
examples();
navTheme();
const dockApi = dock();
const scenesByName = {
  site: addScene($('[data-scene=site]'), phone.pose, 0.5),
  map: addScene($('[data-scene=map]'), map.pose, 1),
  steps: addScene($('.steps-track'), how.pose, 1),
};

let lenis = null;
if (live && fine && W.Lenis) {
  lenis = new W.Lenis({ lerp: 0.12, smoothWheel: true, autoRaf: false });
  lenis.on('scroll', () => wake(160));
  H.classList.add('lenis');
}
anchors();

if (live) {
  if (lenis) subs.push((now) => { lenis.raf(now * 1000); return !!lenis.isScrolling; });
  subs.push(() => { V.sy = W.pageYOffset; runScenes(); return false; });
  ['scroll', 'wheel', 'touchmove', 'keydown'].forEach((ev) => W.addEventListener(ev, () => wake(ev === 'scroll' ? 160 : 900), { passive: true }));
  reveals();
} else {
  // the still page: every scene in its finished state
  scenes.forEach((s) => s.pose(s.still));
  grid.finish(true);
}

function relayout() { measureView(); measureScenes(); phone.measure(); map.measure(); how.measure(); wake(); }
let rlT = 0;
const askRelayout = () => { cancelAnimationFrame(rlT); rlT = requestAnimationFrame(relayout); };
W.addEventListener('resize', askRelayout);
if ('ResizeObserver' in W) new ResizeObserver(askRelayout).observe(D.body);
if (D.fonts && D.fonts.ready) D.fonts.ready.then(() => { phone.fit(); askRelayout(); });
W.addEventListener('load', askRelayout);
relayout();

/* ---------- the dot and its stations ---------- */
const layer = $('#mk-layer');
const dot = live && layer ? makeDot({ layer, fine }) : null;
if (dot) startDot();

function startDot() {
  H.classList.add('dot-on');
  const heroSlot = $('.slot-hero'), introSlot = $('[data-st=intro]'), fabSlot = $('[data-st=fab]'), pinSlot = $('[data-st=pin]');
  const prezziSlot = $('[data-st=prezzi]'), faqSlot = $('[data-st=faq]'), handleSlot = $('[data-st=handle]'), sendSlot = $('[data-st=send]');
  const letters = heroLetters();
  const pageY = (el) => { if (!el) return null; const b = el.getBoundingClientRect(); if (!b.width && !b.height) return null; return b.top + b.height / 2 + V.sy; };
  const hero = {
    id: 'hero', theme: 'navy', focus: 0.42, ring: true,
    prio: () => (find.busy() ? 600 : 0),
    key: () => find.anchor().key,
    y: () => { const a = find.anchor(); return a.pt ? a.pt().y : pageY(a.el || heroSlot); },
    tg: () => {
      const a = find.anchor();
      if (a.key === 'hero') return { el: heroSlot, ring: true, onLand: (now, intro) => ripple(letters, intro) };
      return { el: a.el, pt: a.pt, r: a.r, follow: a.follow, onLand: a.onLand, handoff: !!a.el, H: a.H, noReb: true };
    },
  };
  const ST = [
    hero,
    { id: 'intro', theme: 'paper', focus: 0.55, ring: true, el: introSlot },
    { id: 'fab', theme: 'paper', focus: 0.7, el: fabSlot, press: true, ok: () => scenesByName.site && scenesByName.site.p >= 0.4,
      tg: () => ({ el: fabSlot, press: true, onLand: () => phone.press(), onLeave: () => phone.done() }) },
    { id: 'pin', theme: 'paper', focus: 0.5, el: pinSlot, ok: () => scenesByName.map && scenesByName.map.p >= 0.33,
      tg: () => ({ el: pinSlot, noReb: true, onLand: () => map.land(), onLeave: () => map.leave() }) },
    { id: 'grid', theme: 'navy', focus: 0.5, key: () => 'g' + grid.k(), y: () => pageY(grid.box), exit: () => grid.finish(),
      tg: () => grid.target() },
    { id: 'steps', theme: 'navy', focus: 0.55, key: () => 'n' + how.k(), ok: () => how.k() >= 0, y: () => pageY(how.el()),
      tg: () => ({ el: how.el(), press: true }) },
    { id: 'prezzi', theme: 'paper', focus: 0.42, ring: true, el: prezziSlot },
    { id: 'faq', theme: 'paper', focus: 0.42, ring: true, el: faqSlot },
    { id: 'handle', theme: 'navy', focus: 0.5, el: handleSlot, press: true },
    { id: 'send', theme: 'cream', focus: 0.62, ring: true, el: sendSlot, press: true },
  ].filter((s) => s.tg || s.el);
  let cur = null, curKey = '';
  function pick() {
    const top = V.sy + V.nav + 16, bot = V.sy + V.vh - (V.dock ? 96 : 24);
    let best = null, bd = Infinity;
    for (const s of ST) {
      if (s.ok && !s.ok()) continue;
      const y = s.y ? s.y() : pageY(s.el);
      if (y == null || y < top || y > bot) continue;
      const d = Math.abs(y - (V.sy + V.vh * s.focus)) - (s === cur ? 24 : 0) - (s.prio ? s.prio() : 0);
      if (d < bd) { bd = d; best = s; }
    }
    // between stations it stays where it is; once its own station has left the screen it lets go
    if (!best && cur) { const y = cur.y ? cur.y() : pageY(cur.el); if (y != null && y > V.sy - 40 && y < V.sy + V.vh + 40) return cur; }
    return best;
  }
  function target(s, key) {
    const t = s.tg ? s.tg() : { el: s.el, press: s.press };
    t.key = key; t.theme = s.theme;
    if (t.ring === undefined) t.ring = !!s.ring;
    if (t.big === undefined && t.ring) t.big = 1.8; // full stops in small type: it lands bigger, then shrinks into the type
    if (t.handoff === undefined) t.handoff = !!t.el;
    return t;
  }
  const view = () => ({ top: V.sy, bottom: V.sy + V.vh });
  let started = false;
  subs.push((now, dt) => {
    const s = pick();
    if (s !== cur) { if (cur && cur.exit) cur.exit(); cur = s; }
    if (s) {
      const key = s.id + ':' + (s.key ? s.key() : '');
      if (key !== curKey) {
        curKey = key;
        const t = target(s, key);
        if (!started) {
          started = true;
          // the opening: if the page is at the top and the full stop has not shown by itself yet, the dot falls into it
          if (s === hero && key === 'hero:hero' && V.sy < V.vh * 0.3 && performance.now() < 1250) dot.intro(t, now, view(), 0.32);
          else { t.instant = true; dot.to(t, now, view()); }
        } else dot.to(t, now, view());
      }
    }
    return dot.step(now, dt);
  });
  // a tap on the headline: the dot hops, if it is at home
  const hv = $('.hero-vis');
  if (hv) hv.addEventListener('click', () => { if (cur === hero && find.anchor().key === 'hero' && dot.poke(performance.now() / 1000)) wake(); });
  idle(() => cur === hero);
  wake();
}

/* the word "punto" in letters, so it can react when the dot lands; the visible headline is aria-hidden */
function heroLetters() {
  const w = $('.hw-last');
  if (!w) return [];
  const tn = Array.from(w.childNodes).find((n) => n.nodeType === 3 && n.textContent.trim());
  if (!tn) return [];
  const frag = D.createDocumentFragment();
  Array.from(tn.textContent).forEach((ch) => { const c = D.createElement('span'); c.className = 'c'; c.textContent = ch; frag.appendChild(c); });
  w.replaceChild(frag, tn);
  return $$('.c', w).reverse().concat($$('.hero-vis .hw').filter((x) => x !== w).reverse());
}
function ripple(els, big) {
  if (!els.length || !els[0].animate) return;
  els.forEach((el, i) => {
    const amp = (big ? 1 : 0.55) * Math.pow(0.72, i);
    if (amp < 0.06) return;
    el.animate([{ transform: 'none' }, { transform: 'translateY(' + (0.07 * amp).toFixed(3) + 'em) scaleY(' + (1 - 0.07 * amp).toFixed(3) + ')', offset: 0.32 }, { transform: 'none' }],
      { duration: 420, delay: i * 30, easing: 'cubic-bezier(.3,.7,.3,1)' });
  });
}
/* when nothing happens at the top for a while, the dot shows the search, then goes back: twice at most */
function idle(atHero) {
  let n = 0, t = 0;
  const stop = () => { n = 2; clearTimeout(t); };
  const arm = () => {
    clearTimeout(t);
    if (n >= 2) return;
    t = setTimeout(() => {
      if (atHero() && find.canIdle() && W.pageYOffset < 60) { n++; find.idleTo(n === 1 ? 'lens' : 'hero'); wake(); }
      arm();
    }, n === 0 ? 6000 : 12000);
  };
  ['scroll', 'pointerdown', 'keydown'].forEach((ev) => W.addEventListener(ev, () => { if (ev !== 'scroll' || W.pageYOffset > 60) stop(); }, { passive: true, once: ev !== 'scroll' }));
  arm();
}

/* ---------- the visitor's shop: found on OpenStreetMap, typed, or the invented example ---------- */
function shopStore() {
  const fns = [];
  const str = (v, n) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, n);
  const num = (v, a, b) => (typeof v === 'number' && isFinite(v) && v >= a && v <= b ? v : null);
  const tidy = (j) => {
    const kind = KIND_CAT[j.kind] ? j.kind : 'other';
    const src = j.src === 'osm' || j.src === 'demo' ? j.src : 'typed';
    return { name: str(j.name, 70) || DEMO.name, kind, cat: str(j.cat, 40) || KIND_CAT[kind], city: str(j.city, 60), addr: str(j.addr, 90), hours: str(j.hours, 240), web: str(j.web, 120), osm: str(j.osm, 40), lat: num(j.lat, -90, 90), lon: num(j.lon, -180, 180), src };
  };
  let s = Object.assign({}, DEMO);
  try { const j = JSON.parse(localStorage.getItem('mk-shop') || 'null'); if (j && j.name && j.src !== 'demo') s = tidy(j); } catch (e) {}
  const host = (u) => String(u || '').replace(/^https?:\/\//i, '').replace(/^www\./i, '').replace(/[/?#].*$/, '');
  const week = () => parseHours(s.hours);
  const api = {
    get: () => s,
    set(next) { s = tidy(next); try { localStorage.setItem('mk-shop', JSON.stringify(s)); } catch (e) {} wa(); fns.forEach((f) => f(s)); },
    reset() { s = Object.assign({}, DEMO); try { localStorage.removeItem('mk-shop'); } catch (e) {} wa(); fns.forEach((f) => f(s)); },
    on: (f) => fns.push(f),
    week,
    status: () => { const w = week(); return w && s.src === 'osm' ? openNow(w) : null; },
    place: () => [s.addr, s.city].filter(Boolean).join(', '),
    host: () => host(s.web),
    handle: () => (s.src === 'demo' ? '@trattoriadaines' : '@' + (s.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'iltuonegozio')),
  };
  // every WhatsApp button says who is writing and what for; the owner sends it, nothing reaches me before
  function messages() {
    const hi = 'Ciao Maicol, ho visto il tuo sito.';
    const who = s.src === 'demo' ? 'il mio negozio' : s.name;
    let def = hi + ' Vorrei la prova gratis per il mio negozio.';
    if (s.src === 'osm' || s.src === 'typed') {
      const where = s.src === 'osm' ? api.place() : '';
      def = hi + ' Ti scrivo per ' + s.name + (where ? ', ' + where : '') + '.';
      def += s.src === 'osm' && s.web ? ' Abbiamo già un sito, ' + host(s.web) + '. Me lo controlli?' : ' Mi prepari la prova gratis?';
    }
    return {
      '': def, pick: def,
      sito: hi + ' Mi prepari la prova gratis del sito di una pagina per ' + who + '?',
      google: hi + ' Mi prepari la prova gratis della scheda Google per ' + who + '?',
      instagram: hi + ' Mi prepari un post di prova su Instagram per ' + who + '?',
      check: s.web ? hi + ' Ho già un sito, ' + host(s.web) + '. Me lo controlli?' : hi + ' Ho già un sito per ' + who + '. Me lo controlli?',
    };
  }
  function wa() {
    const m = messages();
    $$('[data-wa]').forEach((a) => { const k = a.getAttribute('data-wa') || ''; a.href = WA_BASE + encodeURIComponent(m[k] || m['']); });
    $$('[data-wa-text]').forEach((e) => { e.textContent = m['']; });
  }
  wa();
  return api;
}

/* ---------- the phone in "Sito": a small real site for the shop, built by the scroll ---------- */
function phoneUI(store) {
  const root = $('[data-scene=site]');
  const api = { pose() {}, measure() {}, fit() {}, press() {}, done() {} };
  if (!root) return api;
  const q = (c) => $(c, root);
  const site = q('.ph-site'), page = q('.ph-page'), bar = q('.ph-bar'), hero = q('.ph-hero'), img = q('.ph-img'), nameEl = q('.ph-name'), meta = q('.ph-meta'), brand = q('.ph-brand'),
    btn = q('.ph-btn'), cta = q('.ph-cta'), today = q('.ph-today'), ph = q('.ph'), shadow = q('.ph-shadow'), desc = $('.ph-desc', root.parentElement), scr = q('.ph-scr'), fab = q('.ph-fab');
  const heads = $$('.ph-h', root), cards = $$('.ph-cards figure', root), hoursP = q('.ph-hours'), whereH = q('.ph-h-where'), whereP = q('.ph-where'), hoursH = q('.ph-h-hours');
  const IMG = 'img/p/';
  const LOOK = {
    food: { hero: 't-hero.webp', h: 'Dalla nostra cucina', cards: [['t-ravioli.webp', 'Primi fatti a mano'], ['t-tiramisu.webp', 'Dolci della casa']] },
    hair: { hero: 's-piega.webp', h: 'Servizi', cards: [['s-colore.webp', 'Colore'], ['s-ricci.webp', 'Taglio e piega']] },
    bake: { hero: 'g-banco.webp', h: 'Sfornati oggi', cards: [['g-focaccia.webp', 'Focaccia'], ['g-croissant.webp', 'Cornetti']] },
    other: { hero: '', h: '', cards: [] },
  };
  const ctaText = (s) => {
    if (/estetic|unghie/i.test(s.cat)) return 'Prenota un trattamento';
    if (s.kind === 'food') return 'Prenota un tavolo';
    if (s.kind === 'hair') return 'Prenota il tuo turno';
    if (s.kind === 'bake') return /^(Bar|Caffè)/.test(s.cat) ? 'Guarda il menù' : /Pasticceria/.test(s.cat) ? 'Ordina una torta' : 'Ordina per domani';
    if (/Barbiere/.test(s.cat)) return 'Prenota il tuo turno';
    return s.src === 'osm' ? 'Come arrivare' : 'Scrivici su WhatsApp';
  };
  let chars = [], maxScroll = 0, pp = -1, kick = { x: 0, v: 0, on: false }, scrolled = 0, demoDone = false, heroH = 0, barH = 0;
  function render(s) {
    const look = LOOK[s.kind] || LOOK.other;
    site.className = 'ph-site k-' + s.kind;
    // letters in spans for the build-up; each word stays whole, the words wrap between them
    nameEl.innerHTML = s.name.split(' ').filter(Boolean).map((w) => '<span class="wd">' + Array.from(w).map((ch) => '<span class="c">' + esc(ch) + '</span>').join('') + '</span>').join(' ');
    chars = $$('.c', nameEl);
    brand.textContent = s.name;
    meta.textContent = s.city ? s.cat + ' a ' + s.city : s.cat;
    btn.textContent = ctaText(s);
    if (look.hero && img.getAttribute('src') !== IMG + look.hero) img.src = IMG + look.hero;
    heads[0].textContent = look.h || '';
    if (s.kind === 'bake' && /^(Bar|Caffè)/.test(s.cat)) heads[0].textContent = 'Dal nostro banco';
    if (/estetic|unghie/i.test(s.cat)) heads[0].textContent = 'Trattamenti';
    cards.forEach((f, i) => { const c = look.cards[i]; if (!c) return; const im = $('img', f); if (im.getAttribute('src') !== IMG + c[0]) im.src = IMG + c[0]; $('figcaption', f).textContent = c[1]; });
    // today: the live state for a real shop with hours; the example only says when it is open
    const w = store.week(), st = store.status(), span = $('span', today);
    today.hidden = false; today.classList.remove('is-open', 'is-closed', 'is-todo');
    if (s.src === 'demo') span.textContent = 'Pranzo e cena, da martedì a domenica';
    else if (st) { span.textContent = statusText(st); today.classList.add(st.open ? 'is-open' : 'is-closed'); }
    else if (s.src === 'osm') { span.textContent = 'Orari da aggiungere'; today.classList.add('is-todo'); }
    else today.hidden = true;
    const ht = w ? hoursText(w) : '';
    // what is missing stays visibly empty, never invented
    hoursH.hidden = hoursP.hidden = false;
    hoursP.textContent = ht || 'Qui vanno i tuoi orari.';
    hoursP.classList.toggle('is-todo', !ht);
    const place = store.place();
    whereH.hidden = whereP.hidden = s.src === 'demo';
    whereP.textContent = place || 'Qui va il tuo indirizzo.';
    whereP.classList.toggle('is-todo', !place);
    if (desc) desc.textContent = s.src === 'demo' ? 'Anteprima del sito di Trattoria da Ines, un locale inventato, sul telefono.' : 'Anteprima del sito di ' + s.name + ' sul telefono.';
    fit();
    measure();
  }
  // the name must fit the photo: whole words, smaller type if needed; only a single very long word may break
  function fit() {
    nameEl.style.removeProperty('--s-z'); nameEl.classList.remove('is-tight');
    const box = nameEl.clientWidth;
    if (!box) return;
    let z = parseFloat(getComputedStyle(site).getPropertyValue('--s-z')) || 15;
    const words = $$('.wd', nameEl);
    const lh = () => parseFloat(getComputedStyle(nameEl).lineHeight) || 1;
    const bad = () => words.some((w) => w.offsetWidth > box + 0.5) || nameEl.offsetHeight > lh() * 3.3;
    let n = 0;
    while (bad() && z > 8 && n++ < 40) { z -= 0.5; nameEl.style.setProperty('--s-z', z + 'cqw'); }
    if (words.some((w) => w.offsetWidth > box + 0.5)) nameEl.classList.add('is-tight');
  }
  function measure() { maxScroll = Math.max(0, page.scrollHeight - scr.clientHeight); heroH = hero.offsetHeight; barH = bar.offsetHeight; if (pp >= 0) { const p = pp; pp = -1; api.pose(p); } }
  api.pose = (p) => {
    pp = p;
    const a = eOut(seg(p, 0.04, 0.34)), k = kick.x;
    ph.style.transform = 'translateY(' + (lerp(7, 0, a) + k * 0.6).toFixed(2) + '%) rotateX(' + (lerp(16, 0, a) + k * 2.5).toFixed(2) + 'deg) scale(' + lerp(0.93, 1, a).toFixed(4) + ')';
    shadow.style.opacity = (0.3 + 0.7 * a).toFixed(3);
    // the screen wakes up: photo, then the name letter by letter, then the rest
    const boot = eOut(seg(p, 0.1, 0.3));
    site.style.opacity = (0.15 + 0.85 * boot).toFixed(3);
    img.style.transform = 'scale(' + lerp(1.3, 1, boot).toFixed(4) + ')';
    const nm = seg(p, 0.15, 0.33), n = Math.max(1, chars.length);
    chars.forEach((c, i) => { const t = eOut(clamp((nm - (i / n) * 0.55) / 0.45)); c.style.transform = t >= 1 ? '' : 'translateY(' + ((1 - t) * 70).toFixed(1) + '%)'; c.style.opacity = t >= 1 ? '' : t.toFixed(3); });
    const mt = eOut(seg(p, 0.27, 0.37));
    meta.style.opacity = mt.toFixed(3); meta.style.transform = 'translateY(' + ((1 - mt) * 40).toFixed(1) + '%)';
    bar.style.opacity = mt.toFixed(3);
    const bt = eBack(seg(p, 0.31, 0.41));
    cta.style.opacity = clamp(bt).toFixed(3); btn.style.transform = 'scale(' + lerp(0.6, 1, bt).toFixed(4) + ')';
    const td = eOut(seg(p, 0.36, 0.46));
    today.style.opacity = td.toFixed(3); today.style.transform = 'translateX(' + ((1 - td) * -24).toFixed(1) + '%)';
    page.style.transform = 'translateY(' + (-scrolled * maxScroll).toFixed(1) + 'px)';
    bar.classList.toggle('is-solid', scrolled * maxScroll > heroH - barH - 4);
  };
  // the dot presses the call button: the phone gives a little, then its page scrolls once to show the rest
  api.press = () => {
    kick.x = 1; kick.v = 0;
    if (!kick.on) {
      kick.on = true;
      const off = onFrame((now, dt) => {
        const n = 3, h = dt / n;
        for (let i = 0; i < n; i++) { const acc = -400 * kick.x - 20 * kick.v; kick.v += acc * h; kick.x += kick.v * h; }
        if (pp >= 0) { const p = pp; api.pose(p); }
        if (Math.abs(kick.x) < 0.002 && Math.abs(kick.v) < 0.02) { kick.x = 0; kick.on = false; if (pp >= 0) api.pose(pp); off(); return false; }
        return true;
      });
    }
    if (!demoDone && maxScroll > 0) {
      demoDone = true;
      setTimeout(() => tween(2.4, (e) => { scrolled = e; if (pp >= 0) api.pose(pp); }, eIO), 380);
    }
  };
  api.done = () => { if (fab) fab.classList.add('is-done'); };
  api.measure = measure;
  api.fit = fit;
  render(store.get());
  store.on((s) => render(s));
  return api;
}

/* ---------- the map in "Google": the illustrated example, or the real streets around the shop ---------- */
function mapUI(store) {
  const root = $('[data-scene=map]');
  const api = { pose() {}, measure() {}, land() {}, leave() {} };
  if (!root) return api;
  const box = $('.map', root), plane = $('.map-plane', root), tiles = $('.map-tiles', root), at = $('.map-at', root), pin = $('.map-pin', root), rings = $('.map-rings', root);
  const card = $('.map-card', root), credit = $('.map-credit', root);
  const nameEl = $('.mc-name', card), metaEl = $('.mc-meta', card), hoursEl = $('.mc-hours', card);
  const M = { w: 1, h: 1, pl: 0, pt: 0, pw: 1, ph: 1, ax: 0.58, ay: 0.52 };
  let tilt = 14, pp = -1, real = null;
  api.measure = () => {
    M.w = box.clientWidth || 1; M.h = box.clientHeight || 1; M.pl = plane.offsetLeft; M.pt = plane.offsetTop; M.pw = plane.offsetWidth || 1; M.ph = plane.offsetHeight || 1;
    if (real) placeTiles();
    place();
  };
  // where the shop's point lands on screen once the plane is tilted: rotateX around its bottom edge, then perspective
  function place() {
    const d = 1100, a = (tilt * Math.PI) / 180;
    const X = M.ax * M.pw - M.pw / 2, Y = M.ay * M.ph - M.ph;
    const ox = M.pl + M.pw / 2, oy = M.pt + M.ph;
    const x = ox + X, y = oy + Y * Math.cos(a), z = Y * Math.sin(a);
    const f = d / (d - z), cx = M.w / 2, cy = M.h / 2;
    const px = cx + (x - cx) * f, py = cy + (y - cy) * f;
    const tf = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px)';
    pin.style.transform = tf; rings.style.transform = tf + ' scaleY(' + Math.cos(a).toFixed(3) + ')';
  }
  api.pose = (p) => {
    pp = p;
    tilt = lerp(46, 14, eOut(seg(p, 0.06, 0.46)));
    plane.style.transform = 'rotateX(' + tilt.toFixed(2) + 'deg)';
    const c = eOut(seg(p, 0.3, 0.52));
    card.style.opacity = c.toFixed(3); card.style.transform = c >= 1 ? '' : 'translateY(' + ((1 - c) * 36).toFixed(1) + 'px)';
    place();
  };
  api.land = () => {
    pin.classList.add('is-up');
    rings.classList.remove('ping'); void rings.offsetWidth; rings.classList.add('ping');
  };
  api.leave = () => pin.classList.add('is-done');
  function render(s) {
    nameEl.textContent = s.name;
    metaEl.textContent = s.cat + (s.addr || s.city ? ' · ' + (s.addr || s.city) : '');
    const w = parseHours(s.hours), ht = w && s.src !== 'typed' ? hoursText(w) : '';
    $('span', hoursEl).textContent = ht || 'Orari da aggiungere';
    hoursEl.classList.toggle('is-todo', !ht);
    if (s.src === 'osm' && s.lat != null && s.lon != null) { real = { lat: s.lat, lon: s.lon }; placeTiles(true); }
    else { real = null; tiles.innerHTML = ''; box.classList.remove('is-real'); credit.hidden = true; M.ax = 0.58; M.ay = 0.52; at.style.left = '58%'; at.style.top = '52%'; place(); }
  }
  // OpenStreetMap tiles at zoom 17 around the shop, loaded once when it is chosen (no prefetch); grey and tinted by CSS
  function placeTiles(fresh) {
    const z = 17, n = Math.pow(2, z), lr = (real.lat * Math.PI) / 180;
    const X = ((real.lon + 180) / 360) * n * 256, Y = ((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n * 256;
    M.ax = 0.5; M.ay = 0.56; at.style.left = '50%'; at.style.top = '56%';
    const ax = M.ax * M.pw, ay = M.ay * M.ph;
    const x0 = Math.floor((X - ax) / 256), x1 = Math.floor((X - ax + M.pw) / 256), y0 = Math.floor((Y - ay) / 256), y1 = Math.floor((Y - ay + M.ph) / 256);
    const want = [];
    for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) want.push([tx, ty]);
    if (fresh) { tiles.innerHTML = ''; box.classList.remove('is-real'); }
    const have = new Map($$('img', tiles).map((im) => [im.dataset.k, im]));
    let pending = 0, failed = false;
    want.slice(0, 20).forEach(([tx, ty]) => {
      const k = tx + '/' + ty;
      let im = have.get(k);
      if (!im) {
        im = new Image(); im.alt = ''; im.decoding = 'async'; im.dataset.k = k; pending++;
        im.onload = () => { if (--pending <= 0 && !failed) { box.classList.add('is-real'); credit.hidden = false; } };
        im.onerror = () => { failed = true; box.classList.remove('is-real'); credit.hidden = true; };
        im.src = 'https://tile.openstreetmap.org/' + z + '/' + (((tx % n) + n) % n) + '/' + ty + '.png';
        tiles.appendChild(im);
      }
      im.style.left = (tx * 256 - X + ax).toFixed(1) + 'px'; im.style.top = (ty * 256 - Y + ay).toFixed(1) + 'px';
    });
    place();
  }
  api.measure();
  render(store.get());
  store.on(render);
  return api;
}

/* ---------- Instagram: the grid for the shop's look; the dot hops tile to tile and each one flips ---------- */
function gridUI(store) {
  const root = $('[data-scene=grid]');
  const api = { box: null, k: () => 9, target: () => ({}), finish() {} };
  if (!root) return api;
  const ig = $('.ig', root), list = $('.ig-grid', root), av = $('.ig-av-in', root), handle = $('.ig-handle', root), name = $('.ig-name', root), badge = $('.slot-badge', root);
  const ORDER = [0, 1, 2, 5, 4, 3, 6, 7, 8];
  let k = 0, timer = 0, tiles = $$('.tl', list), shown = '';
  api.box = list;
  api.k = () => k;
  const tileW = () => (tiles[0] ? tiles[0].offsetWidth : 120);
  api.target = () => {
    if (k >= 9) return { el: badge, press: true, ring: true, onLand: () => ig.classList.add('is-ringed') };
    const t = tiles[ORDER[k]];
    return {
      el: $('.tl-in', t), handoff: false, noReb: true, r: () => clamp(tileW() * 0.12, 7, 15), H: Math.max(22, tileW() * 0.4),
      onLand: () => { t.classList.add('is-on'); clearTimeout(timer); timer = setTimeout(() => { k = Math.min(9, k + 1); wake(); }, 110); },
    };
  };
  // the visitor scrolled on before the end: the rest flip by themselves
  api.finish = (now) => {
    if (k >= 9 && list.classList.contains('is-done')) return;
    clearTimeout(timer);
    const rest = ORDER.slice(k).filter((i) => i < 9);
    k = 9;
    if (now === true) { list.classList.add('is-done'); ig.classList.add('is-ringed'); return; }
    rest.forEach((i, j) => setTimeout(() => tiles[i] && tiles[i].classList.add('is-on'), 70 * j));
    setTimeout(() => ig.classList.add('is-ringed'), 70 * rest.length + 100);
  };
  function render(s) {
    const key = s.kind + '|' + s.name + '|' + s.hours + '|' + s.addr + '|' + s.city + '|' + s.src;
    handle.textContent = store.handle();
    name.textContent = s.name;
    if (key === shown) return;
    const first = !shown;
    shown = key;
    if (first && s.src === 'demo') { tiles = $$('.tl', list); return; } // the HTML already has the example's grid
    list.innerHTML = gridHTML(s);
    av.innerHTML = avatarHTML(s);
    tiles = $$('.tl', list);
    if (k >= 9) tiles.forEach((t) => t.classList.add('is-on'));
  }
  render(store.get());
  store.on(render);
  return api;
}

/* ---------- "Come funziona": the yellow line through the numbers, drawn by the scroll ---------- */
function howLine() {
  const track = $('.steps-track'), svg = $('.steps-line'), path = svg && $('path', svg), ns = $$('.steps-list .n');
  const api = { pose() {}, measure() {}, k: () => -1, el: () => null };
  if (!track || !path || !ns.length) return api;
  let len = 1, stops = [], t = -1, k = -1;
  api.measure = () => {
    const tr = track.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + Math.round(tr.width) + ' ' + Math.round(tr.height));
    const pts = ns.map((n) => { const r = n.getBoundingClientRect(); return [r.left - tr.left + r.width / 2, r.top - tr.top + r.height / 2]; });
    const flat = pts.length > 1 && Math.abs(pts[0][1] - pts[1][1]) < 4, gap = 40;
    const first = pts[0], lastP = pts[pts.length - 1];
    pts.unshift(flat ? [first[0] - gap, first[1]] : [first[0], first[1] - gap]);
    pts.push(flat ? [lastP[0] + gap, lastP[1]] : [lastP[0], lastP[1] + gap]);
    let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (let i = 1; i < pts.length; i++) d += ' L' + pts[i][0].toFixed(1) + ' ' + pts[i][1].toFixed(1);
    path.setAttribute('d', d);
    len = path.getTotalLength() || 1;
    path.style.strokeDasharray = len + ' ' + len;
    // where each number sits along the line (straight segments: the distance travelled)
    let acc = 0; const at = [0];
    for (let i = 1; i < pts.length; i++) { acc += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); at.push(acc); }
    stops = at.slice(1, -1).map((v) => v / (acc || 1));
    const tt = t; t = -1; if (tt >= 0) set(tt);
  };
  function set(v) {
    v = clamp(v);
    if (Math.abs(v - t) < 1e-4) return;
    t = v;
    path.style.strokeDashoffset = String(len * (1 - t));
    let kk = -1; stops.forEach((s, i) => { if (t >= s - 0.005) kk = i; });
    if (kk !== k) { k = kk; ns.forEach((n, i) => n.classList.toggle('is-done', i < k)); wake(); }
  }
  // drawn while the track goes from 72% to 40% of the screen
  api.pose = (p, sc) => {
    let top, hh;
    if (sc) { top = sc.top - V.sy; hh = sc.h; } else { const tr = track.getBoundingClientRect(); top = tr.top; hh = tr.height; }
    set((V.vh * 0.72 - top) / (hh + V.vh * 0.32));
  };
  api.k = () => k;
  api.el = () => ns[k] || null;
  api.measure();
  return api;
}

/* ---------- "Cerca il tuo negozio": the search, the results, the circle; it tells the dot where to be ---------- */
function finder(store) {
  const box = $('.find');
  const A = { key: 'hero', el: null, pt: null, follow: false, onLand: null, r: null, H: null };
  const api = { anchor: () => A, busy: () => false, canIdle: () => false, idleTo() {} };
  if (!box) { W.mkReady = true; return api; }
  const form = $('.find-form', box), input = $('#q'), msg = $('.find-msg', box), list = $('.find-list', box), alt = $('.find-alt', box), pick = $('.find-pick', box);
  const nm = $('#nm', box), use = $('.find-use', alt), again = $('.find-again', box), lens = $('.slot-lens', box), pickH = $('.find-pick-h', pick);
  const cr = $('.find-cr', box);
  let ctl = null, results = [], rows = [], state = 'idle', on = -1, token = 0, focusIn = false, lastQ = '';
  form.noValidate = true;
  const say = (t) => { msg.textContent = t; };
  const set = (key, o) => { Object.assign(A, { key, el: null, pt: null, follow: false, onLand: null, r: null, H: null }, o || {}); wake(); };
  const toLens = () => set('lens', { el: lens });
  api.busy = () => state !== 'idle' || focusIn;
  api.canIdle = () => state === 'idle' && !focusIn && !input.value.trim();
  api.idleTo = (k) => { if (k === 'lens') toLens(); else set('hero'); };
  const norm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const cut = (t, n) => { t = String(t || ''); if (t.length <= n) return t; const c = t.slice(0, n + 1).replace(/\s+\S*$/, ''); return (c.length > n * 0.6 ? c : t.slice(0, n)).replace(/[\s,.;:–-]+$/, '') + '…'; };

  input.addEventListener('focus', () => { focusIn = true; if (state === 'idle') toLens(); });
  input.addEventListener('blur', () => {
    focusIn = false;
    setTimeout(() => { if (state === 'idle' && D.activeElement !== input && !input.value.trim()) set('hero'); }, 900);
  });
  // the block grows under the search: scroll just enough to show the new part
  const reveal = (el) => requestAnimationFrame(() => {
    if (!el) return;
    const r = el.getBoundingClientRect(), vh = W.innerHeight, d = Math.min(r.bottom - vh + 96, r.top - V.nav - 20);
    if (r.bottom <= vh - 20 || d <= 0) return;
    if (lenis) lenis.scrollTo(lenis.scroll + d, { duration: reduced ? 0 : 0.9 });
    else W.scrollBy({ top: d, behavior: reduced ? 'auto' : 'smooth' });
  });
  function clear() {
    results = []; rows = []; on = -1;
    list.innerHTML = ''; list.classList.remove('is-picked');
    alt.hidden = true; pick.hidden = true; if (cr) cr.hidden = true; say('');
  }
  function setOn(i) {
    if (state !== 'results' || i === on || !rows[i]) return;
    rows.forEach((r, j) => r.classList.toggle('is-on', j === i));
    on = i;
    const mk = $('.find-mk', rows[i]);
    set('row' + i, { el: mk, r: () => 7.5 });
  }
  function placeLine(r) {
    const street = r.street ? r.street + (r.num ? ' ' + r.num : '') : '';
    if (street && r.city) return r.cat + ' in ' + street + ', ' + r.city;
    return r.city ? r.cat + ' a ' + r.city : r.cat;
  }
  function renderRows(res) {
    const none = '<li><button type="button" class="find-row is-none" data-i="none"><span class="find-mk" aria-hidden="true"></span><span class="find-nm">Non è nessuno di questi</span><span class="find-meta">Continua con il nome che ho scritto</span></button></li>';
    list.innerHTML = res.map((r, i) => '<li><button type="button" class="find-row" data-i="' + i + '"><span class="find-mk" aria-hidden="true"></span><span class="find-nm">' + esc(cut(r.name, 44)) + '</span><span class="find-meta">' + esc(placeLine(r)) + '</span></button></li>').join('') + none;
    rows = $$('.find-row', list).filter((b) => b.dataset.i !== 'none');
    rows.forEach((row, i) => {
      row.addEventListener('click', () => choose(i));
      row.addEventListener('focus', () => setOn(i));
      if (fine) row.addEventListener('pointerenter', () => setOn(i));
    });
    const nb = $('.is-none', list);
    nb.addEventListener('click', () => showAlt('Allora scrivi il nome giusto e dimmi che negozio è.', true));
    if (cr) cr.hidden = false;
    if (live) $$('li', list).forEach((li, i) => li.animate && li.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 60 * i, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
  }
  // the name from the search box, without the town after a comma; the kind guessed from the words, never pre-chosen otherwise
  function showAlt(text, focusName) {
    state = 'alt';
    list.innerHTML = ''; rows = []; if (cr) cr.hidden = true;
    if (text) say(text);
    const q = input.value.trim();
    nm.value = q.split(',')[0].trim().slice(0, 70);
    const n = norm(q);
    const guess = /parrucch|barbier|acconciat|salone/.test(n) ? 'hair' : /pizzer|trattor|osteria|ristor|taverna/.test(n) ? 'food' : /forno|panific|pasticc|panett/.test(n) ? 'bake' : /\bbar\b|caff/.test(n) ? 'bar' : '';
    $$('input[name=kind]', alt).forEach((r) => { r.checked = r.value === guess; });
    alt.hidden = false;
    set('lens', { el: lens });
    reveal(alt);
    if (focusName) nm.focus({ preventScroll: true });
  }
  async function search(q) {
    if (ctl) ctl.abort();
    const my = ++token, c = new AbortController(); ctl = c;
    lastQ = q;
    clear(); state = 'busy';
    form.classList.add('is-busy'); say('Cerco sulla mappa…');
    toLens();
    if (!fine) input.blur();
    let res = null, err = false;
    const timer = setTimeout(() => c.abort(), 6000);
    try { [res] = await Promise.all([findShops(q, c.signal), new Promise((r) => setTimeout(r, live ? 600 : 0))]); }
    catch (er) { err = true; }
    clearTimeout(timer);
    if (my !== token) return;
    form.classList.remove('is-busy');
    if (err || !res || !res.length) {
      showAlt(err ? 'La mappa adesso non risponde.' : 'Su OpenStreetMap non lo trovo. Prova a scriverlo in un altro modo, oppure continua con il nome.');
      if (err) {
        const b = D.createElement('button'); b.type = 'button'; b.className = 'find-retry'; b.textContent = 'Riprova';
        b.addEventListener('click', () => search(lastQ));
        msg.append(' ', b, ' oppure continua con il nome.');
      }
      return;
    }
    // shops in the town the visitor typed come first
    const qn = norm(q);
    results = res.map((r, i) => ({ r, i, hit: r.city && qn.includes(norm(r.city)) ? 1 : 0 })).sort((a, b) => b.hit - a.hit || a.i - b.i).map((x) => x.r);
    say(results.length === 1 ? 'Ho trovato questo. È il tuo?' : 'Ho trovato questi. Qual è il tuo?');
    state = 'results'; on = -1;
    renderRows(results);
    setOn(0);
    reveal(list);
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (q.length < 3) { say('Scrivi il nome del negozio e, se puoi, anche la città.'); input.focus(); return; }
    search(q);
  });
  use.addEventListener('click', () => {
    const name = nm.value.replace(/\s+/g, ' ').trim().slice(0, 70);
    if (name.length < 2) { nm.focus(); return; }
    const ch = CHIP[($('input[name=kind]:checked', alt) || {}).value] || CHIP.other;
    store.set({ name, kind: ch[0], cat: ch[1], src: 'typed' });
    state = 'picked';
    alt.hidden = true;
    say('Fatto.'); // the panel below says what changed
    set('hero');
    showPick(store.get(), true);
  });
  async function choose(i) {
    const r = results[i], row = rows[i];
    if (!r || state === 'picked') return;
    state = 'picked'; on = i;
    rows.forEach((x, j) => { x.classList.toggle('is-on', j === i); x.classList.toggle('is-picked', j === i); });
    list.classList.add('is-picked');
    say('Eccolo.');
    const base = { name: r.name, kind: r.kind, cat: r.cat, city: r.city, addr: r.street ? r.street + (r.num ? ' ' + r.num : '') : '', hours: '', web: '', osm: { N: 'node', W: 'way', R: 'relation' }[r.id[0]] + '/' + r.id.slice(1), lat: r.lat, lon: r.lon, src: 'osm' };
    store.set(base);
    showPick(store.get(), true, true);
    row.disabled = true;
    const drawn = circle(row);
    // the details (hours, website) arrive later; after 2.5 seconds we go on without them
    const dc = new AbortController(), my = token;
    const tm = setTimeout(() => dc.abort(), 2500);
    let det = null;
    try { det = await shopDetails(r.id, dc.signal); } catch (e) { det = null; }
    clearTimeout(tm);
    if (my !== token) return;
    if (det) {
      store.set(Object.assign({}, base, {
        kind: kindOf(r.value, det), cat: catOf(r.value, det), city: det.city || r.city,
        addr: det.street ? det.street + (det.num ? ' ' + det.num : '') : base.addr, hours: det.hours || '', web: det.web || '',
      }));
    }
    await drawn;
    showPick(store.get(), false);
  }
  function showPick(s, fresh, pending) {
    const typed = s.src === 'typed', st = typed ? null : store.status(), w = typed ? null : store.week();
    const stEl = $('.find-st', pick);
    stEl.hidden = !st;
    if (st) { $('span', stEl).textContent = statusText(st); stEl.classList.toggle('is-closed', !st.open); }
    $('.find-hours', pick).textContent = typed ? 'Anteprime fatte con il nome che hai scritto.' : pending ? 'Cerco gli orari…' : w ? 'Orari su OpenStreetMap: ' + hoursText(w) + '.' : 'Su OpenStreetMap i tuoi orari non ci sono. Sul sito e su Google li metto io.';
    const web = $('.find-web', pick), host = store.host();
    if (!typed && host) web.innerHTML = 'Hai già un sito, <b>' + esc(host) + '</b>. Te lo controllo e lo correggo in 48 ore per 79 €, e paghi dopo.';
    else web.textContent = pending ? '' : 'Il sito te lo faccio come l\'anteprima qui sotto, a 390 €.';
    $('[data-wa=pick] span', pick).textContent = !typed && host ? 'Chiedi il controllo del sito' : 'Chiedi la prova gratis';
    pickH.textContent = typed ? 'Le anteprime qui sotto adesso hanno il nome «' + s.name + '».' : 'Hai scelto ' + s.name + '. Le anteprime qui sotto adesso hanno il suo nome.';
    pick.hidden = false;
    if (fresh) {
      if (live && pick.animate) pick.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.16,1,.3,1)' });
      pickH.focus({ preventScroll: true });
      reveal(pick);
    }
  }
  again.addEventListener('click', () => {
    token++; if (ctl) ctl.abort();
    clear(); state = 'idle'; form.classList.remove('is-busy');
    store.reset();
    input.focus(); input.select();
    toLens();
  });
  /* a hand-drawn loop around the name; the dot is the pen */
  function circle(row, instant) {
    const nmEl = $('.find-nm', row);
    const NS = 'http://www.w3.org/2000/svg';
    const svg = D.createElementNS(NS, 'svg'); svg.setAttribute('class', 'find-circle'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('preserveAspectRatio', 'none');
    const path = D.createElementNS(NS, 'path'); svg.appendChild(path); nmEl.appendChild(svg);
    const nb = nmEl.getBoundingClientRect(), room = Math.min(nb.left, W.innerWidth - nb.right) - 6;
    const ax = Math.min((nb.width / 2) * 1.12 + 10, nb.width / 2 + Math.max(10, room)), ay = (nb.height / 2) * 1.25 + 8;
    const w = ax * 2 + 10, h = ay * 2 + 10;
    Object.assign(svg.style, { left: ((nb.width - w) / 2).toFixed(1) + 'px', top: ((nb.height - h) / 2).toFixed(1) + 'px', width: w.toFixed(1) + 'px', height: h.toFixed(1) + 'px' });
    svg.setAttribute('viewBox', '0 0 ' + w.toFixed(1) + ' ' + h.toFixed(1));
    // an irregular loop, like a quick pen stroke: radius noise of a few per cent, and it overshoots its start
    const cx = w / 2, cy = h / 2, a0 = -2.5, sweep = Math.PI * 2 + 0.5, N = 110;
    const se = (v) => Math.sign(v) * Math.pow(Math.abs(v), 0.62);
    let d = '';
    for (let i = 0; i <= N; i++) {
      const u = i / N, ang = a0 + sweep * u;
      const f = 1 + 0.035 * Math.sin(u * Math.PI * 3 + 0.8) + 0.02 * Math.sin(u * Math.PI * 7 + 2.1) + u * 0.05;
      const x = cx + se(Math.cos(ang)) * ax * f, y = cy + se(Math.sin(ang)) * ay * f + Math.cos(ang) * 1.5;
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    path.setAttribute('d', d); path.setAttribute('vector-effect', 'non-scaling-stroke');
    const len = path.getTotalLength();
    path.style.strokeDasharray = len + ' ' + len;
    const pen = { t: 0 };
    const tip = (tt) => () => { const q = path.getPointAtLength(len * (tt == null ? pen.t : tt)), r = svg.getBoundingClientRect(); return { x: r.left + q.x * (r.width / w) + W.pageXOffset, y: r.top + q.y * (r.height / h) + W.pageYOffset, r: 6.5 }; };
    if (!live || instant) { path.style.strokeDashoffset = '0'; pen.t = 1; set('end', { pt: tip(1) }); return Promise.resolve(); }
    path.style.strokeDashoffset = String(len);
    return new Promise((res) => {
      set('pen', {
        pt: tip(), follow: true, H: 40,
        onLand: () => tween(1.0, (e) => { pen.t = e; path.style.strokeDashoffset = String(len * (1 - e)); }, (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2), () => { set('end', { pt: tip(1), H: 26 }); res(); }),
      });
      // if the dot is somewhere else (the visitor scrolled), the pen draws by itself
      setTimeout(() => { if (pen.t === 0 && A.key === 'pen' && !dot) { path.style.strokeDashoffset = '0'; res(); } }, 1500);
      if (!dot) { path.style.strokeDashoffset = '0'; set('end', { pt: tip(1) }); res(); }
    });
  }
  /* back from an earlier visit: show the shop already chosen */
  const s0 = store.get();
  if (s0.src === 'osm') {
    input.value = s0.name + (s0.city ? ', ' + s0.city : '');
    results = [{ name: s0.name, cat: s0.cat, street: s0.addr, num: '', city: s0.city }];
    state = 'results';
    renderRows(results);
    $$('.find-row', list).forEach((r) => { r.classList.add('is-picked', 'is-on'); r.disabled = true; });
    list.classList.add('is-picked');
    state = 'picked';
    const draw = () => { const r0 = $('.find-row.is-picked', list); if (r0 && !$('.find-circle', r0)) circle(r0, true); };
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(draw); else draw();
    say('L\'ultima volta hai scelto questo.');
    showPick(s0, false);
  } else if (s0.src === 'typed') {
    input.value = s0.name; state = 'picked';
    say('Le anteprime qui sotto hanno il nome «' + s0.name + '».');
    showPick(s0, false);
  }
  // a search sent before this file arrived
  W.mkReady = true;
  if (typeof W.mkQ === 'string' && W.mkQ.trim().length > 2 && state === 'idle') { input.value = W.mkQ; search(W.mkQ.trim()); }
  return api;
}

/* ---------- examples: three before-and-after pairs, one line to drag ---------- */
function examples() {
  const box = $('.ba'), inp = box && $('.ba-in', box);
  if (!box || !inp) return;
  const tb = $('.ba-tag-b', box), ta = $('.ba-tag-a', box), ib = $('.ba-b', box), ia = $('.ba-a', box), cap = $('.ex-cap'), tabs = $$('.ex-tab');
  const EX = {
    sito: { b: 'img/ba-sito-prima.webp', a: 'img/ba-sito-dopo.webp', cap: 'Trattoria da Ines: il sito sul telefono, prima e dopo.', ab: ib.alt, aa: ia.alt },
    google: { b: 'img/ba-google-prima.webp', a: 'img/ba-google-dopo.webp', cap: 'Forno Rubatà: la scheda Google, prima e dopo.',
      ab: 'Prima: la scheda Google di Forno Rubatà. Orari mancanti, una sola foto fatta da un cliente, categoria sbagliata e nessun numero da chiamare.',
      aa: 'Dopo: la scheda Google di Forno Rubatà sistemata. Categoria giusta, aperto fino alle 19:30, foto del pane e i tasti Chiama, WhatsApp e Indicazioni.' },
    ig: { b: 'img/ba-ig-prima.webp', a: 'img/ba-ig-dopo.webp', cap: 'Nora Parrucchieri: il profilo Instagram, prima e dopo.',
      ab: 'Prima: il profilo Instagram di Nora Parrucchieri. Post tutti diversi, avvisi scritti in fretta, foto sfocate e una descrizione senza orari né indirizzo.',
      aa: 'Dopo: il profilo Instagram di Nora Parrucchieri. Post con lo stesso stile, foto dei lavori e listino, orari e indirizzo nella descrizione e un tasto per prenotare.' },
  };
  let hint = null;
  // the line sits exactly where the finger or mouse is, from 0 to 100 per cent; the range input stays for keyboard and screen readers
  const setV = (v) => {
    v = Math.max(0, Math.min(100, v));
    box.style.setProperty('--x', v.toFixed(2) + '%');
    tb.style.opacity = v < 14 ? '0' : '1'; ta.style.opacity = v > 86 ? '0' : '1';
    inp.setAttribute('aria-valuetext', 'Prima ' + Math.round(v) + ' per cento, dopo ' + (100 - Math.round(v)) + ' per cento');
  };
  const stop = () => { if (hint) { hint.kill(); hint = null; } };
  const atX = (x) => { const r = box.getBoundingClientRect(); const v = ((x - r.left - box.clientLeft) / (box.clientWidth || 1)) * 100; inp.value = Math.round(Math.max(0, Math.min(100, v))); setV(v); };
  let drag = null;
  box.addEventListener('pointerdown', (e) => {
    if (e.button > 0) return;
    stop();
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, on: e.pointerType === 'mouse' };
    if (drag.on) { e.preventDefault(); atX(e.clientX); inp.focus({ preventScroll: true }); try { box.setPointerCapture(e.pointerId); } catch (_) {} }
  });
  box.addEventListener('pointermove', (e) => {
    if (!drag || drag.id !== e.pointerId) return;
    if (!drag.on) {
      const dx = Math.abs(e.clientX - drag.x), dy = Math.abs(e.clientY - drag.y);
      if (dx < 6 || dx < dy) return;
      drag.on = true;
      try { box.setPointerCapture(e.pointerId); } catch (_) {}
    }
    atX(e.clientX);
  });
  const end = (e) => {
    if (!drag || drag.id !== e.pointerId) return;
    if (e.type === 'pointerup' && !drag.on && Math.abs(e.clientX - drag.x) < 6 && Math.abs(e.clientY - drag.y) < 6) atX(e.clientX);
    drag = null;
  };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', (e) => { if (drag && drag.id === e.pointerId) drag = null; });
  inp.addEventListener('input', () => { stop(); setV(+inp.value); });
  setV(+inp.value);
  function show(id, focus) {
    const ex = EX[id];
    if (!ex) return;
    tabs.forEach((t) => { const on = t.dataset.ex === id; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
    box.setAttribute('aria-labelledby', 't-' + id);
    if (ib.getAttribute('src') === ex.b) return;
    box.classList.add('is-swap');
    setTimeout(() => {
      ib.src = ex.b; ia.src = ex.a; ib.alt = ex.ab; ia.alt = ex.aa; cap.textContent = ex.cap;
      const done = () => box.classList.remove('is-swap');
      if (ia.decode) ia.decode().then(done, done); else done();
    }, live ? 160 : 0);
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t.dataset.ex));
    t.addEventListener('keydown', (e) => {
      const n = tabs.length, j = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
      if (j < 0) return;
      e.preventDefault(); show(tabs[j].dataset.ex, true);
    });
  });
  // once, the first time it is well in view: the line sweeps to show both sides, then rests in the middle
  if (live && 'IntersectionObserver' in W) {
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const from = +inp.value, keys = [[from, 80, 0.8], [80, 22, 1.1], [22, 50, 0.9]];
      const run = (i) => { if (i >= keys.length) { inp.value = '50'; hint = null; return; } const [a, b, d] = keys[i]; hint = tween(d, (e) => setV(lerp(a, b, e)), i === 2 ? eOut : (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2), () => run(i + 1)); };
      setTimeout(() => run(0), 300);
    }, { threshold: 0.55 });
    io.observe(box);
  }
}

/* ---------- small things ---------- */
function reveals() {
  if (!('IntersectionObserver' in W)) return;
  H.classList.add('rv-on');
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
  $$('.pnum[data-rv]').forEach((el, i) => { el.style.transitionDelay = (i * 70) + 'ms'; });
  $$('[data-rv]').forEach((el) => io.observe(el));
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
// phone only: the WhatsApp bar shows after the opening, and steps aside while another button for the same thing is on screen
function dock() {
  const el = $('.dock'), hero = $('.hero'), sign = $('#contatti');
  const api = { on: false };
  if (!el || !hero || !sign) return api;
  const seen = new Set();
  if ('IntersectionObserver' in W) {
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) seen.add(e.target); else seen.delete(e.target); }); ask(); }, { threshold: 0.5 });
    $$('.svc .pill, .plist-cta .pill, .find-pick .pill').forEach((p) => io.observe(p));
  }
  let rq = 0;
  const upd = () => {
    rq = 0;
    const vh = W.innerHeight;
    const on = W.innerWidth <= 700 && hero.getBoundingClientRect().bottom < vh * 0.25 && sign.getBoundingClientRect().top > vh * 0.8 && !Array.from(seen).some((p) => p.offsetParent !== null);
    if (on === api.on) return;
    api.on = on; V.dock = on; el.classList.toggle('is-on', on); el.inert = !on;
  };
  const ask = () => { if (!rq) rq = requestAnimationFrame(upd); };
  el.inert = true;
  W.addEventListener('scroll', ask, { passive: true }); W.addEventListener('resize', ask); upd();
  return api;
}
function navTheme() {
  const nav = $('.nav');
  if (!nav) return;
  const solid = () => nav.classList.toggle('solid', W.pageYOffset > 8);
  W.addEventListener('scroll', solid, { passive: true }); solid();
  if (!('IntersectionObserver' in W)) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) nav.setAttribute('data-nav', e.target.getAttribute('data-theme')); }), { rootMargin: '-3% 0px -96% 0px' });
  $$('main [data-theme], footer[data-theme]').forEach((s) => io.observe(s));
}
function anchors() {
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1), t = id && D.getElementById(id);
    if (!t) return;
    e.preventDefault();
    const off = id === 'top' ? 0 : -(V.nav + 8);
    if (lenis) lenis.scrollTo(t, { offset: off, duration: 1.2, easing: eIO });
    else W.scrollTo({ top: Math.max(0, t.getBoundingClientRect().top + W.pageYOffset + off), behavior: reduced ? 'auto' : 'smooth' });
    if (id === 'prova') setTimeout(() => { const q = $('#q'); if (q) q.focus({ preventScroll: true }); }, lenis ? 900 : 500);
    history.replaceState(null, '', '#' + id);
  }));
}
