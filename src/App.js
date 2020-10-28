import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./store/Auth/AuthProvider";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { AUTH_LOGIN } from "./store/action_types";

import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import Trace from "./Components/Pages/Dashboard/Trace/Trace";
import Reports from "./Components/Pages/Dashboard/Reports/Reports";

function App() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              state.user && state.token ? (
                <Dashboard children={<Overview />} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/trace"
            render={() =>
              state.user && state.token ? (
                <Dashboard children={<Trace />} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/reports"
            render={() =>
              state.user && state.token ? (
                <Dashboard children={<Reports />} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            path="/login"
            render={() =>
              state.user && state.token ? <Redirect to="/" /> : <Login />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.user.id ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default App;
