import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
