import React, { useState } from "react";
import MapGL, { Marker, Popup, setRTLTextPlugin } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapPin } from "react-icons/fa";
import { IconButton } from "@chakra-ui/core";

const TOKEN = process.env.REACT_APP_TOKEN;

setRTLTextPlugin(
  // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  // lazy: only load when the map first encounters Hebrew or Arabic text
  true
);

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
      {guestsData &&
        guestsData.map((guest) => {
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

export default React.memo(Map);
