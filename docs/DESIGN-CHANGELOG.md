# Design Changelog

## [v0.3] - 2026-05-27

### Change Background

The user locked the visible desktop UI labels to:

`About / Project / Contact / Blog / IP / My World / Music / Guest / AIGC TV / Dont Click`

All other visible desktop icons should be removed.

### Design Proposal

Keep the same command-window layout and icon grid, but update the app list to exactly 10 visible icons. Use existing icon assets as placeholders until the next icon-design pass.

### Key Decisions

| Topic | Decision | Reason |
|---|---|---|
| App count | 10 visible desktop icons | Matches the user's locked UI list. |
| `Cestino` | Remove from visible UI | It is not in the requested list. |
| `Projects` | Rename to `Project` | Match requested label exactly. |
| `Links` | Replace with `IP` | Match requested label and prepare future icon. |
| `Lite Bulb` | Replace with `My World` | Reuse slot without changing layout. |
| `Guestbook` | Rename to `Guest` | Match requested label. |
| `loop TV` | Rename to `AIGC TV` | Preserve future video-portfolio direction. |
| `Ogbqkd` | Rename to `Dont Click` | Keep playful warning slot intentionally. |
| Blog behavior | Local placeholder window for now | Avoid linking to the reference site's blog. |

### Impact Scope

- Updated:
  - `index.html`
  - `src/main.js`
  - `docs/DESIGN.md`
  - `docs/DESIGN-CHANGELOG.md`
  - `docs/design/asset-replacement-plan.md`
- Added:
  - `docs/design/icon-design-brief.md`

## [v0.2] - 2026-05-27

### Change Background

The user clarified that the v0.1 design draft changed the website shape too much. The intended next step is not a full dashboard redesign. The command-window size, UI scale, desktop icon grid, and overall screenshot proportions should be preserved.

The next design phase should start from background images and UI/icon images.

### Design Proposal

Use an **Asset-First Retro OS Refresh**:

- Preserve current command window dimensions.
- Preserve 84px icon buttons and 48px icon artwork.
- Preserve the desktop-grid and popup-window interaction model.
- Replace wallpaper/background first.
- Replace role-focused icon images second.
- Then adjust titlebar, bevels, and surface colors.
- Keep AIGC TV as a standby icon/popup until real video assets exist.

### Key Decisions

| Topic | Decision | Reason |
|---|---|---|
| Layout scope | Keep existing window and UI sizes | User wants visual asset changes first, not shape changes. |
| Main window | Preserve 640px desktop width rule | Matches the provided reference screenshot. |
| Icon grid | Preserve 84px buttons and 48px images | Keeps the current retro OS density. |
| Background | Replace with original tactical signal wallpaper | Highest impact with lowest structural risk. |
| Icons | Redraw/replace module icons in-place | Lets the site become personal without rebuilding layout. |
| v0.1 preview | Mood reference only | Too large a structural change for the current plan. |

### Impact Scope

- Updated:
  - `docs/DESIGN.md`
  - `docs/DESIGN-CHANGELOG.md`
- Added:
  - `docs/design/asset-replacement-plan.md`
- Future implementation still affects:
  - `src/styles.css`
  - `src/main.js`
  - `index.html`
  - `public/icons/*`
  - optional `public/backgrounds/*`

## [v0.1] - 2026-05-27

### Change Background

The site is being repositioned from a visual clone of a retro desktop into a personal job-seeking portfolio for AI Trainer roles. The user wants the site to introduce personal development, internship experience, and portfolio work, with an EVA-inspired visual direction that does not hide the recruitment goal.

The previous brainstorm also decided that `loop TV` should be preserved and later transformed into an AIGC video portfolio player. Real video assets are not available yet, so this phase documents structure and placeholders only.

### Design Proposal

Use a **Candidate Archive Terminal** direction:

- Original dark mecha-control-terminal aesthetic.
- Clear role-first first screen.
- Module navigation for Profile, Experience, AI Training Cases, Portfolio, AIGC TV, and Contact.
- Case records structured around task, data type, role, process, quality review, and artifacts.
- AIGC TV as a standby showreel module now, full-screen video player later.

### Key Decisions

| Topic | Decision | Reason |
|---|---|---|
| Overall style | Candidate Archive Terminal | Preserves the current retro interaction while making the site feel personal and job-focused. |
| EVA influence | Use original mecha terminal cues only | Avoids copying official IP and keeps the site professional. |
| Typography | Sans for readable resume content, mono for UI metadata | Pure mono would hurt longer reading. |
| Color | Near-black, purple-black panels, green/amber/orange/cyan accents | Captures control-terminal energy without becoming one-note purple. |
| `loop TV` | Rename to AIGC TV / Showreel | Turns a novelty feature into a portfolio feature. |
| AIGC videos | Placeholder for now | User will provide real videos later. |
| Removed modules | Music, Guestbook, Lite Bulb, Cestino, corrupted file | These do not directly support the job-search goal. |

### Impact Scope

- New design docs:
  - `docs/DESIGN.md`
  - `docs/DESIGN-CHANGELOG.md`
- New design asset:
  - `docs/design/assets/ai-trainer-control-terminal-preview.png`
- Affected future implementation files:
  - `index.html`
  - `src/main.js`
  - `src/styles.css`
- No code changes in this design phase.
