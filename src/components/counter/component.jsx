import styles from "./styles.module.scss";

export const Counter = ({
  value,
  onIncrement,
  onDecrement,
  min = 0,
  max = Infinity,
}) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={onDecrement} disabled={value === min}>
        -
      </button>
      <div className={styles.amount}>{value}</div>
      <button className={styles.button} onClick={onIncrement} disabled={value === max}>
        +
      </button>
    </div>
  );
};
