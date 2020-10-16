import React from "react";
import { Line, Pie } from "react-chartjs-2";

const graphOptions = {
	maintainAspectRatio: false,
};

export function LineGraph() {
	const graphData = {
		labels: ["Morning", "Afternoon", "Evening"],
		datasets: [
			{
				spanGaps: true,
				backgroundColor: "#6E87FF",
				borderColor: "#6E87FF",
				pointBorderColor: "#6E87FF",
				pointBackgroundColor: "#6E87FF",
				pointHoverBackgroundColor: "#6E87FF",
				pointHoverBorderColor: "#6E87FF",
				pointBorderWidth: 10,
				pointHoverRadius: 10,
				pointHoverBorderWidth: 1,
				pointRadius: 3,
				fill: true,
				borderWidth: 4,
				label: "Guests",
				data: [25.0, 32.4, 550],
			},
		],
	};

	return (
		<div className="graph">
			<Line data={graphData} options={graphOptions} />
		</div>
	);
}

export function PieGraph() {
	const pieData = {
		labels: ["Morning", "Afternoon", "Evening"],
		datasets: [
			{
				fill: true,
				borderColor: "none",
				borderWidth: 1,
				backgroundColor: ["#AD7CFF", "#6F86FF", "#51B94F"],
				hoverBorderColor: ["#AD7CFF", "#6F86FF", "#51B94F"],
				borderColor: "rgba(255, 255, 255 0.6",
				data: [352, 102, 550],
			},
		],
	};

	return <Pie data={pieData} options={graphOptions} />;
}
