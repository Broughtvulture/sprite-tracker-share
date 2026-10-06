# Sprite Tracker Share

1. Create a public GitHub repo named `sprite-tracker-share`.
2. Upload `index.html`, `styles.css`, `app.js`, and the `images` folder to the repo root.
3. Copy every `sprite_*.png` file from `app/src/main/res/drawable/` into `images/`.
4. In GitHub: Settings > Pages > Deploy from a branch > `main` > `/ (root)`.
5. The QR viewer will be at:
   https://broughtvulture.github.io/sprite-tracker-share/

The collection is stored after `#` in the URL, so GitHub's server does not receive that fragment in the HTTP request. The scanned link can still exist in browser history or be copied by the recipient, so treat it as a shareable snapshot, not a secret.
