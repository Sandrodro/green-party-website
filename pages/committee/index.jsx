import styles from "./committee.module.css";
import Header from "../../components/Header";
import MemberCard from "../../components/MemberCard";
import CircularCard from "../../components/CircularCard";
import circImage from "../../public/puzzleCircular.svg";

function Committee() {
  return (
    <main className="container">
      <Header title="კომიტეტი" />
      <div className={styles.memberContainer}>
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
        <MemberCard imgLink="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
      </div>
      <div className={styles.memberContainer}>
        <CircularCard image={circImage} text="სამდივნო" />
        <CircularCard image={circImage} text="მრჩეველთა საბჭო" />
      </div>
    </main>
  );
}

export default Committee;
