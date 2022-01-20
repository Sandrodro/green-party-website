import styles from "./styles.module.css";
import Collapsible from "react-collapsible";
import Image from "next/image";
import star from "../../public/star.svg";
import downArrow from "../../public/downArrowForm.svg";

function CollapsibleTrigger({ title }) {
  return (
    <>
      <span>{title}</span>
      <span className={styles.arrow}>
        <Image src={downArrow} height={24} width={24} />
      </span>
    </>
  );
}

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
        <span>
          <Image src={star} width={24} height={24} />
        </span>
        აპლიკაციის შევსებამდე გაეცანით ჩვენს წესდებას , შინაგანაწესსა და
        პოლიტიკურ პლატფორმას
      </p>
      <p className={styles.subHeadline}>
        <span>
          <Image src={star} width={24} height={24} />
        </span>
        სიმბოლოთი აღნიშნული ველების შევსება სავალდებულოა
      </p>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={<CollapsibleTrigger title="პირადი ინფორმაცია" />}
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
        trigger={
          <CollapsibleTrigger title="რა საშუალებით გაიგეთ ჩვენი ორგანიზაციის შესახებ?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
        trigger={
          <CollapsibleTrigger title="ჩამოთვლილთაგან აირჩიეთ თქვენთვის საინტერესო თემები, რომლებზეც ისურვებდით მუშაობას" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
        trigger={
          <CollapsibleTrigger title="რომელიმე სხვა ორგანიზაციაში თუ ხართ გაწევრიანებული?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
        trigger={<CollapsibleTrigger title="მოგვიყევით მოკლედ თქვენ შესახებ" />}
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
        trigger={
          <CollapsibleTrigger title="რატომ გსურთ ჩვენს ორგანიზაციაში გაწევრიანება?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
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
      <button
        className={styles.payButton}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        გაგზავნა
      </button>
    </form>
  );
}

export default QuestionsForm;
