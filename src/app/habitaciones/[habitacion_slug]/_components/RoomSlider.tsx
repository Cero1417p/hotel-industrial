import Slider from "@/components/Slider";

interface RoomSliderProps {
  images: string[];
}

function RoomSlider({ images }: RoomSliderProps) {
  return (
    <div className="relative mt-8">
      <Slider images={images} />
    </div>
  );
}

export default RoomSlider;