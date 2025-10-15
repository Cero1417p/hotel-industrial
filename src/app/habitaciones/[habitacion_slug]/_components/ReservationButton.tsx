"use client";
import { useFormStatus } from "react-dom";

const TEXT_PENDING = "Reservando...";
const TEXT_IDLE = "Reserva ahora";

function ReservationButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      className="bg-primary text-white border-none outline-none inline-block w-full cursor-pointer transition-all duration-300 py-10 hover:bg-primary-hover disabled:bg-blue-500 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? TEXT_PENDING : TEXT_IDLE}
    </button>
  );
}

export default ReservationButton;