import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../Header";
import Overview from "./Overview/Overview";
import Trace from "./Trace/Trace";
import Reports from "./Reports/Reports";
import Sidebar from "../../Sidebar";
import "../../../css/dashboard.css";

function Dashboard() {
	return (
		<div className="dashboard">
			<Header />
			<div className="dashboard__content container">
				{/* sidebar */}
				<Sidebar />

				{/* main content */}
				<main className="dashboard__main-content">
					<Switch>
						<Route exact path="/" component={Overview} />
						<Route exact path="/trace" component={Trace} />
						<Route exact path="/reports" component={Reports} />
					</Switch>
				</main>
			</div>
		</div>
	);
}

export default Dashboard;
