/* Finds a real shop on OpenStreetMap: Photon (komoot) for the search, Nominatim for opening hours.
   Both are free, need no key and allow browser requests; fair use only, so we search on submit
   (never while typing) and look up details once, for the shop the visitor picks.
   Data © OpenStreetMap contributors (ODbL): the page shows the credit next to the results. */

const PHOTON = 'https://photon.komoot.io/api/';
const NOMINATIM = 'https://nominatim.openstreetmap.org/lookup';
const ITALY = '6.6,35.4,18.6,47.2';
const KEYS = ['amenity', 'shop', 'craft', 'tourism', 'leisure', 'office', 'healthcare'];

const CAT = {
  restaurant: 'Ristorante', fast_food: 'Locale', food_court: 'Ristorante', cafe: 'Bar', bar: 'Bar', pub: 'Pub',
  ice_cream: 'Gelateria', bakery: 'Panetteria', pastry: 'Pasticceria', confectionery: 'Pasticceria', deli: 'Gastronomia',
  hairdresser: 'Parrucchiere', beauty: 'Centro estetico', cosmetics: 'Profumeria', massage: 'Massaggi', tattoo: 'Tatuaggi',
  butcher: 'Macelleria', greengrocer: 'Frutta e verdura', wine: 'Enoteca', alcohol: 'Enoteca', beverages: 'Bevande',
  clothes: 'Abbigliamento', shoes: 'Calzature', boutique: 'Boutique', jewelry: 'Gioielleria', optician: 'Ottica',
  florist: 'Fioraio', books: 'Libreria', gift: 'Regali', toys: 'Giocattoli', hardware: 'Ferramenta', doityourself: 'Fai da te',
  tobacco: 'Tabaccheria', newsagent: 'Edicola', convenience: 'Alimentari', supermarket: 'Supermercato', pet: 'Animali',
  bicycle: 'Biciclette', car_repair: 'Officina', pharmacy: 'Farmacia', hotel: 'Hotel', guest_house: 'B&B', bed_and_breakfast: 'B&B',
  dentist: 'Dentista', fitness_centre: 'Palestra', sports: 'Sport', furniture: 'Arredamento', electronics: 'Elettronica',
  mobile_phone: 'Telefonia', laundry: 'Lavanderia', dry_cleaning: 'Lavanderia', photo: 'Fotografia', stationery: 'Cartoleria',
  coffee: 'Caffè', tea: 'Tè', chocolate: 'Cioccolateria', pasta: 'Pastificio', seafood: 'Pescheria', cheese: 'Formaggi', farm: 'Azienda agricola',
};
const FOOD = ['restaurant', 'food_court', 'deli', 'pasta'];
const BAKE = ['bakery', 'pastry', 'confectionery', 'cafe', 'bar', 'coffee'];
const HAIR = ['hairdresser', 'beauty', 'nail_salon'];
// cuisines that our trattoria photos suit; any other cuisine gets the photo-free look
const ITALIAN = /(^|;|_)(italian|regional|pizza|pasta|piedmontese|tuscan|sicilian|neapolitan|emilian|ligurian|venetian|roman|sardinian|apulian|lombard|trattoria|osteria|local)($|;|_)/;

/** the photo set that suits the shop: food, bake, hair, or other (a look without photos) */
export function kindOf(value, tags) {
  const cuisine = (tags && tags.cuisine) || '';
  if (FOOD.includes(value)) return !cuisine || ITALIAN.test(cuisine) ? 'food' : 'other';
  if (BAKE.includes(value)) return 'bake';
  if (HAIR.includes(value)) return value === 'hairdresser' && /barber|male/.test((tags && tags.hairdresser) || '') ? 'other' : 'hair';
  return 'other';
}
export function catOf(value, tags) {
  const cuisine = (tags && tags.cuisine) || '';
  if (/pizza/.test(cuisine) && (value === 'restaurant' || value === 'fast_food')) return 'Pizzeria';
  if (value === 'hairdresser' && tags && /barber|male/.test(tags.hairdresser || '')) return 'Barbiere';
  return CAT[value] || 'Negozio';
}

function clean(s) { return String(s || '').replace(/\s+/g, ' ').trim(); }

/** search: returns up to 5 places, best first */
export async function findShops(q, signal) {
  const params = new URLSearchParams({ q: clean(q).slice(0, 80), limit: '10', bbox: ITALY });
  const url = PHOTON + '?' + params.toString() + KEYS.map((k) => '&osm_tag=' + k).join('');
  const r = await fetch(url, { signal });
  if (!r.ok) throw new Error('search ' + r.status);
  const j = await r.json();
  const seen = new Set(), out = [];
  for (const f of j.features || []) {
    const p = f.properties || {};
    if (!p.name || !p.osm_id || !p.osm_type) continue;
    const id = p.osm_type + p.osm_id;
    if (seen.has(id)) continue;
    seen.add(id);
    const c = (f.geometry && f.geometry.coordinates) || [];
    out.push({
      id, name: clean(p.name).slice(0, 60), value: p.osm_value || '', key: p.osm_key || '',
      street: clean(p.street), num: clean(p.housenumber), city: clean(p.city || p.town || p.village || p.county),
      cat: catOf(p.osm_value), kind: kindOf(p.osm_value), lon: c[0], lat: c[1],
    });
    if (out.length >= 5) break;
  }
  return out;
}

/** details for one place: opening hours (raw OSM string), cuisine, phone */
export async function shopDetails(id, signal) {
  const params = new URLSearchParams({ osm_ids: id, format: 'jsonv2', extratags: '1', addressdetails: '1', 'accept-language': 'it' });
  const r = await fetch(NOMINATIM + '?' + params.toString(), { signal });
  if (!r.ok) throw new Error('details ' + r.status);
  const j = await r.json();
  const p = j && j[0];
  if (!p) return null;
  const e = p.extratags || {}, a = p.address || {};
  return {
    hours: clean(e.opening_hours), cuisine: clean(e.cuisine), hairdresser: clean(e.hairdresser), web: clean(e.website || e['contact:website']).slice(0, 120),
    street: clean(a.road), num: clean(a.house_number), city: clean(a.city || a.town || a.village || a.municipality),
  };
}

/* ---------- opening hours: the common OSM forms only; anything else returns null (we never guess) ---------- */
const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const IT_DAYS = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
const toMin = (s) => { const m = /^(\d{1,2}):(\d{2})$/.exec(s); if (!m) return NaN; const h = +m[1], mi = +m[2]; return h > 24 || mi > 59 ? NaN : h * 60 + mi; };

/** returns an array of 7 days (monday first), each a list of [from, to] minutes, or null */
export function parseHours(str) {
  const s = clean(str);
  if (!s) return null;
  if (s === '24/7') return DAYS.map(() => [[0, 1440]]);
  const week = DAYS.map(() => []);
  for (let rule of s.split(';')) {
    rule = rule.trim();
    if (!rule) continue;
    if (/^PH\b/.test(rule)) continue; // public holidays: not shown
    const m = /^((?:(?:Mo|Tu|We|Th|Fr|Sa|Su)(?:-(?:Mo|Tu|We|Th|Fr|Sa|Su))?)(?:\s*,\s*(?:(?:Mo|Tu|We|Th|Fr|Sa|Su)(?:-(?:Mo|Tu|We|Th|Fr|Sa|Su))?|PH))*)?\s*(.*)$/.exec(rule);
    if (!m) return null;
    const daysPart = m[1], timesPart = m[2].trim();
    let days = [];
    if (!daysPart) days = [0, 1, 2, 3, 4, 5, 6];
    else for (const d of daysPart.split(',').map((x) => x.trim()).filter((x) => x && x !== 'PH')) {
      const [a, b] = d.split('-');
      const ia = DAYS.indexOf(a), ib = b ? DAYS.indexOf(b) : ia;
      if (ia < 0 || ib < 0) return null;
      for (let i = ia; ; i = (i + 1) % 7) { days.push(i); if (i === ib) break; }
    }
    let spans = [];
    if (/^(off|closed)$/i.test(timesPart)) spans = [];
    else {
      for (const t of timesPart.split(',').map((x) => x.trim()).filter(Boolean)) {
        const mm = /^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/.exec(t);
        if (!mm) return null;
        const a = toMin(mm[1]), b = toMin(mm[2]);
        if (isNaN(a) || isNaN(b)) return null;
        spans.push([a, b]);
      }
      if (!spans.length) return null;
    }
    days.forEach((d) => { week[d] = spans; });
  }
  return week.some((d) => d.length) ? week : null;
}

/** now in Italy: weekday (monday = 0) and minutes */
function romeNow(date) {
  try {
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
    const parts = {}; f.formatToParts(date || new Date()).forEach((p) => { parts[p.type] = p.value; });
    const wd = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(parts.weekday);
    return { d: wd, m: +parts.hour * 60 + +parts.minute };
  } catch (e) { const d = date || new Date(); return { d: (d.getDay() + 6) % 7, m: d.getHours() * 60 + d.getMinutes() }; }
}
const hhmm = (m) => { if (m === 1440) return '24:00'; m = ((m % 1440) + 1440) % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
const allDay = (week) => week.every((d) => d.length === 1 && d[0][0] === 0 && d[0][1] === 1440);

/** { open, until, next, day } for right now, or null when the hours are unknown.
    until: closing time when open; next and day: when it opens again (day: '' today, 'domani', or the weekday) */
const IT_DAY_NAMES = ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'];
export function openNow(week, date) {
  if (!week) return null;
  if (allDay(week)) return { open: true, until: '', next: '', day: '' };
  const { d, m } = romeNow(date);
  const prev = (d + 6) % 7;
  for (const [a, b] of week[d]) {
    if (b > a ? m >= a && m < b : m >= a) return { open: true, until: b === 1440 ? '' : hhmm(b), next: '', day: '' };
  }
  for (const [a, b] of week[prev]) if (b <= a && m < b) return { open: true, until: hhmm(b), next: '', day: '' };
  const later = week[d].map((s) => s[0]).filter((a) => a > m).sort((x, y) => x - y)[0];
  if (later !== undefined) return { open: false, until: '', next: hhmm(later), day: '' };
  for (let i = 1; i <= 7; i++) {
    const dd = (d + i) % 7, first = week[dd].map((s) => s[0]).sort((x, y) => x - y)[0];
    if (first !== undefined) return { open: false, until: '', next: hhmm(first), day: i === 1 ? 'domani' : IT_DAY_NAMES[dd] };
  }
  return { open: false, until: '', next: '', day: '' };
}

/** the line a shop's site would show: "Aperto ora, fino alle 15:30", "Chiuso ora, apre domani alle 08:00" */
export function statusText(st) {
  if (!st) return '';
  if (st.open) return st.until ? 'Aperto ora, fino alle ' + st.until : 'Aperto ora';
  if (!st.next) return 'Chiuso ora';
  return 'Chiuso ora, apre ' + (st.day ? st.day + ' ' : '') + 'alle ' + st.next;
}

/** "mar-sab 12:00-15:30, 19:30-22:00", at most two groups of days, shortest form */
export function hoursText(week) {
  if (!week) return '';
  if (allDay(week)) return 'sempre aperto';
  const key = (d) => week[d].map((s) => hhmm(s[0]) + '-' + hhmm(s[1])).join(', ');
  const groups = new Map();
  for (let d = 0; d < 7; d++) { if (!week[d].length) continue; const k = key(d); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(d); }
  const days = (list) => {
    const runs = [];
    list.forEach((d) => { const r = runs[runs.length - 1]; if (r && r[1] === d - 1) r[1] = d; else runs.push([d, d]); });
    return runs.map((r) => (r[0] === r[1] ? IT_DAYS[r[0]] : r[1] === r[0] + 1 ? IT_DAYS[r[0]] + ', ' + IT_DAYS[r[1]] : IT_DAYS[r[0]] + '-' + IT_DAYS[r[1]])).join(', ');
  };
  return Array.from(groups.entries()).sort((a, b) => b[1].length - a[1].length).slice(0, 2)
    .sort((a, b) => a[1][0] - b[1][0]).map(([k, list]) => days(list) + ' ' + k).join(' · ');
}
