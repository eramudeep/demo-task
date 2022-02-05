import {SET_LOGIN, SET_LOGOUT} from '../authActions';

const initialState = {
  userInfo: {},
  token: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        token: action.payload.token,
      };
    case SET_LOGOUT:
      return {
        ...state,
        userInfo: {},
        token: null,
      };
    default:
      return state; //must be like this so it can  presist the reducers
  }
}
