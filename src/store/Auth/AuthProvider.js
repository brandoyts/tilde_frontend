import React, { createContext, useReducer } from "react";
import { localstorageGet } from "../../helpers/localstorage";
import AuthReducer from "./AuthReducer";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const initialState = {
  user: Cookies.get("user"),
  token: Cookies.get("auth"),
  authLoading: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
