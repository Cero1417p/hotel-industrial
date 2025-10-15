import Heading from "@/ui/Heading";
import { getAllRooms } from "@/lib/supabase/rooms";
import RoomCard from "./RoomCard";

export default async function Rooms() {
 
  const { data: rooms, error } = await getAllRooms();

  if (error) {
    // Manejo de error
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Heading>Nuestras Habitaciones</Heading>
        <p className="mb-10">Habitaciones cómodas y equipadas para tu descanso en Cajamarca.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={i} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}