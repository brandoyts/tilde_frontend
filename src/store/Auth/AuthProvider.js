import React, { createContext, useReducer } from "react";
import { localstorageGet } from "../../helpers/localstorage";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext(null);

const initialState = {
	user: undefined,
	token: localstorageGet("JWT"),
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
