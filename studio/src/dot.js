/* The yellow dot: the one object on the page with weight.
   Scroll chooses where it should be (a station); time moves it there: ballistic hops under one gravity,
   a crouch before take-off, stretch along the speed, squash on impact with a spring recovery, one rebound
   after a big drop, and a contact shadow on whatever is under it. It never hangs in mid-air.
   It lives in page coordinates inside #mk-layer, so a resting dot scrolls with the page like the text.
   When it settles on a place that can hold it (a .slot, a step number), it hands over: the place gets
   .is-here and shows the same bead, and moves with its own scene; the travelling dot hides. */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const eOut2 = (t) => 1 - (1 - t) * (1 - t);
const eIO2 = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const BASE = 32; // radius of .mk-dot in CSS px

export function makeDot({ layer, fine }) {
  const el = layer.querySelector('.mk-dot'), sh = layer.querySelector('.mk-shadow'), ring = layer.querySelector('.mk-ring');
  const G = fine ? 5200 : 4200, REB_CAP = fine ? 56 : 40, INTRO_CAP = fine ? 44 : 22;
  const FLY = fine ? 13 : 10; // the size it keeps on long trips, so a full stop still reads as the same object
  const SH = { navy: 'rgba(5,9,15,.5)', paper: 'rgba(28,41,60,.24)', cream: 'rgba(27,27,27,.22)' };
  const RING = { navy: 'rgba(253,200,0,.85)', paper: 'rgba(28,41,60,.45)', cream: 'rgba(27,27,27,.4)' };
  const S = {
    mode: 'off', x: -200, y: -200, r: 8, g: 0, tg: null, hop: null, c0: 0,
    q: 0, qv: 0, press: false, reb: null, landAt: 0, r0: 0, rFrom: 0, rT: 0,
    vis: false, theme: '', last: { x: 0, y: 0, r: 8 },
  };
  const api = { state: S, busy: () => S.mode === 'crouch' || S.mode === 'hop' || S.mode === 'land' || S.mode === 'follow' };

  /* where a target is, in page coordinates: centre, radius, and the line it rests on */
  function pos(tg) {
    let p;
    if (tg.pt) p = tg.pt();
    else if (tg.el) {
      const b = tg.el.getBoundingClientRect();
      if (!b.width && !b.height) return S.last; // hidden: keep the last place
      p = { x: b.left + b.width / 2 + window.pageXOffset, y: b.top + b.height / 2 + window.pageYOffset, r: tg.r ? tg.r() : b.width / 2 };
    } else return S.last;
    S.last = p;
    return p;
  }
  const show = (on) => { if (on === S.vis) return; S.vis = on; el.style.opacity = sh.style.opacity = on ? '1' : '0'; };
  function theme(t) {
    if (!t || t === S.theme) return;
    S.theme = t; sh.style.setProperty('--mk-sh', SH[t] || SH.navy); ring.style.borderColor = RING[t] || RING.navy;
  }

  /* how big it lands: a full stop in small type is too small to read as the dot, so there it lands bigger
     and then shrinks into the type, like the opening */
  const landR = (tg, L) => (tg && tg.big && L.r < 9 ? L.r * tg.big : L.r);

  function plan(now, L, opt = {}) {
    const x0 = S.x, y0 = S.y, r1 = opt.r1 || landR(S.tg, L);
    // centre when its bottom touches the support; a dot bigger than its slot keeps its left edge on the slot,
    // so it lands beside the last letter instead of on it
    const x1 = L.x + (r1 - L.r), y1 = L.y + L.r - r1;
    const d = Math.hypot(x1 - x0, y1 - y0);
    let H = y1 - y0 > 0.6 * d ? clamp(0.08 * d, 12, 60) : clamp(0.22 * d, 18, fine ? 200 : 160);
    if (opt.H) H = opt.H; else if (S.tg && S.tg.H) H = S.tg.H;
    const apex = Math.min(y0, y1) - H;
    const t1 = Math.sqrt((2 * (y0 - apex)) / G), t2 = Math.sqrt((2 * (y1 - apex)) / G);
    // on a long trip it swells a little towards the eye and comes back down to its size
    const zb = d > 140 && !opt.intro ? Math.max(0, FLY - Math.max(S.r, r1)) : 0;
    S.hop = { x0, y0, x1, y1, r0: S.r, r1, zb, t1, T: t1 + t2, start: now, apex, g0: S.g || y0 + S.r, Lx: L.x, Ly: L.y, Lr: L.r, intro: !!opt.intro };
  }

  /* go somewhere: called whenever the station (or its target) changes */
  api.to = (tg, now, view) => {
    const old = S.tg;
    if (old && old.key === tg.key) { S.tg = tg; return; }
    if (old && old.onLeave) old.onLeave();
    if (S.mode === 'rest' && old && old.handoff && old.el) {
      const p = pos(old);
      S.x = p.x; S.y = p.y; S.r = p.r; S.g = p.y + p.r;
      old.el.classList.remove('is-here');
    }
    S.tg = tg; theme(tg.theme);
    const L = pos(tg);
    // nobody can see the place it is going to: it is simply there
    const tgOff = L.y + L.r < view.top || L.y - L.r > view.bottom;
    if (S.mode === 'off' || tg.instant || tgOff) { S.x = L.x; S.y = L.y; S.r = L.r; S.g = L.y + L.r; S.hop = S.reb = null; S.rFrom = 0; settle(now); return; }
    // it is off screen: it drops in from rest just above the screen instead of crossing the page
    const off = S.y + S.r < view.top - 4 || S.y - S.r > view.bottom + 4;
    if (off) {
      S.x = L.x + (S.x < L.x ? -1 : 1) * Math.min(60, Math.abs(S.x - L.x) * 0.25);
      S.r = Math.max(landR(tg, L), FLY); S.y = view.top - S.r - 4; S.g = L.y + L.r; S.q = S.qv = 0; S.reb = null; S.rFrom = 0; // the shadow waits where it lands
      show(true); plan(now, L, { H: 1 }); S.mode = 'hop';
      return;
    }
    show(true);
    if (S.mode === 'rest' || S.mode === 'land') { S.mode = 'crouch'; S.c0 = now; S.reb = null; return; }
    plan(now, L); S.mode = 'hop';
  };

  /* the opening: after a short beat with the headline alone, it drops from rest just above the screen,
     big, onto the full stop */
  api.intro = (tg, now, view, delay = 0) => {
    S.tg = tg; theme(tg.theme);
    const L = pos(tg);
    S.r = L.r * 2.2; S.x = L.x + (S.r - L.r); S.y = view.top - S.r - 4; S.g = L.y + L.r;
    show(true); plan(now + delay, L, { r1: S.r, intro: true, H: 1 }); S.mode = 'hop';
  };

  /* a hop in place: the visitor taps it */
  api.poke = (now) => {
    if (S.mode !== 'rest' || !S.tg) return false;
    const tg = S.tg, L = pos(tg);
    if (tg.handoff && tg.el) tg.el.classList.remove('is-here');
    S.x = L.x; S.y = L.y; S.r = L.r; S.g = L.y + L.r;
    show(true); plan(now, L, { H: Math.max(26, L.r * 3.2) }); S.mode = 'hop';
    return true;
  };

  function impact(now, vn) {
    const tg = S.tg, h = S.hop;
    S.press = !!tg.press;
    if (S.press) { S.q = 0.14; S.qv = 0; }
    else { S.q = clamp(vn / 3000, 0.1, 0.32); S.qv = 0; }
    const drop = h ? h.y1 - h.apex : 0;
    S.reb = null;
    if (!S.press && drop > 90 && !tg.follow && !tg.noReb) {
      const hh = Math.min(0.144 * drop, h && h.r1 > h.Lr + 0.5 ? INTRO_CAP : REB_CAP), v0 = Math.sqrt(2 * G * hh);
      S.reb = { t0: now, v0, T: (2 * v0) / G, q2: 0.4 * S.q };
    }
    const intro = !!(h && h.intro), L = pos(tg);
    S.rFrom = S.r > L.r + 0.5 ? S.r : 0; S.rT = now;
    S.landAt = now; S.mode = tg.follow ? 'follow' : 'land';
    if (tg.ring && !tg.follow) pulse(L.x, L.y, L.r, S.rFrom && S.reb ? S.reb.T : 0);
    if (tg.onLand) tg.onLand(now, intro);
  }

  function settle(now) {
    const tg = S.tg;
    S.mode = 'rest'; S.q = S.qv = 0; S.reb = null;
    if (tg && tg.handoff && tg.el) { tg.el.classList.add('is-here'); show(false); }
    else { show(!!tg); render(); }
    if (tg && tg.onRest) tg.onRest(now);
  }

  function spring(dt) {
    const n = Math.max(1, Math.ceil(dt / 0.008)), h = dt / n;
    for (let i = 0; i < n; i++) { const a = -600 * S.q - 22 * S.qv; S.qv += a * h; S.q += S.qv * h; }
  }

  let ang = 0, sx = 1, sy = 1, rot = false;
  /* one frame; returns true while it needs more frames */
  api.step = (now, dt) => {
    const tg = S.tg;
    if (!tg || S.mode === 'off') return false;
    rot = false; sx = sy = 1;
    if (S.mode === 'crouch') {
      const L = pos(tg), u = clamp((now - S.c0) / 0.07), e = eOut2(u);
      sy = 1 - 0.16 * e; sx = 1 + 0.09 * e;
      S.y = S.g - S.r * sy;
      if (u >= 1) { S.y = S.g - S.r; plan(now, L); S.mode = 'hop'; }
    } else if (S.mode === 'hop') {
      const h = S.hop, t = now - h.start, L = pos(tg), u = clamp(t / h.T);
      const tt = clamp(t, 0, h.T); // t < 0 while the opening waits for its beat
      S.x = h.x0 + (h.x1 - h.x0) * u + (L.x - h.Lx) * u;
      S.y = h.y0 - G * h.t1 * tt + 0.5 * G * tt * tt + (L.y + L.r - h.Ly - h.Lr) * u;
      S.r = h.intro ? h.r0 : lerp(h.r0, h.r1, eIO2(u)) + h.zb * Math.sin(Math.PI * u);
      S.g = lerp(h.g0, L.y + L.r, u);
      const vx = (h.x1 - h.x0) / h.T, vy = -G * h.t1 + G * tt, v = Math.hypot(vx, vy);
      const s = 1 + Math.min(0.18, v / 7000);
      sy = s; sx = 1 / Math.sqrt(s); ang = Math.atan2(vy, vx) - Math.PI / 2; rot = true;
      if (t >= h.T) {
        S.r = h.r1; S.x = L.x + (S.r - L.r); S.y = L.y + L.r - S.r; S.g = L.y + L.r;
        impact(now, Math.abs(vy)); rot = false; sx = sy = 1;
      }
    } else if (S.mode === 'land' || S.mode === 'follow' || S.mode === 'rest') {
      const L = pos(tg);
      if (S.mode === 'land') spring(dt);
      let off = 0;
      if (S.reb) {
        const t = now - S.reb.t0;
        if (t < S.reb.T) { off = -(S.reb.v0 * t - 0.5 * G * t * t); }
        else { S.q = Math.max(S.q, S.reb.q2); S.qv = 0; S.reb = null; }
      }
      // after the opening fall, it shrinks to the size of the type while it rebounds
      if (S.rFrom) { const u = clamp((now - S.rT) / 0.42); S.r = lerp(S.rFrom, L.r, eOut2(u)); if (u >= 1) S.rFrom = 0; }
      else S.r = L.r;
      S.x = L.x + (S.r - L.r); S.g = L.y + L.r;
      if (S.mode === 'land' && S.press) { const k = 1 - S.q; sx = sy = k; S.y = L.y + off; }
      else if (S.mode === 'land') { sy = 1 - S.q; sx = 1 / Math.sqrt(Math.max(0.2, 1 - S.q)); S.y = S.g - S.r * sy + off; }
      else S.y = L.y;
      if (S.mode === 'land' && !S.reb && Math.abs(S.q) < 0.004 && Math.abs(S.qv) < 0.06 && now - S.landAt > 0.3 && !S.rFrom) settle(now);
      if (S.mode === 'rest' && tg.handoff) return false;
    }
    render();
    return S.mode !== 'rest';
  };

  function render() {
    const k = S.r / BASE;
    let tf = 'translate(' + S.x.toFixed(2) + 'px,' + S.y.toFixed(2) + 'px) ';
    tf += rot ? 'rotate(' + ang.toFixed(4) + 'rad) scale(' + (k * sx).toFixed(4) + ',' + (k * sy).toFixed(4) + ') rotate(' + (-ang).toFixed(4) + 'rad)'
      : 'scale(' + (k * sx).toFixed(4) + ',' + (k * sy).toFixed(4) + ')';
    el.style.transform = tf;
    // contact shadow: grows and fades with the height above what is under it
    const bottom = S.y + S.r * (rot ? 1 : sy), hgt = Math.max(0, S.g - bottom), a = clamp(hgt / (6 * S.r));
    const w = (2.3 * S.r * (1 + 0.9 * a)) / 64, hh = (0.6 * S.r * (1 + 0.5 * a)) / 64;
    sh.style.transform = 'translate(' + S.x.toFixed(2) + 'px,' + S.g.toFixed(2) + 'px) scale(' + w.toFixed(4) + ',' + hh.toFixed(4) + ')';
    sh.style.opacity = S.vis ? Math.pow(1 - a, 1.6).toFixed(3) : '0';
  }

  function pulse(x, y, r, delay) {
    if (!ring.animate) return;
    const a = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) ';
    // the ring is scaled with the dot, so its line is set to read about 1.5px half way out
    ring.style.borderWidth = clamp((1.5 * BASE) / (2.2 * r), 1, 14).toFixed(2) + 'px';
    ring.animate([{ opacity: 1, transform: a + 'scale(' + (r / BASE).toFixed(3) + ')' }, { opacity: 0, transform: a + 'scale(' + ((r * 3.6) / BASE).toFixed(3) + ')' }],
      { duration: 900, delay: (delay || 0) * 1000, easing: 'cubic-bezier(.16,1,.3,1)' });
  }
  api.pulse = pulse;
  return api;
}
