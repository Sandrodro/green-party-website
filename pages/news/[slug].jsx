import styles from "./styles.module.css";
import Header from "../../components/Header";
import { getNewsArticles, getSingleNewsArticle } from "../../api";

function News({ post }) {
  console.log(post);
  return (
    <main className="container">
      <Header newsPage headline={post.title} />
      <div
        className="para"
        dangerouslySetInnerHTML={{ __html: post.content[0].value }}
      ></div>
    </main>
  );
}

export async function getStaticPaths() {
  const res = await getNewsArticles();
  const paths = res.posts.map((news) => {
    return {
      params: {
        slug: news.id.toString(),
      },
    };
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await getSingleNewsArticle(params.slug);
  return {
    props: { post: res },
    revalidate: 1,
  };
}

export default News;
