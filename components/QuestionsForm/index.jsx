import styles from "./styles.module.css";
import Collapsible from "react-collapsible";

function QuestionsForm() {
  return (
    <form
      className={`container ${styles.formContainer}`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className={styles.headline}>წევრობის მსურველის განაცხადი</h1>
      <p className={styles.subHeadline}>
        აპლიკაციის შევსებამდე გაეცანით ჩვენს წესდებას , შინაგანაწესსა და
        პოლიტიკურ პლატფორმას
      </p>
      <p className={styles.subHeadline}>
        სიმბოლოთი აღნიშნული ველების შევსება სავალდებულოა
      </p>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="პირადი ინფორმაცია"
        triggerTagName="div"
      >
        <div className={styles.privateInfoContainer}>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              placeholder="სახელი, გვარი"
              className={styles.inputField}
            ></input>
          </label>
          <label htmlFor="birthday">
            <input
              id="birthday"
              type="date"
              placeholder="დაბადების თარიღი"
              className={styles.inputField}
            ></input>
          </label>
          <label htmlFor="birthplace">
            <input
              id="birthplace"
              type="text"
              placeholder="დაბადების ადგილი"
              className={styles.inputField}
            ></input>
          </label>
          <label htmlFor="address">
            <input
              id="address"
              type="text"
              placeholder="ფაქტობრივი მისამართი"
              className={styles.inputField}
            ></input>
          </label>
          <label htmlFor="phone">
            <input
              id="phone"
              type="text"
              placeholder="პირადი საკონტაქტო ტელეფონი"
              className={styles.inputField}
            ></input>
          </label>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="ელ-ფოსტა"
              className={styles.inputField}
            ></input>
          </label>
        </div>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რა საშუალებით გაიგეთ ჩვენი ორგანიზაციის შესახებ?"
        triggerTagName="div"
      >
        <div className={styles.choiceContainer}>
          <div className={styles.choice}>
            <span>ინტერნეტის</span>
          </div>
          <div className={styles.choice}>
            <span>ნაცნობების</span>
          </div>
          <div className={styles.choice}>
            <span>მედიის</span>
          </div>
          <div className={styles.choice}>
            <label htmlFor="elaborate">
              <input type="text" id="elaborate" placeholder="დააკონკრეტეთ" />
            </label>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="ჩამოთვლილთაგან აირჩიეთ თქვენთვის საინტერესო თემები, რომლებზეც ისურვებდით მუშაობას"
        triggerTagName="div"
      >
        <div className={styles.choiceContainer}>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
          <div className={styles.choice}>
            <span>სოცმედია</span>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რომელიმე სხვა ორგანიზაციაში თუ ხართ გაწევრიანებული?"
        triggerTagName="div"
      >
        <div className={styles.choiceContainer}>
          <div className={styles.choice}>
            <span>კი</span>
          </div>
          <div className={styles.choice}>
            <span>არა</span>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="მოგვიყევით მოკლედ თქვენ შესახებ"
        triggerTagName="div"
      >
        <div className={styles.textAreaContainer}>
          <label htmlFor="aboutYou">
            <textarea
              id="aboutYou"
              name="aboutYou"
              rows="10"
              cols="50"
              className={styles.textArea}
            ></textarea>
          </label>
        </div>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რატომ გსურთ ჩვენს ორგანიზაციაში გაწევრიანება?"
        triggerTagName="div"
      >
        <div className={styles.textAreaContainer}>
          <label htmlFor="aboutYou">
            <textarea
              id="aboutYou"
              name="aboutYou"
              rows="10"
              cols="50"
              className={styles.textArea}
            ></textarea>
          </label>
        </div>
      </Collapsible>
    </form>
  );
}

export default QuestionsForm;
