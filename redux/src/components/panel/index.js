import React from "react";
import FilterContainer from "containers/filter-container";

function Panel(props) {
  const heading = props.copy ? (
    <h2 className="panel-heading">{props.copy.panel.heading}</h2>
  ) : null;
  const content = props.copy ? <FilterContainer /> : null;

  return (
    <div className="panel">
      {heading}
      {content}
    </div>
  );
}

export default Panel;
