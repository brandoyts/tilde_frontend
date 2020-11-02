import React, { useState } from "react";
import MapGL, { Marker, Popup, setRTLTextPlugin } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./map/Markers";

const TOKEN = process.env.REACT_APP_TOKEN;

function Map({ guestsData }) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 14.676208,
    longitude: 121.043861,
    zoom: 8,
  });

  const handleViewportChange = (viewport) => {
    setViewPort({ ...viewport, transitionDuration: 300 });
  };

  const handleSelect = (guest) => {
    console.log("test");
    console.log(guest);
    setSelectedPin(guest);
  };

  const handleClosePopup = (e) => {
    setSelectedPin(null);
  };

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/brandoyts/ckgcdxu4f2i7g19ph4k2fsk6s"
      onViewportChange={handleViewportChange}
    >
      <Markers
        markers={guestsData}
        zoom={viewport.zoom}
        onClick={handleSelect}
      />

      {selectedPin && (
        <Popup
          latitude={selectedPin.lat}
          longitude={selectedPin.lon}
          onClose={handleClosePopup}
        >
          <div>
            <p>Name: {`${selectedPin.firstname} ${selectedPin.lastname}`}</p>
            <p>Address: {selectedPin.address}</p>
            <p>Time Visited: {selectedPin.createdAt}</p>
          </div>
        </Popup>
      )}
    </MapGL>
  );
}

export default React.memo(Map);
