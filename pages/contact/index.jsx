import styles from "./contact.module.css";
import Header from "../../components/Header";
import fbIcon from "../../public/fb_grey.svg";
import twitterIcon from "../../public/twitter_grey.svg";
import igIcon from "../../public/ig_grey.svg";
import ytIcon from "../../public/yt_grey.svg";
import Image from "next/image";
import mailIcon from "../../public/mailIcon.svg";
import phoneIcon from "../../public/phoneIcon.svg";

function Contact() {
  return (
    <main className="container">
      <Header title="კონტაქტი" />
      <div className={styles.flexContainer}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8800.339538974331!2d44.793879479039894!3d41.68863123776619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf26b7bb867%3A0xa62dcca7bd4425ad!2zMTcg4YOY4YOV4YOQ4YOc4YOUIOGDm-GDkOGDqeGDkOGDkeGDlOGDmuGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1642593264347!5m2!1ska!2sge"
            width="812"
            height="618"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className={styles.map}
          ></iframe>
          <div className={styles.infoContainer}>
            <ul className={styles.info}>
              <li className={styles.contactLi}>
                <Image
                  src={phoneIcon}
                  width={24}
                  height={24}
                  alt="phone number"
                />
                <p>571 52 56 58</p>
              </li>
              <li className={styles.contactLi}>
                <Image src={mailIcon} width={24} height={24} alt="address" />
                <p>თბილისი, ი.მაჩაბლის 17</p>
              </li>
              <li className={styles.contactLi}>
                <Image src={phoneIcon} width={24} height={24} alt="email" />
                <p>info@younggreens.ge</p>
              </li>
            </ul>
            <ul className={styles.socialMedia}>
              <li>
                <Image
                  src={fbIcon}
                  width={40}
                  height={40}
                  alt="facebook icon"
                />
              </li>
              <li>
                <Image
                  src={twitterIcon}
                  width={40}
                  height={40}
                  alt="twitter icon"
                />
              </li>
              <li>
                <Image
                  src={igIcon}
                  width={40}
                  height={40}
                  alt="instagram icon"
                />
              </li>
              <li>
                <Image src={ytIcon} width={40} height={40} alt="youtube icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h2>მოგვწერეთ</h2>
          <form
            className={styles.privateInfoContainer}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="name">
              <input
                id="name"
                type="text"
                placeholder="სახელი"
                className={styles.inputField}
              ></input>
            </label>
            <label htmlFor="surname">
              <input
                id="surname"
                type="text"
                placeholder="გვარი"
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
            <label htmlFor="theme">
              <input
                id="theme"
                type="text"
                placeholder="თემა"
                className={styles.inputField}
              ></input>
            </label>
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
          </form>
          <button
            className={styles.payButton}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            გაგზავნა
          </button>
        </div>
      </div>
    </main>
  );
}

export default Contact;
