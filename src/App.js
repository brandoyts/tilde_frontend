import React, { useEffect, useContext } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./store/Auth/AuthProvider";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { AUTH_LOGIN } from "./store/action_types";

import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import Trace from "./Components/Pages/Dashboard/Trace/Trace";
import Reports from "./Components/Pages/Dashboard/Reports/Reports";

const dummy =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYwMzExNDA4Mn0.qZjs84S2_0y9dgGBY9TjiYce7IpPK8WA6oyMqW_lQg4";

function App() {
	const { state, dispatch } = useContext(AuthContext);

	useEffect(() => {
		async function relogin(checkToken) {
			try {
				const response = await axios.post(
					"http://localhost:8000/api/v1/authenticate/relogin",
					{ token: checkToken },
				);

				const { user, token } = response.data;

				dispatch({ type: AUTH_LOGIN, payload: { user, token } });
				// return <Redirect to="/" />;
			} catch (err) {
				return;
			}
		}

		if (!state.user && state.token) {
			relogin(dummy);
		}
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							state.user ? (
								<Dashboard children={<Overview />} />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/trace"
						render={() =>
							state.user ? (
								<Dashboard children={<Trace />} />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/reports"
						render={() =>
							state.user ? (
								<Dashboard children={<Reports />} />
							) : (
								<Redirect to="/login" />
							)
						}
					/>

					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

function PrivateRoute({ component: Component, ...rest }) {
	const { state } = useContext(AuthContext);
	console.log(state);
	return (
		<Route
			{...rest}
			render={(props) =>
				state.user.id ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
}

export default App;
