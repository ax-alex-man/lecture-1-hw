import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.root}>
      <Button theaming={false}>Контакты</Button>
    </div>
  );
};
