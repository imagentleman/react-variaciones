import React from "react";
import Filter from "../filter";

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <h2 className="panel-heading">
          {this.props.copy.panel.heading}
        </h2>

        <Filter
          entities={this.props.entities}
          attributes={this.props.attributes}
          operators={this.props.operators}
          enum={this.props.enum}
          combinators={this.props.combinators}
          copy={this.props.copy}
        />
      </div>
    );
  }
}

export default Panel;
