export const selectFamily = (state) => state.family.data || [];
export const selectPerson = (state) => state.family.person;
export const selectError = (state) => state.family.error;
export const selectLoading = (state) => state.family.loading;;