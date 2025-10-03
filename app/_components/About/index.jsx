import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.description}>
          <Heading>Sobre Nosotros</Heading>
          <p>
            Hostal Industrial en Cajamarca ofrece alojamiento cómodo, seguro y funcional para turistas, profesionales y familias.
            Ubicado en el centro de la ciudad, contamos con WiFi gratuito, agua caliente, estacionamiento privado, cocina compartida,
            recepción 24 horas y espacios automatizados. Somos la opción ideal para quienes buscan hospedaje económico con tecnología,
            limpieza y atención personalizada en Cajamarca.
          </p>
        </div>
        <div className={styles.gallery}>
          <div>
            <Image
              src="/bg.png"
              alt="Fachada del hostal"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center center", // puedes ajustar a "center center", "center bottom", etc.
              }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
