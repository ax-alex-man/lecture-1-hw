import { Categories } from "../../components/categories/component";
import { Restaurants } from "../../components/restaurants/component";

export const ProductsPage = ({ restaurants }) => {
  const categories = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.name))
  );

  return (
    <div>
      <Categories categories={categories} />
      <hr />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
