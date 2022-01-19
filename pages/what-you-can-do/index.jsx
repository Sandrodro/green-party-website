import styles from "./what-you-can-do.module.css";
import CircularCard from "../../components/CircularCard";
import fbCircular from "../../public/fbCircular.svg";
import puzzleCircular from "../../public/puzzleCircular.svg";
import blueCircular from "../../public/blueCircular.svg";
import FinanceForm from "../../components/FinanceForm";
import SubscribeForm from "../../components/SubscribeForm";
import Header from "../../components/Header";

function WhatYouCanDo() {
  return (
    <main className="container">
      <Header title="რა შეგიძლია შენ" />
      <p className="para paraCondensed">
        მიიღე მონაწილეობის მწვანე პოლიტიკის შექმნასა და გავრცელებაში, ჩაერთე
        დისკუსიებში, გახდი წევრი, გაავრცელე ინფორმაცია ან უბრალოდ მიიღე
        ინფორმაცია - მოკლდ, ბევრი გზაა, რითაც შეგიძლია #გაამწვანოპოლიტიკა
      </p>
      <section className={styles.circularCardContainer}>
        <CircularCard
          image={fbCircular}
          text="შემოუერთდი საჯარო ფეისბუქ ჯგუფს"
        />
        <CircularCard
          image={puzzleCircular}
          text="მიიღე მონაწილეობა მწვანე პლატფორმის შექმნაში"
        />
        <CircularCard image={blueCircular} text="გახდი წევრი" />
        <CircularCard
          image={blueCircular}
          text="გახდი ინფორმაციის გამავრცელებელი - გამოგვყევი სოციალურ ქსელბში"
        />
      </section>
      <div className={styles.formContainer}>
        <SubscribeForm />
        <FinanceForm />
      </div>
    </main>
  );
}

export default WhatYouCanDo;
