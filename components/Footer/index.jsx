import styles from "./Footer.module.css";
import Image from "next/image";
import greenIcon from "../../public/green_party_icon.svg";
import igIcon from "../../public/ig_icon.svg";
import twitterIcon from "../../public/twitter_icon.svg";
import youtubeIcon from "../../public/youtube_icon.svg";
import fbIcon from "../../public/fb_icon.svg";

function Footer() {
  return (
    <footer className={`${styles.footerContainer} container`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.searchBar}>
          <label htmlFor="searchInput">
            <input
              type="text"
              id="searchInput"
              placeholder="Email"
              className={styles.searchInput}
            ></input>
          </label>
        </div>
        <div className={styles.links}>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>მთავარი</strong>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>მწვანეები</strong>
            </li>
            <li>პლატფორმა</li>
            <li>მწვანე ამბავი</li>
            <li>პარტია</li>
            <li>ჩვენი გუნდი</li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>რა შეგიძლია შენ</strong>
            </li>
            <li>F.A.Q</li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>კონტაქტი</strong>
            </li>
            <li>მედიისათვის</li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>გააქტიურდი</strong>
            </li>
          </ul>
        </div>
        <div className={styles.logoAndSocials}>
          <div>
            <Image src={greenIcon} width={122} height={122} />
          </div>
          <div className={styles.fourLogos}>
            <Image src={fbIcon} width={24} height={24} alt="facebookLogo" />
            <Image src={twitterIcon} width={24} height={24} alt="twitterLogo" />
            <Image src={igIcon} width={24} height={24} alt="instagramLogo" />
            <Image src={youtubeIcon} width={24} height={24} alt="youtubeLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
