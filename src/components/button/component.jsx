import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTheme } from "../contexts/theme/hooks";
import { THEME_LIGHT } from "../contexts/theme/constants";

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  theaming = true,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(styles.button, className)}
      data-theme={theaming ? theme.name : THEME_LIGHT}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
