import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

export const dish = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
    ids: normalizedDishes.map((dish) => dish.id),
  },
});
