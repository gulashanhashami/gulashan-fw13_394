
import {GET_DATA_LOADING, GET_DATA_SUCCESS,} from "./actionType";

const init = {
    data: {
      loading: false,
      error: false,
      data: [],
    },
  };

  export const reducer = (store = init, { type, payload }) => {
    switch (type) {
       case GET_DATA_LOADING:
           return {
               ...store,
               data:{
                   ...store.data,
                   loading:true,
               },
           };
           case GET_DATA_SUCCESS:
               return{
                   ...store,
                   data:{
                       ...store.data,
                       loading:false,
                       data:payload,
                   },
               };

           default :
           return {
               ...store
           }
    }
}
