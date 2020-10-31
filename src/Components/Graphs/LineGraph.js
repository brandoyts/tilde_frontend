import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph({ data }) {
  let graphData = {};

  if (data) {
    graphData = {
      labels: [
        "7AM - 9AM",
        "10Am - 12PM",
        "1PM - 3PM",
        "4PM - 6PM",
        "7PM - 9PM",
        "10PM - 12AM",
      ],

      datasets: [
        {
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
            data.guest7AmTo9Am,
            data.guest10AmTo12Pm,
            data.guest1PmTo3Pm,
            data.guest4PmTo6Pm,
            data.guest7PmTo9Pm,
            data.guest10PmTo12Am,
          ],
        },
      ],
    };
  }

  return <Line data={graphData} options={{ maintainAspectRatio: false }} />;
}

export default LineGraph;
