import React from "react";
import { LineGraph, PieGraph } from "./Graph";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import DashboardCalendar from "../../../Calendar_";
import GuestList from "./GuestList";

function Overview() {
	return (
		<div className="overview">
			<h1 className="dashboard-title">Daily Overview</h1>

			<div className="overview__top dashboard-item">
				<LineGraph />
			</div>

			<div className="overview__middle">
				<div className="dashboard-item overview__pie-graph">
					<PieGraph />
				</div>
				<div className="dashboard-item overview__guest-count">
					<h1>Total Guest</h1>
					<CirculatTotal total={503} />
				</div>
				<div className="dashboard-item overview__calendar">
					<DashboardCalendar />
				</div>
			</div>

			<div className="overview__bottom">
				<div className="overview__map">
					<Map />
				</div>

				<div className="overview__guest-list dashboard-item">
					<GuestList />
				</div>
			</div>
		</div>
	);
}

export default Overview;
