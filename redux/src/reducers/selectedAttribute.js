const selectedAttribute = (state = "", action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.name === "selectedAttribute") {
        return action.value;
      }
    default:
      return state;
  }
};

export default selectedAttribute;
