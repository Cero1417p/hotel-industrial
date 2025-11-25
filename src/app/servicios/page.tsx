import Banner from "@/components/Banner";
import ServicesSection from "@/components/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre los mejores servicios recomendados para huéspedes del Hostal Industrial: transporte seguro, restaurantes locales y agencias de tours en Cajamarca.",
  keywords: [
    "servicios cajamarca",
    "taxi cajamarca",
    "restaurantes cajamarca",
    "tours cajamarca",
    "transporte cajamarca",
    "agencias de viajes cajamarca",
    "gastronomía cajamarca",
  ],
  openGraph: {
    title: "Servicios - Hostal Industrial Cajamarca",
    description: "Servicios recomendados para huéspedes: transporte, restaurantes y tours en Cajamarca.",
    images: ["/fachada-1.png"],
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Banner title="Servicios para Huéspedes" height={40} />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Descubre Cajamarca
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Te recomendamos los mejores servicios de transporte, gastronomía y experiencias turísticas 
            para que disfrutes al máximo tu estadía en Cajamarca.
          </p>
        </div>
      </div>
      <ServicesSection />
    </>
  );
}
