import Banner from "@/components/Banner";
import RoomsSection from "./_components/RoomsSection";
import { Suspense } from "react";
import Loader from "@/ui/Loader";
import FilterSection from "./_components/FilterSection";

export const metadata = {
  title: "Habitaciones",
  description: "Descubre y reserva una habitación en hostal industrial",
};

interface RoomsProps {
  searchParams: {
    sort?: string;
    range?: string;
  };
}

export default async function Rooms({ searchParams }: RoomsProps) {
  const { sort, range } = await searchParams;
  const filter = sort ?? "default";
  const dateRange = range ?? "";
  // const filter = await searchParams?.sort ?? "default";
  // const range = await searchParams?.range ?? "";
  return (
    <>
      <Banner title={"Opciones de alojamiento"} image="/habitacion-generica.png" height={40} />

      <div className="max-w-7xl mx-auto px-5 py-5">
        <FilterSection filters={{ filter, range: dateRange }} />

        <Suspense
          key={`${sort}-${range}`}
          fallback={
            <div className="flex items-center justify-center h-[40vh]">
              <Loader />
            </div>
          }
        >
          <RoomsSection filter={filter} range={dateRange} />
        </Suspense>
      </div>
    </>
  );
}
