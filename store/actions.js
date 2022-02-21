/* eslint-disable no-debugger */
// eslint-disable-next-line camelcase


import {
  LOGIN_USER,
  IS_AUTHENTICATED,
  SET_LOADING,
  DATA_USER,
  LOGOUT_USER,
  DATA_REFRESH,
} from './types';


// 
// export const updateCurrent = val => ({ type: UPDATE_CURRENT, payload: val })
// export const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos })
// export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
// export const replaceTodo = todo => ({ type: REPLACE_TODO, payload: todo })
// export const removeTodo = id => ({ type: REMOVE_TODO, payload: id })
// export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
// export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })
// export const errorMessage = (message) => ({ type: ERROR_MESSAGE, payload: message })

// actions creators, son las acciones que se comunican con la funcion reductora
export const setLoading = boolean => ({ type: SET_LOADING, payload: boolean })
export const login = data => ({ type: LOGIN_USER, payload: data })
export const dataUser = data => ({ type: DATA_USER, payload: data })
export const authenticated = boolean => ({ type: IS_AUTHENTICATED, payload: boolean })
export const dataRefresh = boolean => ({ type: DATA_REFRESH, payload: boolean })

// son acciones de utilidad, tipo middlware, util para cuando hay que hacer algo con los datos antes de enviar a la funcion reductora



