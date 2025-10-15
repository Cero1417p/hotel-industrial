import { getAllRooms } from "@/lib/supabase/rooms";
import RoomItem from "./RoomItem";
import { isValid } from "date-fns";

// Mock room data
// = getAllRooms()

interface RoomsSectionProps {
  filter: string;
  range: string;
}

async function RoomsSection({ filter, range }: RoomsSectionProps) {

  const { data: rooms, error } = await getAllRooms();

  if (error) {
    // Manejo de error
    return <div>Error: {error.message}</div>;
  }

  let filteredRooms = [...rooms];

  // Apply date filtering logic (mocked)
  if (range && isValid(new Date(range.split("_")[0])) && isValid(new Date(range.split("_")[1]))) {
    // In a real app, this would filter based on availability
    // For now, we'll just use all rooms
  }

  // Apply sorting
  switch (filter) {
    case "high-price":
      filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
      break;
    case "min-guests":
      filteredRooms = filteredRooms.sort((a, b) => b.capacity - a.capacity);
      break;
    case "max-guests":
      filteredRooms = filteredRooms.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      // Keep original order
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredRooms.map((item) => (
        <RoomItem
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          slug={item.slug}
          imgPath={item.thumbnail||""}
        />
      ))}
    </div>
  );
}

export default RoomsSection;