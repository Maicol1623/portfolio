"""Builds studio/index.html from src/index.tpl.html and bundles src/main.js (with three.js) into js/studio.js.

Usage (from the repo root):  python3 studio/src/build.py <path-to-node_modules-with-esbuild-and-three>
"""
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
REPO = os.path.dirname(SITE)
WA = 'https://wa.me/393715399463?text=Ciao%20Maicol%2C%20ho%20visto%20il%20tuo%20sito'


def main():
    tpl = open(os.path.join(HERE, 'index.tpl.html'), encoding='utf-8').read()
    logo = open(os.path.join(REPO, 'favicon.svg'), encoding='utf-8').read().strip()
    logo = logo.replace('<svg ', '<svg aria-hidden="true" ', 1)
    qr = open(os.path.join(HERE, 'qr.svg'), encoding='utf-8').read().strip()
    qr = qr.replace('<svg ', '<svg role="img" aria-label="Codice QR per scrivermi su WhatsApp" ', 1)
    html = tpl.replace('{{LOGO}}', logo).replace('{{QR}}', qr).replace('{{WA}}', WA)
    assert '{{' not in html, 'placeholder left in template'
    open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(html)
    print('index.html written')
    if len(sys.argv) > 1:
        nm = os.path.abspath(sys.argv[1])
        esbuild = os.path.join(nm, '.bin', 'esbuild')
        subprocess.run([esbuild, os.path.join(HERE, 'main.js'), '--bundle', '--format=esm', '--minify',
                        '--target=es2020', '--legal-comments=eof',
                        '--outfile=' + os.path.join(SITE, 'js', 'studio.js')],
                       check=True, env=dict(os.environ, NODE_PATH=nm), cwd=os.path.dirname(nm))
        print('js/studio.js bundled')


if __name__ == '__main__':
    main()
