import { Category } from "../category/component";

export const Categories = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <Category title={category} />
      ))}
    </div>
  );
};
