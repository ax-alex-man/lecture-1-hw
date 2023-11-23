import { Tab } from "../tab/component";

export const RestaurantTabs = ({ tabs, onSelect }) => {
  return (
    <div>
      {tabs.map((tab) => (
        <Tab onClick={() => onSelect(tab)}>{tab}</Tab>
      ))}
    </div>
  );
};
