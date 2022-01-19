import styles from "./FinanceForm.module.css";
import { useState } from "react";
function FinanceForm({ fullWidth }) {
  const [activeButton, setActiveButton] = useState(10);

  return (
    <div
      className={fullWidth ? styles.formContainerFull : styles.formContainer}
    >
      <div className={fullWidth ? styles.innerFull : styles.inner}>
        <h1>დააფინანსე მწვანე პოლიტიკა</h1>
        <form className={fullWidth ? styles.formFull : styles.form}>
          <h2>
            თქვენი შემოწირულობა მოხმარდება ეკოლოგიური მდგომარეობის გაუმჯობესებას
          </h2>
          <div className={styles.inputs}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveButton(10);
              }}
              className={activeButton == 10 ? styles.activeButton : null}
            >
              10 ლ
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveButton(30);
              }}
              className={activeButton == 30 ? styles.activeButton : null}
            >
              30 ლ
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveButton(50);
              }}
              className={activeButton == 50 ? styles.activeButton : null}
            >
              50 ლ
            </button>
            <input
              type="number"
              placeholder="სხვა თანხა"
              onChange={(e) => {
                setActiveButton(e.target.value);
              }}
              onClick={() => setActiveButton(0)}
            ></input>
          </div>
          <button
            className={styles.payButton}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            ჩარიცხვა
          </button>
        </form>
      </div>
    </div>
  );
}

export default FinanceForm;
