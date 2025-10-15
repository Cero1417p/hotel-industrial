import Heading from "@/ui/Heading";
import { contactAction } from "@/lib/actions";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Heading className="text-center mb-5">Contáctanos</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ContactForm contactAction={contactAction} />
          <div className="h-[320px] md:h-full">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}
