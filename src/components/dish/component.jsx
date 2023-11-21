import { MAX_DISH_QUANTITY } from "../../constants/constants";
import { Counter } from "../counter/components";

export const Dish = ({ dish }) => {
  return (
    <table border={0} cellPadding={3}>
      <tr>
        <td width={200}>
          {dish.name} - {dish.price} $
        </td>
        <td>
          <Counter max={MAX_DISH_QUANTITY} />
        </td>
      </tr>
    </table>
  );
};
