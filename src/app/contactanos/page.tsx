import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description: "Contáctanos para reservar tu habitación en Hostal Industrial Cajamarca. Estamos ubicados en Av. Industrial, cerca del hospital y terminal terrestre. Atención personalizada y respuesta rápida.",
  keywords: [
    "contacto hostal cajamarca",
    "reservas hostal industrial",
    "teléfono hostal cajamarca",
    "ubicación hostal cajamarca",
    "como llegar hostal industrial",
  ],
  openGraph: {
    title: "Contáctanos - Hostal Industrial Cajamarca",
    description: "Estamos aquí para ayudarte. Contáctanos para reservar tu habitación o resolver tus dudas.",
  },
};

async function Page() {
  return (
    <>
      <Banner title={"Estamos aquí para ayudarte"}/>
      <ContactSection />
    </>
  );
}

export default Page;