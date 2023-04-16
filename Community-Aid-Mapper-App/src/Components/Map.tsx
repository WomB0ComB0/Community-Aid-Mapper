import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
