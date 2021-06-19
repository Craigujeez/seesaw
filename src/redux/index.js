import { createStore } from "redux";
// import reduxThunk from "redux-thunk";
import reducers from "./reducers";

let store;

store = createStore(
    reducers, 
    // applyMiddleware(reduxThunk)
);


export default store;