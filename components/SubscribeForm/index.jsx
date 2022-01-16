import styles from "./SubscribeForm.module.css";

function SubscribeForm({ fullWidth }) {
  return (
    <div
      className={fullWidth ? styles.formContainerFull : styles.formContainer}
    >
      <div className={styles.text}>
        <h1>გამოიწერე</h1>
        <h2>გაიგე პირველმა მწვანე სიახლეები</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={fullWidth ? styles.formFull : null}
      >
        <label htmlFor="name">
          <input type="text" placeholder="სახელი" id="name"></input>
        </label>
        <label htmlFor="surname">
          <input type="text" placeholder="გვარი" id="surname"></input>
        </label>
        <label htmlFor="city">
          <input
            type="text"
            placeholder="ქალაქი/მუნიციპალიტეტი"
            id="city"
          ></input>
        </label>
        <label htmlFor="email">
          <input type="text" placeholder="E-mail" id="email"></input>
        </label>
        <button className={styles.subscribeButton}>გამოიწერე</button>
      </form>
    </div>
  );
}

export default SubscribeForm;
