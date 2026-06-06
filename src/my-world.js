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

const myWorldSections = [
  {
    id: "city",
    eyebrow: "01 / CITY CORE",
    title: "STRAY.NET OVERVIEW",
    items: [
      {
        number: "01",
        title: "城市俯视图 / STRAY.NET 总览",
        src: "public/my-world/stray-net-city-overview.png",
        alt: "STRAY.NET city overhead map",
        layout: "map",
        maxWidth: "min(100%, 1120px)",
        description: "STRAY.NET 的世界入口，以环形主城和上传核心塔建立城市秩序。画面先给读者一个宏观坐标：每个区域都是数字居民情绪、记忆、娱乐、维护和故障机制的可视化分区。",
        prompt: "赛博朋克虚拟都市核心区俯视地图，紫蓝霓虹，环形城市结构，中央上传核心塔，多个中文区域标注，HUD 图例、数据面板、垂直分层结构，精密世界观设定图，isometric city map, dark digital city, glowing circuit roads, cinematic concept art, high detail"
      },
      {
        number: "02",
        title: "主城集群 / 新意识入口",
        src: "public/my-world/stray-net-mind-hub.png",
        alt: "STRAY.NET digital city hub scene",
        layout: "panorama",
        maxWidth: "min(100%, 1060px)",
        description: "主城展示数字居民聚集后的生活密度。霓虹屏幕、悬浮人格、上传装置和多层平台共同构成“新意识登陆后”的第一站，强调拥挤、连接和身份转译。",
        prompt: "巨大的虚拟都市内部广场，紫色与蓝色霓虹，许多可爱数字居民和半透明角色，多层平台、悬浮广告牌、上传装置、STRAY.NET 标识，赛博朋克但可爱，dark cyber city, glowing holograms, dense digital society, wide angle, immersive worldbuilding"
      }
    ]
  },
  {
    id: "districts",
    eyebrow: "02 / DISTRICTS",
    title: "AREA ARCHIVE",
    items: [
      {
        number: "03",
        title: "云端花园 / 情绪修复区",
        src: "public/my-world/cloud-garden.png",
        alt: "Cloud Garden district scene",
        layout: "region",
        description: "云端花园是城市中最柔软的休息区，以云层、樱花、漂浮平台和发光植物表达“情绪修复”。它负责让居民暂时从数据洪流中降噪，恢复好奇心和轻盈感。",
        prompt: "明亮梦幻的空中云端花园，漂浮平台，粉紫色发光樱花树，蓝天白云，透明水面和圆形休息区，可爱数字居民散步，标牌写着云端花园 CLOUD GARDEN，柔和科幻，healing cyber garden, pastel neon, floating islands, dreamy atmosphere"
      },
      {
        number: "04",
        title: "故障裂谷 / 高危删除区",
        src: "public/my-world/fault-rift-zone.png",
        alt: "Fault Rift district scene",
        layout: "region",
        description: "故障裂谷是被隔离的风险地带，承载崩坏协议、删除残渣和不稳定缓存。它让世界不只是可爱，也有危险边界：系统会出错，记忆会碎裂，居民需要学习避开裂缝。",
        prompt: "紫色赛博朋克断裂峡谷，城市平台被数据裂缝撕开，高危删除区、隔离边界、系统警告中文标识，漂浮碎片和电弧，迷你数字居民站在边缘，dark neon fault rift, corrupted data city, dramatic lighting, high detail"
      },
      {
        number: "05",
        title: "记忆市场 / 情绪交易街",
        src: "public/my-world/memory-market.png",
        alt: "Memory Market district scene",
        layout: "region",
        description: "记忆市场把抽象的情绪和人格碎片变成可浏览、可交换的摊位。这里像夜市也像数据库，居民在瓶罐、回放亭和咖啡馆之间整理自己的过去。",
        prompt: "赛博朋克记忆市场街区，紫蓝霓虹，MEMORY CAFE、记忆回放亭、人格碎片修补铺中文招牌，许多可爱数字居民，玻璃瓶中发光记忆，湿润石板路，wide angle, immersive night market, emotional data trading"
      },
      {
        number: "06",
        title: "维护防火墙区 / 城市自检系统",
        src: "public/my-world/firewall-maintenance.png",
        alt: "Firewall Maintenance district scene",
        layout: "region",
        description: "维护防火墙区是城市的运维脏活所在，负责协议认证、数据过滤、补丁更新和安全巡逻。它体现世界的底层秩序：可爱居民背后仍有严格的系统维护逻辑。",
        prompt: "未来数字城市维护防火墙区，紫蓝霓虹，巨型防火墙塔、协议认证闸口、数据过滤门、补丁站中文招牌，无人机巡逻，许多数字居民，wet reflective floor, cyberpunk maintenance district, security infrastructure"
      },
      {
        number: "07",
        title: "娱乐梦境区 / 幻觉直播广场",
        src: "public/my-world/entertainment-dream.png",
        alt: "Entertainment Dream district scene",
        layout: "region",
        description: "娱乐梦境区是城市的高能感官层，直播、幻觉乐园、梦境舞台和夜店共同制造沉浸式快乐。它让数字居民的娱乐不只是消费，而是身份展示和梦境表演。",
        prompt: "紫蓝霓虹虚拟娱乐梦境区，巨型 Dream Stage 舞台，直播广场、夜店、幻觉乐园中文招牌，可爱数字居民和虚拟偶像，全息屏幕、摩天轮、赛博夜生活，wide angle, dense cyber entertainment district"
      },
      {
        number: "08",
        title: "废弃缓存区 / 故障回收街",
        src: "public/my-world/abandoned-cache-zone.png",
        alt: "Abandoned Cache and Fault Rift district scene",
        layout: "region",
        description: "废弃缓存区是系统边缘的拾荒地，旧数据、删除碎片和失效协议在这里堆积。它为世界加入一种废土质感：被遗忘的内容并没有消失，而是在暗处继续发光。",
        prompt: "废弃缓存区与故障裂谷街景，紫色霓虹，缓存回收站、删除残渣、修复工坊、数据残骸交易所中文招牌，破损城市平台和数据裂缝，可爱数字居民拾荒，dark cyber scrapyard, glitch wasteland, atmospheric"
      }
    ]
  },
  {
    id: "residents",
    eyebrow: "03 / RESIDENTS",
    title: "DIGITAL RESIDENT DESIGN",
    items: [
      {
        number: "09",
        title: "N3T-07 / 赛博化身单元",
        src: "public/my-world/n3t-07-character.png",
        alt: "N3T-07 digital resident design sheet",
        layout: "character",
        description: "N3T-07 是穿行城市的数据向导，方形屏幕头和重装装备让它看起来像小型终端。它代表“连接”和“导航”，把居民与城市协议维持在可访问状态。",
        prompt: "数字居民角色设定图，N3T-07，小型方形屏幕头机器人，黑色战术科技服，紫色与青蓝发光细节，正视图背视图侧视图和动作图，细节特写、配色方案、比例图，dark sci-fi character sheet, cute but tactical, Chinese UI labels"
      },
      {
        number: "10",
        title: "云栖-07 / 云端花园居民",
        src: "public/my-world/yunqi-07-character.png",
        alt: "YUNQI-07 digital resident design sheet",
        layout: "character",
        description: "云栖-07 是云端花园里的休憩型居民，圆润头盔和白色软装强调安静、好奇和疗愈。它把城市的科技感转译为更温柔的生活切面。",
        prompt: "云端花园数字居民角色设定图，YUNQI-07，圆形黑色玻璃头盔，紫色发光眼睛，白色柔软连帽休闲服，三视图、动作展示、表情设定、服装结构、配色方案，cute digital resident, soft sci-fi, lavender glow, Chinese UI labels"
      },
      {
        number: "11",
        title: "STRAY-03 / 透明巡游小灵",
        src: "public/my-world/stray-03-character.png",
        alt: "STRAY-03 digital resident design sheet",
        layout: "character",
        description: "STRAY-03 更像系统中的游荡小灵，透明外套和发光面屏让它介于居民与维护程序之间。它承担区域巡检和信息引导，也保留一点迷路感。",
        prompt: "角色设计图，STRAY-03，透明圆形头盔、黑色面屏、蓝色发光眼睛，半透明紫色科技外套，小型可爱数字守护者，三视图、细节设计、材质说明、工具悬浮数据板、表情设定，purple cyber character sheet"
      },
      {
        number: "12",
        title: "PRISM-03 / 棱镜终端体",
        src: "public/my-world/prism-03-character.png",
        alt: "PRISM-03 digital resident design sheet",
        layout: "character",
        description: "PRISM-03 把情绪核心包在透明棱镜之中，像城市里的移动观察器。它的三角外壳强化了“折射”和“协议守护”的概念，是较冷静的系统型居民。",
        prompt: "PRISM-03 棱镜终端体角色设定图，透明发光三角棱镜头，内部可爱数字脸，黑色战术科技服，蓝紫霓虹，高科技角色三视图、细节特写、配色方案、尺寸比例，cyber prism helmet, digital resident, Chinese interface labels"
      }
    ]
  }
];

const params = new URLSearchParams(window.location.search);
const requestedWallpaper = params.get("wallpaper");
const activeWallpaper = wallpaperClasses.includes(requestedWallpaper)
  ? requestedWallpaper
  : wallpaperClasses[0];
const layout = document.querySelector("#myWorldLayout");
const returnLink = document.querySelector("#myWorldReturn");

document.body.classList.add(activeWallpaper);
if (returnLink) {
  returnLink.href = `index.html?wallpaper=${encodeURIComponent(activeWallpaper)}`;
}

function applyPlacement(figure, item) {
  if (item.gridColumn) figure.style.gridColumn = item.gridColumn;
  if (item.maxWidth) figure.style.setProperty("--my-world-image-width", item.maxWidth);
  if (item.aspectRatio) figure.style.setProperty("--my-world-aspect", item.aspectRatio);
}

function createWorldFigure(item, index) {
  const figure = document.createElement("figure");
  figure.className = "my-world-figure";
  figure.dataset.layout = item.layout || "region";
  applyPlacement(figure, item);

  const card = document.createElement("button");
  card.type = "button";
  card.className = "my-world-card";
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", `Flip ${item.number || index + 1}: ${item.title || item.alt || "My World plate"}`);

  const inner = document.createElement("span");
  inner.className = "my-world-card-inner";

  const front = document.createElement("span");
  front.className = "my-world-card-face my-world-card-front";

  const media = document.createElement("span");
  media.className = "my-world-media";

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt || `My World plate ${index + 1}`;
  image.loading = index === 0 ? "eager" : "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    figure.dataset.state = "missing";
  });

  media.appendChild(image);

  const caption = document.createElement("span");
  caption.className = "my-world-caption";

  const number = document.createElement("span");
  number.className = "my-world-number";
  number.textContent = item.number || String(index + 1).padStart(2, "0");

  const title = document.createElement("strong");
  title.textContent = item.title || image.alt;

  const description = document.createElement("p");
  description.textContent = item.description || "此处预留世界观描述，后续可按编号继续改写。";

  caption.append(number, title, description);
  front.append(media, caption);

  const back = document.createElement("span");
  back.className = "my-world-card-face my-world-card-back";

  const promptLabel = document.createElement("span");
  promptLabel.className = "my-world-prompt-label";
  promptLabel.textContent = `PROMPT ${item.number || String(index + 1).padStart(2, "0")}`;

  const promptText = document.createElement("span");
  promptText.className = "my-world-prompt-text";
  promptText.textContent = item.prompt || "此处预留图片提示词，与正面的世界观描述分开维护。";

  back.append(promptLabel, promptText);
  inner.append(front, back);
  card.appendChild(inner);
  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  });

  figure.appendChild(card);
  return figure;
}

function createSection(section, sectionIndex) {
  const root = document.createElement("section");
  root.className = "my-world-section";
  root.dataset.section = section.id;

  const header = document.createElement("header");
  header.className = "my-world-section-head";
  header.innerHTML = `
    <p>${section.eyebrow}</p>
    <h2>${section.title}</h2>
  `;

  const grid = document.createElement("div");
  grid.className = "my-world-section-grid";
  section.items.forEach((item, itemIndex) => {
    grid.appendChild(createWorldFigure(item, sectionIndex * 10 + itemIndex));
  });

  root.append(header, grid);
  return root;
}

function renderMyWorldLayout(sections = myWorldSections) {
  if (!layout) return;
  layout.replaceChildren(...sections.map(createSection));
}

renderMyWorldLayout();

window.ytmMyWorld = {
  sections: myWorldSections,
  render: renderMyWorldLayout,
  wallpapers: wallpaperClasses
};
