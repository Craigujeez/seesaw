import axios from 'axios';
import cogoToast from "cogo-toast";
import {LOADING_TRUE,LOADING_FALSE} from "../types/loadingTypes";
import {UPDATE_AGENT_COORDINATES} from "../types/agentMonitoringTypes";


export function fetchUserCoordinates() {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING_TRUE });
        const response = await axios.post("/user/monitoring");
        const {status,monitoring} = response.data;
        if (status === "success") {
          dispatch({ type: UPDATE_AGENT_COORDINATES, payload: monitoring });
          dispatch({ type: LOADING_FALSE });
          return monitoring
        } else {
          dispatch({ type: LOADING_FALSE });
        }
      } catch (err) {
        dispatch({ type: LOADING_FALSE });
        cogoToast.error("oops... an error has occurred");
      }
    };
  }