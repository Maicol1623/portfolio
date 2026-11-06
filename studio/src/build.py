"""Builds studio/index.html from src/index.tpl.html and bundles src/main.js into js/studio.js.

Usage (from the repo root):  python3 studio/src/build.py <path-to-node_modules-with-esbuild>
Without the argument only the HTML is written.
"""
import json
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
REPO = os.path.dirname(SITE)
WA = 'https://wa.me/393715399463?text=Ciao%20Maicol%2C%20ho%20visto%20il%20tuo%20sito.%20Vorrei%20la%20prova%20gratis%20per%20il%20mio%20negozio.'
# the invented example shop, as in main.js (DEMO): its Instagram grid is written into the page
DEMO = {'name': 'Trattoria da Ines', 'kind': 'food', 'cat': 'Trattoria', 'city': '', 'addr': 'Via Esempio 12',
        'hours': 'Tu-Su 12:00-15:00, 19:00-23:00', 'web': '', 'osm': '', 'src': 'demo'}


def qr_svg():
    import segno  # pip package, only needed at build time
    q = segno.make(WA, error='m')
    path = os.path.join(HERE, 'qr.svg')
    q.save(path, kind='svg', scale=1, border=2, dark='#1b1b1b', light=None, xmldecl=False, svgns=True, nl=False, omitsize=True)
    return open(path, encoding='utf-8').read().strip()


def grid_html():
    code = ("import {gridHTML} from " + json.dumps(os.path.join(HERE, 'tiles.js')) + ";"
            "process.stdout.write(gridHTML(" + json.dumps(DEMO) + "));")
    out = subprocess.run(['node', '--input-type=module', '-e', code], check=True, capture_output=True, text=True)
    return out.stdout


def main():
    tpl = open(os.path.join(HERE, 'index.tpl.html'), encoding='utf-8').read()
    logo = open(os.path.join(REPO, 'favicon.svg'), encoding='utf-8').read().strip()
    logo = logo.replace('<svg ', '<svg aria-hidden="true" ', 1)
    qr = qr_svg()
    qr = qr.replace('<svg ', '<svg role="img" aria-label="Codice QR per scrivermi su WhatsApp" ', 1)
    ld = json.load(open(os.path.join(HERE, 'jsonld.json'), encoding='utf-8'))
    ld_tag = '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + '</script>'
    html = (tpl.replace('{{LOGO}}', logo).replace('{{QR}}', qr).replace('{{WA}}', WA)
            .replace('{{JSONLD}}', ld_tag).replace('{{IGGRID}}', grid_html()))
    assert '{{' not in html, 'placeholder left in template'
    assert WA in html
    open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(html)
    print('index.html written')
    if len(sys.argv) > 1:
        nm = os.path.abspath(sys.argv[1])
        esbuild = os.path.join(nm, '.bin', 'esbuild')
        subprocess.run([esbuild, os.path.join(HERE, 'main.js'), '--bundle', '--format=esm', '--minify',
                        '--target=es2020', '--legal-comments=eof',
                        '--outfile=' + os.path.join(SITE, 'js', 'studio.js')],
                       check=True, cwd=os.path.dirname(nm))
        print('js/studio.js bundled')


if __name__ == '__main__':
    main()
