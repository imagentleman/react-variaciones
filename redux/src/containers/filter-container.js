import { connect } from "react-redux";
import Filter from "components/filter";
import { inputChange, queriesChange } from "./../actions";

const mapStateToProps = state => {
  return {
    entities: state.data.entity,
    attributes: state.data.attribute,
    operators: state.data.operator,
    enum: state.data.enum,
    combinators: state.data.combinator,
    copy: state.data.copy,
    selectedAttribute: state.selectedAttribute,
    selectedCombinator: state.selectedCombinator,
    selectedInput: state.selectedInput,
    selectedOperator: state.selectedOperator,
    selectedOrganization: state.selectedOrganization,
    queries: state.queries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: (name, value) => {
      dispatch(inputChange(name, value));
    },
    handleQueriesChange: queries => {
      dispatch(queriesChange(queries));
    }
  };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
