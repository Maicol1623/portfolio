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

Il sito di mk digital studio in 3D. Il punto giallo del logo apre la pagina, salta sulle parole, monta una pagina web, cade su una mappa e diventa il segnaposto, gira le foto di un profilo Instagram e alla fine torna nel logo. Chi scrive il nome del suo negozio lo vede nelle scene e nel messaggio WhatsApp.

- `studio/src/index.tpl.html` e `studio/src/main.js`: il sorgente. `studio/index.html` e `studio/js/studio.js` si rifanno con `python3 studio/src/build.py <cartella node_modules con three ed esbuild>`.
- `studio/css/studio.css`: stile. `studio/fonts`: Mona Sans e Inter. `studio/img`: le scene come immagini, per i telefoni senza WebGL.

Con le animazioni ridotte le scene restano ferme e già montate; senza WebGL o senza JavaScript si vedono le immagini delle scene.

Licenze di librerie, font e foto: `LICENSES.md`.
