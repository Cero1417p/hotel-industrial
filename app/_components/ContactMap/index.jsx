"use client";

import dynamic from "next/dynamic";

import styles from "./styles.module.css";

const Map = dynamic(() => import("../Map"), { ssr: false });

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
// import Map from "../Map";

const initialCenter = [-7.17964882814917, -78.486999];

function ContactMap() {
  const [center, setCenter] = useState([...initialCenter]);


  const handleReset = () => {
    setCenter([...initialCenter]); // 👈 Clonar el array es buena práctica
  };

  return (
    <div className={styles.mapWrapper}>
      <button type="button" className={styles.goBackButton} onClick={handleReset}>
        Refresh
      </button>
      <Map initialCenter={initialCenter} center={center} />
    </div>
  );
}

export default ContactMap;
