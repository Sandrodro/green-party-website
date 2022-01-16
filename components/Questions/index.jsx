import styles from "./Questions.module.css";
import Collapsible from "react-collapsible";

function Questions() {
  return (
    <section className={styles.container}>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="მწვანეები ანუ გია გაჩეჩილაძე და მწვანეთა პარტია?"
        triggerTagName="div"
      >
        <p>teqsti teqsi</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რა ხედვები გაქვთ?"
        triggerTagName="div"
      >
        <p>teqsti teqsi</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რა არის თქვენი სტრუქტურა?"
        triggerTagName="div"
      >
        <p>teqsti teqsi</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="როგორ შემიძლია თანამონაწილეობა?"
        triggerTagName="div"
      >
        <p>teqsti teqsi</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="როგორ დაგიკავშირდეთ?"
        triggerTagName="div"
      >
        <p>teqsti teqsi</p>
      </Collapsible>
    </section>
  );
}

export default Questions;
