import HeroCard from "../components/HeroCard";
import Image from "next/image";
import { getAllData, getNewsArticles } from "../api";
import NewsCard from "../components/NewsCard";
import styles from "./index.module.css";
import BigCard from "../components/BigCard";
import piggyImg from "../public/piggy.svg";
import bulbImg from "../public/bulb.svg";
import SubscribeForm from "../components/SubscribeForm";
import CircularCard from "../components/CircularCard";
import circleBook from "../public/circleBook.svg";
import circleMan from "../public/circleMan.svg";
import circlePlant from "../public/circlePlant.svg";
import circleGender from "../public/circleGender.svg";
import FinanceForm from "../components/FinanceForm";
import btnLeft from "../public/btnLeft.svg";

function Home({ posts }) {
  return (
    <main className="container">
      <HeroCard />
      <div className={styles.newsHeaderContainer}>
        <h1 className={styles.newsHeader}>სიახლეები</h1>
        <div>
          <button className={styles.newsButton}>
            <span>{`<`}</span>
          </button>
          <button className={styles.newsButton}>
            <span>{`>`}</span>
          </button>
        </div>
      </div>
      <section className={styles.newsContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((post) => {
          return <NewsCard key={post} title={post} />;
        })}
      </section>
      <section className={styles.bigCardContainer}>
        <BigCard img={piggyImg} title="დააფინანსე მწვანე პოლიტიკა" />
        <BigCard
          img={bulbImg}
          title="მიიღე მონაწილეობა მწვანე პლატფორმის შექმნაში"
        />
      </section>
      <SubscribeForm fullWidth />
      <h1 className={styles.orgViews}>ორგანიზაციის ხედვები</h1>
      <section className={styles.circularCardContainer}>
        <CircularCard
          image={circleBook}
          text={
            "„ახალგაზრდა მწვანეების“ წევრებსა და საქართველოს მოსახლეობაში მწვანეობის, ეკოლოგიის, დემოკრატიულ, თანასწორობისა და არაძალადობის საკითხებთან დაკავშირებით ცნობიერების გაზრდა"
          }
        />
        <CircularCard
          image={circleMan}
          text={"მწვანე ინიციატივების ადვოკატირება ადგილობრივ დონეზე"}
        />
        <CircularCard
          image={circlePlant}
          text={"მწვანე ცხოვრების წესის პოლიტიკური ცნობიერების ამაღლება"}
        />
        <CircularCard
          image={circleGender}
          text={"სოციალური, ეკონომიკური და გენდერული თანასწორობისთვის ბრძოლა"}
        />
      </section>
      <FinanceForm fullWidth />
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getNewsArticles();
  console.log("THESE ARE POSTS", posts.posts);
  return {
    props: {
      posts: posts.posts,
    },
  };
}

export default Home;
