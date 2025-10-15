import Banner from "@/components/Banner";
import About from "@/components/About";

export const metadata = {
  title: "Sobre Nosotros - Hostal Industrial",
  description: "Conoce más sobre Hostal Industrial en Cajamarca, nuestro compromiso con el alojamiento cómodo, seguro y funcional para turistas, profesionales y familias.",
};

export default function NosotrosPage() {
  return (
    <>
      <Banner title="Sobre Nosotros" />
      <About />
    </>
  );
}