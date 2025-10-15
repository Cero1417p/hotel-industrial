import Heading from "@/ui/Heading";
import Features from "./Features";
import RoomSlider from "./RoomSlider";
import RoomBookingForm from "./RoomBookingForm";
import RoomDescription from "./RoomDescription";
import Facilities from "./Facilities";
import BookingPolicy from "./BookingPolicy";
import { getRoomBySlug } from "@/lib/supabase/rooms";

const mockImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  "https://images.unsplash.com/photo-1596394516093-501504a8e93e?w=800",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
];

interface RoomContainerProps {
  habitacion_slug: string;
}

async function RoomContainer({ habitacion_slug }: RoomContainerProps) {
  if (!habitacion_slug || !/^-?/.test(habitacion_slug)) {
    return null; // or redirect to 404
  }

  const { data: room, error } = await getRoomBySlug(habitacion_slug);

  if (error) {
    // Manejo de error
    return <div>Error: {error.message}</div>;
  }

  function bookingAction(prevState: any, formData: FormData) {
    //"use server";

    prevState = { ...prevState, isBooking: true };
    const start_date = formData.get("start_date") as string;
    const end_date = formData.get("end_date") as string;
    const guests_count = parseInt(formData.get("guests_count") as string);
    const room_id = formData.get("room_id") as string;

    // Simple validation
    if (
      !start_date ||
      !end_date ||
      !guests_count ||
      guests_count < 1 ||
      guests_count > room.capacity
    ) {
      return {
        ...prevState,
        isBooking: false,
        criticalError: "Invalid form data",
      };
    }

    // Mock successful booking
    //redirect(`/reservations/checkout`);

    // Construir el mensaje para WhatsApp
    const message = `Hola, me gustaría reservar la habitación *${
      room.name
    }* con los siguientes datos:

📅 *Fechas:* del ${start_date} al ${end_date}
👥 *Huéspedes:* ${guests_count}
💰 *Precio por noche:* $${room.price.toLocaleString("es-MX")}

¿Está disponible? ¡Gracias!`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // No puedes usar window.open en server-side
    return {
      ...prevState,
      isBooking: false,
      whatsappUrl,
    };
  }

  return (
    <>
      <Heading className="text-center mt-5 mb-5 font-medium tracking-wider text-4xl text-gray-900">
        {room.name}
      </Heading>
      <Features room={room} />
      <RoomSlider images={room.images} />
      <RoomBookingForm 
      //bookingAction={bookingAction} 
      room={room} />
      <RoomDescription description={room.long_description} />
      <Facilities />
      <BookingPolicy />
    </>
  );
}

export default RoomContainer;
