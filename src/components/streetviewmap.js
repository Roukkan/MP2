import React from "react";
import Streetview from "react-google-streetview";
import './streetviewmap.css';
function StreetViewMap() {
  const googleMapsKey = "AIzaSyA_2ICnWKpjQ3fZTIXeZTTgapLDpcldYys";
  const StreetMapOptions = {
    position: { lat: 11.9524, lng: 121.9296 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
  return (
    
    <div className="map-bg">
      <div
        style={{
          width: "100%",
          height: "390px",
          backgroundColor: "#cccccc",
          margin: '10 auto',
          padding: '10',
        }}
      >
        <Streetview
          apiKey={googleMapsKey}
          streetViewPanoramaOptions={StreetMapOptions}
        />
      </div>

      <div className="mapfooter"         

      style={{
          margin: '0 auto',
        }}>
    </div>
    </div>
  );
}
export default StreetViewMap;