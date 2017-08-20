import React, { Component } from "react";
import CONSTANTS from './constants';
import Panel from 'components/panel';
import "query-builder.css";

class QueryBuilder extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    const response = await fetch(CONSTANTS.ENDPOINT);
    const data = await response.json();

    this.setState({
      data
    });
  }

  render() {
    const content = this.state.data
      ? <Panel
          entities={this.state.data.entity}
          attributes={this.state.data.attribute}
          operators={this.state.data.operator}
          enum={this.state.data.enum}
          combinators={this.state.data.combinator}
          copy={this.state.data.copy}
        />
      : null;

    return (
      <main className="query-builder">
        <h1>Query Builder</h1>

        {content}
      </main>
    );
  }
}

export default QueryBuilder;
