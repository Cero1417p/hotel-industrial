import Image from "next/image";
import Link from "next/link";

interface RoomItemProps {
  id: string;
  imgPath: string;
  price: number;
  title: string;
  slug: string;
  link?: string;
}

function RoomItem({ id, imgPath, price, title, slug="Default" }: RoomItemProps) {
  return (
    <div className="aspect-video overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full aspect-video -z-10">
        <Image fill src={imgPath} alt={title} className="object-cover" sizes="(max-width: 768px) 100vw, 400px"/>
      </div>
      <div className="h-full p-5 flex items-end text-white">
        <div className="flex items-center gap-1.5 justify-between flex-wrap w-full md:flex-nowrap">
          <h2 className="text-2xl font-bold">{slug}</h2>
          <Link 
            href={`/habitaciones/${slug}`} 
            className="inline-block px-4 py-3 bg-primary no-underline text-white flex-shrink-0 transition-all duration-150 hover:bg-primary-hover"
          >
            Desde ${price} / Noche
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomItem;