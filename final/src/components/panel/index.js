import { h } from "preact";
import Filter from "../filter";

function Panel(props) {
  return (
    <div className="panel">
      <h2 className="panel-heading">
        {props.copy.panel.heading}
      </h2>

      <Filter
        entities={props.entities}
        attributes={props.attributes}
        operators={props.operators}
        enum={props.enum}
        combinators={props.combinators}
        copy={props.copy}
      />
    </div>
  );
}

export default Panel;
