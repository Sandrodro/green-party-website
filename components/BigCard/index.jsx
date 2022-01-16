import styles from "./BigCard.module.css";
import Image from "next/image";

function BigCard({ img, title }) {
  return (
    <article>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Image src={img} height={505} width={515} alt="cardImage" />
        </div>
        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default BigCard;
