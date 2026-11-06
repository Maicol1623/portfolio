# Prima e dopo

Tre esempi di mk digital studio su negozi inventati: un sito, un profilo Instagram e una scheda Google. Mentre scorri, ogni esempio passa da prima a dopo.

Pagina: https://maicol1623.github.io/portfolio/

Nomi, indirizzi, prezzi e numeri dei tre negozi sono inventati. Follower, stelle e recensioni restano gli stessi prima e dopo.

## Com'è fatta

- `index.html`: tutto il testo della pagina.
- `assets/css/site.css`: impaginazione, colori e sezioni.
- `assets/css/mock.css`: gli schermi del telefono (sito, Instagram, scheda Google).
- `assets/js/main.js`: le animazioni, con GSAP, ScrollTrigger, SplitText e Lenis (in `assets/vendor`).
- `assets/fonts` e `assets/img`: font e foto, tutto in locale.

Senza JavaScript, o con le animazioni ridotte nel telefono, la pagina resta completa e ogni esempio ha i pulsanti Prima e Dopo.

## Sito personale (cartella `studio`)

Pagina: https://maicol1623.github.io/portfolio/studio/

Il sito di mk digital studio. Il punto giallo del logo è una pallina che si muove come una vera: cade nel titolo, diventa il tasto del sito nel telefono, poi il segnaposto sulla mappa, salta tra le foto di Instagram e alla fine fa da tasto Invia. In alto chi cerca il suo negozio lo trova su OpenStreetMap e vede come diventano il sito, la scheda Google e il profilo, con il messaggio WhatsApp già scritto.

- `studio/src`: il sorgente. `index.tpl.html` è la pagina, `main.js` le scene, `dot.js` la pallina, `shopfinder.js` la ricerca, `tiles.js` la griglia Instagram. `studio/index.html` e `studio/js/studio.js` si rifanno con `python3 studio/src/build.py <cartella node_modules con esbuild>` (per il QR serve il pacchetto Python `segno`).
- `studio/css/studio.css`: stile. `studio/fonts`: MK Grotesk (Mona Sans ridotto e rinominato) e Inter. `studio/img`: le foto dei negozi inventati e le immagini prima e dopo.

Con le animazioni ridotte, o senza JavaScript, ogni punto resta fermo al suo posto e la pagina è completa. Senza JavaScript la ricerca apre WhatsApp con il nome scritto.

Licenze di librerie, font e foto: `LICENSES.md`.
