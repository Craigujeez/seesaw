import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import projectRepository from "./projectRepositoryReducer"
import projectUpdate from "./projectUpdateReducer";
import agentMonitoring from './agentMonitoringReducer';
import {LOGOUT_USER} from "../types/authTypes"

export const appReducer = combineReducers({
  auth,
  loading,
  projectRepository,
  projectUpdate,
  agentMonitoring,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    localStorage.clear();
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;