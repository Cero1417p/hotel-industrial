import { ApiResult, Room } from "@/types";

const mockRooms: Room[] = [
  {
    id: "1",
    created_at: "2025-01-15T10:00:00Z",
    name: "Habitación Simple",
    slug: "simple",
    capacity: 1,
    size: 20,
    price: 40,
    discount: 10,
    available: true,
    thumbnail: "/rooms/habitacion-11.jpg",
    images: ["/rooms/habitacion-11.jpg"],
    description: "Habitación cómoda para una persona, con cama individual y baño privado.",
    long_description:
      "Esta habitación está diseñada para viajeros individuales que buscan comodidad y privacidad. Cuenta con una cama individual, baño privado, escritorio funcional y buena iluminación natural.\n\nIdeal para estancias cortas o viajes de trabajo. Su diseño compacto permite descansar y trabajar con tranquilidad.",
    deleted_at: null,
  },
  {
    id: "2",
    created_at: "2025-01-15T10:10:00Z",
    name: "Habitación Matrimonial",
    slug: "matrimonial",
    capacity: 2,
    size: 30,
    price: 50,
    discount: 15,
    available: false,
    thumbnail: "/rooms/habitacion-9.jpg",
    images: ["/rooms/habitacion-9.jpg"],
    description: "Amplia habitación con cama king size, perfecta para parejas.",
    long_description:
      "Pensada para parejas que desean una experiencia acogedora y romántica. Dispone de una cama king size, baño privado con agua caliente, decoración cálida y vistas interiores tranquilas.\n\nPerfecta para escapadas o celebraciones especiales. El ambiente invita al descanso y la conexión.",
    deleted_at: null,
  },
  {
    id: "3",
    created_at: "2025-01-15T10:05:00Z",
    name: "Habitación Doble",
    slug: "doble",
    capacity: 2,
    size: 28,
    price: 70,
    discount: 20,
    available: true,
    thumbnail: "/rooms/habitacion-4.jpg",
    images: ["/rooms/habitacion-4.jpg"],
    description: "Ideal para dos personas, con dos camas individuales y vista al jardín.",
    long_description:
      "Esta habitación ofrece dos camas individuales, ideal para amigos, compañeros de viaje o familiares. Tiene vista al jardín, buena ventilación, baño privado y espacio suficiente para una estancia cómoda y relajada.\n\nSu distribución permite compartir sin perder privacidad. Ideal para quienes valoran el confort y la funcionalidad.",
    deleted_at: null,
  },
  {
    id: "4",
    created_at: "2025-01-15T10:05:00Z",
    name: "Habitación Triple",
    slug: "triple",
    capacity: 2,
    size: 35,
    price: 90,
    discount: 25,
    available: true,
    thumbnail: "/rooms/habitacion-6.jpg",
    images: ["/rooms/habitacion-6.jpg"],
    description: "Ideal para dos personas, con dos camas individuales y vista al jardín.",
    long_description:
      "Espaciosa y versátil, esta habitación puede adaptarse a grupos pequeños o familias. Cuenta con dos camas individuales, posibilidad de cama adicional, baño privado y vista al jardín.\n\nIdeal para estancias prolongadas, donde se busca comodidad, amplitud y flexibilidad.",
    deleted_at: null,
  },
];



export async function getAllRooms() : Promise<ApiResult<Room[]>> {
  await new Promise((res) => setTimeout(res, 300));

  return { data: mockRooms, error: null };
}

export async function getRoomBySlug(slug: string): Promise<ApiResult<Room>> {
  await new Promise((res) => setTimeout(res, 300));

  const room = mockRooms.find((r) => r.slug === slug && r.deleted_at === null);

  if (room) {
    return { data: room, error: null };
  } else {
    return {
      data: null,
      error: { message: `No se encontró la habitación con slug "${slug}".` },
    };
  }
}