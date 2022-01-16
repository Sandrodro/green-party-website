import styles from "./styles.module.css";

function HeaderCard({ title }) {
  return (
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
    </div>
  );
}

export default HeaderCard;
