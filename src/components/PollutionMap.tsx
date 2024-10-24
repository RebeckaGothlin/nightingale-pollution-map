import { MapContainer, TileLayer, Popup, CircleMarker, useMap } from "react-leaflet";
import { germanData } from "../data/germanData";
import "leaflet/dist/leaflet.css";
import "@geoapify/leaflet-address-search-plugin/dist/L.Control.GeoapifyAddressSearch.min.css";
import { locations } from "../data/locations";
import '@geoapify/leaflet-address-search-plugin';
import { useEffect, useState } from "react";
import { ILocations } from "../models/ILocations";


const MapUpdater = ({ center }: {center: [number, number ]}) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 6, { animate: true });
  }, [center, map]);
  return null;
}

export const PollutionMap = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<ILocations>();

  const handleSearch = () => {
    if (!searchValue.trim()) {
      console.log('Enter a valid term');
      return;
    }

    const locationFound = locations.find(location => 
      location.country.toLowerCase() === searchValue.toLowerCase()
    );

    if (locationFound) {
      setSelectedLocation(locationFound);
      setSearchValue("");
    } else {
      console.log('Location not found');
      setSelectedLocation(undefined);
    }

  }

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
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
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
                <strong>{location.country}</strong><br/>
                <strong>PM₂.₅:</strong> {location.data.value.toFixed(2)}{" "}
                <strong>Date: </strong>
                {location.data.date}
              </Popup>
            </CircleMarker>
          ))}

          {selectedLocation && <MapUpdater center={selectedLocation.center}/>}

          {selectedLocation && (
            <CircleMarker
            center={selectedLocation.center}
            radius={1}
            fillColor="transparent"
            color={getMarkerColor(selectedLocation.data.value)}
            weight={8}
            stroke={true}
            >
              <Popup autoPan={true}>
                <strong>{selectedLocation.country}</strong><br/>
                <strong>PM₂.₅:</strong> {selectedLocation.data.value.toFixed(2)}{" "}
                <strong>Date: </strong>
                {selectedLocation.data.date}
              </Popup>

            </CircleMarker>
          )}
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
