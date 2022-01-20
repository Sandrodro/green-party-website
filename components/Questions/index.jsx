import styles from "./Questions.module.css";
import Collapsible from "react-collapsible";
import Image from "next/image";
import downArrow from "../../public/downArrowForm.svg";

function CollapsibleTrigger({ title }) {
  return (
    <>
      <span>{title}</span>
      <span className={styles.arrow}>
        <Image src={downArrow} height={24} width={24} alt="" />
      </span>
    </>
  );
}

function Questions({ form }) {
  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className={styles.headline}>ხშირად დასმული კითხვები</h1>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={<CollapsibleTrigger title="როგორ გავხდე წევრი?" />}
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          შეავსე ზემოთ მოცემული აპლიკაცია, ყურადღება მიაქციე რომ ყველა
          სავალდებულო ველი შევსებული გაქვს და გამოგზავნე. ჩვენ მივიღებთ,
          განვიხილავთ და აუცილებლად დაგიკავშირდებით ელ-ფოსტაზე.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="რამდენი წლის უნდა ვიყო, რომ წევრი გავხდე?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          ჩვენ არ გვაქვს არანაირი ასაკობრივი შეზღუდვა, ყველა ასაკის ადამიანის
          თანამონაწილეობა მნიშვნელოვანია; მეტიც ჩვენი აზრით ახალგაზრდების
          პოლიტიკაში ჩართულობა უმნიშვნელოვანესია.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="არ ვცხოვრობ თბილისში, მაინც შემიძლია წევრი გავხდე?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          დიახ! მწვანეები მთელ საქართველოში ვართ და დეცენტრალიზაცია ჩვენი
          ერთ-ერთი ფუნდამენტური ღირებულებაა. შენ შეგიძლია ნებისმიერ ადგილას
          გახდე მწვანეების წევრი და თუ შენს მუნიციპალიტეტში არ არის მწვანეების
          ორგანიზაცია, შენ შეგიძლია მისი დაწყება. ამისათვის მხოლოდ 5 თანამოზარის
          შემოკრება დაგჭირდება და დანარჩენს პოლიტიკურ კომიტეტთან ერთად
          განვიხილავთ.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={<CollapsibleTrigger title="საწევრო გადასახადი რამდენია?" />}
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          მწვანეების წევრობის საწევრო გადასახადი არის 10 ლარი წელიწადში, რომელიც
          სიმბოლური თანხაა, თუმცა, ცხადია, მეტის კონტრიბუციაც შეგიძლია. საწევროს
          აწესებს და ცვლის კონგრესი.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="არ მაქვს ყველა აქტივობაში ჩართვისთვის საკმარისი დრო, მაინც ღირს წევრობა?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          აუცილებლად! მწვანეების წევრობა არ გულისხმობს ორგანიზაციის ყველა
          საქმეში ჩართვას, არამედ მხოლოდ იმაში, რაც შენ გაინტერესებს. ხოლო თუ
          კონკრეტულ ეტაპზე დრო არ გაქვს არც ერთ აქტივობაში ჩასართავად, არც ეს
          არის პრობლემა, შეგიძლია წევრად დარჩე და სხვა გზით დაეხმარო მწვანე
          პოლიტიკის გავრცელებას.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="რომელი მუნიციპალური ორგანიზაცია უნდა ავირჩიო?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          სასურველია ის ადგილი აარჩიო, სადაც უფრო ხშირად ხარ, თუმცა ამას
          გადამწყვეტი მნიშვნელობა არ აქვს.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="საქართველოში არ ვცხოვრობ, მაინც შემიძლია წევრი გავხდე?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>ესეც შესაძლებელია; მთავარია შენი სურვილი და ჩართულობა.</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="ვარ სხვა პარტიის წევრი, შემიძლია მწვანეების წევრიც გავხდე?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          არა, თუ მწვანეობა გსურთ უნდა მიიღოთ გადაწყვეტილება გინდათ იყო მწვანე
          თუ სხვა პარტიის წევრი.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger={
          <CollapsibleTrigger title="ვიზიარებ თქვენს იდეებს, მაგრამ წევრობა ჯერ არ გადამიწყვიტავს, როგორ მოვიქცე?" />
        }
        triggerClassName={styles.triggerClosed}
        triggerOpenedClassName={styles.triggerOpened}
      >
        <p>
          წევრობა ყველაზე კარგია, მაგრამ სხვა გზებიც არსებობს მწვანე პოლიტიკის
          ხელშესაწყობად.
        </p>
      </Collapsible>
    </form>
  );
}

export default Questions;
