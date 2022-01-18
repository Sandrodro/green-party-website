import styles from "./Header.module.css";
import greenPartyIcon from "../../public/green_party_icon.svg";
import Image from "next/dist/client/image";
import downArrow from "../../public/downArrow.svg";
import Link from "next/link";
import Collapsible from "react-collapsible";

function Header({ title, indexPage, newsPage, headline }) {
  return (
    <article className={`container ${styles.mainContainer}`}>
      <header className={`container ${styles.headerContainer}`}>
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
            <Collapsible
              trigger="მწვანეები"
              contentContainerTagName="li"
              triggerTagName="a"
              contentInnerClassName={styles.contentInner}
              classParentString={styles.collapsible}
              openedClassName={styles.collapsibleOpen}
              contentHiddenWhenClosed
              triggerClassName={styles.collapsibleTrigger}
              triggerOpenedClassName={styles.collapsibleTrigger}
            >
              <ul>
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
            </Collapsible>
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
          <Link href="/participate">
            <button className={styles.participateButton}>გააქტიურდი</button>
          </Link>
        </div>
      </header>
      <h1 className={styles.headline}>
        {indexPage ? "შექმენი მწვანე წესრიგი" : title}
        {newsPage ? <h1 className={styles.newsHeadline}>{headline}</h1> : null}
      </h1>
      {indexPage ? (
        <Link href="/participate">
          <button className={styles.button}>გააქტიურდი</button>
        </Link>
      ) : null}
    </article>
  );
}

export default Header;
