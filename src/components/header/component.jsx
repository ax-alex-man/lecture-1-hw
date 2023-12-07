import { Button } from "../button/component";
import { THEME_DARK, THEME_LIGHT } from "../contexts/theme/constants";
import { useTheme } from "../contexts/theme/hooks";
import styles from "./styles.module.scss";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.root}>
      <Button theaming={false}>Заказы</Button>
      <Button
        theaming={false}
        onClick={() => {
          setTheme({
            name: theme.name === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
          })
        }}
      >
        Сменить тему
      </Button>
    </div>
  );
};
