import React from "react";
import Filter from "components/filter";

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <h2 className="panel-heading">
          {this.props.copy.panel.heading}
        </h2>

        <Filter />
      </div>
    );
  }
}

export default Panel;
