import styles from "./Footer.module.css";
import Image from "next/image";
import greenIcon from "../../public/green_party_icon.svg";
import igIcon from "../../public/ig_icon.svg";
import twitterIcon from "../../public/twitter_icon.svg";
import youtubeIcon from "../../public/youtube_icon.svg";
import fbIcon from "../../public/fb_icon.svg";
import arrow from "../../public/arrowStraight.svg";
import Link from "next/link";

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
          <button className={styles.searchButton}>
            <Image src={arrow} width={34} height={34} />
          </button>
        </div>
        <div className={styles.links}>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/">მთავარი</Link>
              </strong>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/platform">მწვანეები</Link>
              </strong>
            </li>
            <li>
              <Link href="/platform">პლატფორმა</Link>
            </li>
            <li>
              <Link href="/green-story">მწვანე ამბავი</Link>
            </li>
            <li>
              <Link href="/party">პარტია</Link>
            </li>
            <li>
              <Link href="/our-team">ჩვენი გუნდი</Link>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/what-you-can-do">რა შეგიძლია შენ</Link>
              </strong>
            </li>
            <li>
              <Link href="/participate">F.A.Q</Link>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/contact">კონტაქტი</Link>
              </strong>
            </li>
            <li>
              <Link href="/contact">მედიისათვის</Link>
            </li>
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
