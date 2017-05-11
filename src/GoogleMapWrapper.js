import React, { PropTypes } from "react";
import GoogleMap from "google-map-react";

const EventMarker = ({ lat, lng }) => (
  <div
    lat={lat}
    lng={lng}
    style={{
      border: "1px solid black",
      backgroundColor: "#FF3C00",
      height: "5px",
      width: "5px",
      borderRadius: "50%",
    }}
  />
);

Event.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

const GoogleMapWrapper = ({ mapSettings, events, onChange }) => {
  const eventMarkers = events.map((event, index) => (
    <EventMarker
      lat={event.venuelatitude}
      lng={event.venuelongitude}
      key={index}
    />
  ));

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMap
        center={mapSettings.center}
        zoom={mapSettings.zoom}
        onChange={({ center, zoom, bounds, ...other }) =>
          onChange(zoom, center, bounds)}
      >
        {eventMarkers}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapWrapper;
