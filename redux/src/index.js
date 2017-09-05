import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import { fetchData } from "./actions";
import QueryBuilder from "./query-builder";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

store.dispatch(fetchData());

render(
  <Provider store={store}>
    <QueryBuilder />
  </Provider>,
  document.getElementById("app")
);
