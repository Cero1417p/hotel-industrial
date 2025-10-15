"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { format, formatISO } from "date-fns";
import FormDayPicker from "./FormDayPicker";
import ReservationButton from "./ReservationButton";
import { useActionState, useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/site";
import { DateRange } from "react-day-picker";

const initialState = {
  dateError: "",
  guestsError: "",
  criticalError: "",
  isBooking: false,
};

interface Room {
  id: string;
  name: string;
  capacity: number;
}

interface RoomBookingFormProps {
  //bookingAction: (prevState: any, formData: FormData) => Promise<any>;
  room: Room;
}

export default function RoomBookingForm({
  //bookingAction,
  room,
}: RoomBookingFormProps) {
  //const [state, formAction] = useActionState(bookingAction, initialState);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleDateSelection = useCallback(
    (range:DateRange | undefined) => {
      if (!range?.from || !range?.to) return;
      const from = formatISO(range.from, { representation: "date" });
      const to = formatISO(range.to, { representation: "date" });
      setStartDate(from);
      setEndDate(to);
    },
    []
  );

  function handleSubmit2(e: React.FormEvent) {
    e.preventDefault();

    if (!(startDate && endDate)) {
      toast.error("Por favor selecciona un rango de fechas en el calendario");
      return;
    }

    const guestCount = parseInt(guests);
    if (!guests || guestCount < 1 || guestCount > room.capacity) {
      toast.error(`Por favor selecciona entre 1 y ${room.capacity} huéspedes`);
      return;
    }

    const newForm = new FormData();
    newForm.set("start_date", startDate);
    newForm.set("end_date", endDate);
    newForm.set("guests_count", guests);
    newForm.set("room_id", room.id);
    //formAction(newForm);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!(startDate && endDate)) {
      toast.error("Por favor selecciona un rango de fechas en el calendario");
      return;
    }

    const guestCount = parseInt(guests);
    if (!guests || guestCount < 1 || guestCount > room.capacity) {
      toast.error(`Por favor selecciona entre 1 y ${room.capacity} huéspedes`);
      return;
    }

    // Formatear fechas para mostrar en el mensaje (ej. "10/06/2024")
    const startDateFormatted = format(new Date(startDate), "dd/MM/yyyy");
    const endDateFormatted = format(new Date(endDate), "dd/MM/yyyy");

    // ✅ Mensaje personalizado para WhatsApp
    const message = `Hola, quiero reservar la habitación *${room.name}* desde el *${startDateFormatted}* hasta el *${endDateFormatted}* para *${guests}* huésped(es).`;

    // ✅ Número de WhatsApp (reemplaza con tu número real, sin espacios ni símbolos, con código de país)
    const phoneNumber = "+51" + siteConfig.contact.phone; // Ejemplo: México +52 1 234 567 890 → "521234567890"

    // ✅ URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abrir en nueva pestaña
    window.open(whatsappUrl, "_blank");

    // ✅ Guardar mensaje para mostrar en la página de inicio
    sessionStorage.setItem(
      "toastMessage",
      "Reserva enviada. ¡Gracias por contactarnos!"
    );

    // Redirigir
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full shadow-[2px_2px_8px_6px_#eee]"
    >
      {/* Grid: en desktop, 1fr auto; en mobile, columna */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
        {/* Calendario */}
        <div>
          <FormDayPicker
            handleDateSelection={handleDateSelection}
          />
        </div>

        {/* Contenedor de inputs (equivalente a .formItem) */}
        <div className="w-full">
          {/* Cada input con padding: 20px y border-left */}
          <div className="px-5 py-5 md:px-5 md:py-5 border-l border-[#dedede] flex items-center gap-5">
            <div className="text-[#a80d2c]">
              <FontAwesomeIcon icon={faBed} />
            </div>
            <div className="flex flex-col flex-grow">
              <label className="text-[#181b20] text-base">
                Tipo de habitación
              </label>
              <input
                type="text"
                value={room.name}
                readOnly
                disabled
                className="text-[#656a70] text-base w-full p-0 border-none bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="px-5 py-5 md:px-5 md:py-5 border-l border-[#dedede] flex items-center gap-5">
            <div className="text-[#a80d2c]">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="flex flex-col flex-grow">
              <label className="text-[#181b20] text-base">Check In</label>
              <input
                type="date"
                value={startDate}
                disabled
                className="text-[#656a70] text-base w-full p-0 border-none bg-transparent outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="px-5 py-5 md:px-5 md:py-5 border-l border-[#dedede] flex items-center gap-5">
            <div className="text-[#a80d2c]">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="flex flex-col flex-grow">
              <label className="text-[#181b20] text-base">Check Out</label>
              <input
                type="date"
                value={endDate}
                disabled
                className="text-[#656a70] text-base w-full p-0 border-none bg-transparent outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="px-5 py-5 md:px-5 md:py-5 border-l border-[#dedede] flex items-center gap-5">
            <div className="text-[#a80d2c]">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="flex flex-col flex-grow">
              <label className="text-[#181b20] text-base">Huéspedes</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-[#656a70] text-base w-full p-0 border-none bg-transparent outline-none"
              >
                <option value="">Selecciona número de huéspedes</option>
                {Array.from({ length: room.capacity }).map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ReservationButton />
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}
