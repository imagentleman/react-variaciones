import { observable } from "mobx";

const store = observable({
  data: null,
  selectedOrganization: null,
  selectedAttribute: null,
  selectedOperator: null,
  selectedInput: null,
  selectedCombinator: null,
  queries: null,
  attributes: null,
  operators: null
});

export default store;
