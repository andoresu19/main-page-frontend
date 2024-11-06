import styles from "./styles.module.css";

export default function OptionRadio({
  name,
  id,
  value,
  onChange,
  checked,
}) {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.option__input}
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onChange}
        onChange={onChange}
        checked={checked}
      />
      <div
        className={`${styles.option} ${checked ? styles.option_active : ""}`}
        children={value.length <= 2 ? value : ""}
      />
    </label>
  );
}
