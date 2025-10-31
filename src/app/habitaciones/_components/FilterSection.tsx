"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { useState } from "react";
import { formatISO, isBefore, isValid } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const options = [
  { value: "default", label: "Orden predeterminado" },
  { value: "high-price", label: "De mayor a menor precio" },
  { value: "low-price", label: "De menor a mayor precio" },
  { value: "max-guests", label: "De más a menos huéspedes" },
  { value: "min-guests", label: "De menos a más huéspedes" },
];

interface Filters {
  filter: string;
  range: string;
}

interface FilterSectionProps {
  filters: Filters;
}

function FilterSection({ filters }: FilterSectionProps) {
  const range = {
    from: filters?.range.split("_")?.at(0),
    to: filters?.range.split("_")?.at(1),
  };
  const [startDate, setStartDate] = useState<Date | null>(
    filters?.range && isValid(new Date(range.from!))
      ? new Date(range.from!+"T00:00:00")
      : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    filters?.range && isValid(new Date(range.to!)) ? new Date(range.to!+"T00:00:00") : null
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSort(e: { value: string; label: string }) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", e.value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleSearch() {
    if (!startDate || !endDate) return;

    const arrival = formatISO(startDate, { representation: "date" });
    const departure = formatISO(endDate, { representation: "date" });

    if (!isBefore(arrival, departure)) {
      toast.error("Invalid date range!");
      return;
    }

    const params = new URLSearchParams(searchParams);
    const formatedRange = `${arrival}_${departure}`;
    params.set("range", formatedRange);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <form className="flex flex-wrap justify-between py-5 gap-3">
      <div className="flex flex-col gap-1.5 min-w-70 w-full md:w-auto">
        <label htmlFor="" className="font-semibold">
          Ordenar Habitaciones
        </label>
        <Select
          instanceId="sort-rooms-select"
          onChange={(e) => {
            if (e) handleSort(e);
          }}
          options={options}
          isSearchable={false}
          className="w-full md:max-w-80"
          defaultValue={
            options.find((item) => item.value === filters?.filter) ?? options[0]
          }
        />
      </div>

      <div className="flex flex-col gap-1.5 min-w-70 w-full md:w-auto">
        <label className="font-semibold">Filtrar por fecha</label>
        <div className="flex flex-wrap gap-3">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="px-3 py-2 border border-gray-400 outline-none bg-transparent rounded text-lg text-gray-900"
            dateFormat={"dd/MM/yyyy"}
            minDate={new Date()}
            placeholderText="Fecha de llegada"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || new Date()}
            className="px-3 py-2 border border-gray-400 outline-none bg-transparent rounded text-lg text-gray-900"
            dateFormat={"dd/MM/yyyy"}
            placeholderText="Fecha de salida"
          />

          <button
            className="px-3 py-2 text-white bg-primary outline-none border-none cursor-pointer transition-all duration-150 w-full md:w-auto hover:bg-primary-hover text-lg"
            type="button"
            onClick={handleSearch}
          >
            <span className="mr-1.5">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default FilterSection;
