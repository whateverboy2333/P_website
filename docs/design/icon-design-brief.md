# Icon Design Brief

**Date:** 2026-05-27  
**Status:** Draft  
**Goal:** Prepare the next 48px pixel-art icon design pass.

## 1. Locked UI List

The desktop UI should contain exactly these 10 visible app icons:

1. About
2. Project
3. Contact
4. Blog
5. IP
6. My World
7. Music
8. Guest
9. AIGC TV
10. Dont Click

All other desktop icons are removed from the visible UI.

## 2. Size Constraints

- Icon button: `84px x 84px`
- Icon image: `48px x 48px`
- Footer icon image: `20px x 20px`
- Pixel-art rendering should stay crisp with `image-rendering: pixelated`

## 3. Placeholder Mapping

| Label | Current Placeholder Asset | Future Icon Concept |
|---|---|---|
| About | `public/icons/about.gif` | Animated cyberpunk anime face: side armor opens to reveal inner robot head |
| Project | `public/icons/projects.gif` | Case folder, archive drawer, or project stack |
| Contact | `public/icons/contact.gif` | Signal mail, comms terminal, or receiver |
| Blog | `public/icons/blog.gif` | Log file, notebook, or terminal page |
| IP | `public/icons/links.gif` | Personal IP badge, identity node, or network mark |
| My World | `public/icons/litebulb.gif` | Personal room, small planet, or inner-world window |
| Music | `public/icons/music.gif` | Disc, waveform, or player terminal |
| Guest | `public/icons/guestbook.png` | Guest record, message book, or visitor card |
| AIGC TV | `public/icons/looptv.gif` | CRT monitor with static, `AV-00`, or video signal tile |
| Dont Click | `public/icons/corrupted.gif` | Locked warning file, unstable signal, or forbidden button |

## 4. Visual Style

- 48px retro pixel-art icons.
- Original mecha-terminal / tactical OS flavor.
- Black, graphite, muted purple, acid green, amber, and cyan.
- No official anime logos, symbols, character art, or recognizable IP marks.
- Avoid modern flat SVG icon style unless converted into pixel art.
- Text inside icons should be avoided except tiny labels such as `AV`, `IP`, or warning marks.

## 5. Implementation Note

When final icons are ready, either replace the current placeholder files in `public/icons/` or add new filenames and update the `icons` array in `src/main.js`.

## 6. About Icon Direction

### 6.1 Concept

The About icon should become a 48x48 animated pixel icon with a cyberpunk character-face transformation:

1. Human anime face visible at rest.
2. Face armor panels slide open toward the left and right.
3. Inner robot head / cybernetic skull is revealed.
4. The animation loops back cleanly to the human face.

This icon represents the site's "About" entry: a personal profile with a human outer identity and AI/cybernetic inner layer.

### 6.2 48x48 Constraints

- Keep the face centered and front-facing.
- Use a large head silhouette; avoid drawing a full body.
- Use 4-6 animation frames only. More frames may become muddy at 48px.
- Prioritize three readable states: closed face, opening armor, robot revealed.
- Use strong pixel outlines and a simple silhouette.
- Avoid tiny facial details that disappear at 48px.
- Avoid gore, horror, or damaged-face imagery. The reveal should feel sleek and mechanical.

### 6.3 Suggested Animation Frames

| Frame | Description |
|---|---|
| 1 | Human anime face, calm expression, cyberpunk collar or small side armor visible |
| 2 | Cheek/temple armor seams light up, panels begin separating |
| 3 | Left and right face armor panels slide outward |
| 4 | Inner robot face visible: metal skull, glowing eyes, small circuit lines |
| 5 | Robot face holds for a beat with subtle eye glow |
| 6 | Panels close or animation loops back to frame 1 |

### 6.4 Prompt For Another AI

```text
请生成一个 48x48 像素风动态图标，用于复古个人网站里的 About 图标。

图标主题：
一个赛博朋克风的人类动漫脸，正面头像构图。动画中，脸部两侧的装甲面板向左、右打开，露出内部的机器人头部或机械 skull。最后可以停留一瞬间，再循环回到人类脸。

统一风格：
- 48x48 pixel art
- 90 年代复古桌面 UI 图标风格
- 早期电脑系统图标质感
- 清晰硬边像素，不要平滑矢量
- 强黑色或深灰像素描边
- 块状阴影，少量 dithering
- 赛博朋克但不要过度霓虹
- 动漫脸要可爱、冷静、克制，不要恐怖
- 颜色以黑色、深灰、浅肤色、机械银、暗紫为主
- 点缀少量青色、酸绿色或红色电子光
- 背景透明
- 不要文字
- 不要按钮底座
- 不要现代 app icon
- 不要 3D 渲染
- 不要官方动漫 logo、角色、版权符号

动画要求：
- 输出为 4-6 帧循环动画，适合导出 GIF
- 第 1 帧：人类动漫脸闭合状态
- 第 2 帧：脸部装甲接缝亮起
- 第 3 帧：左右装甲向两侧打开
- 第 4 帧：内部机器人头部完全露出，机械眼发光
- 第 5 帧：机器人头部保持一瞬间，可以有轻微屏幕闪烁
- 第 6 帧：回到闭合状态，循环自然

构图要求：
- 只画头部和少量脖颈/机械接口
- 头像必须占据画面主体，保证 48x48 下仍能看清
- 装甲打开方向必须清楚：左半脸向左，右半脸向右
- 机器人内部结构要简洁，不要画太多细碎零件

最终输出：
透明背景的 48x48 像素动态图标 GIF，适合放在复古桌面按钮上。
```

### 6.5 Short Prompt Variant

```text
48x48 像素风动态图标，透明背景。赛博朋克人类动漫正面头像，脸部左右装甲向两侧打开，露出内部机器人头部，机械眼发光。4-6 帧 GIF 循环动画。90 年代复古桌面 UI 图标风格，强像素描边，块状阴影，少量 dithering，黑灰银暗紫为主，青色/酸绿色/红色小面积电子光点缀。不要文字，不要按钮底座，不要 3D，不要现代扁平图标，不要官方动漫符号，不要恐怖血腥。
```
