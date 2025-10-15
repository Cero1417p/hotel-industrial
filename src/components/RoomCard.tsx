import Image from "next/image";
import Card from "./Card";
import { Room } from "@/types";


interface RoomCardProps {
  room: Room;
}

//const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL || "";

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card>
      <Card.Thumbnail  >
        <Image
          fill
          src={room.thumbnail}
          alt={room.name||""}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </Card.Thumbnail>
      <Card.Description className="p-6 text-center">
        <h2 className="mb-3 font-semibold">{room.name}</h2>
        <p className="text-gray-700 leading-relaxed">{room.description}</p>
      </Card.Description>
    </Card>
  );
}