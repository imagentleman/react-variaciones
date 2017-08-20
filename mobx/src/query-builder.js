import React from "react";
import { observer } from "mobx-react";
import CONSTANTS from "constants.js";
import Panel from "components/panel";
import store from "store.js";
import "query-builder.css";

@observer
class QueryBuilder extends React.Component {
  async componentDidMount() {
    const response = await fetch(CONSTANTS.ENDPOINT);
    const data = await response.json();

    store.data = data;
  }

  render() {
    const content = store.data ? <Panel copy={store.data.copy} /> : null;

    return (
      <main className="query-builder">
        <h1>Query Builder</h1>

        {content}
      </main>
    );
  }
}

export default QueryBuilder;
