"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Cargar el mapa dinámicamente sin SSR (Leaflet no funciona en el servidor)
const Map = dynamic(() => import("./DynamicMap"), { ssr: false });

// Importar los estilos de Leaflet
import "leaflet/dist/leaflet.css";

const initialCenter: [number, number] = [-7.17964882814917, -78.486999];

export default function ContactMap() {
  const [center, setCenter] = useState<[number, number]>([...initialCenter]);

  const handleReset = () => {
    setCenter([...initialCenter]);
  };

  return (
    <div className="relative h-full">
      <button
        type="button"
        className="absolute top-2.5 right-2.5 z-[1000] px-5 py-3 bg-blue-800 text-white rounded cursor-pointer transition-colors duration-300 hover:bg-blue-900 focus:outline-none"
        onClick={handleReset}
      >
        Refresh
      </button>
      <Map initialCenter={initialCenter} center={center} />
    </div>
  );
}