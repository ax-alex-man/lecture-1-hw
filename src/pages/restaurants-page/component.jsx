import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
//import { Restaurants } from "../../components/restaurants/component";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantName, setSelectedRestaurantName] = useState();

  if (!restaurants?.length) return null;

  const restaurantNames = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.name))
  );

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.name === selectedRestaurantName
  );

  return (
    <div>
      <RestaurantTabs
        tabs={restaurantNames}
        onSelect={setSelectedRestaurantName}
      />
      <hr />

      {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}

      {/* Вариант с использованием списка ресторанов Restaurants, но в данном задании он он не нужен т.к. выводим всего один ресторан */}
      {/* {selectedRestaurant && <Restaurants restaurants={[selectedRestaurant]} />} */}
    </div>
  );
};
