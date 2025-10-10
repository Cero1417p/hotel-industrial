import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";

// Lista estática de imágenes
const STATIC_IMAGES = [
  "lobby.jpg",
  "habitacion-10.jpg",
  "habitacion-4.jpg",
  "habitacion-11.jpg",
  "habitacion-6.jpg",
];

// Asegúrate de que esta URL apunte a tu bucket público en Supabase o donde estén alojadas las imágenes
const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL || "";

async function Gallery() {

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <Heading className="text-center">Galería de imagenes</Heading>
        <div className={styles.galleryGrid}>
          {STATIC_IMAGES.map((imageName, index) => (
            <div key={index} className={styles.thumbnail}>
              <Image
                fill
                src={`${SUPABASE_ROOMS_URL}/${imageName}`}
                alt={`Habitación ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
