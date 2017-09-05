import { combineReducers } from "redux";
import data from "./data";
import selectedOrganization from "./selectedOrganization";
import selectedAttribute from "./selectedAttribute";
import selectedOperator from "./selectedOperator";
import selectedInput from "./selectedInput";
import selectedCombinator from "./selectedCombinator";
import queries from "./queries";

const reducers = combineReducers({
  data,
  selectedOrganization,
  selectedAttribute,
  selectedOperator,
  selectedInput,
  selectedCombinator,
  queries
});

export default reducers;
