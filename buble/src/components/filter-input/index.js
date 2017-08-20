import React from "react";

function FilterInput(props) {
  function renderInput(type) {
    switch (type) {
      case "STRING":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            onChange={props.handleInputChange}
          />
        );
      case "NUMBER":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            type="number"
            onChange={props.handleInputChange}
          />
        );
      case "DATE":
        return (
          <input
            className="filter-input"
            name="selectedInput"
            type="date"
            onChange={props.handleInputChange}
          />
        );
      case "BOOLEAN":
        return (
          <select
            className="filter-dropdown"
            name="selectedInput"
            onChange={props.handleInputChange}
          >
            <option value="" />
            <option value={props.copy.filter.boolean.true.id}>
              {props.copy.filter.boolean.true.label}
            </option>
            <option value={props.copy.filter.boolean.false.id}>
              {props.copy.filter.boolean.false.label}
            </option>
          </select>
        );
      case "ENUM":
        const enumOptions = props.enum.map(item =>
          <option key={item} value={item}>
            {item}
          </option>
        );

        return (
          <select
            className="filter-dropdown"
            onChange={props.handleInputChange}
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

  let input;

  if (props.selectedAttribute) {
    const inputType = props.selectedAttribute.split("_")[1];

    input = renderInput(inputType);
  }

  return (
    <div>
      {input}
    </div>
  );
}

export default FilterInput;
