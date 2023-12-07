import classNames from "classnames";
import styles from "./styles.module.scss";
import { THEME_DARK, THEME_LIGHT } from "../contexts/theme/constants";
import { useTheme } from "../contexts/theme/hooks";

export const Counter = ({
  className,
  value,
  onIncrement,
  onDecrement,
  min = 0,
  max = Infinity,
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.counter}>
      <button
        className={classNames(styles.button, className, {
          [styles.light]: theme.name === THEME_LIGHT,
          [styles.dark]: theme.name === THEME_DARK,
        })}
        onClick={onDecrement}
        disabled={value === min}
      >
        -
      </button>
      <div className={styles.amount}>{value}</div>
      <button
        className={classNames(styles.button, className, {
          [styles.light]: theme.name === THEME_LIGHT,
          [styles.dark]: theme.name === THEME_DARK,
        })}
        onClick={onIncrement}
        disabled={value === max}
      >
        +
      </button>
    </div>
  );
};
