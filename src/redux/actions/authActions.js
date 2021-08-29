import axios from 'axios';
import cogoToast from "cogo-toast";
import {LOGIN_USER,LOGOUT_USER} from "../types/authTypes";
import {LOADING_TRUE,LOADING_FALSE} from "../types/loadingTypes";

export function loginUser(userData,history) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING_TRUE });
        const response = await axios.post("/user/login",userData);
        if (response.data.data.attributes) {
          cogoToast.success("Login Successful")
          localStorage.clear();
          const { token, name,email } = response.data.data.attributes;
          localStorage.token = token;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          dispatch({ type: LOGIN_USER, user: {email,name} });
          dispatch({ type: LOADING_FALSE });
          history.push("/dashboard");
        } else {
          dispatch({ type: LOADING_FALSE });
        }
      } catch (err) {
        dispatch({ type: LOADING_FALSE });
        cogoToast.error("oops... an error has occurred");
      }
    };
  }
  export function forgotPassword(userData,history) {
      return async (dispatch) => {
        try {
          dispatch({ type: LOADING_TRUE });
          const response = await axios.post("/user/forget-password",userData);
          const { status, message } = response.data;
          if (status === "success") {
            dispatch({ type: LOADING_FALSE });
            cogoToast.success(message)
            history.push("/");
          } else {
            dispatch({ type: LOADING_FALSE });
          }
        } catch (err) {
          dispatch({ type: LOADING_FALSE });
          cogoToast.error("oops... an error has occurred");
        }
      };
    }