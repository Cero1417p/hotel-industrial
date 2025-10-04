'use client';

import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import { useEffect, useState } from 'react';

// 🔧 Fix para íconos en Next.js (evita errores de ícono no encontrado)
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// 🖱️ Hacer clic en el mapa para centrarlo
function SetViewOnClick() {
  const map = useMap();
  useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), { animate: true });
  });
  return null;
}

// 🎯 Cambiar vista cuando cambie la posición objetivo
function ChangeView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, { animate: true, duration: 0.5 });
    }
  }, [position, map]);

  return null;
}

// 📌 Marcador que escala con el zoom
function ZoomResponsiveMarker({ position, iconUrl, popupContent, baseScale = 1.8, iconSizeBase = [25, 41] }) {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useEffect(() => {
    const handleZoom = () => setZoom(map.getZoom());
    map.on('zoomend', handleZoom);
    return () => map.off('zoomend', handleZoom);
  }, [map]);

  const scale = Math.max(zoom / 13, baseScale);
  const [w, h] = iconSizeBase;
  const iconSize = [w * scale, h * scale];
  const iconAnchor = [w / 2 * scale, h * scale];

  const icon = new Icon({ iconUrl, iconSize, iconAnchor });

  return (
    <Marker icon={icon} position={position}>
      <Popup>{popupContent}</Popup>
    </Marker>
  );
}

// 📍 Coordenadas
const hotelPosition = [-7.179910761431965, -78.48695172910999];
const hospitalPosition = [-7.183401453563929, -78.4879737441568];

// 🗺️ Componente principal del mapa
export default function Map({ initialCenter, center }) {
  return (
    <MapContainer
      style={{ height: '100%' }}
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