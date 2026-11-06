/* mk digital studio, portfolio prima e dopo.
   GSAP 3.15 (ScrollTrigger, SplitText) for the scroll story, Lenis 1.3 for smooth scroll on desktop.
   Without GSAP, or with reduced motion, the page stays static and each example gets a Prima/Dopo switch. */
(function () {
  'use strict';
  window.mkReady = true;

  var d = document, h = d.documentElement, w = window;
  var reduced = !!(w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var motion = !!(w.gsap && w.ScrollTrigger) && h.classList.contains('motion');
  if (!motion) h.classList.remove('motion', 'intro');

  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
  function kid(el, cls) {
    for (var i = 0; i < el.children.length; i++) if (el.children[i].classList.contains(cls)) return el.children[i];
    return null;
  }
  function emOf(el) { return parseFloat(getComputedStyle(el).fontSize) || 14; }

  copyButton();
  navTheme();
  eagerImages();

  if (motion) {
    gsap.registerPlugin(ScrollTrigger);
    if (w.SplitText) gsap.registerPlugin(SplitText);
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    var lenis = smooth();
    anchors(lenis);
    intro();
    var built = false;
    var build = function () { if (built) return; built = true; buildScroll(lenis); };
    fontsLoaded().then(build, build);
    setTimeout(build, 1600);
  } else {
    anchors(null);
    toggles();
  }

  /* ---------- shared ---------- */

  function fontsLoaded() {
    if (!d.fonts || !d.fonts.load || !w.Promise) return { then: function (a) { a(); } };
    return Promise.all([
      '900 64px Archivo', '400 16px "Instrument Sans"', '600 16px "Instrument Sans"',
      '400 16px "Instrument Serif"', 'italic 400 16px "Instrument Serif"', '500 16px "Bodoni Moda"'
    ].map(function (f) { return d.fonts.load(f); }));
  }

  function copyButton() {
    var b = $('#copy');
    if (!b) return;
    var label = $('span', b), base = label.textContent, t;
    function done(s) {
      label.textContent = s;
      clearTimeout(t);
      t = setTimeout(function () { label.textContent = base; }, 2400);
    }
    function fallback() {
      var r = d.createRange();
      r.selectNodeContents($('#tel'));
      var s = w.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      done('Selezionato, ora copia');
    }
    b.addEventListener('click', function () {
      try { navigator.clipboard.writeText('+39 371 539 9463').then(function () { done('Copiato'); }, fallback); }
      catch (e) { fallback(); }
    });
  }

  function navTheme() {
    var nav = $('.nav');
    if (!nav || !('IntersectionObserver' in w)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) nav.setAttribute('data-nav', en.target.getAttribute('data-theme')); });
    }, { rootMargin: '-3% 0px -96% 0px' });
    $$('[data-theme]').forEach(function (s) { io.observe(s); });
  }

  function eagerImages() {
    // the phone screens are clipped, so lazy images there may never count as visible: fetch them after load
    w.addEventListener('load', function () {
      setTimeout(function () { $$('img[loading="lazy"]').forEach(function (im) { im.loading = 'eager'; }); }, 300);
    });
  }

  function anchors(lenis) {
    d.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1), el = id && d.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { duration: 1.4 });
      else w.scrollTo({ top: el.getBoundingClientRect().top + w.pageYOffset, behavior: reduced ? 'auto' : 'smooth' });
      if (history.replaceState) history.replaceState(null, '', '#' + id);
      if (id !== 'top') { el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); }
    });
  }

  /* ---------- static page: Prima / Dopo switch ---------- */

  function toggles() {
    $$('.case').forEach(function (sec) {
      var btns = $$('.toggle button', sec), cnt = $('.cnt', sec);
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          var before = b.getAttribute('data-v') === 'b';
          sec.classList.toggle('show-before', before);
          btns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          if (cnt) cnt.textContent = cnt.getAttribute(before ? 'data-b' : 'data-a');
        });
      });
    });
  }

  /* ---------- motion ---------- */

  function smooth() {
    if (!w.Lenis || !w.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;
    var l = new Lenis({ lerp: 0.1, smoothWheel: true });
    l.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { l.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    return l;
  }

  // the page opens as a 2011 site, then the yellow line passes and the new one is there
  function intro() {
    if (!h.classList.contains('intro')) return;
    if (w.pageYOffset > 40 || location.hash.length > 1) { h.classList.remove('intro'); return; }
    var hero = $('.hero'), neu = $('.hero-new', hero), wipe = $('.hero-wipe', hero);
    var line = $('i', wipe), fly = $('b', wipe), dot = $('.h1-dot', hero), nav = $('.nav');
    var page = $('.ho-page', hero), count = $('.ho-count b', hero);
    var prima = $('.h1-old', hero), dopo = $('.h1-new', hero), foot = $('.hero-foot', hero);
    var evs = ['pointerdown', 'keydown', 'wheel', 'touchstart'], finished = false;
    var split = w.SplitText ? SplitText.create(dopo, { type: 'chars', charsClass: 'hch' }) : null;
    var chars = split ? split.chars : [dopo];
    // the old site stays alone for T seconds, then the line sweeps it away in S seconds
    var T = 1.6, S = 0.72, E = T + S, tgt = null;
    function target() {
      if (tgt) return tgt;
      var r = dot.getBoundingClientRect(), wr = wipe.getBoundingClientRect();
      tgt = { x: r.left + r.width / 2 - wr.left, y: r.top + r.height / 2 - (wr.top + wr.height / 2), s: dot.offsetWidth / (fly.offsetWidth || 28) };
      return tgt;
    }
    gsap.set(wipe, { xPercent: 100, autoAlpha: 1 });
    gsap.set(dot, { scale: 0 });
    var tl = gsap.timeline({ paused: true, onComplete: finish });
    // a new visitor on the old site, while its stripes keep moving (css)
    tl.call(function () { if (count) count.textContent = '00438'; }, null, 0.75)
      .fromTo(count, { scale: 1.3 }, { scale: 1, duration: 0.4, ease: 'back.out(3)', immediateRender: false }, 0.75)
      // the line charges on the right edge
      .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.42, ease: 'expo.out' }, T - 0.36)
      .fromTo(fly, { scale: 0 }, { scale: 1, duration: 0.42, ease: 'back.out(3)' }, T - 0.3)
      // and sweeps right to left, pushing the old page away
      .fromTo(neu, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: S, ease: 'expo.inOut' }, T)
      .to(wipe, { xPercent: 0, duration: S, ease: 'expo.inOut' }, T)
      .to(line, { scaleX: 3.2, duration: S / 2, ease: 'power2.in', yoyo: true, repeat: 1 }, T)
      .to(fly, { scaleX: 1.5, scaleY: 0.72, duration: S / 2, ease: 'power2.in', yoyo: true, repeat: 1 }, T)
      .to(page, { xPercent: -8, scale: 0.955, autoAlpha: 0.55, duration: S, ease: 'expo.inOut' }, T)
      // the new hero comes in behind the line
      .fromTo(prima, { x: 110, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.95, ease: 'expo.out' }, T + 0.1)
      .fromTo(chars, { yPercent: 60, rotate: 9, autoAlpha: 0 }, { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.85, ease: 'expo.out', stagger: { each: 0.045, from: 'end' } }, T + 0.14)
      .fromTo(foot, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, ease: 'expo.out' }, T + 0.42)
      .fromTo(nav, { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: 'expo.out' }, E - 0.15)
      // the line fades, its dot flies into the headline and lands as the full stop
      .to(line, { autoAlpha: 0, duration: 0.22, ease: 'power1.out' }, E)
      .to(fly, { x: function () { return target().x; }, duration: 0.62, ease: 'power3.inOut' }, E)
      .to(fly, { y: function () { return target().y; }, duration: 0.62, ease: 'back.in(1.4)' }, E)
      .to(fly, { scale: function () { return target().s; }, duration: 0.62, ease: 'power2.inOut' }, E)
      .set(fly, { autoAlpha: 0 }, E + 0.62)
      .fromTo(dot, { scaleX: 1.55, scaleY: 0.5 }, { scaleX: 1, scaleY: 1, duration: 0.8, ease: 'elastic.out(1, 0.42)', immediateRender: false }, E + 0.62);
    function finish() {
      if (finished) return;
      finished = true;
      tl.kill();
      if (split) split.revert();
      h.classList.remove('intro');
      gsap.set([neu, wipe, line, fly, dot, nav, page, count, prima, foot], { clearProps: 'all' });
      evs.forEach(function (ev) { w.removeEventListener(ev, skip, true); });
    }
    function skip() { finish(); }
    evs.forEach(function (ev) { w.addEventListener(ev, skip, { capture: true, passive: true }); });
    var started = false;
    function go() { if (!started) { started = true; tl.play(); } }
    // only the display font matters here; the old site uses system fonts
    if (d.fonts && d.fonts.load) d.fonts.load('900 64px Archivo').then(go, go);
    else go();
    setTimeout(go, 700);
  }

  function buildScroll(lenis) {
    var scrub = lenis ? true : 0.6;
    manifesto();
    var scenes = [];
    $$('.case').forEach(function (sec) {
      headline(sec);
      var k = sec.getAttribute('data-scene');
      scenes.push(k === 'sito' ? sito(sec, scrub) : k === 'instagram' ? insta(sec, scrub) : google(sec, scrub));
      dealBar(sec);
    });
    how();
    prices();
    flood();
    progress();
    ScrollTrigger.addEventListener('refresh', function () { scenes.forEach(function (sc) { sc.remeasure(); }); });
    ScrollTrigger.refresh();
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    if (location.hash.length > 1) {
      var t = d.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { lenis ? lenis.scrollTo(t, { immediate: true }) : t.scrollIntoView(); }, 60);
    }
  }

  function manifesto() {
    var p = $('.manifesto p');
    if (!p || !w.SplitText) return;
    SplitText.create(p, {
      type: 'words', autoSplit: true,
      onSplit: function (self) {
        return gsap.fromTo(self.words, { opacity: 0.16 }, {
          opacity: 1, ease: 'none', stagger: 0.12,
          scrollTrigger: { trigger: p, start: 'top 82%', end: 'bottom 50%', scrub: true }
        });
      }
    });
  }

  function headline(sec) {
    var h2 = $('.case-head h2', sec);
    if (!h2 || !w.SplitText) return;
    SplitText.create(h2, {
      type: 'lines', mask: 'lines', linesClass: 'tline', autoSplit: true,
      onSplit: function (self) {
        return gsap.from(self.lines, {
          yPercent: 112, duration: 1.1, ease: 'expo.out', stagger: 0.09,
          scrollTrigger: { trigger: h2, start: 'top 86%', once: true }
        });
      }
    });
  }

  function dealBar(sec) {
    var bar = $('.deal .bar', sec);
    if (!bar) return;
    gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: 1, duration: 1.2, ease: 'expo.out',
      scrollTrigger: { trigger: $('.deal', sec), start: 'top 85%', once: true }
    });
  }

  function how() {
    var steps = $$('.steps li');
    if (!steps.length) return;
    var tl = gsap.timeline({ scrollTrigger: { trigger: '.steps', start: 'top 72%', end: 'bottom 62%', scrub: 0.5 } });
    steps.forEach(function (li, i) {
      tl.fromTo($('.n', li), { backgroundColor: '#1c293c', color: '#f2f4f7' }, { backgroundColor: '#fdc800', color: '#1c293c', duration: 0.12, ease: 'none' }, i);
      var b = $('.ln b', li);
      if (b) tl.fromTo(b, { scaleY: 0 }, { scaleY: 1, duration: 0.88, ease: 'none' }, i + 0.12);
    });
  }

  function prices() {
    var menu = $('.menu');
    if (!menu) return;
    var st = { trigger: menu, start: 'top 84%', once: true };
    gsap.from($$('li', menu), { y: 28, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.09, scrollTrigger: st });
    gsap.fromTo($$('.dots', menu), { scaleX: 0 }, { scaleX: 1, duration: 1.3, ease: 'expo.out', stagger: 0.09, delay: 0.15, scrollTrigger: { trigger: menu, start: 'top 84%', once: true } });
  }

  // the line becomes the whole page: yellow floods in where you write to me
  function flood() {
    var f = $('.flood');
    if (!f) return;
    gsap.fromTo(f, { clipPath: 'inset(0% 0% 0% 100%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', ease: 'power1.inOut',
      scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 30%', scrub: 0.4 }
    });
  }

  function progress() {
    var b = $('.progress b');
    if (b) gsap.fromTo(b, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  }

  /* ---------- the three scroll stories ---------- */

  // pinned stage, one caption per step, a progress segment per step
  function base(sec, scrub, endVh, S, END) {
    var sc = { sec: sec, stage: $('.stage', sec), screen: $('.screen', sec), caps: $$('.caps > li', sec), segs: $$('.segs b', sec), m: { top: 0 } };
    gsap.set(sc.caps, { autoAlpha: 0 });
    gsap.set(sc.caps[0], { autoAlpha: 1 });
    gsap.set($$('.strike', sec), { scaleX: 0 });
    gsap.set(sc.segs, { scaleX: 0 });
    sc.tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.inOut', immediateRender: false },
      scrollTrigger: {
        trigger: sc.stage, start: 'top top', pin: true, scrub: scrub, anticipatePin: 1,
        end: function () { return '+=' + Math.round(w.innerHeight * endVh); }
      }
    });
    sc.tl.set({}, {}, END);
    for (var k = 0; k < S.length; k++) caption(sc, k, S[k], (k + 1 < S.length ? S[k + 1] : END) - S[k]);
    return sc;
  }

  function caption(sc, k, at, len) {
    var tl = sc.tl, li = sc.caps[k], prev = sc.caps[k - 1], s = $('.strike', li);
    if (prev) {
      tl.fromTo(prev, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -22, duration: 0.2, ease: 'power2.in' }, at);
      tl.fromTo(li, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power3.out' }, at + 0.12);
    }
    if (s) tl.fromTo(s, { scaleX: 0 }, { scaleX: 1, duration: 0.28, ease: 'power2.inOut' }, at + (prev ? 0.36 : 0.12));
    if (sc.segs[k]) tl.fromTo(sc.segs[k], { scaleX: 0 }, { scaleX: 1, duration: len, ease: 'none' }, at);
  }

  // Where to scroll the phone screen so a part of the page sits under the status bar.
  // Measured in em of the layer, with everything that grows already grown.
  function measurer(sc, layer, targets, growers) {
    return function () {
      var f = emOf(layer);
      var saved = growers.map(function (g) { return g.style.height; });
      growers.forEach(function (g) { g.style.height = 'auto'; });
      var lr = layer.getBoundingClientRect(), stR = sc.stage.getBoundingClientRect(), scR = sc.screen.getBoundingClientRect();
      var vis = Math.min(scR.height, stR.bottom - scR.top) / f;
      var max = Math.max(0, layer.offsetHeight / f - vis);
      var fixH = sc.fix ? sc.fix.offsetHeight / f : 0;
      var m = { top: 0 };
      Object.keys(targets).forEach(function (k) {
        var t = (targets[k].getBoundingClientRect().top - lr.top) / f;
        m[k] = Math.round(Math.min(max, Math.max(0, t - fixH - vis * 0.04)) * 100) / 100;
      });
      growers.forEach(function (g, i) { g.style.height = saved[i]; });
      return m;
    };
  }

  function remeasurer(sc) {
    return function () {
      var old = sc.m, m = sc.measure(), changed = false;
      Object.keys(m).forEach(function (k) { if (Math.abs((old[k] || 0) - m[k]) > 0.02) changed = true; });
      sc.m = m;
      if (changed) { var p = sc.tl.progress(); sc.tl.invalidate(); sc.tl.progress(p); }
    };
  }

  function tour(sc, layer, fromK, toK, at, dur) {
    sc.tl.fromTo(layer,
      { '--ty': function () { return sc.m[fromK] || 0; } },
      { '--ty': function () { return sc.m[toK] || 0; }, duration: dur, ease: 'power2.inOut' }, at);
  }

  function swapT(tl, el, at) {
    var b = kid(el, 'b'), a = kid(el, 'a');
    gsap.set(a, { autoAlpha: 0, yPercent: 55 });
    tl.fromTo(b, { autoAlpha: 1, yPercent: 0 }, { autoAlpha: 0, yPercent: -55, duration: 0.22, ease: 'power2.in' }, at);
    tl.fromTo(a, { autoAlpha: 0, yPercent: 55 }, { autoAlpha: 1, yPercent: 0, duration: 0.3, ease: 'power3.out' }, at + 0.12);
    mark(tl, $('.mark', a), at + 0.3);
  }

  function swapI(tl, el, at) {
    var b = kid(el, 'b'), a = kid(el, 'a');
    gsap.set(a, { autoAlpha: 0 });
    tl.fromTo(b, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.2 }, at);
    tl.fromTo(a, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, at + 0.1);
  }

  function swapB(tl, sw, at, dur) {
    var b = kid(sw, 'b'), a = kid(sw, 'a'), f = emOf(sw);
    var hb = b.offsetHeight / f + 'em', ha = a.offsetHeight / f + 'em';
    gsap.set(sw, { height: hb });
    gsap.set(a, { autoAlpha: 0 });
    tl.fromTo(b, { autoAlpha: 1 }, { autoAlpha: 0, duration: dur * 0.4, ease: 'power1.out' }, at);
    tl.fromTo(sw, { height: hb }, { height: ha, duration: dur }, at);
    tl.fromTo(a, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: dur * 0.7, ease: 'power3.out' }, at + dur * 0.3);
  }

  function grow(tl, gw, at, dur) {
    var inner = gw.firstElementChild, hi = inner.offsetHeight / emOf(gw) + 'em';
    gsap.set(gw, { height: 0 });
    gsap.set(inner, { autoAlpha: 0 });
    tl.fromTo(gw, { height: 0 }, { height: hi, duration: dur }, at);
    tl.fromTo(inner, { autoAlpha: 0 }, { autoAlpha: 1, duration: dur * 0.8, ease: 'power1.out' }, at + dur * 0.2);
  }

  // a button that was not there slides in next to the others
  function growX(tl, el, at, dur) {
    var gap = (parseFloat(getComputedStyle(el.parentNode).columnGap) || 0) / emOf(el);
    var from = { flexGrow: 0, marginLeft: -gap + 'em', autoAlpha: 0 };
    gsap.set(el, from);
    tl.fromTo(el, from, { flexGrow: 1, marginLeft: '0em', autoAlpha: 1, duration: dur }, at);
  }

  // yellow highlighter on a field that just got filled in
  function mark(tl, mk, at) {
    if (!mk) return;
    gsap.set(mk, { scaleX: 0 });
    tl.fromTo(mk, { scaleX: 0, autoAlpha: 1 }, { scaleX: 1, duration: 0.28, ease: 'power2.inOut' }, at);
    tl.fromTo(mk, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.45, ease: 'power1.inOut' }, at + 0.6);
  }

  function tapAt(tl, tap, at) {
    if (!tap) return;
    var btn = tap.parentNode;
    gsap.set(tap, { scale: 0.3, autoAlpha: 0 });
    tl.fromTo(tap, { scale: 0.3, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.9, duration: 0.12, ease: 'power1.out' }, at);
    tl.fromTo(tap, { scale: 1, autoAlpha: 0.9 }, { scale: 2, autoAlpha: 0, duration: 0.34, ease: 'power2.out' }, at + 0.12);
    tl.fromTo(btn, { scale: 1 }, { scale: 0.94, duration: 0.08, ease: 'power1.out' }, at);
    tl.fromTo(btn, { scale: 0.94 }, { scale: 1, duration: 0.26, ease: 'back.out(3)' }, at + 0.08);
  }

  // Sito: the yellow line passes over the 2014 site, then a tour of the new one
  function sito(sec, scrub) {
    var S = [0, 1.5, 2.5, 3.5, 4.5], END = 5.5;
    var sc = base(sec, scrub, 3.3, S, END), tl = sc.tl;
    var after = $('.layer.after', sec), wipe = $('.wipe', sec), badge = $('.tn-badge', sec);
    sc.fix = $('.fixhead', after);
    sc.measure = measurer(sc, after, { acts: $('.tn-acts', sec), menu: $('.tn-sec', sec), strip: $('.tn-strip-h', sec) }, []);
    sc.m = sc.measure();
    sc.remeasure = remeasurer(sc);
    gsap.set(after, { '--ty': 0, clipPath: 'inset(0% 0% 0% 100%)' });
    gsap.set(wipe, { xPercent: 100, autoAlpha: 1 });
    tl.fromTo(after, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power1.inOut' }, 0.1);
    tl.fromTo(wipe, { xPercent: 100 }, { xPercent: 0, duration: 1.1, ease: 'power1.inOut' }, 0.1);
    tl.fromTo(wipe, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.18, ease: 'power1.out' }, 1.22);
    tl.fromTo(badge, { scale: 1 }, { scale: 1.18, duration: 0.22, ease: 'power2.out' }, S[1] + 0.35);
    tl.fromTo(badge, { scale: 1.18 }, { scale: 1, duration: 0.3 }, S[1] + 0.57);
    tour(sc, after, 'top', 'acts', S[2] + 0.04, 0.5);
    tapAt(tl, $('.tn-acts .tap', sec), S[2] + 0.62);
    tour(sc, after, 'acts', 'menu', S[3] + 0.04, 0.55);
    tour(sc, after, 'menu', 'strip', S[4] + 0.04, 0.55);
    return sc;
  }

  // Instagram: the profile fills in, the tiles turn over, the post count goes up
  function insta(sec, scrub) {
    var S = [0, 1, 2, 3, 4.4], END = 5.4;
    var sc = base(sec, scrub, 3.3, S, END), tl = sc.tl;
    var L = $('.layer', sec), bio = $('.g-bio', sec), hl = $('.g-hl', sec), tabs = $('.ig-tabs', sec);
    var avB = $('.ig-avs > .b', sec), avA = $('.ig-avs > .a', sec), hlItems = $$('.ig-hl > div', sec);
    var flips = $$('.flip-in', sec), cnt = $('.cnt', sec);
    sc.fix = $('.fixhead', L);
    sc.measure = measurer(sc, L, { grid: tabs }, [bio, hl]);
    sc.m = sc.measure();
    sc.remeasure = remeasurer(sc);
    gsap.set(L, { '--ty': 0 });

    swapT(tl, $('.g-handle', sec), 0.15);
    gsap.set(avA, { autoAlpha: 0, scale: 0.6 });
    tl.fromTo(avB, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0.85, duration: 0.28 }, 0.2);
    tl.fromTo(avA, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.42, ease: 'back.out(1.6)' }, 0.32);
    swapB(tl, bio, 0.4, 0.5);

    growX(tl, $('.g-book', sec), S[1] + 0.15, 0.45);
    tapAt(tl, $('.g-book .tap', sec), S[1] + 0.68);

    grow(tl, hl, S[2] + 0.1, 0.45);
    gsap.set(tabs, { marginTop: '0.8em' });
    tl.fromTo(tabs, { marginTop: '0.8em' }, { marginTop: '0em', duration: 0.45 }, S[2] + 0.1);
    gsap.set(hlItems, { autoAlpha: 0, scale: 0.6 });
    tl.fromTo(hlItems, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.32, ease: 'back.out(1.8)', stagger: 0.06 }, S[2] + 0.28);

    tour(sc, L, 'top', 'grid', S[3] + 0.02, 0.5);
    gsap.set(flips, { rotationY: 0 });
    tl.fromTo(flips, { rotationY: 0 }, { rotationY: 180, duration: 0.55, stagger: { each: 0.075, grid: [3, 3], from: 'start' } }, S[3] + 0.4);

    tour(sc, L, 'grid', 'top', S[4] + 0.02, 0.5);
    var from = +cnt.getAttribute('data-b'), to = +cnt.getAttribute('data-a'), o = { v: from };
    cnt.textContent = from;
    tl.fromTo(o, { v: from }, { v: to, duration: 0.45, ease: 'power1.inOut', onUpdate: function () { cnt.textContent = Math.round(o.v); } }, S[4] + 0.5);
    return sc;
  }

  // Google: the listing completes itself, field after field
  function google(sec, scrub) {
    var S = [0, 1, 2, 3, 4, 5], END = 6.1;
    var sc = base(sec, scrub, 3.6, S, END), tl = sc.tl;
    var L = $('.layer', sec), ph = $('.g-ph', sec), desc = $('.g-desc', sec), hours = $('.g-hours', sec);
    var chips = $('.g-chips', sec), prod = $('.g-prod', sec), reply = $('.g-reply', sec);
    var call = $('.g-call', sec), callI = $('.g-call i', sec), prodItems = $$('.gm-prod > div', sec), phImgs = $$('.g-ph > .a img', sec);
    sc.fix = $('.fixhead', L);
    sc.measure = measurer(sc, L, { acts: $('.gm-acts', sec), hours: $('.g-hoursli', sec), prod: prod, rev: $('.g-revsec', sec) }, [ph, desc, hours, chips, prod, reply]);
    sc.m = sc.measure();
    sc.remeasure = remeasurer(sc);
    gsap.set(L, { '--ty': 0 });

    swapB(tl, ph, 0.12, 0.6);
    gsap.set(phImgs, { scale: 1.15 });
    tl.fromTo(phImgs, { scale: 1.15 }, { scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.06 }, 0.3);

    swapT(tl, $('.g-cat', sec), S[1] + 0.1);
    swapT(tl, $('.g-status', sec), S[1] + 0.3);
    grow(tl, desc, S[1] + 0.5, 0.45);

    tour(sc, L, 'top', 'acts', S[2] + 0.02, 0.45);
    gsap.set(call, { color: '#a3a8ad' });
    gsap.set(callI, { backgroundColor: '#f1f3f4' });
    tl.fromTo(call, { color: '#a3a8ad' }, { color: '#1a62d6', duration: 0.25 }, S[2] + 0.35);
    tl.fromTo(callI, { backgroundColor: '#f1f3f4' }, { backgroundColor: '#e8f0fe', duration: 0.25 }, S[2] + 0.35);
    growX(tl, $('.g-wa', sec), S[2] + 0.42, 0.4);
    swapT(tl, $('.g-phone', sec), S[2] + 0.55);
    swapT(tl, $('.g-web', sec), S[2] + 0.68);
    swapI(tl, $('.g-webicon', sec), S[2] + 0.68);

    tour(sc, L, 'acts', 'hours', S[3] + 0.02, 0.45);
    swapB(tl, hours, S[3] + 0.35, 0.5);
    mark(tl, $('.g-hours .mark', sec), S[3] + 0.62);

    grow(tl, chips, S[4] + 0.05, 0.35);
    grow(tl, prod, S[4] + 0.1, 0.45);
    tour(sc, L, 'hours', 'prod', S[4] + 0.1, 0.5);
    gsap.set(prodItems, { autoAlpha: 0, y: 14 });
    tl.fromTo(prodItems, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power3.out', stagger: 0.07 }, S[4] + 0.38);

    tour(sc, L, 'prod', 'rev', S[5] + 0.02, 0.45);
    swapB(tl, reply, S[5] + 0.35, 0.5);
    return sc;
  }
})();
