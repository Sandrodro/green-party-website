import Image from "next/image";
import styles from "./styles.module.css";

function CircularCard({ image, text }) {
  return (
    <section className={styles.container}>
      <Image src={image} width={300} height={300} />
      <p className={styles.paragraph}>{text}</p>
    </section>
  );
}

export default CircularCard;
