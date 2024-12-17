import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyAnNlz2lKS-nyVBKO3ymcQFFQzF6pGQnOA'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
