import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      {menu.map((dish) => (
        <Dish dish={dish} />
      ))}
    </div>
  );
};
