"use client";

import Link from "next/link";
import { WhatsappSVG } from "./Icons";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "51987654321"; // 👈 Reemplaza con tu número (con código de país, sin + ni espacios)
  const defaultMessage = "Hola, quiero reservar una habitación. ¿Tienen disponibilidad?";

  // Codificamos el mensaje para la URL
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear en WhatsApp"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
        zIndex: 1000,
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.25)";
      }}
    >
      <WhatsappSVG/>
    </a>
  );
}