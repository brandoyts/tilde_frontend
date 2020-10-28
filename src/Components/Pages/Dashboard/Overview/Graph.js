import React from "react";
import { Line, Pie } from "react-chartjs-2";

const graphOptions = {
  maintainAspectRatio: false,
};

export function LineGraph({ data }) {
  let graphData = null;

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

  return (
    <div className="graph">
      {data && <Line data={graphData} options={graphOptions} />}
    </div>
  );
}

export function PieGraph({ data }) {
  let pieData = null;

  if (data) {
    let morning = 0;
    let afternoon = 0;
    let evening = 0;
    let midnight = 0;

    for (let i of data) {
      const time = i.createdAt.split(" ")[1];
      const converted = time.slice(0, 5);
      const hourAndMinutes = converted.split(":");
      const hours = parseInt(hourAndMinutes[0]);
      const minutes = parseInt(hourAndMinutes[1]);

      if (hours >= 7 && hours <= 11 && minutes <= 59) {
        morning++;
      } else if (hours >= 12 && hours <= 16 && minutes <= 59) {
        afternoon++;
      } else if (hours >= 17 && hours <= 23 && minutes <= 59) {
        evening++;
      } else if (hours === 24 && minutes <= 59) {
        midnight++;
      }
    }

    pieData = {
      labels: ["Morning", "Afternoon", "Evening", "Midnight"],
      datasets: [
        {
          fill: true,
          // borderColor: "none",
          borderWidth: 1,
          backgroundColor: ["#AD7CFF", "#6F86FF", "#51B94F", "orange"],
          hoverBorderColor: ["#AD7CFF", "#6F86FF", "#51B94F", "orange"],
          borderColor: "rgba(255, 255, 255 0.6)",
          data: [morning, afternoon, evening, midnight],
        },
      ],
    };
  }

  return (
    <div className="pie-graph">
      {data && (
        <Pie className="pie-graph" data={pieData} options={graphOptions} />
      )}
    </div>
  );
}
