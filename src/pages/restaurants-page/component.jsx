import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
//import { Restaurants } from "../../components/restaurants/component";
import { Restaurant } from "../../components/restaurant/component";
import styles from "./styles.module.scss";
import { Layout } from "../../components/layout/component";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState();

  if (!restaurants?.length) return null;

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Рестораны</h1>
          <RestaurantTabs
            activeId={selectedRestaurantId}
            onSelect={setSelectedRestaurantId}
          />
          {selectedRestaurant && <Restaurant id={selectedRestaurantId} restaurant={selectedRestaurant} />}
          {/* Вариант с использованием списка ресторанов Restaurants, но в данном задании он он не нужен т.к. выводим всего один ресторан */}
          {/* {selectedRestaurant && <Restaurants restaurants={[selectedRestaurant]} />} */}
      </div>
    </Layout>
  );
};
