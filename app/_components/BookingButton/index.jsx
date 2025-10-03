"use client";
import styles from "./styles.module.css";
import { useFormStatus } from "react-dom";

function BookingButton({ onClick = null }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} onClick={onClick ?? onClick} className={styles.bookingBtn}>
      {pending ? "Procesando..." : "Reservar Ahora"}
    </button>
  );
}
export default BookingButton;
