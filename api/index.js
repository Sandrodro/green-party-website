import ROUTES from "../config/API_ROUTES";

async function getAllData() {
  const data = await fetch(ROUTES.ALL_DATA);
  const json = await data.json();
  console.log("DATA", json);
  return json;
}

async function getNewsArticles() {
  const newsArticles = await fetch(ROUTES.NEWS_PAGES);
  const json = await newsArticles.json();
  console.log("Posts", json);
  return json;
}

export { getAllData, getNewsArticles };
