import styles from "./styles.module.css";
import { useState } from "react";
import SectionOption from "../../components/AnswerTable/SectionOption";

export default function AnswerTable(props) {
  const { numOfQuestions, options, vertical, initValue } = props;
  const sum = initValue ? initValue : 0;
  const [selected, setSelected] = useState(() => {
    let init = {};
    for (var x = 1 + sum; x <= numOfQuestions + sum; x++) init[x] = null;
    return init;
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: selected[name] === value ? null : value,
    });
  };
  const orientationStyle = {
    options: {
      horizontal: {
        gridTemplateRows: `repeat(${options.length + 1}, 1fr)`,
      },
      vertical: {
        gridTemplateColumns: `repeat(${options.length + 1}, 1fr)`,
      },
    },
    container: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  };

  return (
    <div
      className={styles.container}
      style={
        vertical
          ? orientationStyle.container.vertical
          : orientationStyle.container.horizontal
      }
    >
      <div
        className={styles.options}
        style={
          vertical
            ? orientationStyle.options.vertical
            : orientationStyle.options.horizontal
        }
      >
        <span className={styles.option}> </span>
        {options.map((option) => (
          <span className={styles.option}>{option}</span>
        ))}
      </div>
      {Object.keys(selected).map((question) => (
        <SectionOption
          numOfQuestion={question}
          options={options}
          onChange={onChange}
          selectedOption={selected[question]}
          vertical={vertical}
        />
      ))}
    </div>
  );
}
