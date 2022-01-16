import styles from "./NewsCard.module.css";
import Image from "next/image";
import testPicture from "../../public/test.jpg";

function NewsCard({ title }) {
  return (
    <article className={styles.articleContainer}>
      <figure className={styles.figureContainer}>
        <Image
          layout={"fixed"}
          src={testPicture}
          width={414}
          height={600}
          alt="newsImage"
        />
        <figcaption className={styles.figCaption}>
          <h2>{title}</h2>
        </figcaption>
      </figure>
      <div className={styles.viewsAndDate}></div>
    </article>
  );
}

export default NewsCard;
