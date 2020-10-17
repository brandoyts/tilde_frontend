import React from "react";
import { Box } from "@chakra-ui/core";
import { LineGraph, PieGraph } from "./Graph";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import Calendar_ from "../../../Calendar_";
import GuestList from "./GuestList";

function Overview() {
	return (
		<div className="overview">
			<h1 className="dashboard-title">Overview</h1>

			{/* TOP */}
			<div className="overview__top dashboard-item">
				<LineGraph />
			</div>

			{/* MID */}
			<div className="overview__middle">
				<div className="dashboard-item overview__pie-graph">
					<PieGraph />
				</div>
				<div className="dashboard-item overview__guest-count">
					<h1>Total Guest</h1>
					<CirculatTotal total={503} />
				</div>
				<div className="dashboard-item overview__calendar">
					<Calendar_ />
				</div>
			</div>

			{/* BOTTOM */}
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
