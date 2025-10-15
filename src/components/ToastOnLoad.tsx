"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";

// Extiende globalmente Window (opcional, pero limpio)
declare global {
  interface Window {
    __toastShown?: boolean;
  }
}

export default function ToastOnLoad() {
  useEffect(() => {
    const showStoredToast = () => {
      if (typeof window !== "undefined" && window.__toastShown) return;

      const message = sessionStorage.getItem("toastMessage");
      if (!message) return;

      if (typeof window !== "undefined") {
        window.__toastShown = true;
      }
      sessionStorage.removeItem("toastMessage");

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
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, []);

  return null;
}