export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

export const setLogin = (data) => ({
  type: SET_LOGIN,
  payload: data,
});


export const logoutUser = ( ) => ({
    type: SET_LOGOUT 
  });
  