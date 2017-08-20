import React from "react";
import { observer } from "mobx-react";
import Queries from "components/queries";
import FilterInput from "components/filter-input";
import store from "store.js";

@observer
class Filter extends React.Component {
  constructor(props) {
    super(props);

    store.selectedOrganization = store.data.entity[0].id;
    store.selectedAttribute = "";
    store.selectedOperator = "";
    store.selectedInput = "";
    store.selectedCombinator = store.data.combinator[0];
    store.queries = [];
    store.attributes = store.data.attribute.reduce((object, item) => {
      const key = Object.keys(item)[0];
      object[key] = item[key];
      return object;
    }, {});
    store.operators = Object.keys(store.data.operator).map(operator => ({
      id: operator,
      label: store.data.operator[operator]
    }));

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddQuery = this.handleAddQuery.bind(this);
    this.handleRemoveQuery = this.handleRemoveQuery.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;

    store[name] = event.target.value;
  }

  handleAddQuery(event) {
    const queries = [...store.queries];

    const query = {
      id: store.queries.length,
      attribute: store.selectedAttribute,
      operator: store.selectedOperator,
      input: store.selectedInput
    };

    if (queries.length > 0) {
      query.combinator = store.selectedCombinator;
    }

    queries.push(query);

    store.queries = queries;

    this.handleReset(event);
  }

  handleRemoveQuery(event, id) {
    event.preventDefault();

    const queries = store.queries.filter(query => query.id !== id);

    store.queries = queries;
  }

  handleReset(event) {
    event.preventDefault();

    store.selectedAttribute = "";
    store.selectedOperator = "";
    store.selectedInput = "";
  }

  render() {
    const organizationOptions = store.data.entity.map(entity =>
      <option key={entity.id} value={entity.id}>
        {entity.label}
      </option>
    );

    const attributeOptions = store.attributes[
      store.selectedOrganization
    ].map(attribute =>
      <option key={attribute} value={attribute}>
        {attribute}
      </option>
    );

    const operatorOptions = store.operators.map(operator =>
      <option key={operator.id} value={operator.id}>
        {operator.label}
      </option>
    );

    const combinatorOptions = store.data.combinator.map(combinator =>
      <option key={combinator} value={combinator}>
        {combinator}
      </option>
    );

    const validInputs =
      store.selectedOrganization &&
      store.selectedAttribute &&
      store.selectedOperator &&
      store.selectedInput;

    return (
      <form className="filter-form">
        <div className="primary-content">
          <select
            className="filter-dropdown"
            name="selectedOrganization"
            value={store.selectedOrganization}
            onChange={this.handleInputChange}
          >
            {organizationOptions}
          </select>

          <Queries queries={store.queries} onClick={this.handleRemoveQuery} />
        </div>

        <div className="secondary-content">
          {store.queries.length > 0 &&
            <select
              className="filter-dropdown"
              name="selectedCombinator"
              value={store.selectedCombinator}
              onChange={this.handleInputChange}
            >
              {combinatorOptions}
            </select>}

          <select
            className="filter-dropdown"
            name="selectedAttribute"
            value={store.selectedAttribute}
            onChange={this.handleInputChange}
          >
            <option value="" disabled hidden>
              {store.data.copy.filter.attributePlaceholder}
            </option>
            {attributeOptions}
          </select>

          {store.selectedAttribute &&
            <select
              className="filter-dropdown"
              name="selectedOperator"
              value={store.selectedOperator}
              onChange={this.handleInputChange}
            >
              <option value="" disabled hidden>
                {store.data.copy.filter.operatorPlaceholder}
              </option>
              {operatorOptions}
            </select>}

          <FilterInput
            selectedAttribute={store.selectedAttribute}
            copy={store.data.copy}
            handleInputChange={this.handleInputChange}
          />

          <div className="filter-icons">
            {validInputs &&
              <a className="filter-plus" href="" onClick={this.handleAddQuery}>
                +
              </a>}
            {store.selectedAttribute &&
              <a className="filter-minus" href="" onClick={this.handleReset}>
                -
              </a>}
          </div>
        </div>
      </form>
    );
  }
}

export default Filter;
