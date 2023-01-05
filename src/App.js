import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";

import Geoman from "./geoman";
import VectorGrid from "./vector-grid";

import geoJSONData from "./geoJSON";

import "leaflet/dist/leaflet.css";
import "./styles.css";

export default function App() {
  const position = [55.706415, 37.426097];

  return (
    <MapContainer
      className="map-container"
      preferCanvas
      center={position}
      zoom={16}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="MapBox VectorGrid">
          <VectorGrid />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="geoJSON">
          <GeoJSON data={geoJSONData} />
        </LayersControl.Overlay>
      </LayersControl>
      <Geoman />
    </MapContainer>
  );
}
