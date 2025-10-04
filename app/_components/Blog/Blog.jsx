import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Image from "next/image";
function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <Heading className={styles.heading}>Blog</Heading>
        <p className={styles.description}>Lorem Ipsum is available, but the majority have suffered</p>

        <div className={styles.blogGrid}>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/carnaval.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>🎭 Carnaval de Cajamarca</h2>
              <p className={styles.blogLabel}>Tradición y alegría en febrero</p>
              <p className={styles.blogDescription}>
                El carnaval más vibrante del Perú, con comparsas, música, pintura y cultura viva en cada rincón de la ciudad.
              </p>
            </Card.Description>
          </Card>

          <Card>
            <Card.Thumbnail>
              <Image fill src="/granja.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>🌲 Heading: Granja Porcón</h2>
              <p className={styles.blogLabel}>Turismo rural y sostenible</p>
              <p className={styles.blogDescription}>
                Bosques, animales y talleres artesanales en una experiencia comunitaria a solo minutos de Cajamarca.
              </p>
            </Card.Description>
          </Card>

          <Card>
            <Card.Thumbnail>
              <Image fill src="/baños.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>🏞️ Baños del Inca</h2>
              <p className={styles.blogLabel}>Relajo con historia</p>
              <p className={styles.blogDescription}>
                Piscinas termales privadas y tratamientos naturales en el mismo lugar que usó el Inca Atahualpa.
              </p>
            </Card.Description>
          </Card>

          
        </div>
      </div>
    </section>
  );
}

export default Blog;
