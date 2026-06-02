const icons = [
  { label: "About", icon: "about.gif", window: "about", size: "large" },
  { label: "Project", icon: "projects.gif", window: "project", size: "large" },
  { label: "Contact", icon: "contact.gif", window: "contact", size: "large" },
  { label: "Blog", icon: "blog.gif", window: "blog", size: "xlarge" },
  { label: "IP design", icon: "ip-design.gif", window: "ip" },
  { label: "My World", icon: "my-world-city.gif", window: "myWorld", size: "city" },
  { label: "Music", icon: "music.gif", window: "music" },
  { label: "Guest", icon: "guestbook.png", window: "guest" },
  { label: "AIGC TV", icon: "looptv.gif", window: "aigcTv" },
  { label: "Dont Click", icon: "corrupted.gif", window: "dontClick" }
];

const windows = {
  about: {
    title: "About.txt",
    body: `
      <div class="popup-content">
        <img class="avatar" src="public/icons/about.gif" alt="">
        <p>Hello there, I'm Simone Marzulli and I'm a full-stack software engineer, open source enthusiast and piadina lover!</p>
        <p>This page recreates the warm, chaotic personal-computer desktop feeling of the original site.</p>
        <div class="link-list">
          <a href="https://github.com/syxanash">GitHub</a>
          <a href="https://blog.simone.computer">Blog</a>
          <a href="mailto:hello@simone.computer">Email</a>
        </div>
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
    title: "Guest.db",
    className: "guestbook",
    body: `
      <div class="popup-content guestbook">
        <p><strong>Guest</strong></p>
        <p>Reserved for guest messages, recommendations, or selected feedback.</p>
        <p class="guestbook-warning-text">This module is kept as a future social-proof slot.</p>
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
    title: "Dont Click",
    body: `
      <div class="popup-content">
        <p><strong>Signal unstable.</strong></p>
        <p>This slot is intentionally reserved for a playful warning or hidden interaction.</p>
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

const titlebarGlyphs = {
  dot: "\u25cf",
  collapseOpen: "\u2212",
  collapseClosed: "+",
  grid: "\u25a6",
  close: "\u00d7",
  returnMain: "\u21b5"
};

const wallpaperClasses = [
  "wallpaper-cyber-city",
  "wallpaper-cyber-terminal",
  "wallpaper-cyber-rider",
  "wallpaper-cyber-zen",
  "wallpaper-cyber-emoji",
  "wallpaper-cyber-hud",
  "wallpaper-cyber-nerv",
  "wallpaper-cyber-statue",
  "wallpaper-cyber-white-archive",
  "wallpaper-cyber-spider",
  "wallpaper-clouds"
];

const iconGrid = document.querySelector("#iconGrid");
const mainWindow = document.querySelector("#mainWindow");
const popupLayer = document.querySelector("#popupLayer");
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
const invertSafetyConsentKey = "portfolioInvertSafetyConsent";
const screensaver = document.querySelector("#screensaver");
const screensaverStage = document.querySelector("#screensaverStage");
const hiddenAgent = document.querySelector("#hiddenAgent");
const agentSilhouette = document.querySelector("#agentSilhouette");
const agentDialogText = document.querySelector("#agentDialogText");
const agentNext = document.querySelector("#agentNext");
const agentPrank = document.querySelector("#agentPrank");
const agentPrankCharacter = document.querySelector("#agentPrankCharacter");
const agentPrankImage = agentPrankCharacter?.querySelector("img");
const originalMainChildren = Array.from(mainWindow.children);
const pressableSelector = "button, .desktop-icon, .link-list a";
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
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
  element.classList.add("is-pressing");
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

  if (wasVisible) return;

  startAgentEncounter();
  typeAgentMessage(getCurrentAgentMessages()[agentMessageIndex]);
}

function hideHiddenAgent() {
  if (!hiddenAgent) return;
  window.clearTimeout(agentTypingTimer);
  hiddenAgent.classList.remove("is-visible");
  hiddenAgent.setAttribute("aria-hidden", "true");
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

function changeWallpaper() {
  pulseLoadingCursor(180);
  document.body.classList.remove(...wallpaperClasses.filter(Boolean));
  wallpaperIndex = (wallpaperIndex + 1) % wallpaperClasses.length;
  const nextWallpaper = wallpaperClasses[wallpaperIndex];
  if (nextWallpaper) {
    document.body.classList.add(nextWallpaper);
  }
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
  promotedMainName = name;
  popup.remove();
  pulseLoadingCursor(180);
}

function isScreensaverActive() {
  return document.body.classList.contains("screensaver-active");
}

function canStartScreensaver() {
  return Boolean(screensaver && screensaverStage)
    && !document.body.classList.contains("powered-off")
    && !document.body.classList.contains("boot-active")
    && !document.body.classList.contains("boot-pending");
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
    if (options.reschedule !== false) scheduleScreensaver();
    return;
  }

  window.clearInterval(screensaverInterval);
  screensaverItems.forEach((item) => window.clearTimeout(item.bumpTimer));
  screensaverItems = [];
  screensaverStage.replaceChildren();
  screensaver.setAttribute("aria-hidden", "true");
  document.body.classList.remove("screensaver-active");

  if (options.reschedule !== false) scheduleScreensaver();
}

function resetScreensaverFromActivity() {
  if (isScreensaverActive()) {
    stopScreensaver();
  } else {
    scheduleScreensaver();
  }
}

function handleScreensaverPointerMove(event) {
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
  if (event.key !== "Enter" && event.key !== " ") return;
  setPressing(event.target.closest(pressableSelector));
});

document.addEventListener("keyup", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  releasePressing();
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
    openWindow(opener.dataset.window);
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

function openWindow(name) {
  const config = windows[name];
  if (!config) return;

  const existing = document.querySelector(`[data-popup="${name}"]`);
  if (existing) {
    existing.style.setProperty("--z", ++zIndex);
    return;
  }

  const popup = document.createElement("section");
  popup.className = "window popup";
  popup.dataset.popup = name;
  popup.style.setProperty("--z", ++zIndex);
  popup.innerHTML = `
    <header class="titlebar">
      <button class="system-dot" data-jolt aria-label="Jolt window">${titlebarGlyphs.dot}</button>
      <strong class="titlebar-title">${config.title}</strong>
      <div class="titlebar-actions">
        <button data-collapse aria-expanded="true" aria-label="Collapse window">${titlebarGlyphs.collapseOpen}</button>
        <button data-promote aria-label="Use as main window">${titlebarGlyphs.grid}</button>
        <button data-close aria-label="Close">${titlebarGlyphs.close}</button>
      </div>
    </header>
    <div class="window-body ${config.className || ""}">${config.body}</div>`;
  popupLayer.appendChild(popup);
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
