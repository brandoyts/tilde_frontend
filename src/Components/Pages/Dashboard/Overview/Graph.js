import React from "react";
import { Line } from "react-chartjs-2";

const graphData = {
	labels: [
		"02:00",
		"04:00",
		"06:00",
		"08:00",
		"10:00",
		"12:00",
		"14:00",
		"16:00",
		"18:00",
		"20:00",
		"22:00",
		"00:00",
	],
	datasets: [
		{
			fillColor: "red",
			borderColor: "#80b6f4",
			pointBorderColor: "#80b6f4",
			pointBackgroundColor: "#80b6f4",
			pointHoverBackgroundColor: "#80b6f4",
			pointHoverBorderColor: "#80b6f4",
			pointBorderWidth: 10,
			pointHoverRadius: 10,
			pointHoverBorderWidth: 1,
			pointRadius: 3,
			fill: false,
			borderWidth: 4,
			label: "Guests",
			data: [
				25.0,
				32.4,
				22.2,
				39.4,
				34.2,
				22.0,
				23.2,
				24.1,
				20.0,
				18.4,
				19.1,
				17.4,
			],
		},
	],
};

const graphOptions = {
	maintainAspectRatio: false,
	scales: {
		yAxes: [
			{
				stacked: true,
			},
		],
	},
};

function Graph() {
	console.log("object");
	return (
		<div className="graph">
			<Line data={graphData} options={graphOptions} />
		</div>
	);
}

export default Graph;
