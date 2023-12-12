import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

export const user = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;

      return acc;
    }, {}),
    ids: normalizedUsers.map((user) => user.id),
  },
});
