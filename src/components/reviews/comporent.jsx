import { Review } from "../review/component";
import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review review={review} className={styles.review} />
      ))}
    </div>
  );
};
