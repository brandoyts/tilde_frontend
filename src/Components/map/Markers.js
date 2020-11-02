import React from "react";
import { Marker } from "react-map-gl";
import markerSvg from "../../marker.svg";
import Pin from "./Pin";

function Markers({ markers, zoom, onClick }) {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker.id} longitude={marker.lon} latitude={marker.lat}>
          <Pin size={zoom * 2} onClick={() => onClick(marker)} />
        </Marker>
      ))}
    </>
  );
}

export default React.memo(Markers);
