import { Suspense } from "react";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Rooms from "@/components/Rooms";
import LoadingSpinner from "@/ui/LoadingSpinner";
import ContactSection from "@/components/ContactSection";
import ToastOnLoad from "@/components/ToastOnLoad";

export const metadata = {
  title: "Hostal Industrial",
  description: "Hotel Booking App",
};

export default function Home() {
  
  // async function bookingSearchAction(formattedRange: string) {
  //   "use server";
  //   redirect(`/habitaciones?range=${encodeURIComponent(formattedRange)}`);
  // }
  console.log("HOme")

  return (
    <>
      <HeroSection  />
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