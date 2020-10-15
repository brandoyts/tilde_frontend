import React from "react";
import Overview from "./Overview/Overview";
import Navbar from "../../Navbar";

function Dashboard() {
	return (
		<div className="dashboard wrapper">
			<Navbar />
			<div className="dashboard__main-content container">
				<Overview />
			</div>
		</div>
	);
}

export default Dashboard;
