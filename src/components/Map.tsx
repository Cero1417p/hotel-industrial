"use client";

import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// 🔧 Fix para íconos en Next.js
const DefaultIcon = L.Icon.Default;
delete (DefaultIcon.prototype as unknown as Record<string, unknown>)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 🖱️ Hacer clic en el mapa para centrarlo
function SetViewOnClick() {
  const map = useMap();
  useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), { animate: true });
  });
  return null;
}

// 🎯 Cambiar vista cuando cambie la posición objetivo
interface ChangeViewProps {
  position: LatLngExpression | null;
}

function ChangeView({ position }: ChangeViewProps) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, { animate: true, duration: 0.5 });
    }
  }, [position, map]);

  return null;
}

// 📌 Marcador que escala con el zoom
interface ZoomResponsiveMarkerProps {
  position: LatLngExpression;
  iconUrl: string;
  popupContent: React.ReactNode;
  baseScale?: number;
  iconSizeBase?: [number, number];
}

function ZoomResponsiveMarker({
  position,
  iconUrl,
  popupContent,
  baseScale = 1.8,
  iconSizeBase = [25, 41],
}: ZoomResponsiveMarkerProps) {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useEffect(() => {
    const handleZoom = () => setZoom(map.getZoom());
    map.on("zoomend", handleZoom);
    return () => {
      map.off("zoomend", handleZoom);
    };
  }, [map]);

  const scale = Math.max(zoom / 13, baseScale);
  const [w, h] = iconSizeBase;
  const iconSize: [number, number] = [w * scale, h * scale];
  const iconAnchor: [number, number] = [w / 2 * scale, h * scale];

  const icon = new Icon({
    iconUrl,
    iconSize,
    iconAnchor,
  });

  return (
    <Marker icon={icon} position={position}>
      <Popup>{popupContent}</Popup>
    </Marker>
  );
}

// 📍 Coordenadas
const hotelPosition: LatLngExpression = [-7.179910761431965, -78.48695172910999];
const hospitalPosition: LatLngExpression = [-7.183401453563929, -78.4879737441568];

// 🗺️ Componente principal del mapa
interface MapProps {
  initialCenter: LatLngExpression;
  center?: LatLngExpression | null;
}

export default function Map({ initialCenter, center }: MapProps) {
  return (
    <MapContainer
      style={{ height: "100%" }}
      center={initialCenter}
      zoom={13}
      scrollWheelZoom={true}
      preferCanvas={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Hotel */}
      <ZoomResponsiveMarker
        position={hotelPosition}
        iconUrl="/hotel.png"
        baseScale={2.8}
        popupContent={
          <>
            <strong>HOSTAL INDUSTRIAL</strong>. <br />
            Av. Industrial N° 755. <br />
            Cel. 950 049 344
          </>
        }
      />

      {/* Hospital */}
      <ZoomResponsiveMarker
        position={hospitalPosition}
        iconUrl="/hospital.png"
        baseScale={1.8}
        popupContent={
          <>
            Hospital Regional <br /> Atención 24/7
          </>
        }
      />

      <SetViewOnClick />
      {center && <ChangeView position={center} />}
    </MapContainer>
  );
}