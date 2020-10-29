import React, { useContext } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import "../../../css/dashboard.css";
import { AuthContext } from "../../../store/Auth/AuthProvider";
import { AUTH_LOGOUT } from "../../../store/action_types.js";
import Overview from "./Overview/Overview";
import Trace from "./Trace/Trace";
import Reports from "./Reports/Reports";
import Login from "../Login";

function Dashboard({ children }) {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: AUTH_LOGOUT });
    return <Redirect to="/login" />;
  };

  console.log("dashboard");

  return (
    <div className="dashboard">
      <Header displayName={state.user} logout={handleLogout} />
      <div className="dashboard__content container">
        {/* sidebar */}
        <Sidebar />

        {/* main content */}
        <main className="dashboard__main-content">{children}</main>
      </div>
    </div>
  );
}

export default Dashboard;
