import Inferno from "inferno";
import Component from "inferno-component";

class FilterInput extends Component {
  renderInput(type) {
    switch (type) {
      case "STRING":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            onInput={this.props.handleInputChange}
          />
        );
      case "NUMBER":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            type="number"
            onInput={this.props.handleInputChange}
          />
        );
      case "DATE":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            type="date"
            onChange={this.props.handleInputChange}
          />
        );
      case "BOOLEAN":
        return (
          <select
            className="filter-dropdown"
            name="selectedInput"
            onChange={this.props.handleInputChange}
          >
            <option value="" />
            <option value={this.props.copy.filter.boolean.true.id}>
              {this.props.copy.filter.boolean.true.label}
            </option>
            <option value={this.props.copy.filter.boolean.false.id}>
              {this.props.copy.filter.boolean.false.label}
            </option>
          </select>
        );
      case "ENUM":
        const enumOptions = this.props.enum.map(item =>
          <option key={item} value={item}>
            {item}
          </option>
        );

        return (
          <select
            className="filter-dropdown"
            onChange={this.props.handleInputChange}
            multiple
            size="1"
          >
            {enumOptions}
          </select>
        );

      default:
        return null;
    }
  }

  render() {
    let input;

    if (this.props.selectedAttribute) {
      const inputType = this.props.selectedAttribute.split("_")[1];

      input = this.renderInput(inputType);
    }

    return (
      <div>
        {input}
      </div>
    );
  }
}

export default FilterInput;
