import styles from "./styles.module.scss";

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>{review.user}</div>
      <div className={styles.rating}>{new Array(review.rating).join("★")}</div>
      <div className={styles.text}>{review.text}</div>
    </div>
  );
};
