export const Restaurant = ({ restaurant }) => {
  return (
    <ul>
      <li>
        Ресторан: {restaurant.name}
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((x) => (
            <li>{x.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((x) => (
            <li>{x.text}</li>
          ))}
        </ul>
        <br />
        <br />
      </li>
    </ul>
  );
};
