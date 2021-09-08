import axios from 'axios';
import cogoToast from "cogo-toast";
import {LOGIN_USER,LOGOUT_USER} from "../types/authTypes";
import {LOADING_TRUE,LOADING_FALSE,
    GLOBAL_LOADING_TRUE,GLOBAL_LOADING_FALSE} from "../types/loadingTypes";
import {FETCH_PROJECT_REPOSITORY} from "../types/projectRepositoryTypes";


export function fetchProjects() {
    return async (dispatch) => {
      try {
        dispatch({ type: GLOBAL_LOADING_TRUE });
        const response = await axios.get("/project/repository");
        if (response.data.status === "success") {
          const body = response.data.data.map(item => item.attributes); 
          dispatch({ type: FETCH_PROJECT_REPOSITORY, payload: body });
          dispatch({ type: GLOBAL_LOADING_FALSE });
        } else {
          dispatch({ type: GLOBAL_LOADING_FALSE });
        }
      } catch (err) {
        dispatch({ type: GLOBAL_LOADING_FALSE });
        cogoToast.error("oops... an error has occurred");
      }
    };
  }