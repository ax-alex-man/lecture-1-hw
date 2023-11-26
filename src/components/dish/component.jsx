import { useState } from "react";
import { MAX_DISH_QUANTITY } from "../../constants/constants";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleInecrement = () => {
    if (quantity < MAX_DISH_QUANTITY) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <table border={0} cellPadding={3}>
      <tr>
        <td width={200}>
          {dish.name} - {dish.price} $
        </td>
        <td>
          <Counter
            value={quantity}
            max={MAX_DISH_QUANTITY}
            onIncrement={handleInecrement}
            onDecrement={handleDecrement}
          />
        </td>
      </tr>
    </table>
  );
};
