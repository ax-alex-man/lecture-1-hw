import classNames from "classnames";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Tab = ({ id, onClick, active = false }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  return (
    <button
      className={classNames(styles.tab, { [styles.active]: active })}
      type="button"
      onClick={onClick}
    >
      {restaurant.name}
    </button>
  );
};
