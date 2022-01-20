import styles from "./Header.module.css";
import greenPartyIcon from "../../public/green_party_icon.svg";
import Image from "next/dist/client/image";
import Link from "next/link";
import Collapsible from "react-collapsible";
import { useRouter } from "next/router";
import downArrow from "../../public/downArrow.svg";
import ArrowRight from "../../public/arrowRight.svg";

function CollapsibleTrigger({ title }) {
  const router = useRouter();

  return (
    <>
      <a
        className={
          router.pathname == "/platform" ||
          router.pathname == "/green-story" ||
          router.pathname == "/party" ||
          router.pathname == "/our-team"
            ? styles.activeLink
            : null
        }
      >
        მწვანეები
      </a>
      <Image src={downArrow} width={16} height={16} />
    </>
  );
}

function Header({ title, indexPage, newsPage, headline }) {
  const router = useRouter();

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
            <li className={router.pathname == "/" ? styles.activeLink : null}>
              <Link href="/">მთავარი</Link>
            </li>
            <Collapsible
              trigger={<CollapsibleTrigger title="მწვანეები" />}
              contentContainerTagName="li"
              contentInnerClassName={styles.contentInner}
              classParentString={styles.collapsible}
              openedClassName={styles.collapsibleOpen}
              contentHiddenWhenClosed
              triggerClassName={styles.collapsibleTrigger}
              triggerOpenedClassName={styles.collapsibleClosedTrigger}
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
            <li
              className={
                router.pathname == "/what-you-can-do" ? styles.activeLink : null
              }
            >
              <Link href="/what-you-can-do">რა შეგიძლია შენ</Link>
            </li>
            <li
              className={
                router.pathname == "/contact" ? styles.activeLink : null
              }
            >
              <Link href="/contact">კონტაქტი</Link>
            </li>
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
          <button className={styles.button}>
            გააქტიურდი <Image src={ArrowRight} width={24} height={24} />
          </button>
        </Link>
      ) : null}
    </article>
  );
}

export default Header;
