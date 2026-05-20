# AI Trainer Personal Website Concept

## Core Idea

The website opens with an interactive black 3D revolver as the main visual focus. The revolver can be dragged, rotated, and inspected by the visitor, creating a memorable first impression before the site content is revealed.

The concept connects the revolver's cylinder to the website navigation: when loading finishes, or when the visitor clicks the revolver or scrolls downward, the cylinder swings out. Each bullet in the cylinder represents one major section of the personal website.

## Positioning

This is a job-seeking personal website for an AI Trainer role. The experience should feel precise, controlled, analytical, and memorable, while still staying professional enough for recruiters and hiring managers.

The revolver is used as a metaphor for focus, capability, and selected expertise. The bullets function as "loaded skills" or "career modules" rather than violent imagery.

## First Screen

- Full-screen black or near-black environment.
- A black 3D revolver sits in the center as the primary object.
- The visitor can drag to rotate and inspect the model.
- Subtle lighting should reveal the revolver form without making the scene feel cluttered.
- Minimal text at first, possibly only the candidate name, role target, and a small interaction hint.

## Transition Interaction

The site moves from the intro scene into navigation when one of these triggers happens:

- Loading completes.
- Visitor clicks the revolver.
- Visitor scrolls down with the mouse wheel.

After the trigger:

- The revolver cylinder swings outward.
- The camera may move closer to the cylinder.
- The bullets become readable, clickable navigation items.
- The page transitions from cinematic intro to practical portfolio navigation.

## Bullet Navigation

Each bullet represents one website directory or section.

Initial section candidates:

- Personal Profile
- Work Experience
- Portfolio
- AI Training Cases
- Skills
- Contact

Alternative Chinese labels:

- 个人简介
- 工作经历
- 作品集
- AI 训练案例
- 技能栈
- 联系方式

## Section Meaning

Personal Profile:
Introduce identity, target role, strengths, and career direction.

Work Experience:
Show previous work history, responsibilities, impact, and transferable skills.

Portfolio:
Display selected projects, ideally with screenshots, goals, methods, and outcomes.

AI Training Cases:
Highlight work related to prompt evaluation, data annotation, model response comparison, quality control, or AI workflow design.

Skills:
List AI-related, content-related, data-related, and communication skills.

Contact:
Provide email, resume download, social links, and call-to-action.

## Visual Tone

- Dark, cinematic, high-contrast opening.
- Controlled and professional rather than flashy.
- Metallic black material for the revolver.
- The bullets can use subtle accent colors to distinguish sections.
- Typography should be clean, modern, and readable.

## UX Concerns

- The revolver interaction should not block access to content.
- There must be an obvious fallback navigation for visitors who do not interact with the 3D object.
- The site should load quickly enough for recruiters.
- On mobile, the 3D interaction should be simplified and touch-friendly.
- The weapon imagery should be handled carefully to avoid looking aggressive or unsafe.

## Possible Safer Framing

If the revolver concept feels too risky for a hiring audience, keep the mechanical cylinder navigation idea but visually push it toward:

- A stylized cinematic prop.
- A mechanical skill selector.
- A black-metal rotating chamber.
- A fictional sci-fi revolver rather than a realistic firearm.

## Technical Direction

Recommended implementation:

- Three.js or React Three Fiber for the 3D intro.
- GLTF/GLB model for the revolver.
- Scroll and click events to trigger the cylinder animation.
- CSS/HTML sections for the main content after the 3D intro.
- Responsive fallback navigation for mobile and accessibility.

Key technical tasks:

- Find or create a suitable 3D revolver model.
- Optimize model size for web loading.
- Build drag-to-rotate inspection.
- Animate cylinder swing-out.
- Attach section labels and click targets to bullets.
- Build fallback menu and conventional page sections.

## Open Questions

- Should the site use a realistic revolver, a stylized prop, or a fictional sci-fi version?
- Should bullets open sections directly, or should selecting a bullet trigger a second transition?
- Should the intro play automatically after loading, or wait for user input?
- What personal information, projects, and AI training examples should be included first?
- Should the website language be Chinese, English, or bilingual?
