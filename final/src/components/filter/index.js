import { h, Component } from "preact";
import Queries from "../queries";
import FilterInput from "../filter-input";

class Filter extends Component {
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

    this.setState({ [name]: event.target.value });
  }

  handleAddQuery(event) {
    const queries = [...this.state.queries];

    const query = {
      id: this.state.queries.length,
      attribute: this.state.selectedAttribute,
      operator: this.state.selectedOperator,
      input: this.state.selectedInput
    };

    if (queries.length > 0) {
      query.combinator = this.state.selectedCombinator;
    }

    queries.push(query);

    this.setState({
      queries
    });

    this.handleReset(event);
  }

  handleRemoveQuery(event, id) {
    event.preventDefault();

    const queries = this.state.queries.filter(query => query.id !== id);

    this.setState({
      queries
    });
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({
      selectedAttribute: "",
      selectedOperator: "",
      selectedInput: ""
    });
  }

  render() {
    const organizationOptions = this.props.entities.map(entity =>
      <option key={entity.id} value={entity.id}>
        {entity.label}
      </option>
    );

    const attributeOptions = this.state.attributes[
      this.state.selectedOrganization
    ].map(attribute =>
      <option key={attribute} value={attribute}>
        {attribute}
      </option>
    );

    const operatorOptions = this.state.operators.map(operator =>
      <option key={operator.id} value={operator.id}>
        {operator.label}
      </option>
    );

    const combinatorOptions = this.props.combinators.map(combinator =>
      <option key={combinator} value={combinator}>
        {combinator}
      </option>
    );

    const validInputs =
      this.state.selectedOrganization &&
      this.state.selectedAttribute &&
      this.state.selectedOperator &&
      this.state.selectedInput;

    return (
      <form className="filter-form">
        <div className="primary-content">
          <select
            className="filter-dropdown"
            name="selectedOrganization"
            value={this.state.selectedOrganization}
            onChange={this.handleInputChange}
          >
            {organizationOptions}
          </select>

          <Queries
            queries={this.state.queries}
            onClick={this.handleRemoveQuery}
          />
        </div>

        <div className="secondary-content">
          {this.state.queries.length > 0 &&
            <select
              className="filter-dropdown"
              name="selectedCombinator"
              value={this.state.selectedCombinator}
              onChange={this.handleInputChange}
            >
              {combinatorOptions}
            </select>}

          <select
            className="filter-dropdown"
            name="selectedAttribute"
            value={this.state.selectedAttribute}
            onChange={this.handleInputChange}
          >
            <option value="" disabled hidden>
              {this.props.copy.filter.attributePlaceholder}
            </option>
            {attributeOptions}
          </select>

          {this.state.selectedAttribute &&
            <select
              className="filter-dropdown"
              name="selectedOperator"
              value={this.state.selectedOperator}
              onChange={this.handleInputChange}
            >
              <option value="" disabled hidden>
                {this.props.copy.filter.operatorPlaceholder}
              </option>
              {operatorOptions}
            </select>}

          <FilterInput
            selectedAttribute={this.state.selectedAttribute}
            copy={this.props.copy}
            handleInputChange={this.handleInputChange}
          />

          <div className="filter-icons">
            {validInputs &&
              <a className="filter-plus" href="" onClick={this.handleAddQuery}>
                +
              </a>}
            {this.state.selectedAttribute &&
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
