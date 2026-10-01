# Project Grit Website Rough Draft

A mobile-first Next.js rough draft built from the founder brief.

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deploy
Push this folder to GitHub, import the repository into Vercel, and deploy with the default Next.js settings. Replace `example.com` in sitemap/robots when the domain is chosen.

## The one file founders edit
`src/config/site.ts` controls the logo path, brand colors, prices, Founding 100 count, join URLs, meetup info, social links, contact email, coaching links, form endpoint, launch date, and analytics toggle. Homepage copy lives in `src/content/home.ts`.

## Logo note
The supplied asset was a photo of the logo on a laptop screen, not a transparent source logo. I cropped the logo area into `public/brand/project-grit-logo.png` as a temporary draft asset. Swap it for the final transparent logo when Jo delivers it.

## Palette
- `#0B111A` deep navy-black: sampled visually from the logo background.
- `#151C24` charcoal-blue: raised surfaces without losing the dark field-gear feel.
- `#F0EEE8` bone: warm readable text matching the off-white mountain/cross.
- `#A9ADB1` steel: muted supporting copy.
- `#D7A84B` worn gold: main accent pulled from GRIT and the sunburst.
- `#667A58` olive: secondary accent inspired by the palette shown beside the logo.

Typography in this zero-dependency draft uses Georgia for rugged slab-like display copy and system Arial for body copy. For production, use Roboto Slab + Inter via next/font once final branding is approved.

## Placeholders
Home: mission statement, Founding count, app screenshots, patch, coin, founder photos and bios, cancellation wording. Events: time, venue, address, agenda, speakers, service projects. Founders: photos, bios, origin story, mission, coaching links. FAQ: privacy details, cancellation, guest rules, church affiliation, meetup agenda. Global: join URLs, social URLs, contact email, legal entity, form endpoint, production domain. Help: two local Quad Cities resources. Privacy/Terms: attorney-supplied legal text.

## Assumptions
- Founding spots start at 100 because no current member count was supplied.
- Join links point back to the pricing section until checkout URLs exist.
- Meetup date display is intentionally generic on the homepage; `/events` computes six last-Friday dates client-side at render time.
- No church affiliation is assumed.
- No founder biography details were invented.
- No testimonials or member claims were invented.
- The form is a front-end success-state prototype until `FORM_ENDPOINT` is connected.

## Three conversion improvements after real assets arrive
1. Replace placeholders with documentary photos from a real meetup, especially one strong hero image and founder portraits.
2. Add the final logo package and real patch/coin photography to make membership feel tangible.
3. Add a short founder video above pricing that explains the standard and invites men to the next free meetup.

## QA checklist
- Mobile hero explains the offer and includes join CTA.
- Sticky mobile join bar included.
- No fake testimonials, reviews, bios, or member photos.
- Branden spelling checked.
- Prices come from config.
- `/help` has crisis resources and no sales CTA in page content.
- Core content is server-rendered.
- Reduced-motion preference respected.
- Keyboard focus/skip link included.
- Lighthouse scores require running against the deployed build and are not fabricated here.

## Verified deployment package
Use Node.js 24.x and the included package-lock.json. Dependency versions are pinned. Build command: `npm run build`; output directory: leave Vercel's Next.js default. The project files belong at the repository root.

This package preserves the supplied draft design and content. Checkout URLs, real form endpoint, founder content, legal text, meetup details, and production domain still require founder-provided values. Until configured, /join takes visitors to homepage pricing and signup displays a coming-soon message without claiming to save their details. Replace example.com in robots.ts and sitemap.ts before public launch. No original Pasted text requirements were included with this ZIP; verification uses the supplied source and README.
