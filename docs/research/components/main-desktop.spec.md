# MainDesktop Specification

## Overview
- Target file: `index.html`, `src/styles.css`, `src/main.js`
- Screenshot: `docs/design-references/simone-desktop.png`
- Interaction model: click-driven with draggable popup windows

## Computed Styles
- Body: black background with repeating colored motif, Arial/Helvetica system font.
- Main window: centered, max width 640px, beveled 2px black border, chrome fill `#bfc2df`, strong shadow.
- Titlebar: 34px high, blue-to-purple-to-magenta gradient, white bold title text, three boxed controls.
- Desktop area: white inset panel, repeated horizontal 1px scan texture, min height 292px desktop and 448px mobile.
- Icons: 84x84px beveled buttons, 48px pixelated image, bold black label, blue label hover.
- Footer: two 36px high beveled buttons desktop, stacked on mobile.

## Assets
- `public/icons/*.gif`
- `public/icons/*.png`

## Responsive Behavior
- Desktop 1440px: centered window, six icons per first row, trash anchored bottom-right.
- Mobile 390px: full-width window, three icon columns, footer buttons stacked.
