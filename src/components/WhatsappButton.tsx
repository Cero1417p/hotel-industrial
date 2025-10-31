"use client";

import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";

function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const delay = 2500;
    const timer = setTimeout(() => {
      setShowButton(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
          }}
        >
          <FloatingWhatsApp
            phoneNumber={`+51${siteConfig.contact.phone}`}
            accountName="Hostal Industrial"
            chatMessage="Hola 👋 ¿Quieres reservar una habitación?"
            avatar="/hotel.png"
            notification
            notificationSound
            placeholder="Escriba una respuesta..."
            statusMessage="Responde en menos de 1 hora"
            onClick={() => console.log("click whatsapp chat")}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Envolver en dynamic para evitar errores de SSR
export default dynamic(() => Promise.resolve(WhatsAppButton), {
  ssr: false,
});
