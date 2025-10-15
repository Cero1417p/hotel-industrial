import Accordion from "@/components/Accordion";
import Heading from "@/ui/Heading";

function BookingPolicy() {
  return (
    <section className="py-15">
      <Heading className="text-center">
        Política de privacidad y reservas
      </Heading>

      <hr className="w-full max-w-[90px] h-0.5 mx-auto mt-3 mb-10 border-2 border-primary" />

      <div className="w-full max-w-2xl mx-auto flex flex-col gap-5">
        <Accordion
          className="border-b border-gray-200 last:border-b-0"
          label="Protección de datos personales"
        >
          <p>
            Toda la información proporcionada durante el proceso de reserva,
            incluyendo nombre, correo electrónico, número de teléfono y fechas
            de estadía, será tratada de forma confidencial y utilizada
            exclusivamente para gestionar su reserva.
          </p>
          <p>
            No compartimos sus datos con terceros, salvo que sea requerido por
            ley o para garantizar el servicio contratado (por ejemplo,
            operadores turísticos o transporte).
          </p>
        </Accordion>

        <Accordion
          className="border-b border-gray-200 last:border-b-0"
          label="Uso de información para contacto"
        >
          <p>
            Podemos utilizar su información de contacto para enviarle
            confirmaciones, recordatorios y recomendaciones relacionadas con su
            estadía. No enviamos publicidad sin su consentimiento previo.
          </p>
          <p>
            Si desea modificar o eliminar sus datos, puede hacerlo
            escribiéndonos directamente a través de nuestro formulario de
            contacto o WhatsApp.
          </p>
        </Accordion>

        <Accordion
          className="border-b border-gray-200 last:border-b-0"
          label="Condiciones de reserva y cancelación"
        >
          <p>
            Las reservas están sujetas a disponibilidad y se confirman
            únicamente tras recibir una respuesta oficial por parte del hotel.
            El envío del formulario no garantiza la reserva.
          </p>
          <p>
            Las políticas de cancelación varían según la temporada y tipo de
            habitación. Se recomienda revisar los términos específicos antes de
            confirmar su estadía.
          </p>
        </Accordion>
      </div>
    </section>
  );
}

export default BookingPolicy;
