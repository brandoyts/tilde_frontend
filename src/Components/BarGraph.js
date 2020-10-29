import React from "react";
import months from "../data/months.json";
import { Bar } from "react-chartjs-2";

const graphOptions = {
  maintainAspectRatio: false,
};

function BarGraph() {
  const graphData = {
    labels: [...months],
    datasets: [
      {
        label: "Guest Count",
        backgroundColor: "#6E87FF",
        data: [253, 321, 550, 55, 232, 312, 32, 52, 102, 302, 553, 619],
      },
    ],
  };

  return (
    <div className="bar-graph dashboard-item">
      <Bar data={graphData} options={graphOptions} />
    </div>
  );
}

export default BarGraph;
