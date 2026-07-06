from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "index.html"
PAGES = [path for path in ROOT.rglob("*.html") if path != SOURCE]


def read(path):
    return path.read_text(encoding="utf-8")


def write(path, text):
    path.write_text(text, encoding="utf-8")


def extract(pattern, text, label):
    match = re.search(pattern, text, flags=re.S)
    if not match:
        raise SystemExit(f"Could not find {label} in {SOURCE}")
    return match.group(0)


source = read(SOURCE)
ambient = extract(r'<div class="ambient-gallery".*?</div><header class="site-header">', source, "ambient/header opener")
header_inner = extract(r'<header class="site-header">.*?</header>', source, "header")
footer = extract(r'<footer class="site-footer">.*?</footer>', source, "footer")

for page in PAGES:
    text = read(page)
    text = re.sub(r'<div class="ambient-gallery".*?</div><header class="site-header">', ambient, text, count=1, flags=re.S)
    text = re.sub(r'<header class="site-header">.*?</header>', header_inner, text, count=1, flags=re.S)
    text = re.sub(r'<footer class="site-footer">.*?</footer>', footer, text, count=1, flags=re.S)
    write(page, text)

print(f"Synced shared header/footer blocks to {len(PAGES)} pages.")
