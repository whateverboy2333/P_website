const icons = [
  { label: "About", icon: "about.gif", window: "about" },
  { label: "Projects", icon: "projects.gif", window: "projects" },
  { label: "Contact", icon: "contact.gif", window: "contact" },
  { label: "Blog", icon: "blog.gif", href: "https://blog.simone.computer" },
  { label: "Links", icon: "links.gif", window: "links" },
  { label: "Music", icon: "music.gif", window: "music" },
  { label: "Guestbook", icon: "guestbook.png", window: "guestbook" },
  { label: "loop TV", icon: "looptv.gif", window: "tv" },
  { label: "Lite Bulb", icon: "litebulb.gif", window: "bulb" },
  { label: "Ogbqkd", icon: "corrupted.gif", window: "corrupted", disabled: true }
];

const cestinoMessages = [
  "this button does nothing...",
  "nothing is happening...",
  "you really like this window?",
  "old design was better",
  "buttons nowadays are not as clickable as they used to be",
  "we're slaves of nostalgia",
  "past was cozy",
  "present is tiresome"
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
  projects: {
    title: "Projects.exe",
    body: `
      <div class="terminal-list">
        <p><span class="bulletpoint">></span> <a href="https://github.com/syxanash/syxanash.github.io">syxanash.github.io</a> // personal website</p>
        <p><span class="bulletpoint">></span> Awesome GUI // a tiny directory of charming interfaces</p>
        <p><span class="bulletpoint">></span> Web archaeology, retro UI, playful frontend experiments</p>
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
  links: {
    title: "Links.html",
    body: `
      <div class="popup-content">
        <p><strong>Somewhere on the web...</strong></p>
        <div class="link-list">
          <a href="https://blog.simone.computer">Blog</a>
          <a href="https://github.com/syxanash">GitHub</a>
          <a href="https://bsky.app/profile/simone.computer">Bluesky</a>
          <a href="https://gist.github.com/syxanash/7b2d135a566cfb2f03dfceba6b34e61a">Pizza recipe</a>
        </div>
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
  guestbook: {
    title: "Guestbook.db",
    className: "guestbook",
    body: `
      <div class="popup-content guestbook">
        <p><strong>Guestbook</strong></p>
        <p><strong>Visitor:</strong> this website made my browser feel like a treasured old machine.</p>
        <p><strong>Date:</strong> May 8, 2026</p>
        <p class="guestbook-warning-text">Comments are preserved in spirit for this clone.</p>
      </div>`
  },
  tv: {
    title: "loop TV",
    body: `
      <div class="terminal-list">
        <p class="blink">TV OUTPUT</p>
        <p>//// SIGNAL LOCKED ////</p>
        <p>animated media loop simulated</p>
      </div>`
  },
  bulb: {
    title: "Lite Bulb",
    body: `
      <div class="popup-content">
        <div class="bulb"></div>
        <p class="typing-text-container">The light is on. Nostalgia levels are unstable.</p>
      </div>`
  },
  corrupted: {
    title: "Aogwix",
    body: `
      <div class="popup-content">
        <p><strong>Cannot open corrupted file.</strong></p>
        <p>Try again later, or pretend this was a feature.</p>
      </div>`
  },
  website: {
    title: "About this website",
    body: `
      <div class="popup-content">
        <p>This is a visual and structural clone of the main desktop page.</p>
        <p>Build 26d98db24b2e126a0dbfdddad14c1886 · size 103M</p>
      </div>`
  },
  cestino: {
    title: "Cestino",
    body: ""
  }
};

let zIndex = 20;
let cestinoIndex = 0;
let wallpaperIndex = 0;

const wallpaperClasses = [
  "",
  "wallpaper-stars",
  "wallpaper-clouds",
  "wallpaper-maze",
  "wallpaper-weave"
];

const iconGrid = document.querySelector("#iconGrid");
const popupLayer = document.querySelector("#popupLayer");

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
  return element;
}

icons.forEach((item) => iconGrid.appendChild(createIcon(item)));

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-window]");
  if (opener) openWindow(opener.dataset.window);

  const closeButton = event.target.closest("[data-close]");
  if (closeButton) closeButton.closest(".popup").remove();
});

function openWindow(name) {
  const config = windows[name];
  if (!config) return;

  if (name === "cestino") {
    const message = cestinoMessages[cestinoIndex % cestinoMessages.length];
    cestinoIndex += 1;
    config.body = `
      <div class="popup-content">
        <p class="cestino-message-text">${message}</p>
        <div class="dialog-actions"><button class="retro-button" data-close>OK</button></div>
      </div>`;
  }

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
      <button class="system-dot" data-close aria-label="Close">●</button>
      <strong class="titlebar-title">${config.title}</strong>
      <div class="titlebar-actions">
        <button aria-label="Raise">▲</button>
        <button aria-label="Grid">▦</button>
        <button data-close aria-label="Close">◓</button>
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

  bar.addEventListener("pointerup", () => {
    dragging = false;
  });
}

document.querySelector("#toggleBody").addEventListener("click", () => {
  const body = document.querySelector("#mainBody");
  body.hidden = !body.hidden;
});

document.querySelector("#changeWallpaper").addEventListener("click", () => {
  document.body.classList.remove(...wallpaperClasses.filter(Boolean));
  wallpaperIndex = (wallpaperIndex + 1) % wallpaperClasses.length;
  const nextWallpaper = wallpaperClasses[wallpaperIndex];
  if (nextWallpaper) {
    document.body.classList.add(nextWallpaper);
  }
});

document.querySelector("#crtSwitch").addEventListener("click", () => {
  document.body.classList.toggle("no-crt");
});

document.querySelector("#powerOff").addEventListener("click", () => {
  document.body.classList.add("powered-off");
});

document.querySelector("#wakeButton").addEventListener("click", () => {
  document.body.classList.remove("powered-off");
});
