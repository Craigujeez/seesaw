import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";

let store;

if (
    window.location.origin.includes("localhost") ||
    window.location.origin.includes("staging")
  ) {
    store = createStore(
        reducers, 
        applyMiddleware(logger)
    );
  } else {
    store = createStore(
        reducers,
    );
  }


export default store;