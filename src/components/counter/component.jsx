export const Counter = ({
  value,
  onIncrement,
  onDecrement,
  min = 0,
  max = Infinity,
}) => {
  return (
    <div>
      <button onClick={onDecrement} disabled={value === min}>
        -
      </button>
      &nbsp;{value}&nbsp;
      <button onClick={onIncrement} disabled={value === max}>
        +
      </button>
    </div>
  );
};
