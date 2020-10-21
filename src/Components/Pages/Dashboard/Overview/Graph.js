import React from "react";
import { Line, Pie } from "react-chartjs-2";

const graphOptions = {
	maintainAspectRatio: false,
};

export function LineGraph() {
	const graphData = {
		labels: [
			"Morning",
			"Afternoon",
			"Evening",
			"test",
			"Test",
			"tes",
			"Morning",
			"Afternoon",
			"Evening",
			"test",
			"Test",
			"tes",
			"test",
			"test",
			"test",
			"test",
		],
		datasets: [
			{
				// spanGaps: true,
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
				fill: false,
				borderWidth: 4,
				label: "Guests",
				data: [
					25,
					32,
					550,
					553,
					302,
					312,
					32,
					52,
					102,
					302,
					553,
					619,
					901,
					1023,
					3324,
					321,
				],
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
				// borderColor: "none",
				borderWidth: 1,
				backgroundColor: ["#AD7CFF", "#6F86FF", "#51B94F"],
				hoverBorderColor: ["#AD7CFF", "#6F86FF", "#51B94F"],
				borderColor: "rgba(255, 255, 255 0.6",
				data: [352, 102, 550],
			},
		],
	};

	return <Pie className="pie-graph" data={pieData} options={graphOptions} />;
}
