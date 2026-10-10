# Narwasita visual QA and content release checklist

## Visual direction
Fashion editorial from Indonesia, warm stone, charcoal and muted bronze.
One dominant model-led hero, asymmetric product looks, one immersive interlude,
philosophy with sticky material image, cropped scroll-frame reveal.
Avoid badges above headlines, fake testimonials, invented materials, dummy checkout
or repeating identical three-card layouts.

## Browser verification
- Cloudflare Pages build from branch main, command npm run build and output dist: PASSED 2026-10-10.
- Desktop first fold checked at 1440 x 900 with Cloudflare Browser Rendering screenshot.
- Mobile first fold checked at 390 x 844; model head, garment and headline legible.
- 320 x 780 Browser Rendering scrape: hero content width 280 px, headline width 280 px, CTA width 175 px.
- Review the full scrolling experience on physical mobile and tablet before final approval.
- Test prefers-reduced-motion, Escape, keyboard, network throttling and footer links.

## IMPORTANT: campaign references requiring owner's approval
Existing photos in public/images are visual examples, not verified proofs of final
Narwasita products, materials, manufacturing methods or brand-owned photo rights.
Featured product labels are deliberately editorial looks, not stock/SKU claims.
The AI-generated photo supplied separately in this ChatGPT session is a concept,
not a verified photograph of the actual printed garment. **Do not publish it
as official product photography** without reviewing brand artwork and release rights.
Marketplace URLs, QR verification URL and partner contact are intentionally disabled
until the owner verifies real live destinations.

## Next content handoff
Supply official product photos with correct graphics, approved brand logo,
product names, size chart, material details, and official store/contact URLs.
The current assets can then be replaced through src/content/site.ts and
src/content/products.ts without changing the visual system.

## Deployment
React 19 + Vite 8 + TypeScript + Tailwind CSS 4 + Framer Motion, built
using npm ci && npm run build, deployed via Cloudflare Pages to dist.
Any future custom production domain must update canonical/OG/sitemap URLs.
