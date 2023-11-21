import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((dish) => (
        <Dish dish={dish} />
      ))}
    </div>
  );
};
