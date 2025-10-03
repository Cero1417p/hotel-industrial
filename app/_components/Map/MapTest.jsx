"use client";

import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corregir el ícono predeterminado de Leaflet (opcional pero recomendado)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Posición inicial del mapa
const INITIAL_CENTER = [40.7128, -74.006]; // Nueva York
const INITIAL_ZOOM = 13;

// Componente interno para manejar el botón de restablecer
function ResetViewButton({ position, zoom }) {
  const map = useMap();

  const handleClick = () => {
    map.setView(position, zoom);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        padding: "8px 12px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "0 1px 5px rgba(0,0,0,0.4)",
      }}
    >
      Ir a posición inicial
    </button>
  );
}

export default function MapComponent() {
  return (
    <div style={{ height: "500px", width: "100%", position: "relative" }}>
      <MapContainer
        center={INITIAL_CENTER}
        zoom={INITIAL_ZOOM}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ResetViewButton position={INITIAL_CENTER} zoom={INITIAL_ZOOM} />
      </MapContainer>
    </div>
  );
}