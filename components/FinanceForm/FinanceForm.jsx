import styles from "./FinanceForm.module.css";

function FinanceForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inner}>
        <h1>დააფინანსე მწვანე პოლიტიკა</h1>
        <form>
          <h2>
            თქვენი შემოწირულობა მოხმარდება ეკოლოგიური მდგომარეობის გაუმჯობესებას
          </h2>
          <div className={styles.inputs}>
            <button>10 ლ</button>
            <button>30 ლ</button>
            <button>50 ლ</button>
            <input type="number" placeholder="სხვა თანხა"></input>
          </div>
          <button className={styles.payButton}>ჩარიცხვა</button>
        </form>
      </div>
    </div>
  );
}

export default FinanceForm;
