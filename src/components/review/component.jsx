import classNames from "classnames";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({ id: reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  return (
    <div className={classNames(styles.review, className)}>
      <div className={styles.user}>{user?.name}</div>
      <div className={styles.rating}>{new Array(review.rating).join("★")}</div>
      <div className={styles.text}>{review.text}</div>
    </div>
  );
};
