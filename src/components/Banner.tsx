interface BannerProps {
  title: string;
  image?: string;
  height?: number;
}

export default function Banner({ title, image="/fachada-1.png",height=70 }: BannerProps) {
  const heightClass = `h-[${height}vh]`;
  console.log("heightClass: ",heightClass)
  return (
    <div
      className={`w-full bg-cover bg-center`}
      style={{ 
        height: `${height}vh`,
        backgroundImage: `url('${image}')` 
      }}
    >
      <div className="w-full h-full backdrop-brightness-20 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center tracking-wider relative">
          {title}
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 h-0.5 w-40 bg-primary"></span>
        </h1>
      </div>
    </div>
  );
}