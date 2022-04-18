import styles from "./BigCard.module.css";
import Image from "next/image";

function BigCard({ img, title }) {
  return (
    <article
      className={styles.container}
      onClick={() => window.scrollBy(0, 2400)}
    >
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Image src={img} height={400} width={410} alt="cardImage" />
        </div>
        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default BigCard;
