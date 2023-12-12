import { useSelector } from "react-redux";
import { Review } from "../review/component";
import styles from "./styles.module.scss";
import { selectReviewIdsByRestaurantId } from "../../redux/entities/review/selectors";

export const Reviews = ({ id: restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectReviewIdsByRestaurantId(state, restaurantId)
  );

  return (
    <div className={styles.reviews}>
      {reviewIds.map((id) => (
        <Review id={id} className={styles.review} />
      ))}
    </div>
  );
};
