import ROUTES from "../config/API_ROUTES";

async function getAllData() {
  const data = await fetch(ROUTES.ALL_DATA);
  const json = await data.json();
  return json;
}

async function getNewsArticles() {
  const newsArticles = await fetch(ROUTES.NEWS_PAGES);
  const json = await newsArticles.json();
  return json;
}

async function getSingleNewsArticle(id) {
  const newsArticle = await fetch(`${ROUTES.SINGLE_NEWS_PAGE}${id}`);
  const json = await newsArticle.json();
  return json;
}

export { getAllData, getNewsArticles, getSingleNewsArticle };
