import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_FETCH,
	AUTH_FAIL,
} from "../action_types.js";
import {
	localstorageRemove,
	localstorageSet,
} from "../.././helpers/localstorage";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			localstorageSet("JWT", action.payload.token);
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
			return {
				...state,
				user: undefined,
				token: localstorageRemove("JWT"),
				authLoading: false,
			};
		default:
			return state;
	}
};

export default AuthReducer;
