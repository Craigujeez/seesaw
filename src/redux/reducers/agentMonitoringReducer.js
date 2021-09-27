import {UPDATE_AGENT_COORDINATES} from "../types/agentMonitoringTypes";
 
 const INITIAL_STATE = {
   data: [],
 };
 
 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case UPDATE_AGENT_COORDINATES:
        return {
            ...state,
            data: action.payload,
        }
     default:
       return state;
   }
 };