import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faDollar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Room } from "@/types";

interface FeaturesProps {
  room: Room;
}

function Features({ room }: FeaturesProps) {
  return (
    <ul className="flex items-center justify-center gap-8 flex-wrap text-gray-900">
      <li>
        <span className="text-red-600 text-sm px-2">
          <FontAwesomeIcon icon={faBed} />
        </span>
        <span className="text-gray-500 text-lg">Sleeps:</span> Adultos
      </li>
      <li>
        <span className="text-red-600 text-sm px-2">
          <FontAwesomeIcon icon={faUsers} />
        </span>
        <span className="text-gray-500 text-lg">Capacidad:</span> {room.capacity}
      </li>
      <li>
        <span className="text-red-600 text-sm px-2">
          <FontAwesomeIcon icon={faDollar} />
        </span>
        <span className="text-gray-500 text-lg">Precio:</span> desde S/.{room.price} / noche
      </li>
    </ul>
  );
}

export default Features;