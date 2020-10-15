import React from "react";
import { Box } from "@chakra-ui/core";
import Graph from "./Graph";

function Overview() {
	return (
		<div className="dashboard__overview">
			{/* graph */}
			<Box rounded="md" className="dashboard__overview_graph">
				<Graph/>
			</Box>

			{/* visitor card count */}
			<div className="dashboard__card-container">
				<Box rounded="lg" className="dashboard__card">
					Today
				</Box>
				<Box rounded="lg" className="dashboard__card">
					This week
				</Box>
				<Box rounded="lg" className="dashboard__card">
					This month
				</Box>
			</div>

			{/* map & guest table */}
			<div className="dashboard__trace">
				<Box rounded="lg" className="bottom">Map</Box>
				<Box rounded="lg" className="bottom">Table</Box>
			</div>
		</div>
	);
}

export default Overview;
