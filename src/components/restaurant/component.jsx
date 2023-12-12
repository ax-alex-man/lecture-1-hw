import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/comporent";
import styles from "./styles.module.scss";
import { selectRestaurantNameById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ id: restaurantId }) => {
  const name = useSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.heading}>Меню</h3>
      <Menu id={restaurantId} />
      <h3 className={styles.heading}>Отзывы</h3>
      <Reviews id={restaurantId} />
      <h3 className={styles.heading}>Оставьте отзыв:</h3>
      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
