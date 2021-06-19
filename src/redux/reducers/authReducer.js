import {
    LOGOUT_USER,
    LOGIN_USER
  } from "../types/authTypes";
  
  const INITIAL_STATE = {
    user: null,
    isAuthenticated: false,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_USER:
          return {...state,
            isAuthenticated: true,
            user: action.payload
        }
      case LOGOUT_USER:
        return (state = INITIAL_STATE);
      default:
        return state;
    }
  };
  