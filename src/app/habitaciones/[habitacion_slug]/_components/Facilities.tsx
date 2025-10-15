import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faChild,
  faCoffee,
  faGamepad,
  faHotTub,
  faSwimmingPool,
  faWheelchair,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "@/ui/Heading";

// Tipado para cada facility
type Facility = {
  icon: typeof faWifi; // Cualquier ícono de Font Awesome
  label: string;
};

// Lista de facilidades (fácil de mantener o internacionalizar)
const facilities: Facility[] = [
  { icon: faWifi, label: "Wifi de alta velocidad en la habitación" },
  { icon: faCoffee, label: "Restaurante" },
  //{ icon: faSwimmingPool, label: 'Piscina' },
  //{ icon: faChild, label: 'Cuidado infantil' },
  { icon: faHotTub, label: "Jacuzzi" },
  { icon: faGamepad, label: "Sala de juegos" },
  { icon: faBath, label: "Bañera" },
  //{ icon: faWheelchair, label: 'Acceso para silla de ruedas' },
];

// Componente reutilizable para cada celda
const FacilityItem = ({ icon, label }: Facility) => (
  <span className="flex items-center">
    <FontAwesomeIcon
      icon={icon}
      className="text-[rgb(128,12,35)] mr-3 text-lg"
      aria-hidden="true"
    />
    <span>{label}</span>
  </span>
);

export default function Facilities() {
  // Dividimos las facilidades en pares para filas de 2 columnas
  const rows = [];
  for (let i = 0; i < facilities.length; i += 2) {
    rows.push(facilities.slice(i, i + 2));
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <Heading className="text-center">Facilities</Heading>
      
      <hr className="w-full max-w-[90px] h-0.5 mx-auto mt-3 mb-10 border-2 border-primary" />
      <table className="max-w-4xl m-auto w-full border-collapse text-gray-800">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 1 ? "bg-gray-50" : ""}
            >
              {row.map((facility, cellIndex) => (
                <td
                  key={cellIndex}
                  className={"w-1/2 px-8 py-3 text-gray-800 text-base border-b border-gray-200"+(cellIndex === 1 ? " border-l" : "")}
                >
                  <FacilityItem {...facility} />
                </td>
              ))}
              {/* Si la fila tiene solo 1 item, añadimos una celda vacía */}
              {row.length === 1 && (
                <td className="w-1/2 border-b border-l border-gray-200"></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
