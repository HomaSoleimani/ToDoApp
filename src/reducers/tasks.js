export const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...action.payload];
    case "CLEAN_ALL_TASKS":
      return [...action.payload];
    case "DELETE_TASK":
      return [...action.payload];
    case "COMPLETE_TASK":
      return [...action.payload];
    default:
      return state;
  }
};
