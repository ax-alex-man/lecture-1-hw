import { useState } from "react";
import { MAX_DISH_QUANTITY } from "../../constants/constants";
import { Counter } from "../counter/component";
import styles from "./styles.module.scss";

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
    <div className={styles.dish}>
      <div className={styles.image}>
        <img src={`https://loremflickr.com/320/240/dish?random=${dish.name}`} loading="lazy" alt="" width={320} height={240} />
      </div>
      <div className={styles.info}>
        {dish.name} - {dish.price} $
      </div>
      <div className={styles.counter}>
        <Counter
          value={quantity}
          max={MAX_DISH_QUANTITY}
          onIncrement={handleInecrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};
