import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { chartData } from "./../data/chartData";
import { swedenData } from "../data/swedenData";
import 'leaflet/dist/leaflet.css';


export const PollutionMap = () => {
  console.log(chartData);

  const latestGermanyData = chartData[chartData.length - 1];
  const latestSwedenData = swedenData[swedenData.length - 1];

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
          <CircleMarker
            center={[52.52, 13.405]}
            radius={1}
            fillColor="transparent"
            color={getMarkerColor(latestGermanyData.value)}
            weight={8}
            stroke={true}
          >
            <Popup>
              PM₂.₅ {latestGermanyData.value.toFixed(2)} {latestGermanyData.date}
            </Popup>
          </CircleMarker>

          <CircleMarker
            center={[59.334591, 18.06324]}
            radius={3} 
            fillColor="transparent"
            color={getMarkerColor(latestSwedenData.value)}
            weight={5}
            stroke={true}
          >
            <Popup>
              PM₂.₅ {latestSwedenData.value.toFixed(2)} {latestSwedenData.date}
            </Popup>
          </CircleMarker>
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
