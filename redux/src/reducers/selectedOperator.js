const selectedOperator = (state = "", action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.name === "selectedOperator") {
        return action.value;
      }
    default:
      return state;
  }
};

export default selectedOperator;
