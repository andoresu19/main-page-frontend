import styles from "./styles.module.css";

export default function GeneralButton(props) {
  const { color, children, className } = props;
  return (
    <button
      className={`${styles.button} ${color ? styles[color] : ""} ${className}`}
      props
    >
      {children}
    </button>
  );
}
