import Cookies from "js-cookie";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_FETCH,
  AUTH_FAIL,
} from "../action_types.js";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      Cookies.set("auth", action.payload.token);
      Cookies.set("user", action.payload.user);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authLoading: false,
      };

    case AUTH_FETCH:
      return {
        ...state,
        authLoading: true,
      };

    case AUTH_FAIL:
      return {
        ...state,
        authLoading: false,
      };

    case AUTH_LOGOUT:
      Cookies.remove("user");
      Cookies.remove("auth");
      return {
        ...state,
        user: undefined,
        token: undefined,
        authLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
