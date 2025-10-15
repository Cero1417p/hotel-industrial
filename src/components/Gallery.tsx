import Heading from "@/ui/Heading";
import Image from "next/image";

const STATIC_IMAGES = [
  "/rooms/lobby.jpg",
  "/rooms/habitacion-10.jpg",
  "/rooms/habitacion-4.jpg",
  "/rooms/habitacion-11.jpg",
  "/rooms/habitacion-6.jpg",
];

const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL || "";

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Heading className="text-center">Galería de imágenes</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {STATIC_IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-video overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                fill
                src={img}
                alt={`Habitación ${i + 1}`}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}