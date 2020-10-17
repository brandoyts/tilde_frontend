import React from "react";
import "../css/circular-total.css";

function CircularTotal({ total }) {
	return (
		<div className="circular-total">
			<p>{total}</p>
		</div>
	);
}

export default CircularTotal;
