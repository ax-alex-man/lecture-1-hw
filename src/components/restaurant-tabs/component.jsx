import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors";

export const RestaurantTabs = ({ activeId, onSelect }) => {
  const restauranIds = useSelector(selectRestaurantIds);

  return (
    <div className={styles.tabs}>
      {restauranIds.map((id) => (
        <Tab id={id} active={activeId === id} onClick={() => onSelect(id)} />
      ))}
    </div>
  );
};
