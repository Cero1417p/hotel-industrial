"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, formatISO, isBefore } from "date-fns";
import toast, {Toaster} from "react-hot-toast";
import BookingButton from "@/components/BookingButton";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  //bookingSearchAction: (range: string) => void;
  children?: React.ReactNode;
}

export default function BookingForm({
  //bookingSearchAction,
  children,
}: BookingFormProps) {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) return;

    const arrival = formatISO(startDate, { representation: "date" });
    const departure = formatISO(endDate, { representation: "date" });

    if (!isBefore(new Date(arrival), new Date(departure))) {
      toast.error("Invalid date range!");
      return;
    }

    //await bookingSearchAction(`${arrival}_${departure}`);
    router.push(`/habitaciones?range=${encodeURIComponent(`${arrival}_${departure}`)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-8 bg-black/60 p-6 md:p-12 border-l-4 border-red-600"
    >
      <h1 className="text-white text-center text-2xl font-normal">
        RESERVA ONLINE
      </h1>

      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Llegada</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          className="w-full p-2 border border-white bg-transparent text-white font-semibold text-lg placeholder-white"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Partida</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => date && setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="w-full p-2 border border-white bg-transparent text-white font-semibold text-lg"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="flex flex-col gap-1">
        <BookingButton />
        {children}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}
