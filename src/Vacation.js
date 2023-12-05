import React, { useState, isHovered } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Legend = () => (
  <div style={{ position: "absolute", top: 50, left: 10, backgroundColor: "rgba(210, 210, 250, 0.5)", padding: 10, color: "rgba(70, 40, 230, 0.9)", fontFamily: "fantasy" }}>
    <h2>Legend</h2>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
        <div style={{ width: 20, height: 20, background: "rgb(70, 40, 230)", marginRight: 5 }} />
        <span>Visited</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 20, height: 20, background: "white", border: "1px solid white", marginRight: 5 }} />
        <span>Not Visited</span>
      </div>
    </div>
  </div>
);

const LocationScrollableList = ({ positions, onSelectMarker }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 50,
          backgroundColor: "rgba(210, 210, 250, 0.5)",
          padding: 10,
          maxHeight: "80vh",
          overflowY: "auto",
          color: "rgba(70, 40, 230, 0.9)",
          fontFamily: "fantasy",
          scrollbarWidth: "thin",
          scrollbarColor: "red green", 
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              width: 12px;
            }
  
            div::-webkit-scrollbar-track {
              background-color: rgba(230, 230, 250, 0.5); /* Track color */
            }
  
            div::-webkit-scrollbar-thumb {
              background-color: rgba(100, 100, 180, 0.5); /* Thumb color */
              border-radius: 6px; /* Rounded corners */
            }
          `}
        </style>
        <h2>Locations</h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          {positions.map((pos, index) => (
            <li
              key={index}
              style={{
                cursor: "pointer",
                marginBottom: 5,
                backgroundColor: hoveredIndex === index ? 'rgba(230, 230, 250,.8)' : 'transparent',
              }}
              onClick={() => onSelectMarker(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {pos.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  

function Vacation() {
  const initialPosition = { lat: 39.9526, lng: -75.1652 };
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const GOOGLE_MAPS_ID_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_ID_API_KEY;

  const positions = [
    { lat: 48.856, lng: 2.3522, name: "Paris", visited: false },
    { lat: 25.034, lng: -77.39, name: "Nassau", visited: true },
    { lat: 28.385, lng: -81.56, name: "Disney Land", visited: true },
    { lat: 35.6895, lng: 139.69, name: "Tokyo", visited: false },
    { lat: 40.7589, lng: -73.9851, name: "Times Square", visited: true },
    { lat: 40.5734, lng: -73.9784, name: "Coney Island", visited: true },
    { lat: 39.9526, lng: -75.1652, name: "UPenn", visited: true },
    { lat: 39.9042, lng: 116.4074, name: "Beijing", visited: true },
    { lat: 36.1627, lng: -86.7816, name: "Nashville", visited: true },
    { lat: 35.7143, lng: -83.5102, name: "Gatlinburg (Smokies)", visited: true },
    { lat: 40.2874, lng: -76.6503, name: "Hersheypark", visited: true },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles", visited: false },
    { lat: 21.3069, lng: -157.8583, name: "Honolulu", visited: false },
    { lat: 38.3365, lng: -75.0856, name: "Ocean City", visited: false },
    { lat: 37.5665, lng: 126.9780, name: "Seoul", visited: false },
    { lat: 51.5099, lng: -0.1180, name: "London", visited: false },
    { lat: 33.8121, lng: -117.9190, name: "Disneyland ", visited: false },
  ];

  const selectedMarker = positions[selectedMarkerIndex];

  return (
    <main
      className="Vacation"
      style={{ display: "flex", flexDirection: "row", height: "85vh", zIndex: 1, position: "relative" }}
    >
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <Map
            zoom={6}
            center={initialPosition}
            mapId={GOOGLE_MAPS_ID_API_KEY}
            onViewStateChange={({ viewState, instance }) => {
              if (selectedMarkerIndex !== null) {
                const selectedMarkerPosition = positions[selectedMarkerIndex];
                const bounds = [
                  [selectedMarkerPosition.lng - 1, selectedMarkerPosition.lat - 1],
                  [selectedMarkerPosition.lng + 1, selectedMarkerPosition.lat + 1],
                ];

                if (isHovered) {
                  instance.fitBounds(bounds, {
                    padding: 40,
                  });
                }

                return {
                  ...viewState,
                  longitude: selectedMarkerPosition.lng,
                  latitude: selectedMarkerPosition.lat,
                  zoom: isHovered ? 10 : 3,
                };
              }
              return viewState;
            }}
          >
            <Legend />

            <LocationScrollableList
              positions={positions}
              onSelectMarker={(index, hover) => {
                setSelectedMarkerIndex(index);
                setIsHovered(hover);
              }}
            />

            {positions.map((pos, index) => (
              <AdvancedMarker
                key={index}
                position={pos}
                onClick={() => setSelectedMarkerIndex(index)}
              >
                <Pin
                  background={pos.visited ? "rgb(70, 40, 230)" : "white"}
                  borderColor={"white"}
                  glyphColor={pos.visited ? "rgb(190, 180, 250)" : "black"}
                />
              </AdvancedMarker>
            ))}

            {selectedMarker && (
              <InfoWindow
                position={selectedMarker}
                onCloseClick={() => setSelectedMarkerIndex(null)}
              >
                <p>{selectedMarker.name}</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </main>
  );
}

export default Vacation;
