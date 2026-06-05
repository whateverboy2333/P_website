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

const ipDesignImages = [
  {
    src: "public/ip-design/yan-yan.png",
    alt: "Yan Yan black and white IP design concept sheet",
    gridColumn: "1 / -1",
    maxWidth: "min(100%, 920px)",
    fit: "contain"
  },
  {
    src: "public/ip-design/cheng-cheng.png",
    alt: "Cheng Cheng cyan and orange IP design concept sheet",
    gridColumn: "1 / -1",
    maxWidth: "min(100%, 920px)",
    fit: "contain"
  },
  {
    src: "public/ip-design/guai-guai.png",
    alt: "Guai Guai purple and green IP design concept sheet",
    gridColumn: "1 / -1",
    maxWidth: "min(100%, 920px)",
    fit: "contain"
  },
  {
    src: "public/ip-design/yao-yao.png",
    alt: "Yao Yao yellow and purple IP design concept sheet",
    gridColumn: "1 / -1",
    maxWidth: "min(100%, 920px)",
    fit: "contain"
  }
];

const params = new URLSearchParams(window.location.search);
const requestedWallpaper = params.get("wallpaper");
const activeWallpaper = wallpaperClasses.includes(requestedWallpaper)
  ? requestedWallpaper
  : wallpaperClasses[0];
const layout = document.querySelector("#ipDesignLayout");
const returnLink = document.querySelector("#ipDesignReturn");

document.body.classList.add(activeWallpaper);
if (returnLink) {
  returnLink.href = `index.html?wallpaper=${encodeURIComponent(activeWallpaper)}`;
}

function applyPlacement(figure, item) {
  if (item.gridColumn) figure.style.gridColumn = item.gridColumn;
  if (item.gridRow) figure.style.gridRow = item.gridRow;
  if (item.justifySelf) figure.style.justifySelf = item.justifySelf;
  if (item.alignSelf) figure.style.alignSelf = item.alignSelf;
  if (item.maxWidth) figure.style.setProperty("--ip-design-image-width", item.maxWidth);
  if (item.aspectRatio) figure.style.setProperty("--ip-design-aspect", item.aspectRatio);
  if (item.padding) figure.style.setProperty("--ip-design-image-padding", item.padding);
  if (item.transform) figure.style.transform = item.transform;
}

function createImageFigure(item, index) {
  const figure = document.createElement("figure");
  figure.className = "ip-design-figure";
  figure.dataset.fit = item.fit || "contain";
  applyPlacement(figure, item);

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt || `IP design plate ${index + 1}`;
  image.loading = index === 0 ? "eager" : "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    figure.dataset.state = "missing";
  });

  figure.appendChild(image);
  return figure;
}

function createPlaceholder() {
  const placeholder = document.createElement("div");
  placeholder.className = "ip-design-placeholder";
  placeholder.innerHTML = `
    <span>IP DESIGN</span>
    <strong>ASSET SLOT 00</strong>
  `;
  return placeholder;
}

function renderIpDesignLayout(items = ipDesignImages) {
  if (!layout) return;

  layout.replaceChildren();
  if (!items.length) {
    layout.appendChild(createPlaceholder());
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    if (!item?.src) return;
    fragment.appendChild(createImageFigure(item, index));
  });

  layout.appendChild(fragment.childNodes.length ? fragment : createPlaceholder());
}

renderIpDesignLayout();

window.ytmIpDesign = {
  images: ipDesignImages,
  render: renderIpDesignLayout,
  wallpapers: wallpaperClasses
};
