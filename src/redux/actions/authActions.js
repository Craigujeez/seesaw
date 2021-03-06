import axios from 'axios';
import cogoToast from "cogo-toast";
import {LOGIN_USER,LOGOUT_USER} from "../types/authTypes";
import {LOADING_TRUE,LOADING_FALSE} from "../types/loadingTypes";

export function loginAdmin(userData,history) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING_TRUE });
        const response = await axios.post("/user/login",userData);
        if (response.data.data.attributes) {
          cogoToast.success("Login Successful")
          localStorage.clear();
          const { token, name,email } = response.data.data.attributes;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.token = token;
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
  export function loginUser(userData,history,coordinates) {
    // console.log(coordinates,"hmmmmmm");
      return async (dispatch) => {
        try {
          dispatch({ type: LOADING_TRUE });
          const response = await axios.post("/user/login",{...userData,...coordinates});
          if (response.data.data.attributes) {
            cogoToast.success("User Login Successful")
            // localStorage.clear();
            // const { token, name,email } = response.data.data.attributes;
            // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            // localStorage.token = token;
            // dispatch({ type: LOGIN_USER, user: {email,name} });
            // dispatch({ type: LOADING_FALSE });
            history.push("/user-monitoring");
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

export const signOut = () => dispatch => {
  // Set global loading to false
  dispatch({ type: LOADING_FALSE });
  localStorage.clear();
  dispatch({ type: LOGOUT_USER });
};