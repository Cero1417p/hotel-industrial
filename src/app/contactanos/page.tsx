import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contactanos - Hostal Industrial",
  description: "Comuníquese con la aplicación de reserva del hotel",
};

async function Page() {
  return (
    <>
      <Banner title={"Estamos aquí para ayudarte"} />
      <ContactSection />
    </>
  );
}

export default Page;