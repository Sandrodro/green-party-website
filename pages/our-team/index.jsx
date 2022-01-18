import styles from "./our-team.module.css";
import Header from "../../components/Header";
import CircularCard from "../../components/CircularCard";
import image from "../../public/blueCircular.svg";

function OurTeam() {
  return (
    <main className="container">
      <Header title="ჩვენი გუნდი" />
      <section className={styles.circularCardContainer}>
        <CircularCard image={image} text="კომიტეტი" />
        <CircularCard image={image} text="სამდივნო" />
        <CircularCard image={image} text="მრჩეველთა საბჭო" />
      </section>
    </main>
  );
}

export default OurTeam;
