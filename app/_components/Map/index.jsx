'use client';

import { Icon } from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent
} from 'react-leaflet';
import { useEffect, useState } from 'react';

function SetViewOnClick() {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
}

function ChangeView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, {
        animate: true,
        duration: 0.5,
      });
    }
  }, [position, map]); // Reaccionar cuando `position` cambie

  return null;
}

function ZoomResponsiveMarker({ position }) {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useEffect(() => {
    const handleZoom = () => setZoom(map.getZoom());
    map.on('zoomend', handleZoom);
    return () => map.off('zoomend', handleZoom);
  }, [map]);

  const scale = Math.max(zoom / 13, 2.8); // base zoom 13, mínimo 0.8x
  const iconSize = [25 * scale, 41 * scale];
  const iconAnchor = [12 * scale, 41 * scale];

  const icon = new Icon({
    iconUrl: '/hotel.png',
    iconSize,
    iconAnchor,
  });

  return (
    <Marker icon={icon} position={position}>
      <Popup>
        <strong>HOSTAL INDUSTRIAL</strong>. 
        <br /> Av. Industrial N° 755.
        <br /> Cel. 950 049 344
      </Popup>
    </Marker>
  );
}

const hospitalPosition = [-7.183401453563929, -78.4879737441568];

function ZoomResponsiveHospitalMarker() {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useEffect(() => {
    const handleZoom = () => setZoom(map.getZoom());
    map.on('zoomend', handleZoom);
    return () => map.off('zoomend', handleZoom);
  }, [map]);

  const scale = Math.max(zoom / 13, 0.8);
  const iconSize = [25 * scale, 41 * scale];
  const iconAnchor = [12 * scale, 41 * scale];

  const icon = new Icon({
    iconUrl: '/hospital.png',
    iconSize,
    iconAnchor,
  });

  return (
    <Marker icon={icon} position={hospitalPosition}>
      <Popup>
        Hospital Regional <br /> Atención 24/7
      </Popup>
    </Marker>
  );
}


function Map({ initialCenter, center }) {
  return (
    <MapContainer style={{ height: '100%' }} center={initialCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomResponsiveMarker position={[-7.179910761431965, -78.48695172910999]} />
      <ZoomResponsiveHospitalMarker/>
      <SetViewOnClick />
      <ChangeView position={center} />
    </MapContainer>
  );
}

export default Map;