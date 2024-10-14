import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const necaHouseCoordinates = [6.623735466762232, 3.3580870985036353];

  return (
    <MapContainer
      center={necaHouseCoordinates}
      zoom={17}
      style={{ minHeight: "20rem", height:"100%", width: "100%", borderRadius: "25px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={necaHouseCoordinates}>
        <Popup>
          NECA House, Hakeem Balogun Street, Alausa, Ikeja 101233, Lagos
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;