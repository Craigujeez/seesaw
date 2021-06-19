import {
     LOADING_TRUE,
     LOADING_FALSE, 
     GLOBAL_LOADING_TRUE, 
     GLOBAL_LOADING_FALSE 
} from "../types/loadingTypes";
  
  const INITIAL_STATE = {
    isLoading: false,
    globalLoading: false,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING_TRUE:
          return {...state,
            isLoading: true,
        }
      case LOADING_FALSE:
        return {...state,
            isLoading: false,
        }
    case GLOBAL_LOADING_TRUE:
        return {...state,
            globalLoading: true,
        }
    case GLOBAL_LOADING_FALSE:
        return {...state,
            globalLoading: false,
        }
      default:
        return state;
    }
  };