import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Feature, Layer, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_TOKEN;

const Mapbox = ReactMapboxGl({
  accessToken: TOKEN,
});

const mapOptions = {
  style: "mapbox://styles/brandoyts/ckgcdxu4f2i7g19ph4k2fsk6s",
  center: {
    lon: 121.043861,
    lat: 14.676208,
  },

  containerStyle: {
    height: "100%",
    width: "100%",
  },
  renderChildrenInPortal: true,
};

function Map({ guestsData }) {
  const [selectedPin, setSelectedPin] = useState(null);

  const handleSelect = (guest) => {
    setSelectedPin(guest);
  };

  const handleClosePopup = (e) => {
    setSelectedPin(null);
  };

  useEffect(() => {
    return () => {
      setSelectedPin(null);
    };
  });

  return (
    <Mapbox {...mapOptions}>
      <Layer
        id="marker"
        type="circle"
        paint={{
          "circle-color": "#ff5200",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
          "circle-stroke-opacity": 1,
        }}
      >
        {guestsData &&
          guestsData.map((guest) => {
            console.log(guest);
            return (
              <Feature
                key={guest.id}
                coordinates={[guest.lon, guest.lat]}
                onClick={() => handleSelect(guest)}
              />
            );
          })}
      </Layer>
      {selectedPin && (
        <Popup
          coordinates={[selectedPin.lon, selectedPin.lat]}
          onClick={handleClosePopup}
        >
          <p>Name: {`${selectedPin.firstname} ${selectedPin.lastname}`}</p>
          <p>Address: {selectedPin.address}</p>
          <p>Time Visited: {selectedPin.createdAt}</p>
        </Popup>
      )}
    </Mapbox>
  );
}

export default React.memo(Map);
