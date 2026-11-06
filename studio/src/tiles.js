/* The Instagram grid of the visitor's shop, as HTML. Shared by the page and by build.py,
   which writes the invented example's grid into the HTML so it shows without JavaScript too. */
import { parseHours, hoursText } from './shopfinder.js';

const IMG = 'img/p/';
// six real photos and three designed posts (initial, hours, address); shops without photos get designed posts only
export const SETS = {
  food: { tiles: ['t-ravioli', 'D:mono', 't-tagliatelle', 't-dehors', 't-tiramisu', 'D:hours', 'D:where', 't-gnocchi', 't-hero'], avatar: 't-tagliatelle' },
  hair: { tiles: ['s-colore', 'D:mono', 's-liscio', 's-ricci', 's-piega', 'D:hours', 'D:where', 's-sposa', 's-treccia'], avatar: 's-treccia' },
  bake: { tiles: ['g-croissant', 'D:mono', 'g-focaccia', 'g-pagnotta', 'g-banco', 'D:hours', 'g-impasto', 'g-grissini', 'g-farina'], avatar: 'g-pagnotta' },
  other: { tiles: ['D:mono', 'D:word:Novità', 'D:hours', 'D:word:In negozio', 'D:where', 'D:word:Chi siamo', 'D:word:Ti aspettiamo', 'D:dots', 'D:word:Grazie'], avatar: 'D:mono' },
};
// each look has three grounds and the type of its site
const PAL = {
  food: { bg: ['#8f2a1c', '#f2e9dc', '#2a1d17'], fg: ['#fff6ea', '#2a1d17', '#f2e9dc'], f: '"Instrument Serif",Georgia,serif', w: 400, st: '100%', up: false, cw: 0.46 },
  hair: { bg: ['#171313', '#efe8e5', '#c9b2a6'], fg: ['#f6efec', '#171313', '#171313'], f: '"MK Grotesk",Arial,sans-serif', w: 640, st: '100%', up: true, ls: '.06em', cw: 0.8 },
  bake: { bg: ['#3b2412', '#f7ecd2', '#d7a54a'], fg: ['#f7ecd2', '#3b2412', '#3b2412'], f: '"MK Grotesk",Arial,sans-serif', w: 850, st: '118%', up: false, cw: 0.68 },
  other: { bg: ['#1e3b33', '#f1ede4', '#d9a441'], fg: ['#f1ede4', '#1e3b33', '#1e3b33'], f: '"MK Grotesk",Arial,sans-serif', w: 780, st: '100%', up: false, cw: 0.6 },
};

export function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function rand(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

/** the initial of the name itself: "Trattoria da Ines" gives I, not T or D */
export function monogram(name) {
  let nm = String(name || '').trim();
  for (let k = 0; k < 4; k++) nm = nm.replace(/^(?:(?:il|lo|la|i|gli|le|un|una|da|dal|dalla|dai|di|del|della|dei|al|alla|ai|bar|caff[eè]|forno|trattoria|osteria|ristorante|pizzeria|panificio|pasticceria|gelateria|enoteca|macelleria|salone|parrucchier[ei]|barbiere|negozio)\s+|l['’]\s*)/i, '');
  return (nm[0] || String(name || 'm')[0] || 'm').toUpperCase();
}

function place(s) { return [s.addr, s.city].filter(Boolean); }

/** one designed post: [after html, before html] */
function designed(type, i, s) {
  const P = PAL[s.kind] || PAL.other;
  const k = type === 'mono' ? 0 : type === 'hours' ? 1 : type === 'where' ? 2 : i % 3;
  const up = (t) => (P.up ? t.toUpperCase() : t);
  const w = parseHours(s.hours), pl = place(s);
  if (type === 'hours' && !(w && s.src !== 'typed')) type = 'word:Ti aspettiamo';
  if (type === 'where' && !(s.src !== 'typed' && pl.length)) type = 'word:Vieni a trovarci';
  const vars = '--t-bg:' + P.bg[k] + ';--t-fg:' + P.fg[k] + ';--t-f:' + P.f.replace(/"/g, '&quot;') + ';--t-w:' + P.w + ';--t-st:' + P.st + (P.ls ? ';--t-ls:' + P.ls : '');
  let inner = '', cls = '', plain = '';
  if (type === 'mono') {
    cls = 'tl-mono'; inner = '<b>' + esc(monogram(s.name)) + '</b><small>' + esc(up(s.name)) + '</small>'; plain = esc(s.name);
  } else if (type === 'hours') {
    cls = 'tl-hours';
    const lines = [];
    hoursText(w).split(' · ').forEach((gr) => { const m = /^(\S+(?:, \S+)*) (.*)$/.exec(gr); if (m) { lines.push('<span class="d">' + esc(m[1]) + '</span>'); m[2].split(', ').forEach((t) => lines.push('<span>' + esc(t) + '</span>')); } });
    inner = '<b>' + esc(up('Orari')) + '</b>' + lines.slice(0, 6).join('');
    plain = 'Orari: ' + esc(hoursText(w));
  } else if (type === 'where') {
    cls = 'tl-where'; inner = '<b>' + esc(up('Dove siamo')) + '</b>' + pl.map((t) => '<span>' + esc(t) + '</span>').join('');
    plain = 'Siamo in ' + esc(pl.join(', '));
  } else if (type === 'dots') {
    cls = 'tl-dots'; inner = ''; plain = '';
  } else {
    const word = type.replace(/^word:/, '');
    // the longest word sets the size, so every word stays whole inside the square
    const len = Math.max(...word.split(' ').map((x) => x.length));
    cls = 'tl-word'; inner = '<b style="--t-len:' + len + ';--t-cw:' + (P.cw || 0.6) + '">' + esc(up(word)) + '</b>'; plain = esc(word);
  }
  return ['<span class="tl-d ' + cls + '" style="' + vars + '">' + inner + '</span>', '<span class="tl-plain">' + plain + '</span>'];
}

/** nine tiles: the back face is the dull "before", the front the designed "after" */
export function gridHTML(s) {
  const set = SETS[s.kind] || SETS.other;
  return set.tiles.map((src, i) => {
    let a, b;
    if (src.startsWith('D:')) [a, b] = designed(src.slice(2), i, s);
    else {
      const r = rand(31 + i * 7), tilt = ((r() - 0.5) * 7).toFixed(1), ox = (50 + (r() - 0.5) * 46).toFixed(0), oy = (50 + (r() - 0.5) * 46).toFixed(0);
      const img = IMG + src + '.webp';
      a = '<img src="' + img + '" alt="" loading="lazy" decoding="async">';
      b = '<img src="' + img + '" alt="" loading="lazy" decoding="async" style="--tilt:' + tilt + 'deg;--o:' + ox + '% ' + oy + '%">';
    }
    return '<li class="tl"><span class="tl-in"><span class="tl-f tl-b">' + b + '</span><span class="tl-f tl-a">' + a + '</span></span></li>';
  }).join('');
}

/** the profile picture: a photo of the look, or the designed initial */
export function avatarHTML(s) {
  const set = SETS[s.kind] || SETS.other;
  if (set.avatar.startsWith('D:')) return designed('mono', 0, s)[0].replace(/<small>.*<\/small>/, '');
  return '<img src="' + IMG + set.avatar + '.webp" alt="" width="560" height="560" loading="lazy" decoding="async">';
}
