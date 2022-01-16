import styles from "./Header.module.css";
import greenPartyIcon from "../../public/green_party_icon.svg";
import Image from "next/dist/client/image";
import downArrow from "../../public/downArrow.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="container">
      <div className={styles.top}>
        <div className={styles.icon}>
          <Link href="/">
            <Image src={greenPartyIcon} width={60} height={60} />
          </Link>
        </div>
        <ul className={styles.linkList}>
          <li>
            <Link href="/">მთავარი</Link>
          </li>
          <li>
            <Link href="/party">მწვანეები </Link>
            <Image
              src={downArrow}
              width={16}
              height={16}
              alt="greenPartyLogo"
            />
          </li>
          <li>
            <Link href="what-you-can-do">რა შეგიძლია შენ</Link>
          </li>
          <li>კონტაქტი </li>
        </ul>
        <label htmlFor="searchTop">
          <input
            type="text"
            placeholder="Search here"
            className={styles.searchTop}
            id="searchTop"
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
