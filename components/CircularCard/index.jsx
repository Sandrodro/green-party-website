import Image from "next/image";
import styles from "./styles.module.css";

function CircularCard({ image, text }) {
  return (
    <section className={styles.container}>
      <Image src={image} width={200} height={200} alt="circular image" />
      <p className={styles.paragraph}>{text}</p>
    </section>
  );
}

export default CircularCard;
