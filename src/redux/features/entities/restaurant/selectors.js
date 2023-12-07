export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
export const selectRestaurantNameById = (state, id) => selectRestaurantModule(state).entities[id].name;