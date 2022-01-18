import styles from "./Questions.module.css";
import Collapsible from "react-collapsible";

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
        trigger="როგორ გავხდე წევრი?"
        triggerTagName="div"
      >
        <p>
          შეავსე ზემოთ მოცემული აპლიკაცია, ყურადღება მიაქციე რომ ყველა
          სავალდებულო ველი შევსებული გაქვს და გამოგზავნე. ჩვენ მივიღებთ,
          განვიხილავთ და აუცილებლად დაგიკავშირდებით ელ-ფოსტაზე.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="რამდენი წლის უნდა ვიყო, რომ წევრი გავხდე?"
        triggerTagName="div"
      >
        <p>
          ჩვენ არ გვაქვს არანაირი ასაკობრივი შეზღუდვა, ყველა ასაკის ადამიანის
          თანამონაწილეობა მნიშვნელოვანია; მეტიც ჩვენი აზრით ახალგაზრდების
          პოლიტიკაში ჩართულობა უმნიშვნელოვანესია.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="არ ვცხოვრობ თბილისში, მაინც შემიძლია წევრი გავხდე?"
        triggerTagName="div"
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
        trigger="საწევრო გადასახადი რამდენია?"
        triggerTagName="div"
      >
        <p>
          მწვანეების წევრობის საწევრო გადასახადი არის 10 ლარი წელიწადში, რომელიც
          სიმბოლური თანხაა, თუმცა, ცხადია, მეტის კონტრიბუციაც შეგიძლია. საწევროს
          აწესებს და ცვლის კონგრესი.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="არ მაქვს ყველა აქტივობაში ჩართვისთვის საკმარისი დრო, მაინც ღირს წევრობა?"
        triggerTagName="div"
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
        trigger="რომელი მუნიციპალური ორგანიზაცია უნდა ავირჩიო?"
        triggerTagName="div"
      >
        <p>
          სასურველია ის ადგილი აარჩიო, სადაც უფრო ხშირად ხარ, თუმცა ამას
          გადამწყვეტი მნიშვნელობა არ აქვს.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="საქართველოში არ ვცხოვრობ, მაინც შემიძლია წევრი გავხდე?"
        triggerTagName="div"
      >
        <p>ესეც შესაძლებელია; მთავარია შენი სურვილი და ჩართულობა.</p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="ვარ სხვა პარტიის წევრი, შემიძლია მწვანეების წევრიც გავხდე?"
        triggerTagName="div"
      >
        <p>
          არა, თუ მწვანეობა გსურთ უნდა მიიღოთ გადაწყვეტილება გინდათ იყო მწვანე
          თუ სხვა პარტიის წევრი.
        </p>
      </Collapsible>
      <Collapsible
        classParentString={styles.Collapsible}
        trigger="ვიზიარებ თქვენს იდეებს, მაგრამ წევრობა ჯერ არ გადამიწყვიტავს, როგორ მოვიქცე?"
        triggerTagName="div"
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
