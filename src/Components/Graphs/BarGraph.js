import React from "react";
import { Pie, Bar } from "react-chartjs-2";

function BarGraph({ data }) {
  let pieData = {};

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
          label: "# of Guests",
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
    <Bar
      data={pieData}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}

export default BarGraph;
