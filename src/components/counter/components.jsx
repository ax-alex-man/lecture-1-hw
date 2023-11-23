import { useState } from "react";

export const Counter = ({ min = 0, max = Infinity }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const handleInecrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement} disabled={quantity === 0}>
        -
      </button>
      &nbsp;{quantity}&nbsp;
      <button onClick={handleInecrement} disabled={quantity === max}>
        +
      </button>
    </div>
  );
};
