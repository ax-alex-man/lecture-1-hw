import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/comporent";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.name}>{restaurant.name}</h2>
      <h3 className={styles.heading}>Меню</h3>
      <Menu menu={restaurant.menu} />
      <h3 className={styles.heading}>Отзывы</h3>
      <Reviews reviews={restaurant.reviews} />
      <h3 className={styles.heading}>Оставьте отзыв:</h3>
      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
