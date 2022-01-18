import styles from "./participate.module.css";
import Header from "../../components/Header";
import SubscribeForm from "../../components/SubscribeForm";
import Questions from "../../components/Questions";
import QuestionsForm from "../../components/QuestionsForm";

function Participate() {
  return (
    <main className="container">
      <Header title="გააქტიურდი" />
      <SubscribeForm fullWidth />
      <QuestionsForm />
      <Questions />
    </main>
  );
}

export default Participate;
