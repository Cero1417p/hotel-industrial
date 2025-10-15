"use client";

import { useFormStatus } from "react-dom";

interface BookingButtonProps {
  onClick?: () => void;
}

export default function BookingButton({ onClick }: BookingButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 ${
        pending
          ? "bg-red-400 cursor-not-allowed"
          : "bg-red-700 hover:bg-white hover:text-red-700 text-white"
      }`}
    >
      {pending ? "Procesando..." : "Reservar Ahora"}
    </button>
  );
}