/* eslint-disable no-debugger */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
} from './types';

import authService from '../services/auth';

// // actions creators
// export const updateCurrent = val => ({ type: UPDATE_CURRENT, payload: val })
// export const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos })
// export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
// export const replaceTodo = todo => ({ type: REPLACE_TODO, payload: todo })
// export const removeTodo = id => ({ type: REMOVE_TODO, payload: id })
// export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
// export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })
// export const errorMessage = (message) => ({ type: ERROR_MESSAGE, payload: message })


export const getUserFromLocalStorage = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.loginAccount(user);

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT_USER, payload: null });
};
