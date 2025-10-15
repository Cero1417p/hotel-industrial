import Heading from "@/ui/Heading";
import Card from "./Card";
import Image from "next/image";


const blogPosts = [
  {
    id: 1,
    title: "🎭 Carnaval de Cajamarca",
    subtitle: "Tradición y alegría en febrero",
    description:
      "El carnaval más vibrante del Perú, con comparsas, música, pintura y cultura viva en cada rincón de la ciudad.",
    image: "/carnaval.png",
    alt: "Carnaval de Cajamarca",
  },
  {
    id: 2,
    title: "🌲 Granja Porcón",
    subtitle: "Turismo rural y sostenible",
    description:
      "Bosques, animales y talleres artesanales en una experiencia comunitaria a solo minutos de Cajamarca.",
    image: "/granja.png",
    alt: "Granja Porcón",
  },
  {
    id: 3,
    title: "🏞️ Baños del Inca",
    subtitle: "Relajo con historia",
    description:
      "Piscinas termales privadas y tratamientos naturales en el mismo lugar que usó el Inca Atahualpa.",
    image: "/baños.png",
    alt: "Baños del Inca",
  },
];

function Blog() {
  return (
    <section
      className="min-h-[80vh] bg-cover bg-center py-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.479)), url('/bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Heading className="text-center text-white">Blog</Heading>
        <p className="mx-auto mb-[60px] text-center text-white max-w-2xl">
          La magia de Cajamarca: tradiciones, paisajes y experiencias únicas
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <Card.Thumbnail>
                <Image fill src={post.image} alt={post.alt} sizes="(max-width: 768px) 100vw, 400px"/>
              </Card.Thumbnail>
              <Card.Description className="bg-white p-4 sm:p-6">
                <h2 className="mb-1.5 text-xl font-semibold ">{post.title}</h2>
                <p className="mb-1.5 text-lg font-semibold text-primary">
                  {post.subtitle}
                </p>
                <p className="text-justify text-gray-700 leading-relaxed">
                  {post.description}
                </p>
              </Card.Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;