import classNames from "classnames";
import styles from "./styles.module.scss";

export const Tab = ({ onClick, active = false, children }) => {
  return (
    <button
      className={classNames(styles.tab, { [styles.active]: active })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
