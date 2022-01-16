import styles from "./party.module.css";
import HeaderCard from "../../components/HeaderCard";
import SubscribeForm from "../../components/SubscribeForm";

function Party() {
  return (
    <main className="container">
      <HeaderCard title="პარტია" />
      <p className="para">
        მთავარი შინაარსი ასეთია: რატომ გვჭირდება მწვანე პოლიტიკური პარტია
        საქართველოში, სადაც უამრავი ეკოლოგიური და სოციალური პრობლემებია. როგორ
        ვქმნით ჩვენ.
        <br></br>
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
        მასში მონაწილეობის მიღება შენც შეგიძლია.
      </p>
      <SubscribeForm fullWidth />
    </main>
  );
}

export default Party;
