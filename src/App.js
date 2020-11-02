import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { AuthContext } from "./store/Auth/AuthProvider";
import Login from "./Components/Pages/Auth/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import Trace from "./Components/Pages/Dashboard/Trace/Trace";
import Reports from "./Components/Pages/Dashboard/Reports/Reports";
import GuestPage from "./Components/Pages/Dashboard/Guest";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <ThemeProvider>
        <CSSReset />
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
              path="/add-guest"
              render={() =>
                state.user && state.token ? (
                  <GuestPage />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            {/* <Route path="/add-guest" component={GuestPage} /> */}

            <Route
              path="/login"
              render={() =>
                state.user && state.token ? <Redirect to="/" /> : <Login />
              }
            />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

function PrivateRoute({ isAuth, component: Component, ...rest }) {
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
