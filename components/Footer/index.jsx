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
            <Image src={arrow} width={34} height={34} alt="button" />
          </button>
        </div>
        <div className={styles.links}>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/" passHref>
                  მთავარი
                </Link>
              </strong>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/platform" passHref>
                  მწვანეები
                </Link>
              </strong>
            </li>
            <li>
              <Link href="/platform" passHref>
                პლატფორმა
              </Link>
            </li>
            <li>
              <Link href="/green-story" passHref>
                მწვანე ამბავი
              </Link>
            </li>
            <li>
              <Link href="/party" passHref>
                პარტია
              </Link>
            </li>
            <li>
              <Link href="/our-team" passHref>
                ჩვენი გუნდი
              </Link>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/what-you-can-do" passHref>
                  რა შეგიძლია შენ
                </Link>
              </strong>
            </li>
            <li>
              <Link href="/participate/#FAQ" passHref>
                F.A.Q
              </Link>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/contact" passHref>
                  კონტაქტი
                </Link>
              </strong>
            </li>
            <li>
              <Link href="/contact" passHref>
                მედიისათვის
              </Link>
            </li>
          </ul>
          <ul className={styles.singleLinkGroup}>
            <li style={{ opacity: "100%" }}>
              <strong>
                <Link href="/participate" passHref>
                  გააქტიურდი
                </Link>
              </strong>
            </li>
          </ul>
        </div>
        <div className={styles.logoAndSocials}>
          <div>
            <Image src={greenIcon} width={122} height={122} />
          </div>
          <div className={styles.fourLogos}>
            <Image src={fbIcon} width={24} height={24} alt="facebook Logo" />
            <Image
              src={twitterIcon}
              width={24}
              height={24}
              alt="twitter Logo"
            />
            <Image src={igIcon} width={24} height={24} alt="instagram Logo" />
            <Image
              src={youtubeIcon}
              width={24}
              height={24}
              alt="youtube Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
