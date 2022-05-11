
import {GET_DATA_LOADING, GET_DATA_SUCCESS,} from "./actionType";

export const getDataLoading = () => {
    return {
      type: GET_DATA_LOADING,
    };
  };
  
  export const getDataSuccess = (payload) => {
    return {
      type: GET_DATA_SUCCESS,
      payload,
    };
  };

