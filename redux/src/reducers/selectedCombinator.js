const selectedCombinator = (state = "", action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.name === "selectedCombinator") {
        return action.value;
      }
    default:
      return state;
  }
};

export default selectedCombinator;
