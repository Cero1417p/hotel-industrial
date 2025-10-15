"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DayPicker, DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/ui/Loader";

interface FormDayPickerProps {
  handleDateSelection: (range: DateRange | undefined) => void;
  start: Date | undefined;
  end: Date | undefined;
}

function FormDayPicker({
  handleDateSelection,
  start,
  end,
}: FormDayPickerProps) {
  const [disabledDays, setDisabledDays] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { room_slug, id } = useParams<{ room_slug?: string; id?: string }>();

  const [range, setRange] = useState<DateRange | undefined>();

  useEffect(() => {
    if (!room_slug || !id) return;

    async function getBusyDays() {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/reservations/${id}/busy-days`);
        const { busy_days }: { busy_days: string[] } = await response.json();

        // Convertimos las fechas de string a Date
        const dates = busy_days.map((dateStr) => new Date(dateStr));
        setDisabledDays(dates);
      } catch (error) {
        console.error("Error fetching busy days:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getBusyDays();
  }, [room_slug, id]);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-5 flex items-center justify-center">
      <DayPicker
        locale={es}
        captionLayout="dropdown"
        mode="range"
        //selected={start && end ? { from: start, to: end } : undefined}
        selected={range}
        onSelect={({ from, to }: DateRange) => {
          console.log("e: ", { from, to });
          setRange({ from, to });
          handleDateSelection({ from, to });
        }}
        //startMonth={calendarRangeRef.current.start}
        //endMonth={calendarRangeRef.current.end}
        required
        weekStartsOn={1}
        numberOfMonths={2}
        disabled={[{ before: new Date() }, ...disabledDays]}
        footer={
          <p className="text-center bg-gray-900 text-white rounded-b">
            <span className="mr-1.5">
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
            <span>Por favor elija un rango</span>
          </p>
        }
        classNames={{
          today: "text-rose-600 font-semibold",
          selected: "bg-rose-600 rounded-full",
          range_start:
            "relative bg-rose-600 text-white rounded-full before:absolute before:inset-0 before:right-0 before:rounded-l-full before:bg-rose-600/10 before:-z-10",
          range_end:
            "relative bg-rose-600 text-white rounded-full after:absolute after:inset-0 after:left-0 after:rounded-r-full after:bg-rose-600/10 after:-z-10",
          range_middle: "bg-rose-600/10",
          chevron: "fill-rose-600",
          footer: "mt-2 py-3 text-center bg-gray-900 text-white rounded-b",
        }}
      />
    </div>
  );
}

export default FormDayPicker;
