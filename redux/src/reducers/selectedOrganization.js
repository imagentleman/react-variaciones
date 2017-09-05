const selectedOrganization = (state = "", action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.name === "selectedOrganization") {
        return action.value;
      }
    default:
      return state;
  }
};

export default selectedOrganization;
