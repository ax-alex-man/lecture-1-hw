import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const RestaurantTabs = ({ tabs, activeTab, onSelect }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab active={activeTab === tab} onClick={() => onSelect(tab)}>{tab}</Tab>
      ))}
    </div>
  );
};
