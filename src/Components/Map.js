import React, { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapPin } from "react-icons/fa";
import { IconButton } from "@chakra-ui/core";

const TOKEN = process.env.REACT_APP_TOKEN;

function Map({ guestData }) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 14.676208,
    longitude: 121.043861,
    zoom: 8,
  });

  const handleViewportChange = (viewport) => {
    setViewPort({ ...viewport, transitionDuration: 1000 });
  };

  const handleSelect = (guest) => {
    setSelectedPin(guest);
  };

  const handleClosePopup = (e) => {
    console.log("object");
    setSelectedPin(null);
  };

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/brandoyts/ckgcdxu4f2i7g19ph4k2fsk6s"
      onViewportChange={handleViewportChange}
    >
      {guestData &&
        guestData.map((guest) => {
          return (
            <Marker key={guest.id} latitude={guest.lat} longitude={guest.lon}>
              <IconButton
                onClick={() => handleSelect(guest)}
                variant="solid"
                isRound={true}
                size="xs"
                variantColor="orange"
                aria-label="Call Sage"
                fontSize="12px"
                icon={FaMapPin}
              />
            </Marker>
          );
        })}

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

export default Map;
