import {FETCH_PROJECT_UPDATES} from "../types/projectUpdateTypes";
 
 const INITIAL_STATE = {
   data: [],
   single: {}
 };
 
 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case FETCH_PROJECT_UPDATES:
        return {
            ...state,
            data: action.payload,
        }
    //  case FETCH_SINGLE_PROJECT:
    //      return {
    //          ...state,
    //         single: action.payload
    //      }
     default:
       return state;
   }
 };