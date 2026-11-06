# Krishna Garden Da Nang — Website

Premium static site (Next.js 14 + GSAP ScrollTrigger). Light theme, bilingual EN/VI.
Sections: Home, Menu (search + category + price filters), About Us, Visit (location + socials).

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # static site is created in ./out (upload that folder to any host)

## Edit content — everything is in `app/menuData.js`
- Menu items and prices
- WhatsApp number (TODO: replace placeholder 84000000000)
- Social links (TODO: currently open each platform's home page)
- Address / Google Maps search text (TODO: add the exact address)
- About Us text

## Images
- Section photos: `public/img/<category-id>.jpg` (native 1376x768, high-quality JPG; replace a file to change a photo).
- About Us photo: `public/img/rice.jpg`. Replace it with your ambience photo (keep the file name, or edit `app/page.js`).
- Logo: `public/logo.png` (cropped from the supplied menu photo, so resolution is limited).
  Replace it with the original high-resolution logo for the sharpest result.

## Notes
- Font: Montserrat (bundled, works offline, includes Vietnamese).
- Scroll effects respect "reduce motion" settings.
