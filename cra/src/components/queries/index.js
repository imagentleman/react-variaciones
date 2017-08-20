import React, { Component } from "react";

class Queries extends Component {
  render() {
    const queries = this.props.queries.map(query =>
      <span className="query" key={query.id}>
        {query.combinator ? `${query.combinator} ` : ""}
        {query.attribute}{" "}
        <span className="query-operator">{query.operator}</span> {query.input}
        <a
          className="query-remove"
          href=""
          onClick={e => this.props.onClick(e, query.id)}
        >
          x
        </a>
      </span>
    );
    return (
      <div className="queries">
        {queries}
      </div>
    );
  }
}

export default Queries;
