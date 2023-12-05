import { ThemeProvider } from "./components/contexts/theme/component";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.scss";

export const App = ({ restaurants }) => {
  return (
    <ThemeProvider>
      <RestaurantsPage restaurants={restaurants} />
    </ThemeProvider>
  );
};
