import { Suspense } from "react";
import RoomContainer from "./_components/RoomContainer";
import LoadingSpinner from "@/ui/LoadingSpinner";

export const metadata = {
  title: "Room Details",
  description: "Discover and book a room at the Hotel Booking App ",
};

interface RoomDetailsProps {
  params: {
    habitacion_slug: string;
  };
}

export default async function RoomDetails({ params }: RoomDetailsProps) {
  const {habitacion_slug} = await params
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="global-loading">
            <LoadingSpinner />
          </div>
        }
      >
        <RoomContainer habitacion_slug={habitacion_slug} />
      </Suspense>
    </section>
  );
}
