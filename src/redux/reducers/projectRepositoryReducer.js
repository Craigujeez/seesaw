import {FETCH_PROJECT_REPOSITORY,FETCH_SINGLE_PROJECT} from "../types/projectRepositoryTypes";
 
 const INITIAL_STATE = {
   data: [],
   single: {}
 };
 
 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case FETCH_PROJECT_REPOSITORY:
        return {
            ...state,
            data: action.payload,
        }
     case FETCH_SINGLE_PROJECT:
         return {
             ...state,
            single: action.payload
         }
     default:
       return state;
   }
 };