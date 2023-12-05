import { useSelector } from "react-redux";
import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import { selectDishIdsByRestaurantId } from "../../redux/features/entities/dish/selectors";

export const Menu = ({ id: restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectDishIdsByRestaurantId(state, restaurantId)
  );
  return (
    <div className={styles.menu}>
      {dishIds.map((id) => (
        <Dish id={id} />
      ))}
    </div>
  );
};
