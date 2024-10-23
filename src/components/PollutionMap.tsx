import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { germanData } from "../data/germanData";
import "leaflet/dist/leaflet.css";
import { locations } from "../data/locations";

export const PollutionMap = () => {
  console.log(germanData);

  const getMarkerColor = (value: number) => {
    if (value < 12.5) return "#8EFF44";
    if (value < 25) return "#F8FF73";
    if (value < 50) return "#FFB24D";
    if (value < 150) return "#DE0C4A";
    return "#580822";
  };

  return (
    <>
      <div className="map-container">
        <h2>Pollution Map</h2>
        <MapContainer
          center={[54.526, 15.2551]}
          zoom={4}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location, index) => (
            <CircleMarker
              key={index}
              center={location.center}
              radius={1}
              fillColor="transparent"
              color={getMarkerColor(location.data.value)}
              weight={8}
              stroke={true}
            >
              <Popup>
                <strong>PM₂.₅:</strong> {location.data.value.toFixed(2)} <strong>Date:{" "}</strong>
                {location.data.date}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
        <img
          className="grade-image"
          src="../../src/assets/grade.png"
          alt="Scale of PM2.5"
        />
        <div className="image-container">
          <img
            src="../../src/assets/pollution-guide.png"
            alt="Pollution guide"
          />
        </div>
      </div>
    </>
  );
};
