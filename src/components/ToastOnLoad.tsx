"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";

// Variable global para evitar doble ejecución (segura por pestaña)
if (typeof window !== "undefined") {
  (window as any).__toastShown = (window as any).__toastShown || false;
}

export default function ToastOnLoad() {
  useEffect(() => {
    const showStoredToast = () => {
      // Verificar usando variable global
      if ((window as any).__toastShown) return;

      const message = sessionStorage.getItem("toastMessage");
      if (!message) return;

      // Marcar como mostrado INMEDIATAMENTE
      (window as any).__toastShown = true;
      sessionStorage.removeItem("toastMessage");

      // Mostrar con pequeño retraso
      setTimeout(() => {
        toast.success(message);
      }, 300);
    };

    if (document.visibilityState === "visible") {
      showStoredToast();
    } else {
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          showStoredToast();
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
          );
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }
  }, []);

  return null;
}
