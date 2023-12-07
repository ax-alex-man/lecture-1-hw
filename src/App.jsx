import { Provider } from "react-redux";
import { ThemeProvider } from "./components/contexts/theme/component";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.scss";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RestaurantsPage />
      </ThemeProvider>
    </Provider>
  );
};
