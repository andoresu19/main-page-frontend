import styles from "./styles.module.css";
import OptionRadio from "../OptionRadio";

export default function SectionOption(props) {
  const { options, numOfQuestion, onChange, selectedOption, vertical } = props;
  const orientationStyle = {
    horizontal: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: `repeat(${options.length + 1}, 1fr)`,
    },
    vertical: {
      gridTemplateColumns: `repeat(${options.length + 1}, 1fr)`,
    },
  };

  return (
    <div
      className={styles.container}
      style={vertical ? orientationStyle.vertical : orientationStyle.horizontal}
    >
      <span className={styles.num}>{numOfQuestion}</span>
      {options.map((option) => (
        <OptionRadio
          name={numOfQuestion}
          value={option}
          onChange={onChange}
          checked={selectedOption === option}
        />
      ))}
    </div>
  );
}
