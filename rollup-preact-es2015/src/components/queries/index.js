import { h } from "preact";

function Queries(props) {
  const queries = props.queries.map(query =>
    <span className="query" key={query.id}>
      {query.combinator ? `${query.combinator} ` : ""}
      {query.attribute} <span className="query-operator">
        {query.operator}
      </span>{" "}
      {query.input}
      <a
        className="query-remove"
        href=""
        onClick={e => props.onClick(e, query.id)}
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

export default Queries;
