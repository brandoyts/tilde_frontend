import React from "react";
import "../css/circular-total.css";

function CircularTotal({ total, title }) {
  return (
    <div className="circular-total">
      <h5>{title}</h5>
      <p>{total}</p>
    </div>
  );
}

export default CircularTotal;
