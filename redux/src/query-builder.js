import React, { Component } from "react";
import { connect } from "react-redux";
import PanelContainer from "containers/panel-container";
import "query-builder.css";

class QueryBuilder extends Component {
  render() {
    return (
      <main className="query-builder">
        <h1>Query Builder</h1>

        <PanelContainer />
      </main>
    );
  }
}

export default QueryBuilder;
