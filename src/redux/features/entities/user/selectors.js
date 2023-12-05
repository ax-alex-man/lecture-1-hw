export const selectUserMoule = (state) => state.user;
export const selectUserIds = (state) => selectUserMoule(state).ids;
export const selectUserById = (state, id) => selectUserMoule(state).entities[id];
