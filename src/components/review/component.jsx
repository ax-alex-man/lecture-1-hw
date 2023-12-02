import classNames from "classnames";
import styles from "./styles.module.scss";

export const Review = ({ review, className }) => {
  return (
    <div className={classNames(styles.review, className)}>
      <div className={styles.user}>{review.user}</div>
      <div className={styles.rating}>{new Array(review.rating).join("★")}</div>
      <div className={styles.text}>{review.text}</div>
    </div>
  );
};
