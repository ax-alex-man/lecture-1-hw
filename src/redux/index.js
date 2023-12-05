import { configureStore } from "@reduxjs/toolkit";
import { restaurant } from "./features/entities/restaurant";
import { dish } from "./features/entities/dish";
import { review } from "./features/entities/review";
import { user } from "./features/entities/user";

const store = configureStore({
  reducer: {
    restaurant: restaurant.reducer,
    dish: dish.reducer,
    review: review.reducer,
    user: user.reducer,
  },
});

export default store;