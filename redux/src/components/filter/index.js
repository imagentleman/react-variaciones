import React from "react";
import Queries from "components/queries";
import FilterInput from "components/filter-input";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOrganization: this.props.entities[0].id,
      selectedAttribute: "",
      selectedOperator: "",
      selectedInput: "",
      selectedCombinator: this.props.combinators[0],
      queries: [],
      attributes: this.props.attributes.reduce((object, item) => {
        const key = Object.keys(item)[0];
        object[key] = item[key];
        return object;
      }, {}),
      operators: Object.keys(this.props.operators).map(operator => ({
        id: operator,
        label: this.props.operators[operator]
      }))
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddQuery = this.handleAddQuery.bind(this);
    this.handleRemoveQuery = this.handleRemoveQuery.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;

    this.props.handleInputChange(name, event.target.value);
  }

  handleAddQuery(event) {
    const queries = [...this.props.queries];

    const query = {
      id: this.props.queries.length,
      attribute: this.props.selectedAttribute,
      operator: this.props.selectedOperator,
      input: this.props.selectedInput
    };

    if (queries.length > 0) {
      query.combinator = this.props.selectedCombinator;
    }

    queries.push(query);

    this.props.handleQueriesChange(queries);

    this.handleReset(event);
  }

  handleRemoveQuery(event, id) {
    event.preventDefault();

    const queries = this.props.queries.filter(query => query.id !== id);

    this.props.handleQueriesChange(queries);
  }

  handleReset(event) {
    event.preventDefault();

    this.props.handleInputChange("selectedAttribute", "");
    this.props.handleInputChange("selectedOperator", "");
    this.props.handleInputChange("selectedInput", "");
  }

  render() {
    const organizationOptions = this.props.entities.map(entity => (
      <option key={entity.id} value={entity.id}>
        {entity.label}
      </option>
    ));

    const attributeOptions = this.state.attributes[
      this.props.selectedOrganization
    ].map(attribute => (
      <option key={attribute} value={attribute}>
        {attribute}
      </option>
    ));

    const operatorOptions = this.state.operators.map(operator => (
      <option key={operator.id} value={operator.id}>
        {operator.label}
      </option>
    ));

    const combinatorOptions = this.props.combinators.map(combinator => (
      <option key={combinator} value={combinator}>
        {combinator}
      </option>
    ));

    const validInputs =
      this.props.selectedOrganization &&
      this.props.selectedAttribute &&
      this.props.selectedOperator &&
      this.props.selectedInput;

    return (
      <form className="filter-form">
        <div className="primary-content">
          <select
            className="filter-dropdown"
            name="selectedOrganization"
            value={this.props.selectedOrganization}
            onChange={this.handleInputChange}
          >
            {organizationOptions}
          </select>

          <Queries
            queries={this.props.queries}
            onClick={this.handleRemoveQuery}
          />
        </div>

        <div className="secondary-content">
          {this.props.queries.length > 0 && (
            <select
              className="filter-dropdown"
              name="selectedCombinator"
              value={this.props.selectedCombinator}
              onChange={this.handleInputChange}
            >
              {combinatorOptions}
            </select>
          )}

          <select
            className="filter-dropdown"
            name="selectedAttribute"
            value={this.props.selectedAttribute}
            onChange={this.handleInputChange}
          >
            <option value="" disabled hidden>
              {this.props.copy.filter.attributePlaceholder}
            </option>
            {attributeOptions}
          </select>

          {this.props.selectedAttribute && (
            <select
              className="filter-dropdown"
              name="selectedOperator"
              value={this.props.selectedOperator}
              onChange={this.handleInputChange}
            >
              <option value="" disabled hidden>
                {this.props.copy.filter.operatorPlaceholder}
              </option>
              {operatorOptions}
            </select>
          )}

          <FilterInput
            selectedAttribute={this.props.selectedAttribute}
            copy={this.props.copy}
            handleInputChange={this.handleInputChange}
          />

          <div className="filter-icons">
            {validInputs && (
              <a className="filter-plus" href="" onClick={this.handleAddQuery}>
                +
              </a>
            )}
            {this.props.selectedAttribute && (
              <a className="filter-minus" href="" onClick={this.handleReset}>
                -
              </a>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default Filter;
