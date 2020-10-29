import React from "react";
import BarGraph from "../../../BarGraph";

function Reports() {
  return (
    <div className="reports">
      <h1 className="dashboard-title">Reports</h1>
      <div className="trace__top ">
        <BarGraph />
      </div>
    </div>
  );
}

export default Reports;
