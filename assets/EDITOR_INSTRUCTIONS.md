# Makers' Society Members' Portal

A simple, password-protected members' portal — HTML/CSS/JS, no server or database needed. Upload the whole folder to any standard web host (or your Students' Union web space) and it works as-is.

## Pages
- `index.html` — password gate (this is the homepage / entry point)
- `home.html` — dashboard shown after logging in, with links to everything
- `workshops.html` — workshop lab sheets (PDFs in pairs)
- `events.html` — Google Calendar embed
- `faqs.html` — members' FAQs
- `about.html` — contact details & social media links
- `keyring.html` — **public** keyring price calculator (no login needed — nav bar just has a "Sign In" link back to `index.html`). Edit the `MODELS`, `FLAT_SERVICE_CHARGE`, and `DISCOUNT_TIERS` constants near the bottom of the file to update pricing. Since it's public, it's worth linking to it from wherever makes sense (your SU page, Instagram bio, etc.) — it isn't currently linked from the members' dashboard.

## 1. Set your own password
Open `js/auth.js` and follow the instructions in the comments — you generate a SHA‑256 hash of your chosen password and paste it in. The default password is **makers2026**, so change this before sharing the site with anyone.

> **Note on security — please read if hosting on GitHub Pages:** this lock is front-end-only (no server, no login accounts). GitHub Pages serves every file as a plain public URL with no server-side processing at all, so this password check can only stop *casual* access (e.g. a random link being shared around, or someone stumbling onto a page). It cannot stop someone who deliberately opens browser dev tools or requests a file's direct URL (e.g. `yourdomain.com/assets/pdfs/soldering-basics.pdf`) — those are always reachable regardless of the password screen. Two things are already done to reduce exposure:
> - `robots.txt` and `<meta name="robots" content="noindex, nofollow">` keep every page out of Google/search results.
> - The login check is a *blocking* script at the very top of each page's `<head>`, so an unauthorised visitor sees a blank page and gets redirected before any content renders (rather than a brief flash of content).
>
> **If you want genuinely secure protection** while staying on GitHub Pages, the standard free approach is a small **Cloudflare Worker** placed in front of your site: it checks the password server-side before ever fetching your GitHub Pages content, so protected files are never reachable by URL guessing. It needs a free Cloudflare account (a custom domain is optional — a free `workers.dev` subdomain works too). Ask if you'd like a step-by-step Worker script for this.

## 2. Upload your banner image
Replace `assets/img/banner.jpg` with your own image, **keeping the same filename** (`banner.jpg`). It will automatically appear as the background of:
- the password page
- the nav bar + page title section on every other page

Recommended size: roughly 1920×500px (wide and short) so it crops nicely behind the title text.

## 3. Add your workshop PDFs
Put your PDF files in `assets/pdfs/`, then open `workshops.html` and, for each slot:
- update the `<h3>` title text
- update the `iframe src="assets/pdfs/your-file.pdf"` to match

Copy a whole `<div class="pdf-row">…</div>` block to add more rows (2 PDFs per row).

## 4. Connect your Google Calendar
In Google Calendar → your society calendar's Settings → **Integrate calendar**, copy the embed URL and paste it into the `iframe src="…"` in `events.html`.

## 5. Update the FAQs
Edit the text and swap the images (`assets/img/faq-*.jpg`) directly in `faqs.html`. Add `class="reverse"` to a `faq-row` div to flip the image to the other side.

## 6. Update contact & social details
In `about.html`, update:
- the email address and postal address
- each social media `href` link to your real profile URLs

## Notes
- Fonts (Roboto + Montserrat) load from Google Fonts, colours and spacing match the brief: primary yellow `#ffd54f`, secondary blue `#92d3f5` and green `#5c9e31`, black text on a warm off-white background.
- The site is responsive — the nav collapses to a hamburger menu on small screens.
- All placeholder images/PDFs are clearly labelled "replace" so nothing looks like real content by accident.