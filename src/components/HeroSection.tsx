"use client";

import BookingButton from "./BookingButton";
import BookingForm from "./BookingForm";
import Modal from "./Modal";
import Slider from "./Slider";

// interface HeroSectionProps {
//   bookingSearchAction: (range: string) => void;
// }

const images = ["/fachada-1.png", "/bg.png", "/fachada-1.png", "/bg.png"];

export default function HeroSection() {
  return (
    <Slider images={images}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-32 py-10 h-full">
        <div className="hidden md:block w-full max-w-xs">
          <BookingForm />
        </div>
        <div className="text-center md:text-left text-white text-lg md:text-2xl">
          <div className="hidden md:block">
            <p className="font-bold mb-6">Encuentra comodidad con nosotros</p>
            <p>Reserva ahora, paga al llegar</p>
          </div>
          <div className="mt-6 block md:hidden">
            <Modal>
              <Modal.ToggleOpen>
                <BookingButton />
              </Modal.ToggleOpen>
              <Modal.Overlay>
                <Modal.Wrapper>
                  <BookingForm>
                    <Modal.ToggleClose>
                      <button className="px-6 py-3 rounded-full font-semibold text-lg bg-white text-gray-900 hover:bg-gray-200 transition">
                        Cancelar
                      </button>
                    </Modal.ToggleClose>
                  </BookingForm>
                </Modal.Wrapper>
              </Modal.Overlay>
            </Modal>
          </div>
        </div>
      </div>
    </Slider>
  );
}
