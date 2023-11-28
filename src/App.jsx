import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.scss"

export const App = ({ restaurants }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
