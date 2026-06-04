# Asset Replacement Plan - v0.2

**Date:** 2026-05-27  
**Status:** Draft, pending user confirmation  
**Scope:** Preserve current window and UI sizes. Replace visual assets first.

## 1. Objective

The next pass should keep the current screenshot's structure:

- Same centered command window size.
- Same icon grid density.
- Same 84px desktop icon buttons.
- Same 48px pixel icon images.
- Same footer/statusbar proportions.
- Same popup-window interaction model.

The change should come from visual assets and skinning:

- Background pattern.
- Icon images.
- Small footer/titlebar images.
- Window chrome palette and texture.
- AIGC TV standby image.

## 2. Locked Existing Sizes

| Target | Current Size / Rule | Keep? |
|---|---:|---|
| Main window | `min(640px, calc(100vw - 24px))` | Yes |
| Titlebar height | `34px` minimum | Yes |
| Window controls | `28px x 26px` | Yes |
| Desktop area | `292px` desktop minimum | Yes |
| Icon button | `84px x 84px` | Yes |
| Icon bitmap | `48px x 48px` | Yes |
| Grid | 6 columns desktop, 3 mobile, 2 tiny mobile | Yes |
| Footer button icon | `20px x 20px` | Yes |

## 3. Background Direction

Replace the current colored circle `05/2` wallpaper with an original tactical signal pattern.

Design requirements:

- Must tile cleanly.
- Must stay dark enough that the central window remains readable.
- Should feel like a 1990s terminal / mecha system wallpaper, not a modern gradient.
- Can use small repeated marks: scan ticks, sync bars, warning diagonals, signal rings, archive numbers.
- Avoid official anime logos, names, or recognizable symbols.
- Avoid large illustrations or noisy neon clutter.

Recommended asset specs:

- CSS-first option: repeating gradients and small text layers.
- Bitmap option: `64px x 64px`, `96px x 96px`, or `128px x 128px` seamless tile.
- Colors: black base, desaturated purple grid, acid green/cyan signal marks, amber warning accents.

Potential names:

- `public/backgrounds/sync-grid-tile.png`
- `public/backgrounds/archive-signal-tile.png`
- `public/backgrounds/aigc-terminal-tile.png`

## 4. Icon Replacement Direction

Keep the exact `48px x 48px` pixel-art footprint.

Recommended icon mapping:

| Current Icon | Future Label | Image Concept |
|---|---|---|
| `about.gif` | About | Candidate ID card / face terminal |
| `projects.gif` | Project | Archive folder / case stack |
| `contact.gif` | Contact | Signal mail / comms terminal |
| `blog.gif` | Blog | Log file / text terminal |
| `links.gif` | IP | Personal IP badge / identity signal |
| `litebulb.gif` | My World | Personal world map / small glowing room |
| `music.gif` | Music | Audio disc / playlist terminal |
| `guestbook.png` | Guest | Guest record / message book |
| `looptv.gif` | AIGC TV | CRT monitor with static / AV channel |
| `corrupted.gif` | Dont Click | Locked warning file / unstable signal |

Removed from the visible UI:

- `trash.gif` / `Cestino`
- Old `Guestbook` label
- Old `loop TV` label
- Old `Lite Bulb` label
- Old random corrupted filename label

Notes:

- Do not change the icon button size.
- Do not use large modern SVG icons unless converted into pixel-art style.
- Icons should remain legible at 48px.
- Animation is optional and should be subtle.

## 5. Window Skin Direction

Keep the geometry, but change the skin.

Targets:

- `--chrome`
- `--chrome-dark`
- titlebar gradient
- beveled border colors
- desktop area line texture
- footer/statusbar button skin

Recommended shift:

- From lavender classic chrome to dark graphite/purple-black chrome.
- Titlebar from blue-magenta clone gradient to dark purple with green/cyan status strip.
- Inner desktop from white paper to pale terminal-gray or dark low-contrast panel.

Important constraint:

Do not make body text hard to read. If the desktop area becomes dark, popup and content text styles must be adjusted together.

## 6. AIGC TV Placeholder

Before real videos exist, `AIGC TV` should open a standby state, not a broken player.

Suggested placeholder copy:

```text
AIGC REEL STANDBY
Footage slots are reserved.
Selected AIGC video works will be loaded here.
```

Suggested visual:

- Existing `loop TV` icon slot becomes a CRT monitor with static.
- Popup or future full-screen mode can show `AV-00`.
- Use static/no-signal texture as a transition motif later.

## 7. Implementation Order

1. Replace background pattern.
2. Replace the icon image set while keeping filenames or adding a mapping.
3. Adjust window/titlebar colors and bevels.
4. Rename visible labels to job-seeking modules.
5. Replace `loop TV` popup with AIGC TV standby content.
6. Only after video assets exist, implement full-screen AIGC TV playback.

## 8. Design Acceptance Criteria

- At 1440px desktop, the main command window occupies the same apparent size as the current screenshot.
- Icon buttons remain 84px and icon art remains 48px.
- The new background feels intentional but does not compete with the window.
- The first screen still reads as a retro desktop, not a new dashboard.
- Recruiters can identify the site as an AI Trainer portfolio from labels and first popup content.
- No official IP symbols, character art, or direct logo imitation.
