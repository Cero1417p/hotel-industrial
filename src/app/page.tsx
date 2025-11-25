import { Suspense } from "react";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Rooms from "@/components/Rooms";
import LoadingSpinner from "@/ui/LoadingSpinner";
import ContactSection from "@/components/ContactSection";
import ToastOnLoad from "@/components/ToastOnLoad";
import JsonLd from "@/components/JsonLd";
import ContactInfoBanner from "@/components/ContactInfoBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Hostal Industrial Cajamarca - Tu mejor opción de alojamiento en Cajamarca, Perú. Habitaciones cómodas y seguras, ubicación estratégica cerca del hospital, terminal terrestre y principales atractivos turísticos. Reserva ahora!",
  keywords: [
    "hostal cajamarca",
    "hotel cajamarca perú",
    "alojamiento cajamarca",
    "hospedaje cajamarca",
    "habitaciones cajamarca",
    "hotel barato cajamarca",
    "hostal cerca terminal cajamarca",
    "hotel cerca hospital cajamarca",
    "turismo cajamarca",
    "donde hospedarse cajamarca",
  ],
  openGraph: {
    title: "Hostal Industrial Cajamarca - Alojamiento Cómodo y Seguro",
    description: "Tu mejor opción de alojamiento en Cajamarca. Habitaciones cómodas, ubicación estratégica y excelente servicio.",
    images: ["/fachada-1.png"],
  },
};

// JSON-LD for WebSite
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hostal Industrial Cajamarca",
  "url": "https://hostalindustrial.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hostalindustrial.com/habitaciones?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  
  // async function bookingSearchAction(formattedRange: string) {
  //   "use server";
  //   redirect(`/habitaciones?range=${encodeURIComponent(formattedRange)}`);
  // }
  console.log("HOme")

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HeroSection  />
      <ContactInfoBanner />
      <About />
      <Suspense
        fallback={
          <div className="global-loading">
            <LoadingSpinner />
          </div>
        }
      >
        <Rooms />
        <Gallery />
      </Suspense>
      <Blog />
      <ContactSection />
      <ToastOnLoad/>
    </>
  );
}