const icons = [
  { label: "About", icon: "about.gif", window: "about", size: "large" },
  { label: "Project", icon: "projects.gif", window: "project", size: "large" },
  { label: "Contact", icon: "contact.gif", window: "contact", size: "large" },
  { label: "Blog", icon: "blog.gif", window: "blog", size: "xlarge" },
  { label: "IP design", icon: "ip-design.gif", window: "ipDesign" },
  { label: "My World", icon: "my-world-city.gif", window: "myWorldPage", size: "city" },
  { label: "Music", icon: "music.gif", window: "music" },
  { label: "Guest book", icon: "guestbook.gif", window: "guest" },
  { label: "AIGC TV", icon: "looptv.gif", window: "aigcTv" },
  { label: "Don’t Click", icon: "corrupted.gif", window: "dontClick" }
];

const dontClickSteps = [
  {
    id: "empty-ui",
    text: "这个UI啥也干不了",
    buttons: [{ label: "OK", next: "broken-ui" }]
  },
  {
    id: "broken-ui",
    text: "这个UI坏了。",
    buttons: [{ label: "我知道了", next: "maintenance" }]
  },
  {
    id: "maintenance",
    text: "关掉窗口吧，我后续会维护的",
    buttons: [{ label: "OK", next: "idle-check" }]
  },
  {
    id: "idle-check",
    text: "你还真是有够闲的是吧？",
    buttons: [
      { label: "是的", next: "nothing-here" },
      { label: "不是的", next: "nothing-here" }
    ]
  },
  {
    id: "nothing-here",
    text: "你就一直点吧，这啥也没有",
    buttons: [{ label: "OK", next: "ai-interesting" }]
  },
  {
    id: "ai-interesting",
    text: "AI真是太有意思了",
    buttons: [{ label: "OK", next: "expectation-check" }]
  },
  {
    id: "expectation-check",
    text: "你觉得一直按下去会有东西吗？",
    buttons: [
      { label: "包的", next: "site-fun-check" },
      { label: "不知道", next: "site-fun-check" }
    ]
  },
  {
    id: "site-fun-check",
    text: "哇哦，你还在啊，好吧，最后一个问题，你觉得这个网站好玩吗？",
    buttons: [
      { label: "好玩", action: "open-game-preview" },
      { label: "不好玩", action: "avoid-unfun" }
    ]
  },
  {
    id: "fun-pending",
    text: "好玩——",
    buttons: []
  },
  {
    id: "not-fun-pending",
    text: "不好玩——",
    buttons: []
  }
];

const windows = {
  about: {
    title: "About.txt",
    className: "about-window",
    body: `
      <div class="popup-content about-profile">
        <img class="avatar about-avatar" src="public/profile/about-avatar.png" alt="姚添木头像">
        <p>你好，我是姚添木，一名 AI 训练师。</p>
        <p>我的工作是让 AI 变得更聪明、更可靠。从 NLP 实体标注到多模态视频数据建设，从 RAG 系统评测到 Agent 多步工具调用的轨迹归因，我在 MiniMax 和同程旅行两家公司的核心 AI 产品线上，完整经历了数据标注、质量评测、缺陷归因到模型迭代的全链路闭环。简单来说，我做的事情就是找到 AI 犯错的原因，然后帮它改正。</p>
        <p>我擅长把复杂的问题拆解成可量化的评估框架。在同程旅行，我带领团队完成了两万余条 Agent 轨迹的系统性评测，将工具选择准确率从 65% 推到了 88%；在 MiniMax，我参与支撑了海螺视频模型的多轮版本迭代，帮助团队将评测一致性稳定在高水平。我也喜欢用自动化解决重复劳动——搭建过 Coze 预审工作流和 Python 质量监控脚本，把评测效率直接提升了 50%。</p>
        <p>除此之外，我有民航空管专业背景，独立搭建过 NER 模型（F1 达 92%+），这段经历让我养成了对精确性近乎执着的习惯——无论是一条航管指令还是一个 API 参数，细节决定一切。</p>
        <p>工作之外，我对前沿 AI 技术保持着持续的好奇心，喜欢探索各类 AI 工具的新玩法。闲暇时也会读书、跑步，偶尔折腾一些有趣的 side project。如果你对 AI 数据质量、模型评测或智能体有任何想聊的话题，欢迎随时联系我。</p>
      </div>`
  },
  project: {
    title: "Project.exe",
    body: `
      <div class="terminal-list">
        <p><span class="bulletpoint">></span> Portfolio case slots are ready.</p>
        <p><span class="bulletpoint">></span> Future records: AI training, annotation, AIGC video, and data-quality projects.</p>
        <p><span class="bulletpoint">></span> Each project should show task, role, process, and output.</p>
      </div>`
  },
  contact: {
    title: "Contact.eml",
    body: `
      <div class="popup-content">
        <p><strong>Contact information</strong></p>
        <p>Email: <a href="mailto:hello@simone.computer">hello@simone.computer</a></p>
        <p>GitHub: <a href="https://github.com/syxanash">github.com/syxanash</a></p>
        <p>Bluesky: <a href="https://bsky.app/profile/simone.computer">simone.computer</a></p>
      </div>`
  },
  blog: {
    title: "Blog.log",
    body: `
      <div class="popup-content">
        <p><strong>Blog</strong></p>
        <p>Reserved for AI training notes, project writeups, and interview-ready reflections.</p>
      </div>`
  },
  ip: {
    title: "IP design.sys",
    body: `
      <div class="popup-content">
        <p><strong>IP design</strong></p>
        <p>Reserved for personal brand, identity positioning, and public-facing profile material.</p>
      </div>`
  },
  myWorld: {
    title: "My World",
    body: `
      <div class="popup-content">
        <p><strong>My World</strong></p>
        <p>Reserved for the more personal side of the site: interests, creative direction, and worldview.</p>
      </div>`
  },
  music: {
    title: "Music.mid",
    body: `
      <div class="terminal-list">
        <p>Recently discovered:</p>
        <p class="music-track">Meditations on Crime - Steal This Mug</p>
        <p class="music-track">Jim Noir - Out Of Sight</p>
        <p class="music-track">Nine Inch Nails - As Alive As You Need Me To Be</p>
        <p class="music-track">Sparks - This Town Ain't Big Enough For Both Of Us</p>
      </div>`
  },
  guest: {
    title: "Guest book",
    className: "guestbook",
    body: `
      <div class="guestbook-panel" data-guestbook-root>
        <form class="guestbook-form" data-guestbook-form autocomplete="off">
          <label class="guestbook-field">
            <span>Name:</span>
            <input name="name" type="text" maxlength="24" placeholder="your name..." required>
          </label>
          <label class="guestbook-field">
            <span>Comment:</span>
            <textarea name="comment" maxlength="240" placeholder="write whatever you want here!" required></textarea>
          </label>
          <div class="guestbook-actions">
            <button class="retro-button guestbook-submit" type="submit">[ COMMENT ] &gt;&gt; CAPTURE THE SIGNAL &lt;&lt;</button>
            <span class="guestbook-count" data-guestbook-count aria-live="polite"></span>
          </div>
        </form>
        <div class="guestbook-feed" data-guestbook-feed aria-live="polite"></div>
      </div>`
  },
  aigcTv: {
    title: "AIGC TV",
    body: `
      <div class="terminal-list">
        <p class="blink">AIGC REEL STANDBY</p>
        <p>//// FOOTAGE SLOTS RESERVED ////</p>
        <p>Selected AIGC video works will be loaded here later.</p>
      </div>`
  },
  dontClick: {
    title: "Don’t Click",
    className: "dont-click-body",
    closeOnly: true,
    body: `
      <div class="popup-content dont-click-content" data-dont-click-flow>
        <p class="dont-click-kicker">ACCESS BREACH</p>
        <p class="dont-click-message" data-dont-click-message>${dontClickSteps[0].text}</p>
        <div class="dont-click-actions" data-dont-click-actions></div>
      </div>`
  },
  website: {
    title: "About this website",
    body: `
      <div class="popup-content">
        <p>This is a visual and structural clone of the main desktop page.</p>
        <p>Build 26d98db24b2e126a0dbfdddad14c1886 · size 103M</p>
      </div>`
  }
};

let zIndex = 20;
let wallpaperIndex = 0;
let promotedMainName = null;
let mainWindowCollapsedBeforePromotion = false;
let aigcTvOverlay = null;
let aigcTvCurrentIndex = 0;
let aigcTvSwitchTimer = null;
let aigcTvPromptOpen = false;
let reservedGameOverlay = null;
let reservedGameTimer = 0;
let abyssGameState = null;
let abyssGamePreloadPromise = null;
let abyssGameAssetsReady = false;
let dontClickVirusLayer = null;
let dontClickVirusInterval = 0;
let dontClickVirusCount = 0;
const abyssGameAssets = Object.freeze({
  background: "public/game/data-gate.png",
  river: "public/game/data-river-loop.gif",
  eye: "public/game/eye-blink-closed-first.gif",
  mouth: "public/game/abyss-mouth-clean.png",
  reporter: "public/game/glitch-reporter.png"
});
const abyssGameConfig = Object.freeze({
  eyeCount: 15,
  durationMs: 42000,
  mouthStartScale: 0.72,
  mouthEndScale: 1.92,
  eyeCycleMs: 1490,
  eyeClosedMs: 280
});
const abyssEyeAnchorPoints = [
  [12, 20], [28, 16], [48, 19], [70, 15], [86, 23],
  [18, 42], [37, 38], [61, 40], [79, 45], [10, 68],
  [29, 72], [47, 61], [66, 70], [86, 66], [55, 83]
];

function waitForAbyssGameDelay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function loadAbyssGameAsset(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      resolve(src);
    };

    const decodeAndFinish = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => {}).finally(finish);
        return;
      }

      finish();
    };

    const timeoutId = window.setTimeout(finish, 8000);
    image.decoding = "async";
    image.onload = decodeAndFinish;
    image.onerror = finish;
    image.src = src;

    if (image.complete) decodeAndFinish();
  });
}

function preloadAbyssGameAssets() {
  if (!abyssGamePreloadPromise) {
    abyssGamePreloadPromise = Promise.all(Object.values(abyssGameAssets).map(loadAbyssGameAsset))
      .then((assets) => {
        abyssGameAssetsReady = true;
        return assets;
      });
  }

  return abyssGamePreloadPromise;
}

function waitForAbyssStageImage(image) {
  if (image.complete && image.naturalWidth > 0) return Promise.resolve(image);

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve(image);
    };

    const timeoutId = window.setTimeout(finish, 8000);
    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", finish, { once: true });
  });
}

function waitForAbyssStageImages(stage) {
  return Promise.all(Array.from(stage.querySelectorAll("img")).map(waitForAbyssStageImage));
}

const guestbookStorageKey = "ytmGuestbookEntries";
const guestbookEntryLimit = 24;
let guestbookMemoryEntries = null;

const guestbookDefaultEntries = [
  {
    id: "sample-kicker",
    name: "kicker",
    comment: "I like the sound when you click the button",
    createdAt: "2026-06-03T07:20:36.000Z"
  },
  {
    id: "sample-sam",
    name: "Sam",
    comment: "Signed in before the signal fades.",
    createdAt: "2026-06-03T07:32:10.000Z"
  }
];

const titlebarGlyphs = {
  dot: "\u25cf",
  collapseOpen: "\u2212",
  collapseClosed: "+",
  grid: "\u25a6",
  close: "\u00d7",
  returnMain: "\u21b5"
};

const wallpaperClasses = [
  "wallpaper-cyber-nerv",
  "wallpaper-cyber-rider",
  "wallpaper-cyber-zen",
  "wallpaper-cyber-statue",
  "wallpaper-cyber-white-archive",
  "wallpaper-cyber-spider",
  "wallpaper-dark-dungeon",
  "wallpaper-occult-dungeon",
  "wallpaper-doraemon-sky",
  "wallpaper-cute-cats",
  "wallpaper-clouds"
];

const aigcChannels = [
  {
    id: "AV-01",
    title: "AILY：你看起来好孤独",
    task: "Veo 文生视频 / 赛博朋克电影叙事",
    role: "提示词撰写、镜头调度、氛围与声音设计",
    tags: ["Veo", "AIGC视频", "赛博朋克", "提示词创作"],
    src: "public/videos/aily-veo.mp4",
    poster: "public/wallpapers/cyber-nerv-purple-green.jpg",
    prompt:
      "用VEO为我生成视频：\n" +
      "电影级赛博朋克长镜头，极具《银翼杀手2049》忧郁质感。画面中大雨磅礴，一个神情落寞的男人面部特写，眼睛瞳孔是蓝色的，眼眶微红并滑落一滴晶莹的泪珠，他缓缓抬头仰望。" +
      "镜头变换，人物在摩天大楼之前，向后拉远向上微移，人物抬头向上，展现出在摩天大楼霓虹广告中的巨大全息投影女性头像（AILY），她散发着迷幻的霓虹紫蓝光芒和轻微的数字扫描线故障效果。" +
      "全息女人的嘴唇缓缓开合，伴随着空灵、温柔且带有微弱电子混响的女性AI嗓音深情念白：\"Hello, I am AILY. You look so lonely...\" " +
      "整个场景的背景音效交织着沉闷的雷雨声、深沉的氛围合成器旋律（Ambient Synth）和遥远的城市低鸣，整体氛围极致孤独且宏大，8K超清画质，电影级调色，高对比度光影。"
  },
  {
    id: "AV-02",
    title: "月下竹林双刀对决",
    task: "即梦文生视频 / 武侠动作分镜",
    role: "提示词撰写、动作编排、金属音效与节奏设计",
    tags: ["即梦", "AIGC视频", "武侠动作", "音效设计"],
    src: "public/videos/bamboo-duel-jimeng.mp4",
    poster: "public/videos/bamboo-duel-jimeng-poster.jpg",
    prompt:
      "暗夜竹林深处，月光透过竹叶洒下斑驳光影。两名黑衣剑客对峙，手持狭长钢刀，刀刃折射冷冽寒光。" +
      "其中一人率先发动攻势，身体前倾急速突进，钢刀自右上斜劈而下，另一人横刀格挡，两刃猛烈撞击，音效：尖锐刺耳的金属碰撞声“锵——”，伴随火星四溅飞散。" +
      "攻方借力旋转手腕，刀刃贴着对方刀背滑下，发出连续的金属摩擦声“吱啦——”，火星在夜色中拉出一道细长光线。" +
      "守方后撤半步卸力，随即反手撩刀上挑，刀尖划破空气带起破空声“咻——”，对方侧身闪避，刀刃擦过衣襟斩断几根飘起的衣带。" +
      "两人交错换位，脚下枯叶被急速步伐踏碎发出细碎脆响。" +
      "连续快攻节奏加快，刀剑密集碰撞，音效：一连串“锵锵锵”短促激烈互击声，每一次撞击都有对应火花炸裂，刀刃在高强度碰撞下产生轻微震颤肉眼可见的金属抖动。" +
      "最后双方同时蓄力重斩，两刀全力对碰于画面中央，刀身剧烈震荡发出沉闷悠长的金属嗡鸣“嗡——”，强大的冲击力震散周围落叶呈环形向外飞卷，画面做升格慢动作处理，定格在双刀交击点上，两刃接触处因高温微微泛红冒出一缕青烟，音效：嗡鸣渐弱后归于寂静，只剩远处几声竹叶沙沙响。"
  }
];

const aigcTvEffectSrc = "public/effects/tv-closing.mp4";

const iconGrid = document.querySelector("#iconGrid");
const mainWindow = document.querySelector("#mainWindow");
const popupLayer = document.querySelector("#popupLayer");
let elevatedPopupLayer = null;
const crtSwitch = document.querySelector("#crtSwitch");
const bootScreen = document.querySelector("#bootScreen");
const bootIntrusion = document.querySelector("#bootIntrusion");
const bootEyeAnimation = document.querySelector("#bootEyeAnimation");
const bootProgressPanel = document.querySelector("#bootProgressPanel");
const bootProgressFill = document.querySelector("#bootProgressFill");
const bootProgressPercent = document.querySelector("#bootProgressPercent");
const bootProgressStatus = document.querySelector("#bootProgressStatus");
const bootTerminal = document.querySelector("#bootTerminal");
const bootTerminalIcons = document.querySelector("#bootTerminalIcons");
const bootTerminalOutput = document.querySelector("#bootTerminalOutput");
const githubProjectLink = document.querySelector("#githubProjectLink");
const githubUpdatedText = document.querySelector("#githubUpdatedText");
const invertSafetyConsentKey = "portfolioInvertSafetyConsent";
const screensaver = document.querySelector("#screensaver");
const screensaverStage = document.querySelector("#screensaverStage");
const centralEye = document.querySelector("#centralEye");
const hiddenAgent = document.querySelector("#hiddenAgent");
const agentSilhouette = document.querySelector("#agentSilhouette");
const agentDialogText = document.querySelector("#agentDialogText");
const agentNext = document.querySelector("#agentNext");
const agentEyeHotspot = document.querySelector("#agentEyeHotspot");
const agentPrank = document.querySelector("#agentPrank");
const agentPrankCharacter = document.querySelector("#agentPrankCharacter");
const agentPrankImage = agentPrankCharacter?.querySelector("img");
const originalMainChildren = Array.from(mainWindow.children);
const pressableSelector = "button, .desktop-icon, .link-list a";
const clickSoundExcludedSelector = "#agentNext, #agentPrankCharacter, #agentEyeHotspot, .agent-dialog, .agent-prank, [data-silent-click]";
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const githubProjectUrl = "https://github.com/whateverboy2333/P_website";
const githubLatestCommitApi = "https://api.github.com/repos/whateverboy2333/P_website/commits/main";
const screensaverConfig = {
  frameCount: 32,
  idleDelay: 45000,
  blurDelay: 10000,
  intervalMs: 20,
  speed: 7,
  rollDuration: 1.75,
  mouseWakeDistance: 8
};
const appParams = new URLSearchParams(window.location.search);
const screensaverPreviewMode = appParams.has("screensaver");
const bootCookieName = "ytmSkyEyeBootSeen";
const bootForcePreview = appParams.has("boot");
const bootResetCookie = appParams.has("resetBoot");
const bootDebugStage = appParams.get("bootStage");
const bootLineDelay = 68;
const bootEyeAnimationDuration = 2520;
const bootProgressStatuses = [
  "正在建立匿名通道...",
  "正在扫描访客权限...",
  "正在突破防火墙...",
  "正在校准天目义眼...",
  "正在挂载 YTM 档案...",
  "正在进入 Sky_EYE.OS..."
];
const bootTerminalMessages = [
  `<span class="boot-dim">Welcome to the</span> <span class="boot-purple">Sky_EYE.OS</span> <span class="boot-green">experience.</span>`,
  `<span class="boot-green">Found optic device(s) handled by</span> <span class="boot-purple">Tianmu.o</span>.`,
  `<span class="boot-green">Scanning memory sectors...</span> <span class="boot-dim">Done.</span>`,
  `<span class="boot-green">Enabling SKY acceleration for:</span> <span class="boot-purple">ytm0</span>`,
  `<span class="boot-green">Accessing Sky_EYE.OS Kernel at</span> <span class="boot-purple">root/.sky_eye</span><span class="boot-green">...</span>`,
  `<span class="boot-green">Found visual archive at</span> <span class="boot-purple">root/YTM/portfolio</span>.`,
  `<span class="boot-green">Total memory found :</span> <span class="boot-yellow">515124 KB</span>`,
  `<span class="boot-green">Creating</span> <span class="boot-yellow">/ramdisk</span> <span class="boot-green">on shared memory...</span><span class="boot-dim">Done.</span>`,
  `<span class="boot-green">Creating directories and symlinks on ramdisk...</span><span class="boot-dim">Done</span>`,
  `<span class="boot-dim">Starting init process.</span>`,
  `<span class="boot-dim">INIT version</span> <span class="boot-purple">Sky_EYE.OS.77.10.38</span> <span class="boot-dim">booting</span>`,
  `<span class="boot-green">Running Sky_EYE.OS Kernel</span> <span class="boot-yellow">Build. YTM-77</span>`,
  `<span class="boot-green">Logical processors found:</span> <span class="boot-yellow">${window.navigator.hardwareConcurrency || 8}</span>`,
  `<span class="boot-green">Found cybernetic optic unit at:</span> <span class="boot-yellow">root/.sky_eye/tianmu</span>.`,
  `<span class="boot-green">Starting</span> <span class="boot-purple">Sky_EYE.OS udev</span> <span class="boot-green">identity detection...</span> <span class="boot-dim">Started.</span>`,
  `<span class="boot-dim">Autoconfiguring YTM modules...</span> <span class="boot-bar" data-boot-bar></span>`,
  `<span class="boot-dim">INIT: Entering runlevel: 5</span>`,
  `<span class="boot-green">Sky_EYE.OS Web Desktop ready.</span>`
];
let loadingCursorTimer;
let screensaverTimer;
let screensaverInterval;
let screensaverItems = [];
let lastPointerPosition = null;
let bootProgressTimer;
let bootTerminalTimer;
let bootActive = false;
let bootStarted = false;
let agentEncounterIndex = -1;
let agentMessageIndex = 0;
let agentPrankState = "idle";
let agentPrankHelpTimer;
let agentTypingTimer;
let mainJoltCount = 0;
let mainWindowExpandedHeight = 0;
let invertSafetyConsentGranted = readInvertSafetyConsent();
let clickAudioContext;
let agentEyeAlertArmed = true;
const agentEyeAlertMessage = "嘿！不要动我的眼睛！";

const agentMessages = [
  "嘿嘿，我看你在摆弄这个网站啊，让你发现了。",
  "别紧张，我只是藏在窗口后面的一段流浪 AI。",
  "继续点点看，也许这里还有别的故障。"
];

const agentDialogRounds = [
  agentMessages,
  ["你找到bug了吗？"],
  ["你知道我不是在这陪你聊天的对吧？"]
];

function getCurrentAgentMessages() {
  const index = Math.max(0, Math.min(agentEncounterIndex, agentDialogRounds.length - 1));
  return agentDialogRounds[index];
}

function startAgentEncounter() {
  agentEncounterIndex = Math.min(agentEncounterIndex + 1, agentDialogRounds.length - 1);
  agentMessageIndex = 0;
}

function pulseLoadingCursor(duration = 260) {
  window.clearTimeout(loadingCursorTimer);
  document.body.classList.add("is-loading");
  loadingCursorTimer = window.setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, duration);
}

function setPressing(element) {
  if (!element || element.disabled || element.classList.contains("disabled")) return;
  if (element.closest("[data-silent-click]")) return;
  element.classList.add("is-pressing");
}

function getSoundTarget(target) {
  const element = target?.closest?.(pressableSelector);
  if (!element || element.disabled || element.classList.contains("disabled")) return null;
  if (element.closest(clickSoundExcludedSelector)) return null;
  return element;
}

function getClickAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  clickAudioContext ??= new AudioContext();
  return clickAudioContext;
}

function playClickSound() {
  const context = getClickAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(1280, now);
  oscillator.frequency.exponentialRampToValueAtTime(520, now + 0.035);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.055);
}

function handleClickSound(event) {
  if (!getSoundTarget(event.target)) return;
  playClickSound();
}

function getCookie(name) {
  const encodedName = `${encodeURIComponent(name)}=`;
  return document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(encodedName))
    ?.slice(encodedName.length);
}

function setCookie(name, value, maxAgeSeconds) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=; path=/; max-age=0; SameSite=Lax`;
}

function formatGithubUpdatedDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "Asia/Shanghai"
  }).format(date);
}

async function syncGithubProjectStatus() {
  if (githubProjectLink) {
    githubProjectLink.href = githubProjectUrl;
  }
  if (!githubUpdatedText) return;

  try {
    const response = await fetch(githubLatestCommitApi, { cache: "no-store" });
    if (!response.ok) return;

    const commit = await response.json();
    const updatedDate = formatGithubUpdatedDate(commit?.commit?.committer?.date || commit?.commit?.author?.date);
    if (!updatedDate) return;

    githubUpdatedText.textContent = `Last updated ${updatedDate}`;
    if (githubProjectLink && commit?.html_url) {
      githubProjectLink.title = `Latest commit: ${commit.html_url}`;
    }
  } catch {
    // Keep the static fallback when GitHub is unreachable.
  }
}

function normalizeGuestbookName(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 24);
}

function normalizeGuestbookComment(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 240);
}

function normalizeGuestbookEntries(entries) {
  if (!Array.isArray(entries)) return [];

  return entries
    .map((entry) => ({
      id: String(entry?.id || `entry-${Date.now()}`),
      name: normalizeGuestbookName(entry?.name),
      comment: normalizeGuestbookComment(entry?.comment),
      createdAt: String(entry?.createdAt || new Date().toISOString())
    }))
    .filter((entry) => entry.name && entry.comment)
    .slice(0, guestbookEntryLimit);
}

function readGuestbookEntries() {
  if (guestbookMemoryEntries) return guestbookMemoryEntries;

  try {
    const savedEntries = JSON.parse(window.localStorage.getItem(guestbookStorageKey) || "null");
    const entries = normalizeGuestbookEntries(savedEntries);
    if (entries.length > 0) {
      guestbookMemoryEntries = entries;
      return guestbookMemoryEntries;
    }
  } catch {
    // Fall back to the in-memory seed when localStorage is unavailable or corrupt.
  }

  guestbookMemoryEntries = normalizeGuestbookEntries(guestbookDefaultEntries);
  return guestbookMemoryEntries;
}

function writeGuestbookEntries(entries) {
  guestbookMemoryEntries = normalizeGuestbookEntries(entries);

  try {
    window.localStorage.setItem(guestbookStorageKey, JSON.stringify(guestbookMemoryEntries));
  } catch {
    // The current session still updates through guestbookMemoryEntries.
  }
}

function formatGuestbookTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "time unknown";

  const parts = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai"
  }).formatToParts(date);

  const getPart = (type) => parts.find((part) => part.type === type)?.value || "";
  return `${getPart("year")}/${getPart("month")}/${getPart("day")} ${getPart("hour")}:${getPart("minute")}:${getPart("second")}`;
}

function createGuestbookEntryElement(entry) {
  const card = document.createElement("article");
  card.className = "guestbook-entry";

  const name = document.createElement("h3");
  name.textContent = entry.name;

  const comment = document.createElement("p");
  comment.textContent = entry.comment;

  const time = document.createElement("time");
  time.dateTime = entry.createdAt;
  time.textContent = formatGuestbookTimestamp(entry.createdAt);

  card.append(name, comment, time);
  return card;
}

function renderGuestbookEntries(scope = document) {
  const entries = readGuestbookEntries();
  const root = scope instanceof Element ? scope : document;
  const feeds = root.querySelectorAll("[data-guestbook-feed]");
  const counts = root.querySelectorAll("[data-guestbook-count]");

  feeds.forEach((feed) => {
    feed.replaceChildren(...entries.map(createGuestbookEntryElement));
  });

  counts.forEach((count) => {
    count.textContent = `${String(entries.length).padStart(2, "0")} LOGS`;
  });
}

function initializeGuestbook(scope = document) {
  renderGuestbookEntries(scope);
  const root = scope instanceof Element ? scope : document;
  root.querySelector("[data-guestbook-form] input[name='name']")?.focus({ preventScroll: true });
}

function submitGuestbookEntry(form) {
  const formData = new FormData(form);
  const name = normalizeGuestbookName(formData.get("name"));
  const comment = normalizeGuestbookComment(formData.get("comment"));

  if (!name || !comment) {
    form.classList.add("has-error");
    window.setTimeout(() => form.classList.remove("has-error"), 220);
    return;
  }

  const entry = {
    id: `entry-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    comment,
    createdAt: new Date().toISOString()
  };

  writeGuestbookEntries([entry, ...readGuestbookEntries()]);
  renderGuestbookEntries();
  form.reset();
  form.querySelector("input[name='name']")?.focus({ preventScroll: true });
  pulseLoadingCursor(180);
}

function shouldShowBoot() {
  if (!bootScreen || screensaverPreviewMode) return false;
  if (bootResetCookie) deleteCookie(bootCookieName);
  return bootForcePreview || getCookie(bootCookieName) !== "1";
}

function buildBootTerminalIcons() {
  if (!bootTerminalIcons) return;
  bootTerminalIcons.replaceChildren();
  Array.from({ length: 8 }, () => {
    const icon = document.createElement("span");
    icon.className = "boot-cat-icon";
    bootTerminalIcons.appendChild(icon);
    return icon;
  });
}

function updateBootProgress(progress) {
  const value = Math.max(0, Math.min(100, Math.round(progress)));
  const statusIndex = Math.min(
    bootProgressStatuses.length - 1,
    Math.floor((value / 100) * bootProgressStatuses.length)
  );

  if (bootProgressFill) bootProgressFill.style.width = `${value}%`;
  if (bootProgressPercent) bootProgressPercent.textContent = `${value}%`;
  if (bootProgressStatus) bootProgressStatus.textContent = bootProgressStatuses[statusIndex];
}

function startBootTerminal() {
  window.clearInterval(bootProgressTimer);
  if (!bootScreen || !bootTerminal || !bootTerminalOutput) return;

  bootScreen.classList.remove("is-progress");
  bootScreen.classList.add("is-terminal");
  bootTerminal.setAttribute("aria-hidden", "false");
  bootProgressPanel?.setAttribute("aria-hidden", "true");
  bootTerminalOutput.replaceChildren();

  let index = 0;
  function appendNextLine() {
    if (index >= bootTerminalMessages.length) {
      window.clearInterval(bootTerminalTimer);
      window.setTimeout(completeBootSequence, reducedMotionQuery.matches ? 120 : 720);
      return;
    }

    const line = document.createElement("div");
    line.className = "boot-terminal-line";
    line.innerHTML = bootTerminalMessages[index];
    bootTerminalOutput.appendChild(line);
    bootTerminalOutput.scrollTop = bootTerminalOutput.scrollHeight;
    index += 1;
  }

  appendNextLine();
  bootTerminalTimer = window.setInterval(appendNextLine, reducedMotionQuery.matches ? 8 : bootLineDelay);
}

function startBootProgress() {
  if (!bootScreen || !bootProgressPanel) return;

  bootScreen.classList.remove("is-awake");
  bootScreen.classList.add("is-progress");
  bootProgressPanel.setAttribute("aria-hidden", "false");

  let progress = 0;
  updateBootProgress(progress);

  if (reducedMotionQuery.matches) {
    updateBootProgress(100);
    window.setTimeout(startBootTerminal, 120);
    return;
  }

  const tickBootProgress = () => {
    progress += Math.max(1, Math.round((100 - progress) * 0.09));
    if (progress >= 100) {
      updateBootProgress(100);
      window.clearInterval(bootProgressTimer);
      window.setTimeout(startBootTerminal, 460);
      return;
    }
    updateBootProgress(progress);
  };

  bootProgressTimer = window.setTimeout(() => {
    bootProgressTimer = window.setInterval(tickBootProgress, 90);
  }, 360);
}

function completeBootSequence() {
  window.clearInterval(bootProgressTimer);
  window.clearInterval(bootTerminalTimer);

  if (!bootForcePreview) {
    setCookie(bootCookieName, "1", 60 * 60 * 24 * 365);
  }

  bootActive = false;
  document.body.classList.remove("boot-active", "boot-pending");
  bootScreen?.classList.remove("is-awake", "is-progress", "is-terminal");
  bootScreen?.setAttribute("aria-hidden", "true");
  scheduleScreensaver();
  pulseLoadingCursor(320);
}

function startBootSequence(event) {
  event?.preventDefault();
  event?.stopPropagation();
  if (!bootActive || bootStarted || !bootScreen) return;

  bootStarted = true;
  bootIntrusion?.setAttribute("disabled", "");
  if (bootEyeAnimation?.dataset.animationSrc) {
    bootEyeAnimation.removeAttribute("src");
    window.requestAnimationFrame(() => {
      bootEyeAnimation.src = `${bootEyeAnimation.dataset.animationSrc}?t=${Date.now()}`;
    });
  }
  bootScreen.classList.add("is-awake");
  window.setTimeout(startBootProgress, reducedMotionQuery.matches ? 120 : bootEyeAnimationDuration);
}

function initializeBootSequence() {
  buildBootTerminalIcons();

  if (!shouldShowBoot()) {
    document.body.classList.remove("boot-pending", "boot-active");
    bootScreen?.setAttribute("aria-hidden", "true");
    return false;
  }

  bootActive = true;
  clearScreensaverTimer();
  document.body.classList.add("boot-active");
  document.body.classList.remove("boot-pending");
  bootScreen.setAttribute("aria-hidden", "false");
  bootIntrusion?.removeAttribute("disabled");
  bootIntrusion?.focus({ preventScroll: true });

  if (bootForcePreview && bootDebugStage === "progress") {
    window.setTimeout(startBootSequence, 80);
  }

  if (bootForcePreview && bootDebugStage === "terminal") {
    bootStarted = true;
    bootIntrusion?.setAttribute("disabled", "");
    window.setTimeout(startBootTerminal, 80);
  }

  return true;
}

function releasePressing() {
  window.setTimeout(() => {
    document.querySelectorAll(".is-pressing").forEach((element) => {
      element.classList.remove("is-pressing");
    });
  }, 120);
}

function syncInvertSwitch() {
  const isInverted = document.body.classList.contains("is-inverted");
  crtSwitch.setAttribute("aria-pressed", String(isInverted));
  crtSwitch.setAttribute("aria-label", isInverted ? "Disable inverted colors" : "Enable inverted colors");
}

function readInvertSafetyConsent() {
  try {
    return window.localStorage.getItem(invertSafetyConsentKey) === "no";
  } catch {
    return false;
  }
}

function rememberInvertSafetyConsent() {
  invertSafetyConsentGranted = true;
  try {
    window.localStorage.setItem(invertSafetyConsentKey, "no");
  } catch {
    // Keep the in-memory consent for browsers that block localStorage.
  }
}

function setInvertedMode(enabled) {
  document.body.classList.toggle("is-inverted", enabled);
  syncInvertSwitch();
}

function closeInvertSafetyDialog() {
  document.querySelector('[data-modal="invert-safety"]')?.remove();
}

function openInvertSafetyDialog() {
  const existing = document.querySelector('[data-modal="invert-safety"]');
  if (existing) {
    existing.style.setProperty("--z", ++zIndex);
    existing.querySelector("[data-invert-safety-no]")?.focus();
    return;
  }

  const dialog = document.createElement("section");
  dialog.className = "window popup safety-dialog";
  dialog.dataset.modal = "invert-safety";
  dialog.style.setProperty("--z", ++zIndex);
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "invertSafetyTitle");
  dialog.innerHTML = `
    <header class="titlebar">
      <strong class="titlebar-title" id="invertSafetyTitle">Safety check</strong>
    </header>
    <div class="window-body">
      <div class="popup-content safety-dialog-content">
        <p>你是否有光敏癫痫等症状？</p>
        <div class="dialog-actions safety-dialog-actions">
          <button class="retro-button" type="button" data-invert-safety-yes>是</button>
          <button class="retro-button" type="button" data-invert-safety-no>否</button>
        </div>
      </div>
    </div>`;

  dialog.querySelector("[data-invert-safety-yes]").addEventListener("click", () => {
    setInvertedMode(false);
    closeInvertSafetyDialog();
  });

  dialog.querySelector("[data-invert-safety-no]").addEventListener("click", () => {
    rememberInvertSafetyConsent();
    setInvertedMode(true);
    closeInvertSafetyDialog();
  });

  popupLayer.appendChild(dialog);
  makeDraggable(dialog);
  dialog.querySelector("[data-invert-safety-no]").focus();
}

function handleInvertSwitchClick() {
  const isInverted = document.body.classList.contains("is-inverted");
  if (isInverted) {
    setInvertedMode(false);
    return;
  }

  if (!invertSafetyConsentGranted) {
    openInvertSafetyDialog();
    return;
  }

  setInvertedMode(true);
}

function syncStaticTitlebarGlyphs() {
  document.querySelector("#toggleBody").textContent = titlebarGlyphs.dot;
  document.querySelector("#collapseMainWindow").textContent = titlebarGlyphs.collapseOpen;
  document.querySelector("#changeWallpaper").textContent = titlebarGlyphs.grid;
  document.querySelector("#powerOff").textContent = titlebarGlyphs.close;
}

function getActiveWindowBody(windowElement) {
  if (windowElement === mainWindow && promotedMainName) {
    return windowElement.querySelector(':scope > .window-body[data-promoted-main="true"]');
  }

  return windowElement.querySelector(":scope > .window-body");
}

function getActiveCollapseButton(windowElement) {
  if (windowElement === mainWindow && promotedMainName) {
    return windowElement.querySelector(':scope > .titlebar[data-promoted-main="true"] [data-collapse]');
  }

  return windowElement.querySelector(":scope > .titlebar [data-collapse]");
}

function joltWindow(windowElement) {
  if (!windowElement) return;
  windowElement.classList.remove("is-jolting");
  void windowElement.offsetWidth;
  windowElement.classList.add("is-jolting");
}

function joltMainWindow() {
  mainJoltCount += 1;
  joltWindow(mainWindow);

  if (promotedMainName || mainWindow.classList.contains("is-collapsed")) return;

  if (mainJoltCount === 3 && agentPrankState === "idle") {
    setAgentPrankState("fallen");
  }

  if (mainJoltCount === 6 && agentPrankState !== "hanging" && agentPrankState !== "climbing") {
    setAgentPrankState("hanging");
  }
}

function syncAgentScale() {
  if (!hiddenAgent || !agentSilhouette) return;

  const rect = mainWindow.getBoundingClientRect();
  if (!mainWindow.classList.contains("is-collapsed") && rect.height > 0) {
    mainWindowExpandedHeight = rect.height;
  }

  const sourceHeight = mainWindow.classList.contains("is-collapsed")
    ? mainWindowExpandedHeight || rect.height
    : rect.height;
  const targetHeight = Math.max(120, Math.round(sourceHeight * 0.66));
  const agentAspect = 402 / 560;
  const fallenAspect = 532 / 560;
  const hangAspect = 910 / 1322;
  const climbAspect = 962 / 1250;
  const prankScale = 1.18;
  const prankWidth = targetHeight * fallenAspect * prankScale;
  const prankHangHeight = Math.round(prankWidth / hangAspect);
  const prankClimbHeight = Math.round(prankWidth / climbAspect);
  document.documentElement.style.setProperty("--agent-height", `${targetHeight}px`);
  document.documentElement.style.setProperty("--agent-width", `${Math.round(targetHeight * agentAspect)}px`);
  document.documentElement.style.setProperty("--agent-fallen-height", `${targetHeight}px`);
  document.documentElement.style.setProperty("--agent-fallen-width", `${Math.round(targetHeight * fallenAspect)}px`);
  document.documentElement.style.setProperty("--agent-prank-height", `${prankHangHeight}px`);
  document.documentElement.style.setProperty("--agent-prank-hang-height", `${prankHangHeight}px`);
  document.documentElement.style.setProperty("--agent-prank-climb-height", `${prankClimbHeight}px`);
  document.documentElement.style.setProperty("--agent-prank-stage-height", `${Math.round(Math.max(prankHangHeight, prankClimbHeight) * 0.92)}px`);
  document.documentElement.style.setProperty("--agent-prank-hang-width", `${Math.round(prankHangHeight * hangAspect)}px`);
  document.documentElement.style.setProperty("--agent-prank-climb-width", `${Math.round(prankClimbHeight * climbAspect)}px`);
  document.documentElement.style.setProperty("--agent-prank-hang-top", `${Math.round(targetHeight * -0.05)}px`);
  document.documentElement.style.setProperty("--agent-prank-climb-top", `${Math.round(prankClimbHeight * -0.245)}px`);
  document.documentElement.style.setProperty("--agent-prank-climb-window-cut", `${Math.round(prankClimbHeight * 0.245)}px`);
  document.documentElement.style.setProperty("--agent-prank-climb-join-height", `${Math.round(prankClimbHeight * 0.12)}px`);

  const mainRect = mainWindow.getBoundingClientRect();
  const silhouetteRect = agentSilhouette.getBoundingClientRect();
  const fallbackLeft = Math.round(mainRect.width - 24 - targetHeight * (fallenAspect / 2));
  const prankLeft = silhouetteRect.width > 0
    ? Math.round(silhouetteRect.left - mainRect.left + silhouetteRect.width / 2)
    : fallbackLeft;
  document.documentElement.style.setProperty("--agent-prank-left", `${prankLeft}px`);
}

function syncAgentNextState() {
  if (!agentNext) return;

  const currentAgentMessages = getCurrentAgentMessages();
  const isFinalMessage = agentMessageIndex >= currentAgentMessages.length - 1;
  agentNext.disabled = isFinalMessage;
  agentNext.setAttribute(
    "aria-label",
    isFinalMessage ? "End of STRAY.AI dialog" : "Continue STRAY.AI dialog"
  );
}

function typeAgentMessage(message) {
  window.clearTimeout(agentTypingTimer);
  if (!agentDialogText) return;

  agentDialogText.textContent = "";
  agentNext.disabled = true;

  if (reducedMotionQuery.matches) {
    agentDialogText.textContent = message;
    syncAgentNextState();
    return;
  }

  let index = 0;
  function tick() {
    agentDialogText.textContent = message.slice(0, index);
    index += 1;

    if (index <= message.length) {
      agentTypingTimer = window.setTimeout(tick, 42);
    } else {
      syncAgentNextState();
    }
  }

  tick();
}

function revealHiddenAgent() {
  if (!hiddenAgent) return;
  const wasVisible = hiddenAgent.classList.contains("is-visible");
  syncAgentScale();
  hiddenAgent.classList.add("is-visible");
  hiddenAgent.setAttribute("aria-hidden", "false");
  agentEyeAlertArmed = true;

  if (wasVisible) return;

  startAgentEncounter();
  typeAgentMessage(getCurrentAgentMessages()[agentMessageIndex]);
}

function hideHiddenAgent() {
  if (!hiddenAgent) return;
  window.clearTimeout(agentTypingTimer);
  hiddenAgent.classList.remove("is-visible");
  hiddenAgent.setAttribute("aria-hidden", "true");
  agentEyeAlertArmed = true;
}

function showAgentEyeAlert() {
  if (!hiddenAgent?.classList.contains("is-visible") || !agentEyeAlertArmed) return;
  agentEyeAlertArmed = false;
  window.alert(agentEyeAlertMessage);
}

function resetAgentEyeAlert() {
  agentEyeAlertArmed = true;
}

function clearAgentPrankHelpTimer() {
  window.clearTimeout(agentPrankHelpTimer);
  agentPrankHelpTimer = undefined;
}

function hideAgentPrankHelp() {
  clearAgentPrankHelpTimer();
  agentPrank?.classList.remove("show-help");
}

function scheduleAgentPrankHelp() {
  hideAgentPrankHelp();
  agentPrankHelpTimer = window.setTimeout(() => {
    if (agentPrankState === "hanging") {
      agentPrank?.classList.add("show-help");
    }
  }, 10000);
}

function setAgentPrankState(state) {
  agentPrankState = state;
  mainWindow.classList.toggle("agent-silhouette-fallen", state === "fallen");
  mainWindow.classList.remove("agent-silhouette-source");
  mainWindow.classList.toggle("agent-silhouette-dropped", state === "hanging");
  mainWindow.classList.toggle("agent-silhouette-climbing", state === "climbing");
  hideAgentPrankHelp();

  if (!agentPrank || !agentPrankImage) return;

  agentPrank.classList.toggle("is-visible", state === "hanging" || state === "climbing");
  agentPrank.classList.toggle("is-climbing", state === "climbing");
  agentPrank.setAttribute("aria-hidden", state === "hanging" || state === "climbing" ? "false" : "true");

  if (state === "hanging") {
    syncAgentScale();
    agentPrankImage.src = "public/characters/stray-ai-hang-no-edge.png";
    agentPrankImage.alt = "STRAY.AI hanging from the window";
    scheduleAgentPrankHelp();
  }

  if (state === "climbing") {
    syncAgentScale();
    agentPrankImage.src = "public/characters/stray-ai-climb-no-edge.png";
    agentPrankImage.alt = "STRAY.AI climbing up the window edge";
  }

  if (state === "idle") {
    mainJoltCount = 0;
    agentPrankImage.src = "public/characters/stray-ai-hang-no-edge.png";
    agentPrankImage.alt = "STRAY.AI hanging from the window";
  }
}

function syncHiddenAgent() {
  if (mainWindow.classList.contains("is-collapsed") && !promotedMainName) {
    revealHiddenAgent();
  } else {
    hideHiddenAgent();
  }
}

function setWallpaperClass(wallpaperClass) {
  document.body.classList.remove(...wallpaperClasses.filter(Boolean));

  const nextIndex = wallpaperClasses.indexOf(wallpaperClass);
  wallpaperIndex = nextIndex >= 0 ? nextIndex : 0;
  const nextWallpaper = wallpaperClasses[wallpaperIndex];
  if (nextWallpaper) document.body.classList.add(nextWallpaper);
}

function getCurrentWallpaperClass() {
  return wallpaperClasses.find((wallpaperClass) => document.body.classList.contains(wallpaperClass))
    || wallpaperClasses[wallpaperIndex]
    || wallpaperClasses[0];
}

function applyInitialWallpaperFromParams() {
  const requestedWallpaper = appParams.get("wallpaper");
  if (wallpaperClasses.includes(requestedWallpaper)) {
    setWallpaperClass(requestedWallpaper);
  }
}

function changeWallpaper() {
  pulseLoadingCursor(180);
  const nextIndex = (wallpaperIndex + 1) % wallpaperClasses.length;
  setWallpaperClass(wallpaperClasses[nextIndex]);
}

function getIpDesignPageUrl() {
  const params = new URLSearchParams();
  params.set("wallpaper", getCurrentWallpaperClass());
  return `ip-design.html?${params.toString()}`;
}

function openIpDesignPage() {
  window.location.assign(getIpDesignPageUrl());
}

function getMyWorldPageUrl() {
  const params = new URLSearchParams();
  params.set("wallpaper", getCurrentWallpaperClass());
  return `my-world.html?${params.toString()}`;
}

function openMyWorldPage() {
  window.location.assign(getMyWorldPageUrl());
}

function setWindowCollapsed(windowElement, collapsed) {
  const body = getActiveWindowBody(windowElement);
  const button = getActiveCollapseButton(windowElement);
  if (!body || !button) return;

  if (windowElement === mainWindow && collapsed) syncAgentScale();
  if (windowElement === mainWindow && collapsed) setAgentPrankState("idle");

  body.hidden = collapsed;
  windowElement.classList.toggle("is-collapsed", collapsed);
  button.textContent = collapsed ? titlebarGlyphs.collapseClosed : titlebarGlyphs.collapseOpen;
  button.setAttribute("aria-expanded", String(!collapsed));
  button.setAttribute("aria-label", collapsed ? "Expand window" : "Collapse window");

  if (windowElement === mainWindow) syncHiddenAgent();
}

function toggleWindowCollapsed(windowElement) {
  setWindowCollapsed(windowElement, !windowElement.classList.contains("is-collapsed"));
}

function removePromotedMainContent() {
  mainWindow.querySelectorAll('[data-promoted-main="true"]').forEach((element) => element.remove());
  mainWindow.classList.remove("is-promoted", "is-collapsed");
  delete mainWindow.dataset.promotedWindow;
  promotedMainName = null;
}

function restoreMainWindow() {
  if (!promotedMainName) return;

  removePromotedMainContent();
  originalMainChildren.forEach((element) => {
    element.hidden = false;
  });
  mainWindow.replaceChildren(...originalMainChildren);
  setWindowCollapsed(mainWindow, mainWindowCollapsedBeforePromotion);
  pulseLoadingCursor(180);
}

function promotePopupToMain(popup) {
  const name = popup?.dataset.popup;
  const config = windows[name];
  if (!config) return;

  if (!promotedMainName) {
    mainWindowCollapsedBeforePromotion = mainWindow.classList.contains("is-collapsed");
  }

  removePromotedMainContent();
  hideHiddenAgent();
  setAgentPrankState("idle");

  const promotedTitlebar = document.createElement("header");
  promotedTitlebar.className = "titlebar promoted-titlebar";
  promotedTitlebar.dataset.promotedMain = "true";
  promotedTitlebar.innerHTML = `
    <button class="system-dot" data-jolt aria-label="Jolt window">${titlebarGlyphs.dot}</button>
    <strong class="titlebar-title">${config.title}</strong>
    <div class="titlebar-actions">
      <button data-collapse aria-expanded="true" aria-label="Collapse window">${titlebarGlyphs.collapseOpen}</button>
      <button data-change-wallpaper aria-label="Change wallpaper">${titlebarGlyphs.grid}</button>
      <button data-return-main aria-label="Return to desktop">${titlebarGlyphs.returnMain}</button>
    </div>`;

  const promotedBody = document.createElement("div");
  promotedBody.className = `window-body promoted-main-body ${config.className || ""}`.trim();
  promotedBody.dataset.promotedMain = "true";
  promotedBody.innerHTML = config.body;

  mainWindow.replaceChildren(promotedTitlebar, promotedBody);
  mainWindow.classList.add("is-promoted");
  mainWindow.dataset.promotedWindow = name;
  promotedMainName = name;
  popup.remove();
  if (name === "guest") initializeGuestbook(mainWindow);
  pulseLoadingCursor(180);
}

function isScreensaverActive() {
  return document.body.classList.contains("screensaver-active");
}

function canStartScreensaver() {
  return Boolean(screensaver && screensaverStage)
    && !document.body.classList.contains("powered-off")
    && !document.body.classList.contains("boot-active")
    && !document.body.classList.contains("boot-pending")
    && !document.body.classList.contains("aigc-tv-active")
    && !document.body.classList.contains("reserved-game-active")
    && !document.body.classList.contains("dont-click-virus-active");
}

function clearScreensaverTimer() {
  window.clearTimeout(screensaverTimer);
  screensaverTimer = undefined;
}

function scheduleScreensaver(delay = screensaverConfig.idleDelay) {
  clearScreensaverTimer();
  if (!canStartScreensaver() || isScreensaverActive()) return;
  screensaverTimer = window.setTimeout(startScreensaver, delay);
}

function createScreensaverSpecs() {
  const groups = window.innerWidth <= 700
    ? [
        { size: 63, count: 4 },
        { size: 209, count: 1 }
      ]
    : [
        { size: 278, count: 2 },
        { size: 63, count: 4 },
        { size: 209, count: 2 }
      ];

  return groups.flatMap((group) => (
    Array.from({ length: group.count }, () => ({
      size: group.size,
      speed: screensaverConfig.speed
    }))
  ));
}

function createScreensaverEye(spec, index) {
  const element = document.createElement("div");
  const ball = document.createElement("div");
  const sprite = document.createElement("div");
  const maxX = Math.max(0, window.innerWidth - spec.size);
  const maxY = Math.max(0, window.innerHeight - spec.size);
  const directionX = Math.random() > 0.5 ? 1 : -1;
  const directionY = Math.random() > 0.5 ? 1 : -1;
  const item = {
    element,
    size: spec.size,
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
    vx: directionX * spec.speed,
    vy: directionY * spec.speed,
    bumpTimer: undefined
  };

  element.className = `screen-eye${index % 2 === 0 ? " is-scaling" : ""}`;
  element.style.setProperty("--eye-size", `${spec.size}px`);
  element.style.setProperty("--strip-width", `${spec.size * screensaverConfig.frameCount}px`);
  element.style.setProperty("--strip-travel", `${-spec.size * screensaverConfig.frameCount}px`);
  element.style.setProperty("--roll-duration", `${screensaverConfig.rollDuration}s`);
  element.style.setProperty("--roll-delay", `${-(Math.random() * screensaverConfig.rollDuration).toFixed(2)}s`);
  element.style.setProperty("--scale-delay", `${-((index * 0.36) % 3).toFixed(2)}s`);

  ball.className = "screen-eye-ball";
  sprite.className = "screen-eye-sprite";
  ball.appendChild(sprite);
  element.appendChild(ball);
  screensaverStage.appendChild(element);
  renderScreensaverEye(item);

  return item;
}

function renderScreensaverEye(item) {
  item.element.classList.toggle("is-reversed", item.vx < 0);
  item.element.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
}

function flashScreensaverEye(item) {
  window.clearTimeout(item.bumpTimer);
  item.element.classList.add("is-bumped");
  item.bumpTimer = window.setTimeout(() => {
    item.element.classList.remove("is-bumped");
  }, 120);
}

function tickScreensaver() {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  screensaverItems.forEach((item) => {
    let bumped = false;
    item.x += item.vx;
    item.y += item.vy;

    if (item.x >= maxX - item.size) {
      item.x = maxX - item.size;
      item.vx = -Math.abs(item.vx);
      bumped = true;
    }

    if (item.y >= maxY - item.size) {
      item.y = maxY - item.size;
      item.vy = -Math.abs(item.vy);
      bumped = true;
    }

    if (item.x <= 0) {
      item.x = 0;
      item.vx = Math.abs(item.vx);
      bumped = true;
    }

    if (item.y <= 0) {
      item.y = 0;
      item.vy = Math.abs(item.vy);
      bumped = true;
    }

    if (bumped) flashScreensaverEye(item);
    renderScreensaverEye(item);
  });
}

function startScreensaver() {
  if (!canStartScreensaver() || isScreensaverActive()) return;
  clearScreensaverTimer();
  screensaverStage.replaceChildren();
  screensaverItems = createScreensaverSpecs().map(createScreensaverEye);
  screensaver.setAttribute("aria-hidden", "false");
  document.body.classList.add("screensaver-active");

  if (!reducedMotionQuery.matches) {
    screensaverInterval = window.setInterval(tickScreensaver, screensaverConfig.intervalMs);
  }
}

function stopScreensaver(options = {}) {
  if (!isScreensaverActive()) {
    if (options.reschedule === false) {
      clearScreensaverTimer();
    } else {
      scheduleScreensaver();
    }
    return;
  }

  clearScreensaverTimer();
  window.clearInterval(screensaverInterval);
  screensaverItems.forEach((item) => window.clearTimeout(item.bumpTimer));
  screensaverItems = [];
  screensaverStage.replaceChildren();
  screensaver.setAttribute("aria-hidden", "true");
  document.body.classList.remove("screensaver-active");

  if (options.reschedule !== false) scheduleScreensaver();
}

function resetScreensaverFromActivity() {
  if (
    document.body.classList.contains("aigc-tv-active")
    || document.body.classList.contains("reserved-game-active")
    || document.body.classList.contains("dont-click-virus-active")
  ) {
    clearScreensaverTimer();
    return;
  }

  if (isScreensaverActive()) {
    stopScreensaver();
  } else {
    scheduleScreensaver();
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setCentralEyeGaze(event) {
  if (!centralEye) return;

  const rect = centralEye.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const normalizedX = (event.clientX - centerX) / Math.max(1, window.innerWidth / 2);
  const normalizedY = (event.clientY - centerY) / Math.max(1, window.innerHeight / 2);
  const vectorLength = Math.hypot(normalizedX, normalizedY);
  const circularScale = vectorLength > 1 ? 1 / vectorLength : 1;
  const pupilOffset = rect.width * 0.095;
  const eyeX = normalizedX * circularScale * pupilOffset;
  const eyeY = normalizedY * circularScale * pupilOffset;

  centralEye.style.setProperty("--eye-x", `${Math.round(eyeX * 10) / 10}px`);
  centralEye.style.setProperty("--eye-y", `${Math.round(eyeY * 10) / 10}px`);
}

function handleScreensaverPointerMove(event) {
  setCentralEyeGaze(event);

  if (!lastPointerPosition) {
    lastPointerPosition = { x: event.clientX, y: event.clientY };
    if (!isScreensaverActive()) scheduleScreensaver();
    return;
  }

  const distance = Math.hypot(
    event.clientX - lastPointerPosition.x,
    event.clientY - lastPointerPosition.y
  );
  lastPointerPosition = { x: event.clientX, y: event.clientY };

  if (isScreensaverActive() && distance >= screensaverConfig.mouseWakeDistance) {
    stopScreensaver();
  } else if (!isScreensaverActive()) {
    scheduleScreensaver();
  }
}

function getAigcTvChannel(index = aigcTvCurrentIndex) {
  return aigcChannels[((index % aigcChannels.length) + aigcChannels.length) % aigcChannels.length];
}

function setAigcTvPromptOpen(open) {
  aigcTvPromptOpen = open;
  if (!aigcTvOverlay) return;

  const promptPanel = aigcTvOverlay.querySelector("[data-aigc-prompt-panel]");
  const promptButton = aigcTvOverlay.querySelector("[data-aigc-prompt]");
  aigcTvOverlay.classList.toggle("is-prompt-open", aigcTvPromptOpen);
  promptPanel?.toggleAttribute("hidden", !aigcTvPromptOpen);
  promptButton?.setAttribute("aria-expanded", String(aigcTvPromptOpen));
}

function renderAigcTvChannel() {
  if (!aigcTvOverlay) return;

  const channel = getAigcTvChannel();
  aigcTvOverlay.querySelector("[data-aigc-channel-id]").textContent = channel.id;
  aigcTvOverlay.querySelector("[data-aigc-title]").textContent = channel.title;
  aigcTvOverlay.querySelector("[data-aigc-task]").textContent = channel.task;
  aigcTvOverlay.querySelector("[data-aigc-role]").textContent = channel.role;
  aigcTvOverlay.querySelector("[data-aigc-tags]").textContent = channel.tags.join(" / ");
  aigcTvOverlay.querySelector("[data-aigc-prompt-title]").textContent = `${channel.id} PROMPT`;
  aigcTvOverlay.querySelector("[data-aigc-prompt-text]").textContent = channel.prompt;

  const poster = aigcTvOverlay.querySelector("[data-aigc-poster]");
  const video = aigcTvOverlay.querySelector("[data-aigc-video]");
  poster.toggleAttribute("hidden", Boolean(channel.src));
  if (channel.src) {
    poster.removeAttribute("src");
    poster.alt = "";
  } else {
    poster.src = channel.poster;
    poster.alt = `${channel.title} preview frame`;
  }

  if (video) {
    video.pause();
    video.toggleAttribute("hidden", !channel.src);
    video.removeAttribute("src");
    video.removeAttribute("controls");
    video.poster = channel.poster;
    video.muted = false;
    video.currentTime = 0;
    updateAigcTvSoundButton();

    if (channel.src) {
      video.src = channel.src;
      video.load();
      video.volume = 0.9;
      video.play().catch(() => {
        video.setAttribute("controls", "");
      });
    }
  }

  setAigcTvPromptOpen(aigcTvPromptOpen);
}

function updateAigcTvSoundButton() {
  const video = aigcTvOverlay?.querySelector("[data-aigc-video]");
  const soundButton = aigcTvOverlay?.querySelector("[data-aigc-sound]");
  if (!video || !soundButton) return;

  const muted = video.muted || video.volume === 0;
  soundButton.classList.toggle("is-muted", muted);
  soundButton.setAttribute("aria-pressed", String(!muted));
  soundButton.setAttribute("aria-label", muted ? "开启声音" : "静音");
  soundButton.setAttribute("title", muted ? "开启声音" : "静音");
}

function finishAigcTvEffect(callback) {
  if (!aigcTvOverlay) return;

  const effect = aigcTvOverlay.querySelector("[data-aigc-effect]");
  window.clearTimeout(aigcTvSwitchTimer);
  if (effect) {
    effect.pause();
    effect.onended = null;
    effect.removeAttribute("data-closing");
    effect.removeAttribute("src");
    effect.load();
  }
  aigcTvOverlay.classList.remove("is-switching", "is-closing");
  if (callback) callback();
}

function playAigcTvEffect({ closing = false, callback } = {}) {
  if (!aigcTvOverlay || reducedMotionQuery.matches) {
    if (callback) callback();
    return;
  }

  const effect = aigcTvOverlay.querySelector("[data-aigc-effect]");
  if (!effect) {
    if (callback) callback();
    return;
  }

  window.clearTimeout(aigcTvSwitchTimer);
  aigcTvOverlay.classList.toggle("is-switching", !closing);
  aigcTvOverlay.classList.toggle("is-closing", closing);
  if (closing) effect.dataset.closing = "true";

  const fallbackMs = closing ? 3400 : 900;
  const finish = () => finishAigcTvEffect(callback);
  effect.onended = closing ? finish : null;
  if (!effect.currentSrc) {
    effect.src = aigcTvEffectSrc;
    effect.load();
  }

  try {
    effect.currentTime = 0;
  } catch {}
  effect.play().catch(() => {});
  aigcTvSwitchTimer = window.setTimeout(finish, fallbackMs);
}

function pauseAigcTvMainVideo() {
  const video = aigcTvOverlay?.querySelector("[data-aigc-video]");
  video?.pause();
}

function switchAigcTvChannel(direction = 1) {
  if (!aigcTvOverlay || aigcTvOverlay.classList.contains("is-switching") || aigcTvOverlay.classList.contains("is-closing")) {
    return;
  }

  const nextIndex = ((aigcTvCurrentIndex + direction) % aigcChannels.length + aigcChannels.length) % aigcChannels.length;
  pauseAigcTvMainVideo();
  setAigcTvPromptOpen(false);
  playAigcTvEffect({
    callback: () => {
      aigcTvCurrentIndex = nextIndex;
      renderAigcTvChannel();
    }
  });
}

function closeAigcTv() {
  if (!aigcTvOverlay || aigcTvOverlay.classList.contains("is-closing")) return;

  pauseAigcTvMainVideo();
  setAigcTvPromptOpen(false);
  playAigcTvEffect({
    closing: true,
    callback: () => {
      window.clearTimeout(aigcTvSwitchTimer);
      aigcTvOverlay?.remove();
      aigcTvOverlay = null;
      document.body.classList.remove("aigc-tv-active");
      scheduleScreensaver();
    }
  });
}

function openAigcTv() {
  if (aigcTvOverlay) {
    aigcTvOverlay.querySelector("[data-aigc-prompt]")?.focus({ preventScroll: true });
    return;
  }

  clearScreensaverTimer();
  stopScreensaver({ reschedule: false });
  document.body.classList.add("aigc-tv-active");
  aigcTvOverlay = document.createElement("section");
  aigcTvOverlay.className = "aigc-tv-overlay";
  aigcTvOverlay.setAttribute("role", "dialog");
  aigcTvOverlay.setAttribute("aria-modal", "true");
  aigcTvOverlay.setAttribute("aria-label", "AIGC TV player");
  aigcTvOverlay.innerHTML = `
    <div class="aigc-tv-media" aria-hidden="true">
      <img data-aigc-poster src="" alt="">
      <video data-aigc-video autoplay playsinline loop preload="auto" hidden></video>
      <video data-aigc-effect muted playsinline preload="none"></video>
    </div>
    <div class="aigc-tv-scan" aria-hidden="true"></div>
    <div class="aigc-tv-channel">
      <span data-aigc-channel-id></span>
      <span>AIGC 作品</span>
    </div>
    <button type="button" class="aigc-tv-sound-button" data-aigc-sound aria-pressed="true" aria-label="静音" title="静音">
      <span class="aigc-tv-speaker-icon" aria-hidden="true">
        <span class="aigc-tv-speaker-body"></span>
        <span class="aigc-tv-speaker-wave aigc-tv-speaker-wave-one"></span>
        <span class="aigc-tv-speaker-wave aigc-tv-speaker-wave-two"></span>
        <span class="aigc-tv-speaker-slash"></span>
      </span>
    </button>
    <div class="aigc-tv-meta">
      <p class="aigc-tv-kicker">信号已锁定</p>
      <h2 data-aigc-title></h2>
      <p><span>生成任务：</span> <strong data-aigc-task></strong></p>
      <p><span>我的工作：</span> <strong data-aigc-role></strong></p>
      <p><span>标签：</span> <strong data-aigc-tags></strong></p>
    </div>
    <div class="aigc-tv-actions">
      <button type="button" data-aigc-prompt aria-expanded="false">PROMPT</button>
      <button type="button" data-aigc-power aria-label="Exit AIGC TV">POWER</button>
    </div>
    <aside class="aigc-tv-prompt-panel" data-aigc-prompt-panel hidden>
      <div class="aigc-tv-prompt-head">
        <h2 data-aigc-prompt-title></h2>
        <button type="button" data-aigc-prompt-close aria-label="Close prompt">CLOSE</button>
      </div>
      <p data-aigc-prompt-text></p>
    </aside>`;
  document.body.appendChild(aigcTvOverlay);
  renderAigcTvChannel();

  aigcTvOverlay.addEventListener("click", (event) => {
    if (event.target.closest("[data-aigc-prompt]")) {
      setAigcTvPromptOpen(!aigcTvPromptOpen);
      return;
    }

    if (event.target.closest("[data-aigc-prompt-close]")) {
      setAigcTvPromptOpen(false);
      return;
    }

    if (event.target.closest("[data-aigc-sound]")) {
      const video = aigcTvOverlay.querySelector("[data-aigc-video]");
      if (video) {
        video.muted = !video.muted;
        video.play().catch(() => {
          video.setAttribute("controls", "");
        });
        updateAigcTvSoundButton();
      }
      return;
    }

    if (event.target.closest("[data-aigc-power]")) {
      closeAigcTv();
      return;
    }

    if (!event.target.closest("[data-aigc-prompt-panel]")) {
      switchAigcTvChannel(1);
    }
  });

  aigcTvOverlay.querySelector("[data-aigc-prompt]")?.focus({ preventScroll: true });
}

function closeReservedGameExperience(options = {}) {
  window.clearTimeout(reservedGameTimer);
  reservedGameTimer = 0;
  cleanupAbyssEyeGame();
  reservedGameOverlay?.remove();
  reservedGameOverlay = null;
  document.body.classList.remove("reserved-game-active");

  if (options.reschedule !== false) scheduleScreensaver();
}

function clearDontClickVirusLayer() {
  window.clearInterval(dontClickVirusInterval);
  dontClickVirusInterval = 0;
  dontClickVirusCount = 0;
  dontClickVirusLayer?.remove();
  dontClickVirusLayer = null;
  document.body.classList.remove("dont-click-virus-active");
}

function cleanupAbyssEyeGame() {
  if (!abyssGameState) return;

  if (abyssGameState.frame) {
    window.cancelAnimationFrame(abyssGameState.frame);
  }

  abyssGameState.eyeTimers?.forEach((timerId) => window.clearTimeout(timerId));
  abyssGameState = null;
}

function formatAbyssTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function createAbyssEyePosition(index, stageRect, size, randomize = false) {
  const stageWidth = Math.max(stageRect.width, 320);
  const stageHeight = Math.max(stageRect.height, 360);
  const [baseX, baseY] = randomize
    ? [9 + Math.random() * 82, 13 + Math.random() * 72]
    : abyssEyeAnchorPoints[index % abyssEyeAnchorPoints.length];
  const jitterX = randomize ? 0 : (Math.random() - 0.5) * stageWidth * 0.08;
  const jitterY = randomize ? 0 : (Math.random() - 0.5) * stageHeight * 0.08;
  const left = clamp(Math.round(stageWidth * baseX / 100 - size / 2 + jitterX), 12, stageWidth - size - 12);
  const top = clamp(Math.round(stageHeight * baseY / 100 - size / 2 + jitterY), 12, stageHeight - size - 12);
  const drift = Math.round((Math.random() - 0.5) * 14);
  return { left, top, drift };
}

function createAbyssEyeButton(index, stageRect) {
  const button = document.createElement("button");
  const stageWidth = Math.max(stageRect.width, 320);
  const size = Math.round(clamp(stageWidth * (0.065 + Math.random() * 0.035), 54, 112));
  const { left, top, drift } = createAbyssEyePosition(index, stageRect, size);
  const delay = Math.round(Math.random() * -1600);

  button.type = "button";
  button.className = "abyss-eye";
  button.dataset.abyssEye = String(index + 1);
  button.dataset.eyePhase = "closed";
  button.setAttribute("aria-label", `Clear eye ${index + 1}`);
  button.disabled = true;
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
  button.style.width = `${size}px`;
  button.style.setProperty("--eye-drift", `${drift}px`);
  button.style.setProperty("--eye-delay", `${delay}ms`);
  button.innerHTML = `<img src="${abyssGameAssets.eye}" alt="" draggable="false">`;

  return button;
}

function queueAbyssEyeTimer(callback, delay) {
  if (!abyssGameState) return 0;

  const timerId = window.setTimeout(() => {
    if (!abyssGameState || abyssGameState.status !== "playing") return;
    callback();
  }, delay);
  abyssGameState.eyeTimers.push(timerId);
  return timerId;
}

function openAbyssEye(button) {
  if (!button.isConnected || button.classList.contains("is-cleared")) return;

  button.dataset.eyePhase = "open";
  button.disabled = false;
}

function relocateClosedAbyssEye(button, index, stage) {
  if (!button.isConnected || button.classList.contains("is-cleared")) return;

  const stageRect = stage.getBoundingClientRect();
  const size = button.offsetWidth || Number.parseFloat(button.style.width) || 72;
  const { left, top, drift } = createAbyssEyePosition(index, stageRect, size, true);
  button.dataset.eyePhase = "closed";
  button.disabled = true;
  button.classList.add("is-repositioning");
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
  button.style.setProperty("--eye-drift", `${drift}px`);

  queueAbyssEyeTimer(() => {
    button.classList.remove("is-repositioning");
    openAbyssEye(button);
  }, abyssGameConfig.eyeClosedMs);
}

function scheduleAbyssEyeRelocation(button, index, stage) {
  const firstOpenDelay = abyssGameConfig.eyeClosedMs + Math.random() * 90;
  queueAbyssEyeTimer(() => openAbyssEye(button), firstOpenDelay);

  const loop = () => {
    relocateClosedAbyssEye(button, index, stage);
    queueAbyssEyeTimer(loop, abyssGameConfig.eyeCycleMs + Math.random() * 360);
  };
  queueAbyssEyeTimer(loop, abyssGameConfig.eyeCycleMs + Math.random() * 420);
}

function updateAbyssHud() {
  if (!abyssGameState) return;

  const remainingMs = Math.max(0, abyssGameConfig.durationMs - abyssGameState.elapsedMs);
  const progress = clamp(abyssGameState.elapsedMs / abyssGameConfig.durationMs, 0, 1);
  abyssGameState.timerNode.textContent = formatAbyssTime(remainingMs);
  abyssGameState.clearedNode.textContent = `${abyssGameState.cleared}/${abyssGameState.total}`;
  abyssGameState.threatNode.textContent = `${String(Math.round(progress * 100)).padStart(2, "0")}%`;
}

function finishAbyssGame(outcome) {
  if (!abyssGameState || abyssGameState.status !== "playing") return;

  const state = abyssGameState;
  state.status = outcome;
  if (state.frame) {
    window.cancelAnimationFrame(state.frame);
    state.frame = 0;
  }
  state.eyeTimers.forEach((timerId) => window.clearTimeout(timerId));
  state.eyeTimers = [];

  state.stage.classList.add(outcome === "win" ? "is-win" : "is-lose");
  state.eyeLayer.querySelectorAll("[data-abyss-eye]").forEach((eye) => {
    eye.disabled = true;
  });

  const won = outcome === "win";
  const elapsedSeconds = Math.max(1, Math.round(state.elapsedMs / 1000));
  state.resultNode.hidden = false;
  state.resultNode.innerHTML = `
    <section class="abyss-report-card" aria-live="polite">
      <div class="abyss-reporter-crop" aria-hidden="true">
        <img src="${abyssGameAssets.reporter}" alt="">
      </div>
      <div class="abyss-report-copy">
        <p class="abyss-report-kicker">${won ? "\u6c47\u62a5\u5b8c\u6210" : "\u6df1\u6e0a\u541e\u566c"}</p>
        <h2>${won ? "\u6240\u6709\u773c\u775b\u5df2\u6e05\u9664" : "\u4f60\u88ab\u6df1\u6e0a\u6293\u4f4f\u4e86"}</h2>
        <p>${won ? "\u76ee\u6807 15/15\uff0c\u6570\u636e\u957f\u6cb3\u6682\u65f6\u6062\u590d\u7a33\u5b9a\u3002\u5c0f\u89d2\u8272\u56de\u62a5\uff1a\u8fd9\u4e2a\u7f51\u7ad9\u786e\u5b9e\u8fd8\u80fd\u518d\u85cf\u70b9\u4e1c\u897f\u3002" : "\u773c\u775b\u8fd8\u6ca1\u6709\u5168\u90e8\u6253\u6389\uff0c\u6df1\u6e0a\u5de8\u53e3\u5df2\u7ecf\u5f20\u5f00\u5230\u6781\u9650\u3002"}</p>
        <p class="abyss-report-stat">EYES ${state.cleared}/${state.total} / TIME ${elapsedSeconds}s</p>
        <div class="abyss-report-actions">
          ${won ? "" : `<button type="button" data-abyss-game-retry>\u518d\u6765\u4e00\u6b21</button>`}
          <button type="button" data-abyss-game-return>\u8fd4\u56de\u4e3b\u754c\u9762</button>
        </div>
      </div>
    </section>`;

  const focusTarget = state.resultNode.querySelector("[data-abyss-game-return], [data-abyss-game-retry]");
  focusTarget?.focus({ preventScroll: true });
}

function tickAbyssGame(timestamp) {
  if (!abyssGameState || abyssGameState.status !== "playing") return;

  const state = abyssGameState;
  if (!state.startedAt) state.startedAt = timestamp;
  state.elapsedMs = timestamp - state.startedAt;
  const progress = clamp(state.elapsedMs / abyssGameConfig.durationMs, 0, 1);
  const easedProgress = Math.pow(progress, 1.18);
  const mouthScale = abyssGameConfig.mouthStartScale
    + (abyssGameConfig.mouthEndScale - abyssGameConfig.mouthStartScale) * easedProgress;

  state.mouthNode.style.setProperty("--mouth-scale", mouthScale.toFixed(3));
  state.mouthNode.style.setProperty("--mouth-alpha", (0.94 + progress * 0.06).toFixed(3));
  state.mouthNode.style.setProperty("--mouth-rise", `${Math.round((1 - progress) * 16)}px`);
  updateAbyssHud();

  if (progress >= 1) {
    finishAbyssGame("lose");
    return;
  }

  state.frame = window.requestAnimationFrame(tickAbyssGame);
}

async function initializeAbyssEyeGame() {
  if (!reservedGameOverlay) return;

  cleanupAbyssEyeGame();
  const activeOverlay = reservedGameOverlay;
  const stage = reservedGameOverlay.querySelector("[data-abyss-stage]");
  const eyeLayer = reservedGameOverlay.querySelector("[data-abyss-eye-layer]");
  const mouthNode = reservedGameOverlay.querySelector("[data-abyss-mouth]");
  const timerNode = reservedGameOverlay.querySelector("[data-abyss-timer]");
  const clearedNode = reservedGameOverlay.querySelector("[data-abyss-cleared]");
  const threatNode = reservedGameOverlay.querySelector("[data-abyss-threat]");
  const resultNode = reservedGameOverlay.querySelector("[data-abyss-result]");
  if (!stage || !eyeLayer || !mouthNode || !timerNode || !clearedNode || !threatNode || !resultNode) return;

  const stageRect = stage.getBoundingClientRect();
  const eyeButtons = Array.from({ length: abyssGameConfig.eyeCount }, (_, index) => (
    createAbyssEyeButton(index, stageRect)
  ));
  eyeLayer.append(...eyeButtons);

  await waitForAbyssStageImages(stage);
  if (reservedGameOverlay !== activeOverlay || !stage.isConnected) return;

  reservedGameOverlay.className = "reserved-game-overlay is-ready";
  reservedGameOverlay.removeAttribute("aria-busy");
  reservedGameOverlay.querySelector("[data-abyss-loading]")?.remove();
  reservedGameOverlay.querySelector("[data-reserved-game-close]")?.focus({ preventScroll: true });

  abyssGameState = {
    status: "playing",
    total: abyssGameConfig.eyeCount,
    cleared: 0,
    elapsedMs: 0,
    startedAt: 0,
    frame: 0,
    stage,
    eyeLayer,
    mouthNode,
    timerNode,
    clearedNode,
    threatNode,
    resultNode,
    eyeTimers: []
  };

  eyeButtons.forEach((button, index) => {
    scheduleAbyssEyeRelocation(button, index, stage);
  });
  updateAbyssHud();
  eyeLayer.addEventListener("click", (event) => {
    const eyeButton = event.target.closest("[data-abyss-eye]");
    if (!eyeButton || !eyeLayer.contains(eyeButton) || !abyssGameState || abyssGameState.status !== "playing") return;
    if (eyeButton.dataset.eyePhase !== "open") return;

    eyeButton.classList.add("is-cleared");
    eyeButton.disabled = true;
    abyssGameState.cleared += 1;
    updateAbyssHud();
    window.setTimeout(() => eyeButton.remove(), 240);

    if (abyssGameState.cleared >= abyssGameState.total) {
      finishAbyssGame("win");
    }
  });

  abyssGameState.frame = window.requestAnimationFrame(tickAbyssGame);
}

function createDontClickVirusButton(index, sourcePopup) {
  const button = document.createElement("button");
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  const columns = viewportWidth <= 700 ? 4 : 9;
  const rows = viewportWidth <= 700 ? 7 : 8;
  const slot = index % (columns * rows);
  const col = slot % columns;
  const row = Math.floor(slot / columns);
  const largeChance = Math.random() < 0.18;
  const scale = largeChance
    ? 2.1 + Math.random() * 1.35
    : 0.82 + Math.random() * 1.65;
  const width = Math.round(84 * scale + Math.random() * 36);
  const height = Math.round(36 * scale + Math.random() * 18);
  const fontSize = Math.round(14 * scale);
  const cellCenterX = (col + Math.random() * 0.9 + 0.05) * (viewportWidth / columns);
  const cellCenterY = (row + Math.random() * 0.9 + 0.05) * (viewportHeight / rows);
  const randomCenterX = Math.random() * viewportWidth;
  const randomCenterY = Math.random() * viewportHeight;
  const usePureRandom = Math.random() < 0.45;
  const centerX = usePureRandom ? randomCenterX : cellCenterX;
  const centerY = usePureRandom ? randomCenterY : cellCenterY;
  const overflowX = Math.min(width * 0.32, 90);
  const overflowY = Math.min(height * 0.32, 70);
  const left = clamp(
    Math.round(centerX - width / 2 + (Math.random() - 0.5) * width * 0.72),
    -overflowX,
    viewportWidth - width + overflowX
  );
  const top = clamp(
    Math.round(centerY - height / 2 + (Math.random() - 0.5) * height * 0.72),
    -overflowY,
    viewportHeight - height + overflowY
  );
  const rotate = Math.round((Math.random() - 0.5) * 24);

  button.type = "button";
  button.className = "dont-click-choice dont-click-virus-button";
  button.textContent = "好玩";
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
  button.style.width = `${width}px`;
  button.style.minHeight = `${height}px`;
  button.style.fontSize = `${fontSize}px`;
  button.style.padding = `${Math.max(6, Math.round(7 * scale))}px ${Math.max(12, Math.round(15 * scale))}px`;
  button.style.zIndex = String(index + 1);
  button.style.setProperty("--virus-rotate", `${rotate}deg`);
  button.addEventListener("click", () => {
    openReservedGameExperience(sourcePopup);
  });

  return button;
}

function openDontClickVirusLayer(sourcePopup) {
  if (dontClickVirusLayer) return;

  const maxButtons = window.innerWidth <= 700 ? 360 : 620;
  const baseBatchSize = window.innerWidth <= 700 ? 5 : 8;
  const batchDelay = 115;
  clearScreensaverTimer();
  stopScreensaver({ reschedule: false });
  document.body.classList.add("dont-click-virus-active");
  dontClickVirusLayer = document.createElement("div");
  dontClickVirusLayer.className = "dont-click-virus-layer";
  dontClickVirusLayer.setAttribute("role", "dialog");
  dontClickVirusLayer.setAttribute("aria-label", "好玩按钮正在扩散");
  document.body.appendChild(dontClickVirusLayer);

  function appendVirusBatch() {
    if (!dontClickVirusLayer) return;
    if (dontClickVirusCount >= maxButtons) {
      window.clearInterval(dontClickVirusInterval);
      dontClickVirusInterval = 0;
      return;
    }

    const growth = Math.min(10, Math.floor(dontClickVirusCount / 70));
    const batchSize = Math.min(baseBatchSize + growth, maxButtons - dontClickVirusCount);
    const buttons = Array.from({ length: batchSize }, () => {
      const button = createDontClickVirusButton(dontClickVirusCount, sourcePopup);
      dontClickVirusCount += 1;
      return button;
    });
    dontClickVirusLayer.append(...buttons);
  }

  appendVirusBatch();
  dontClickVirusInterval = window.setInterval(appendVirusBatch, batchDelay);
}

function renderReservedGameInterface() {
  if (!reservedGameOverlay) return;

  cleanupAbyssEyeGame();
  reservedGameOverlay.className = "reserved-game-overlay is-loading is-preloading";
  reservedGameOverlay.setAttribute("aria-busy", "true");
  reservedGameOverlay.innerHTML = `
    <div class="reserved-game-shell is-abyss-game">
      <header class="reserved-game-hud">
        <span>ABYSS EYE HUNT</span>
        <strong>EYES <span data-abyss-cleared>0/15</span></strong>
        <span>TIME <span data-abyss-timer>0:42</span></span>
        <span>ABYSS <span data-abyss-threat>00%</span></span>
        <button type="button" data-reserved-game-close aria-label="Exit reserved game">EXIT</button>
      </header>
      <main class="reserved-game-stage abyss-game-stage">
        <section class="abyss-game-arena" data-abyss-stage aria-label="Abyss eye hunt game">
          <img class="abyss-background" src="${abyssGameAssets.background}" alt="" draggable="false">
          <img class="abyss-river" src="${abyssGameAssets.river}" alt="" draggable="false">
          <div class="abyss-game-vignette" aria-hidden="true"></div>
          <img class="abyss-mouth" data-abyss-mouth src="${abyssGameAssets.mouth}" alt="" draggable="false">
          <div class="abyss-eye-layer" data-abyss-eye-layer></div>
          <div class="abyss-game-result" data-abyss-result hidden></div>
        </section>
        <section class="reserved-game-arena" aria-label="Reserved game interface">
          <div class="reserved-game-core" aria-hidden="true"></div>
          <p class="reserved-game-title">游戏界面预留中</p>
          <p class="reserved-game-tag">NEXT BUILD</p>
        </section>
      </main>
      <footer class="reserved-game-footer">PLAYER: GUEST_01 / OBJECTIVE: CLEAR 15 GREEN EYES BEFORE THE ABYSS OPENS</footer>
    </div>
    <p class="reserved-game-loading reserved-game-loading-overlay" data-abyss-loading aria-live="polite">\u8f7d\u5165\u4e2d\u3002\u3002\u3002\u3002</p>`;
  initializeAbyssEyeGame();
}

function showReservedGameLoadingScreen() {
  if (!reservedGameOverlay) return;

  cleanupAbyssEyeGame();
  reservedGameOverlay.className = "reserved-game-overlay is-loading";
  reservedGameOverlay.setAttribute("aria-busy", "true");
  reservedGameOverlay.innerHTML = `<p class="reserved-game-loading" aria-live="polite">\u8f7d\u5165\u4e2d\u3002\u3002\u3002\u3002</p>`;
}

function queueReservedGameInterfaceLoad() {
  if (!reservedGameOverlay) return;

  reservedGameTimer = 0;
  const overlay = reservedGameOverlay;
  if (abyssGameAssetsReady) {
    renderReservedGameInterface();
    return;
  }

  showReservedGameLoadingScreen();
  Promise.all([
    preloadAbyssGameAssets(),
    waitForAbyssGameDelay(450)
  ]).then(() => {
    if (reservedGameOverlay !== overlay) return;
    renderReservedGameInterface();
  });
}

function openReservedGameExperience(sourcePopup) {
  sourcePopup?.remove();
  clearDontClickVirusLayer();
  closeReservedGameExperience({ reschedule: false });
  clearScreensaverTimer();
  stopScreensaver({ reschedule: false });
  document.body.classList.add("reserved-game-active");

  reservedGameOverlay = document.createElement("section");
  reservedGameOverlay.className = "reserved-game-overlay is-intro";
  reservedGameOverlay.setAttribute("role", "dialog");
  reservedGameOverlay.setAttribute("aria-modal", "true");
  reservedGameOverlay.setAttribute("aria-label", "Abyss eye hunt game");
  reservedGameOverlay.innerHTML = `<p class="reserved-game-intro">给你看个更好玩的</p>`;
  reservedGameOverlay.innerHTML = `<p class="reserved-game-intro">\u7ed9\u4f60\u770b\u4e2a\u66f4\u597d\u73a9\u7684</p>`;
  document.body.appendChild(reservedGameOverlay);

  reservedGameOverlay.addEventListener("click", (event) => {
    if (event.target.closest("[data-abyss-game-return]")) {
      closeReservedGameExperience();
      return;
    }

    if (event.target.closest("[data-abyss-game-retry]")) {
      queueReservedGameInterfaceLoad();
      return;
    }

    if (event.target.closest("[data-reserved-game-close]")) {
      closeReservedGameExperience();
    }
  });

  reservedGameTimer = window.setTimeout(queueReservedGameInterfaceLoad, 1500);
}

function createIcon(item) {
  const element = item.href ? document.createElement("a") : document.createElement("button");
  element.className = `desktop-icon${item.disabled ? " disabled" : ""}`;
  element.innerHTML = `<img src="public/icons/${item.icon}" alt=""><span>${item.label}</span>`;
  if (item.href) {
    element.href = item.href;
  } else {
    element.type = "button";
    element.dataset.window = item.window;
  }
  if (item.size) element.dataset.iconSize = item.size;
  return element;
}

icons.forEach((item) => iconGrid.appendChild(createIcon(item)));

document.addEventListener("click", handleClickSound, { capture: true });

document.addEventListener("pointerdown", (event) => {
  setPressing(event.target.closest(pressableSelector));
});

document.addEventListener("pointerup", releasePressing);
document.addEventListener("pointercancel", releasePressing);
document.addEventListener("pointermove", handleScreensaverPointerMove);
["pointerdown", "keydown", "touchstart", "wheel", "click"].forEach((eventName) => {
  document.addEventListener(eventName, resetScreensaverFromActivity, { passive: true });
});
bootIntrusion?.addEventListener("click", startBootSequence);
window.addEventListener("resize", () => {
  syncAgentScale();
  if (isScreensaverActive()) {
    stopScreensaver({ reschedule: false });
    startScreensaver();
  }
});
window.addEventListener("blur", () => {
  if (!isScreensaverActive()) scheduleScreensaver(screensaverConfig.blurDelay);
});
window.addEventListener("focus", () => {
  if (!isScreensaverActive()) scheduleScreensaver();
});

document.addEventListener("keydown", (event) => {
  if (reservedGameOverlay && event.key === "Escape") {
    event.preventDefault();
    closeReservedGameExperience();
    return;
  }

  if (aigcTvOverlay) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeAigcTv();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      switchAigcTvChannel(1);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      switchAigcTvChannel(-1);
      return;
    }

    if (event.key.toLowerCase() === "p") {
      event.preventDefault();
      setAigcTvPromptOpen(!aigcTvPromptOpen);
      return;
    }
  }

  if (event.key !== "Enter" && event.key !== " ") return;
  setPressing(event.target.closest(pressableSelector));
});

document.addEventListener("keyup", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  releasePressing();
});

document.addEventListener("submit", (event) => {
  const form = event.target?.closest?.("[data-guestbook-form]");
  if (!form) return;

  event.preventDefault();
  submitGuestbookEntry(form);
});

agentNext.addEventListener("click", () => {
  const currentAgentMessages = getCurrentAgentMessages();
  if (agentMessageIndex >= currentAgentMessages.length - 1) {
    syncAgentNextState();
    return;
  }

  agentMessageIndex += 1;
  typeAgentMessage(currentAgentMessages[agentMessageIndex]);
});

agentEyeHotspot?.addEventListener("mouseenter", showAgentEyeAlert);
agentEyeHotspot?.addEventListener("mouseleave", resetAgentEyeAlert);

agentPrankCharacter?.addEventListener("click", () => {
  if (agentPrankState === "hanging") {
    setAgentPrankState("climbing");
    return;
  }

  if (agentPrankState === "climbing") {
    setAgentPrankState("idle");
  }
});

document.addEventListener("click", (event) => {
  const joltButton = event.target.closest("[data-jolt]");
  if (joltButton) {
    joltWindow(joltButton.closest(".window"));
    return;
  }

  const wallpaperButton = event.target.closest("#changeWallpaper, [data-change-wallpaper]");
  if (wallpaperButton) {
    changeWallpaper();
    return;
  }

  const returnButton = event.target.closest("[data-return-main]");
  if (returnButton) {
    restoreMainWindow();
    return;
  }

  const promoteButton = event.target.closest("[data-promote]");
  if (promoteButton) {
    const popup = promoteButton.closest(".popup");
    if (popup) promotePopupToMain(popup);
    return;
  }

  const opener = event.target.closest("[data-window]");
  if (opener) {
    if (opener.dataset.window === "ipDesign") {
      openIpDesignPage();
    } else if (opener.dataset.window === "myWorldPage") {
      openMyWorldPage();
    } else if (opener.dataset.window === "aigcTv") {
      openAigcTv();
    } else {
      openWindow(opener.dataset.window);
    }
    return;
  }

  const collapseButton = event.target.closest("[data-collapse]");
  if (collapseButton) {
    const windowElement = collapseButton.closest(".window");
    if (windowElement) toggleWindowCollapsed(windowElement);
    return;
  }

  const closeButton = event.target.closest("[data-close]");
  if (closeButton) closeButton.closest(".popup")?.remove();
});

function getDontClickStep(stepId) {
  return dontClickSteps.find((step) => step.id === stepId) || dontClickSteps[0];
}

function renderDontClickStep(popup, stepId = dontClickSteps[0].id) {
  const root = popup?.querySelector("[data-dont-click-flow]");
  if (!root) return;

  const step = getDontClickStep(stepId);
  const message = root.querySelector("[data-dont-click-message]");
  const actions = root.querySelector("[data-dont-click-actions]");
  if (!message || !actions) return;

  root.dataset.currentStep = step.id;
  if (step.id === "site-fun-check") {
    root.dataset.unfunAttempts = "0";
  } else {
    delete root.dataset.unfunAttempts;
  }
  root.classList.toggle("is-terminal", step.buttons.length === 0);
  message.textContent = step.text;
  actions.replaceChildren(...step.buttons.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dont-click-choice";
    if (item.next) button.dataset.dontClickNext = item.next;
    if (item.action) button.dataset.dontClickAction = item.action;
    if (item.action === "avoid-unfun") {
      button.classList.add("is-unfun-button");
      button.dataset.silentClick = "true";
    }
    button.textContent = item.label;
    return button;
  }));

  popup.classList.remove("is-flow-shifting");
  void popup.offsetWidth;
  popup.classList.add("is-flow-shifting");
}

function positionUnfunButtonInsideWindow(root, button, attempt) {
  const rootRect = root.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const safePad = 14;
  const maxX = Math.max(safePad, root.clientWidth - button.offsetWidth - safePad);
  const maxY = Math.max(safePad, root.clientHeight - button.offsetHeight - safePad);
  const startX = clamp(buttonRect.left - rootRect.left, safePad, maxX);
  const startY = clamp(buttonRect.top - rootRect.top, safePad, maxY);
  const targets = [
    {
      x: root.clientWidth - button.offsetWidth - safePad,
      y: Math.round(root.clientHeight * 0.42),
      rotate: -4
    },
    {
      x: safePad,
      y: root.clientHeight - button.offsetHeight - safePad,
      rotate: 5
    }
  ];
  const target = targets[attempt - 1] || targets[targets.length - 1];

  button.classList.add("is-unfun-evading");
  button.style.left = `${startX}px`;
  button.style.top = `${startY}px`;
  button.style.setProperty("--evade-rotate", "0deg");
  void button.offsetWidth;
  button.style.left = `${clamp(target.x, safePad, maxX)}px`;
  button.style.top = `${clamp(target.y, safePad, maxY)}px`;
  button.style.setProperty("--evade-rotate", `${target.rotate}deg`);
}

function handleUnfunAttempt(popup, button) {
  const root = popup?.querySelector("[data-dont-click-flow]");
  if (!root) return;

  const attempt = Number.parseInt(root.dataset.unfunAttempts || "0", 10) + 1;
  root.dataset.unfunAttempts = String(attempt);

  if (attempt <= 2) {
    positionUnfunButtonInsideWindow(root, button, attempt);
    return;
  }

  openDontClickVirusLayer(popup);
}

function initializeDontClickFlow(popup) {
  const root = popup?.querySelector("[data-dont-click-flow]");
  if (!root || root.dataset.flowReady === "true") return;

  root.dataset.flowReady = "true";
  renderDontClickStep(popup);
  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dont-click-next], [data-dont-click-action]");
    if (!button || !root.contains(button)) return;

    event.stopPropagation();
    if (button.dataset.dontClickAction === "open-game-preview") {
      openReservedGameExperience(popup);
      return;
    }

    if (button.dataset.dontClickAction === "avoid-unfun") {
      handleUnfunAttempt(popup, button);
      return;
    }

    renderDontClickStep(popup, button.dataset.dontClickNext);
  });
}

function setDontClickTilt(popup, tiltX = 0, tiltY = 0) {
  popup.style.setProperty("--tilt-x", `${tiltX.toFixed(3)}deg`);
  popup.style.setProperty("--tilt-y", `${tiltY.toFixed(3)}deg`);
}

function resetDontClickTilt(popup) {
  setDontClickTilt(popup, 0, 0);
}

function initializeDontClickWindow(popup) {
  if (!popup || popup.dataset.tiltReady === "true") return;

  initializeDontClickFlow(popup);
  popup.dataset.tiltReady = "true";
  resetDontClickTilt(popup);

  const tiltState = {
    active: false,
    frame: 0,
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0
  };
  const tiltMaxX = 5.8;
  const tiltMaxY = 7.2;
  const tiltEase = 0.18;
  const tiltSnap = 0.012;

  function scheduleTiltFrame() {
    if (!tiltState.frame) {
      tiltState.frame = window.requestAnimationFrame(animateTilt);
    }
  }

  function animateTilt() {
    tiltState.frame = 0;
    if (!popup.isConnected) return;

    tiltState.currentX += (tiltState.targetX - tiltState.currentX) * tiltEase;
    tiltState.currentY += (tiltState.targetY - tiltState.currentY) * tiltEase;

    const deltaX = Math.abs(tiltState.targetX - tiltState.currentX);
    const deltaY = Math.abs(tiltState.targetY - tiltState.currentY);
    if (deltaX < tiltSnap) tiltState.currentX = tiltState.targetX;
    if (deltaY < tiltSnap) tiltState.currentY = tiltState.targetY;

    setDontClickTilt(popup, tiltState.currentX, tiltState.currentY);

    if (Math.abs(tiltState.targetX - tiltState.currentX) > tiltSnap || Math.abs(tiltState.targetY - tiltState.currentY) > tiltSnap) {
      scheduleTiltFrame();
      return;
    }

    if (!tiltState.active && tiltState.targetX === 0 && tiltState.targetY === 0) {
      popup.classList.remove("is-tilting");
    }
  }

  function updateTilt(event) {
    if (reducedMotionQuery.matches) return;

    const rect = popup.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const normalizedX = clamp((event.clientX - rect.left - rect.width / 2) / (rect.width / 2), -1, 1);
    const normalizedY = clamp((event.clientY - rect.top - rect.height / 2) / (rect.height / 2), -1, 1);

    tiltState.active = true;
    tiltState.targetX = normalizedY * tiltMaxX;
    tiltState.targetY = -normalizedX * tiltMaxY;
    popup.classList.add("is-tilting");
    scheduleTiltFrame();
  }

  function clearTilt() {
    tiltState.active = false;
    tiltState.targetX = 0;
    tiltState.targetY = 0;
    scheduleTiltFrame();
  }

  popup.addEventListener("pointermove", updateTilt, { passive: true });
  popup.addEventListener("pointerleave", clearTilt);
  popup.addEventListener("pointercancel", clearTilt);

  const closeZone = popup.querySelector(".titlebar-close-only .titlebar-actions");
  closeZone?.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
  closeZone?.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.remove();
  });
  popup.querySelector("[data-close]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.remove();
  });
}

function getPopupMount(name) {
  if (name !== "dontClick") return popupLayer;

  if (!elevatedPopupLayer) {
    elevatedPopupLayer = document.createElement("div");
    elevatedPopupLayer.className = "popup-layer popup-layer-elevated";
    document.body.appendChild(elevatedPopupLayer);
  }

  return elevatedPopupLayer;
}

function openWindow(name) {
  if (name === "aigcTv") {
    openAigcTv();
    return;
  }

  const config = windows[name];
  if (!config) return;

  const existing = document.querySelector(`[data-popup="${name}"]`);
  if (existing) {
    existing.style.setProperty("--z", ++zIndex);
    if (name === "guest") initializeGuestbook(existing);
    if (name === "dontClick") initializeDontClickWindow(existing);
    return;
  }

  const popup = document.createElement("section");
  popup.className = "window popup";
  popup.dataset.popup = name;
  popup.style.setProperty("--z", ++zIndex);
  const titlebarControls = config.closeOnly
    ? `<div class="titlebar-actions">
        <button data-close aria-label="Close">${titlebarGlyphs.close}</button>
      </div>`
    : `<button class="system-dot" data-jolt aria-label="Jolt window">${titlebarGlyphs.dot}</button>
      <div class="titlebar-actions">
        <button data-collapse aria-expanded="true" aria-label="Collapse window">${titlebarGlyphs.collapseOpen}</button>
        <button data-promote aria-label="Use as main window">${titlebarGlyphs.grid}</button>
        <button data-close aria-label="Close">${titlebarGlyphs.close}</button>
      </div>`;
  popup.innerHTML = `
    <header class="titlebar${config.closeOnly ? " titlebar-close-only" : ""}">
      <strong class="titlebar-title">${config.title}</strong>
      ${titlebarControls}
    </header>
    <div class="window-body ${config.className || ""}">${config.body}</div>`;
  getPopupMount(name).appendChild(popup);
  if (name === "guest") initializeGuestbook(popup);
  if (name === "dontClick") initializeDontClickWindow(popup);
  makeDraggable(popup);
}

function makeDraggable(popup) {
  const bar = popup.querySelector(".titlebar");
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let dragging = false;

  bar.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    dragging = true;
    document.body.classList.add("is-dragging-window");
    popup.style.setProperty("--z", ++zIndex);
    const rect = popup.getBoundingClientRect();
    startX = event.clientX;
    startY = event.clientY;
    baseX = rect.left + rect.width / 2 - window.innerWidth / 2;
    baseY = rect.top - 76;
    bar.setPointerCapture(event.pointerId);
  });

  bar.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    popup.style.left = `calc(50% + ${baseX + event.clientX - startX}px)`;
    popup.style.top = `${76 + baseY + event.clientY - startY}px`;
  });

  function endDrag() {
    dragging = false;
    document.body.classList.remove("is-dragging-window");
  }

  bar.addEventListener("pointerup", endDrag);
  bar.addEventListener("pointercancel", endDrag);
  bar.addEventListener("lostpointercapture", endDrag);
}

document.querySelector("#toggleBody").addEventListener("click", joltMainWindow);

document.addEventListener("animationend", (event) => {
  if (event.animationName === "window-jolt") {
    event.target.closest(".window")?.classList.remove("is-jolting");
  }
});

crtSwitch.addEventListener("click", handleInvertSwitchClick);

document.querySelector("#powerOff").addEventListener("click", () => {
  stopScreensaver({ reschedule: false });
  document.body.classList.add("powered-off");
});

document.querySelector("#wakeButton").addEventListener("click", () => {
  document.body.classList.remove("powered-off");
  scheduleScreensaver();
});

syncStaticTitlebarGlyphs();
syncInvertSwitch();
syncAgentScale();
syncGithubProjectStatus();
applyInitialWallpaperFromParams();
const bootVisible = initializeBootSequence();
if (screensaverPreviewMode) {
  window.setTimeout(startScreensaver, 300);
} else if (!bootVisible) {
  pulseLoadingCursor(320);
  scheduleScreensaver();
}
window.ytmScreensaver = {
  start: startScreensaver,
  stop: () => stopScreensaver(),
  reset: () => scheduleScreensaver()
};
window.ytmBoot = {
  reset: () => deleteCookie(bootCookieName),
  start: () => {
    deleteCookie(bootCookieName);
    window.location.search = "?boot=1";
  }
};
