import React from "react";
import Map from "../../../Map";
import Table from "./Table";

function Trace() {
	return (
		<div className="trace">
			<h1 className="dashboard-title">Contact Trace</h1>
			<div className="trace__top">
				<Map />
			</div>
			<div className="trace__bottom">
				<Table />
			</div>
		</div>
	);
}

export default Trace;
