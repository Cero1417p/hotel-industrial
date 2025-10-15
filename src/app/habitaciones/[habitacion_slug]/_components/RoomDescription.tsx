import Heading from "@/ui/Heading";

interface RoomDescriptionProps {
  description: string;
}

function RoomDescription({ description }: RoomDescriptionProps) {
  const paragraphs = description
    .split(/\n{2,}/) // divide por 2 o más saltos de línea
    .map((p) => p.trim())
    .filter(Boolean); // elimina vacíos

  return (
    <div className="py-10">
      <Heading className="text-center">Descripción de la habitación</Heading>

      <hr className="w-full max-w-[90px] h-0.5 mx-auto mt-3 mb-10 border-2 border-primary" />

      <div className="w-full max-w-4xl px-4 mx-auto text-gray-500 text-justify text-lg leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index} className={index > 0 ? "mt-5" : ""}>
            {text}
          </p>
        ))}

      </div>
    </div>
  );
}

export default RoomDescription;