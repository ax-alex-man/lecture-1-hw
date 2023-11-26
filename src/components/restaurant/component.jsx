import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/comporent";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      Ресторан: {restaurant.name}
      <h3>Меню</h3>
      <Menu menu={restaurant.menu} />
      <h3>Отзывы</h3>
      <Reviews reviews={restaurant.reviews} />
      <h3>Оставьте отзыв:</h3>
      <ReviewForm />
    </div>
  );
};
