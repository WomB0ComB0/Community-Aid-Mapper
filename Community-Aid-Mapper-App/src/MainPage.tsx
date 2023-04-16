import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Sidebar from './sidebar/SideBar';

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MainPage = () => {
  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <div className="flex">
      <div className="w-1/3 h-full bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-2/3 h-full">
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MainPage;
