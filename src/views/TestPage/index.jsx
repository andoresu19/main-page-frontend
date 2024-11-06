import AnswerTable from "../../components/AnswerTable";
import styles from "./styles.module.css";

export default function TestPage() {
  const options = ["a", "b", "c", "d"];
  const len = 50;

  return (
    <div className={styles.TestPage}>
      <AnswerTable
        initValue={len * 0}
        numOfQuestions={len}
        options={options}
        vertical={true}
      />
      <AnswerTable
        initValue={len * 1}
        numOfQuestions={len}
        options={options}
        vertical={true}
      />
      <AnswerTable
        initValue={len * 2}
        numOfQuestions={len}
        options={options}
        vertical={true}
      />
      <AnswerTable
        initValue={len * 3}
        numOfQuestions={len}
        options={options}
        vertical={true}
      />
      <AnswerTable
        initValue={len * 4}
        numOfQuestions={len}
        options={options}
        vertical={true}
      />
    </div>
  );
}
