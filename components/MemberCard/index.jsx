import styles from "./styles.module.css";
import Image from "next/image";

const MemberCard = ({ imgLink }) => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.text}>სახელი გვარი</span>
        <span className={styles.positionText}>პოზიცია</span>
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imgLink})` }}
      ></div>
    </section>
  );
};

export default MemberCard;
