import React from "react";
import { Box } from "@chakra-ui/core";
import { LineGraph, PieGraph } from "./Graph";
import Map from "../../../Map";
import CirculatTotal from "../../../CircularTotal";
import Calendar_ from "../../../Calendar_";
import Table from "./Table";
function Overview() {
	return (
		<div className="dashboard__overview">
			{/* graph */}
			<Box rounded="md" className="dashboard__overview_graph">
				<LineGraph />
			</Box>

			{/* visitor card count */}
			<div className="dashboard__card-container">
				<Box rounded="lg" className="dashboard__card">
					<PieGraph />
				</Box>
				<Box rounded="lg" className="dashboard__card">
					<CirculatTotal total={500} />
				</Box>
				<Box rounded="lg" className="dashboard__card">
					<Calendar_ />
				</Box>
			</div>

			{/* map & guest table */}
			<div className="dashboard__trace">
				<Box rounded="lg" className="bottom">
					<Map />
				</Box>
				<Box rounded="lg" className="bottom">
					table
				</Box>
			</div>
		</div>
	);
}

export default Overview;
