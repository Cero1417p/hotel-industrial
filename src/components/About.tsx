import Heading from "@/ui/Heading";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-14 items-center">
        <div className="flex-1">
          <Heading>Sobre Nosotros</Heading>
          <p className="text-justify leading-relaxed text-lg text-gray-700">
            Hostal Industrial en Cajamarca ofrece alojamiento cómodo, seguro y
            funcional para turistas, profesionales y familias. Ubicado en el
            centro de la ciudad, contamos con WiFi gratuito, agua caliente,
            estacionamiento privado, cocina compartida, recepción 24 horas y
            espacios automatizados. Somos la opción ideal para quienes buscan
            hospedaje económico con tecnología, limpieza y atención
            personalizada en Cajamarca.
          </p>
        </div>
        <div className="md:w-[55%] relative aspect-video h-full w-full">
          <Image
            src="/bg.png"
            alt="Fachada del hostal"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
