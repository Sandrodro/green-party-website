import styles from "./Header.module.css";
import greenPartyIcon from "../../public/green_party_icon.svg";
import Image from "next/dist/client/image";
import downArrow from "../../public/downArrow.svg";

function Header() {
  return (
    <header>
      <div className={styles.top}>
        <div className={styles.icon}>
          <Image src={greenPartyIcon} width={60} height={60} />
        </div>
        <ul className={styles.linkList}>
          <li>მთავარი</li>
          <li>
            მწვანეები <Image src={downArrow} width={16} height={16} />
          </li>
          <li>რა შეგიძლია შენ</li>
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
