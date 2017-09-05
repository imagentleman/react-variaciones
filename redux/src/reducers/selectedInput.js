const selectedInput = (state = null, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.name === "selectedInput") {
        return action.value;
      }
    default:
      return state;
  }
};

export default selectedInput;
