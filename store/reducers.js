import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  IS_AUTHENTICATED,
  DATA_USER,
  DATA_REFRESH,
} from './types';

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  dataUser: null,
  dataRefresh: false,
};

function reducer(state = initialState, action){
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case IS_AUTHENTICATED: 
      return{
        ...state,
        isAuthenticated: action.payload,
      }
    case DATA_USER: 
      return{
        ...state,
        dataUser: action.payload,
      }
    case DATA_REFRESH: 
      return{
        ...state,
        dataRefresh: action.payload,
      }
    case LOGOUT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
}



export default reducer
