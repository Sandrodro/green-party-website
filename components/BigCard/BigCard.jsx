import styles from "./BigCard.module.css";
import Image from "next/image";
import piggyImage from "../../public/piggy.svg";

function BigCard() {
  return (
    <article>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Image src={piggyImage} height={505} width={515} />
        </div>
        <h2>დააფინანსე მწვანე პოლიტიკა</h2>
      </div>
    </article>
  );
}

export default BigCard;
