const data = (
  state = {
    entities: [],
    attributes: [],
    operators: null,
    enum: [],
    combinators: [],
    copy: null
  },
  action
) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return Object.assign({}, state, action.json);
    default:
      return state;
  }
};

export default data;
