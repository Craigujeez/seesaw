import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import {LOGOUT_USER} from "../types/authTypes"

export const appReducer = combineReducers({
  auth,
  loading
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    localStorage.clear();
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;