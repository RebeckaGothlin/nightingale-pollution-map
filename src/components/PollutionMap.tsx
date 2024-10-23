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
        <h2>POLLUTION MAP</h2>
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
                <strong>PM₂.₅:</strong> {location.data.value.toFixed(2)}{" "}
                <strong>Date: </strong>
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
        <h3>About PM₂.₅ and Heart disease</h3>
        <p>
          PM₂.₅, or fine particulate matter, is linked to heart diseases due to
          its ability to penetrate deep into the lungs and enter the
          bloodstream. Exposure to high levels of PM₂.₅ can cause inflammation
          in blood vessels, leading to conditions like atherosclerosis, which
          increases the risk of heart attacks and strokes. Studies show that
          both short-term and long-term exposure to PM₂.₅ can increase
          cardiovascular mortality and the likelihood of acute heart issues in
          at-risk individuals. This correlation highlights the importance of
          reducing air pollution to prevent heart-related health problems.
        </p>
        <div className="image-container">
          <img
            src="../../src/assets/pollutionguide.png"
            alt="Pollution guide"
          />
        </div>
      </div>
    </>
  );
};
