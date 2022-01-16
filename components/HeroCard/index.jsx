import styles from "./styles.module.css";

function HeroCard() {
  return (
    <article className={`container ${styles.mainContainer}`}>
      <h1 className={styles.headline}>შექმენი მწვანე წესრიგი</h1>
      <button className={styles.button}>გააქტიურდი</button>
    </article>
  );
}

export default HeroCard;
