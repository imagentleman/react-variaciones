const queries = (state = [], action) => {
  switch (action.type) {
    case "QUERIES_CHANGE":
      return action.queries;
    default:
      return state;
  }
};

export default queries;
