// script.js
// Renders the homepage feed and the individual article page from the
// static ARTICLES array defined in data.js. No backend, no build step.

function formatDate(isoString) {
  const d = new Date(isoString + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Builds the article's own page URL. In this static demo that's just
// article.html?id=<id>, but keeping it in one place makes it easy to
// swap for real slugs/URLs later.
function articleUrl(article) {
  return `article.html?id=${article.id}`;
}

/* ---------------- Cover art ----------------
   No photo library in this static demo, so each article gets a real stock
   photo from LoremFlickr, matched to the article's actual subject via
   keyword tags (rather than a random or category-only photo), and locked
   to the article id so the same article always gets the same photo. */

const ARTICLE_IMAGE_KEYWORDS = {
  1: "microchip,circuit-board", // coin-sized AI chip
  2: "moon,spacecraft", // autonomous lunar lander
  3: "smartphone,security", // deepfake call detection
  4: "warehouse,robot", // warehouse robots
  5: "server,datacenter", // data center cooling chip
  6: "laboratory,microscope", // lab-grown retina tissue
  7: "quarry,rock", // rock dust carbon capture
  8: "videogame,controller", // AI game level director
  9: "mobile-payment,wallet", // digital wallet split payments
  10: "eyeglasses,technology", // smart glasses
};

function coverArtHTML(article, sizeClass, width, height) {
  const keywords = ARTICLE_IMAGE_KEYWORDS[article.id] || "technology,news";
  const src = `https://loremflickr.com/${width}/${height}/${keywords}?lock=${article.id}`;
  return `
    <div class="${sizeClass}">
      <img
        src="${src}"
        alt="${article.title}"
        width="${width}"
        height="${height}"
        loading="lazy"
      />
    </div>
  `;
}

/* ---------------- Homepage feed ---------------- */

function renderTicker() {
  const track = document.getElementById("market-strip");
  if (!track) return;

  const items = ARTICLES.map(
    (a) => `<span>${a.category} — ${a.title}</span>`
  ).join("");
  // duplicate the content once so the CSS animation (-50%) loops seamlessly
  track.innerHTML = items + items;
}

function renderFeed() {
  const feed = document.getElementById("story-grid");
  if (!feed) return;

  const [first, ...rest] = ARTICLES;

  const featuredCard = `
    <article class="brief-tile top-brief">
      ${coverArtHTML(first, "brief-media", 900, 386)}
      <div class="kicker">${first.category}</div>
      <div class="brief-heading">${first.title}</div>
      <div class="brief-summary">${first.summary}</div>
      <div class="brief-meta">
        <span class="meta-time">${formatDate(first.date)} · ${first.readTime}</span>
        <a class="meta-link" href="${articleUrl(first)}">Continue reading</a>
      </div>
    </article>
  `;

  const otherCards = rest
    .map(
      (a) => `
    <article class="brief-tile">
      ${coverArtHTML(a, "brief-media", 500, 281)}
      <div class="kicker">${a.category}</div>
      <div class="brief-heading">${a.title}</div>
      <div class="brief-summary">${a.summary}</div>
      <div class="brief-meta">
        <span class="meta-time">${formatDate(a.date)}</span>
        <a class="meta-link" href="${articleUrl(a)}">Continue reading</a>
      </div>
    </article>
  `
    )
    .join("");

  feed.innerHTML = featuredCard + otherCards;
}

/* ---------------- Article page ---------------- */

function renderArticle() {
  const container = document.getElementById("story-shell");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    container.innerHTML = `
      <div class="not-found">
        <p>We couldn't find that story.</p>
        <p><a class="back-link" href="index.html" style="margin:0;">&larr; Back to all stories</a></p>
      </div>
    `;
    document.title = "THE DEMO NEWS — Story not found";
    return;
  }

  document.title = `${article.title} — THE DEMO NEWS`;

  const paragraphs = article.body.map((p) => `<p>${p}</p>`).join("");

  container.innerHTML = `
    ${coverArtHTML(article, "article-media", 1600, 533)}
    <div class="article-header">
      <span class="article-eyebrow">${article.category}</span>
      <h1 class="article-title">${article.title}</h1>
      <div class="article-meta">
        <span>${formatDate(article.date)}</span>
        <span>${article.readTime}</span>
      </div>
      <p class="article-summary">${article.summary}</p>
    </div>
    <div class="article-body">${paragraphs}</div>
  `;
}

renderTicker();
renderFeed();
renderArticle();
