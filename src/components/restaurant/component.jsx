import { Menu } from "../menu/component";
import { Reviews } from "../reviews/comporent";

export const Restaurant = ({ restaurant }) => {
  return (
    <ul>
      <li>
        Ресторан: {restaurant.name}
        <h3>Меню</h3>
        <Menu menu={restaurant.menu} />
        <h3>Отзывы</h3>
        <Reviews reviews={restaurant.reviews} />
        <br />
        <br />
      </li>
    </ul>
  );
};
