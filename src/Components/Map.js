import React, { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_TOKEN;

function Map() {
	const [viewport, setViewPort] = useState({
		width: "100%",
		height: "100%",
		latitude: 14.676208,
		longitude: 121.043861,
		zoom: 12,
	});

	const handleViewportChange = (viewport) => {
		setViewPort({ ...viewport, transitionDuration: 1000 });
	};

	return (
		<MapGL
			{...viewport}
			mapboxApiAccessToken={TOKEN}
			mapStyle="mapbox://styles/brandoyts/ckgcdxu4f2i7g19ph4k2fsk6s"
			onViewportChange={handleViewportChange}
		></MapGL>
	);
}

export default Map;
