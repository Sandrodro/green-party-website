import styles from "./platform.module.css";
import SubscribeForm from "../../components/SubscribeForm";
import FinanceForm from "../../components/FinanceForm";
import Header from "../../components/Header";
import MemberCard from "../../components/MemberCard";
import image from "../../public/portrait.jpg";

function Platform() {
  return (
    <main className="container">
      <Header title="პლატფორმა" />
      <p className={styles.paragraph}>
        ჩვენი ფართო ხედვა ასეთია: ეკოლოგიური, სოციალური და დემოკრატიული
        სახელმწიფო, რომელიც მუშაობს ყველასთვის და არა პრივილეგირებული
        ერთეულებისთვის. თუმცა, აქ ვერ გავჩერდებით, ჩვენ გვჭირდება კონკრეტული
        მწვანე ხედვა - მწვანე პლატფორმა, რომელიც მწვანე პერსპექტივიდან
        გაანალიზებს არსებულ პრობლემებს და შემოგვთავაზებს ალტერნატივას. როგორ
        დავძლიოთ სიღარიბე და შევქმნათ სწორი სოციალური პოლიტიკა? როგორ
        გადავანაწილოთ დოვლათი სამართლიანად? როგორ დავიცვათ ჩვენი გარემო და
        გავაუმჯობესოთ ეკოლოგიური მდგომარეობა? როგორ გავხადოთ ჯანადცვა და
        განათლება საყოველთაო, ხარისხიანი და ხელმისაწვდომი? როგორ ვხედავთ
        მწვანეებს საქართველოს ეკონომიკისა და ენერგოპოლიტიკის სწორ განვითარებას?
        ეს ის მთავარი კითხვებია, რომელსაც მწვანე პლატფორმა უპასუხებს და შეეცდება
        იპოვოს პასუხები, რომლებიც იქნება მომგებიანი, როგორც ადამიანებისთვის, ისე
        ბუნებისთვის. პლატფორმის შექმნაზე პასუხისმგებლობას იღებს პლატფორმის
        საბჭო, რომელიც მათი ცოდნიდან, ექსპერტებთან, თქვენი მოსაზრებებიდან და
        სხვა დაინტერესებულ მხარდეებთან კონსულტაციის შედეგად შექმნის პლატფორმის
        მონახაზს, რომელსაც შემდეგ გააცნობს პოლიტიკურ კომიტეტის. ამ პროცესის
        დასრულების შემდეგ ივნისში გაიმართება პლატფორმის მონახაზის პრეზენტაცია,
        რის შემდგომას წევრებს, მუნიციპალურ და აფილირებულ ორგანიზაციებს და სხვა
        უფლებამოსილ პირებს შეეძლებათ პლატფორმაში შესწორებების წამოყენება.
        პლატფორმა და მისი შესწორებები განიხილება და დამტკიცდება მწვანეების
        კონგრესზე, სექტემბერში. მწვანე პლატფორმის შექმნა საჯარო პროცესია და
        მასში მონაწილეობის მიღება შენც შეგიძლია. როგორ მივიღო მონაწილეობა? 1.
        გამოგვიგზავნე შენი აზრი პლატფორმაზე და მის რომელიმე თემაზე ელ-ფოსტაზე:
        platform@mtsvaneebi.ge 2. გამოიწერე ჩვენი სიახლეები და იყავი
        ინფორმირებული პლატფორმის პრეზენტაციის შესახებ 3. დაესწარი პლატფორმის
        პრეზენტაციას 4. გახდი წევრი და მიიღე მონაწილეობა პლატფორმის განხილვაში,
        შესწორებების მიღებასა და დამტკიცებაში.
      </p>
      <h1 className={styles.newsHeader}>რა შეგიძლია შენ?</h1>
      <div className={styles.memberContainer}>
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
      </div>
      <div className={styles.formContainer}>
        <SubscribeForm />
        <FinanceForm />
      </div>
    </main>
  );
}

export default Platform;
