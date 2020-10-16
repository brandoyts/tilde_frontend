import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_TOKEN;

function Map() {
	const [viewport, setViewPort] = useState({
		width: "100%",
		height: 900,
		latitude: 0,
		longitude: 0,
		zoom: 2,
	});

	const handleViewportChange = (viewport) => {
		setViewPort({ ...viewport, transitionDuration: 3000 });
	};

	return (
		<div style={{ height: "100%" }}>
			<MapGL
				{...viewport}
				mapboxApiAccessToken={TOKEN}
				mapStyle="mapbox://styles/brandoyts/ckgcdxu4f2i7g19ph4k2fsk6s"
				onViewportChange={handleViewportChange}
			></MapGL>
		</div>
	);
}

export default Map;
