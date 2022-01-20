import styles from "./NewsCard.module.css";
import Image from "next/image";
import testPicture from "../../public/test.jpg";
import React from "react";

const NewsCard = React.forwardRef(({ title, href, onClick }, ref) => {
  return (
    <article
      className={styles.articleContainer}
      href={href}
      ref={ref}
      onClick={onClick}
    >
      <figure className={styles.figureContainer}>
        <Image
          layout={"fixed"}
          src={testPicture}
          width={414}
          height={600}
          alt="news Image"
        />
        <figcaption className={styles.figCaption}>
          <h2>{title}</h2>
        </figcaption>
      </figure>
      <div className={styles.viewsAndDate}></div>
    </article>
  );
});

NewsCard.displayName = "NewsCard";

export default NewsCard;
