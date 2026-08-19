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

/* ---------------- Homepage feed ---------------- */

function renderTicker() {
  const track = document.getElementById("ticker-track");
  if (!track) return;

  const items = ARTICLES.map(
    (a) => `<span>${a.category} — ${a.title}</span>`
  ).join("");
  // duplicate the content once so the CSS animation (-50%) loops seamlessly
  track.innerHTML = items + items;
}

function renderFeed() {
  const feed = document.getElementById("feed");
  if (!feed) return;

  const [first, ...rest] = ARTICLES;

  const featuredCard = `
    <div class="story-block featured-story">
      <div class="story-category">${first.category}</div>
      <div class="story-headline">${first.title}</div>
      <div class="story-description">${first.summary}</div>
      <div class="story-info">
        <span class="story-published">${formatDate(first.date)} · ${first.readTime}</span>
        <a class="story-link" href="${articleUrl(first)}">Open story</a>
      </div>
    </div>
  `;

  const otherCards = rest
    .map(
      (a) => `
    <div class="story-block">
      <div class="story-category">${a.category}</div>
      <div class="story-headline">${a.title}</div>
      <div class="story-description">${a.summary}</div>
      <div class="story-info">
        <span class="story-published">${formatDate(a.date)}</span>
        <a class="story-link" href="${articleUrl(a)}">Open story</a>
      </div>
    </div>
  `
    )
    .join("");

  feed.innerHTML = featuredCard + otherCards;
}

/* ---------------- Article page ---------------- */

function renderArticle() {
  const container = document.getElementById("article-content");
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
