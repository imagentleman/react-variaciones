import CONSTANTS from "constants.js";

function receiveData(json) {
  return {
    type: "RECEIVE_DATA",
    json: json
  };
}

export function fetchData() {
  return function(dispatch) {
    fetch(CONSTANTS.ENDPOINT)
      .then(response => response.json())
      .then(json => {
        dispatch(inputChange("selectedOrganization", json.entity[0].id));
        dispatch(receiveData(json));
      });
  };
}

export function inputChange(name, value) {
  return {
    type: "INPUT_CHANGE",
    name,
    value
  };
}

export function queriesChange(queries) {
  return {
    type: "QUERIES_CHANGE",
    queries
  };
}
