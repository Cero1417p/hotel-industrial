"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  height?: string;
  //imgPriority?: boolean;
  images: string[]; // array de URLs de imágenes
  children?: React.ReactNode;
}

export default function Slider({
  height = "calc(100vh - 64px)",
  //imgPriority = false,
  images,
  children,
}: SliderProps) {
  const [active, setActive] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-avanzar cada 5 segundos
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev >= images.length ? 1 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  const handleTranslate = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActive(index);
  };

  return (
    <div
      className="relative w-full bg-gray-800"
      style={{ maxHeight: height, aspectRatio: "16 / 9" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-11 backdrop-brightness-75">
        {children}
      </div>

      {/* Slides */}
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-linear h-full w-full ${
              active === index + 1 ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority
              //priority={imgPriority && index === 0}
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        ))}
      </div>

      {/* Slider Menu (solo en pantallas grandes) */}
      <nav className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 gap-4 md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTranslate(index + 1)}
            className={`h-1 w-12 cursor-pointer rounded-sm transition-colors ${
              active === index + 1
                ? "bg-white/70"
                : "bg-white/15 hover:bg-white/40"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </nav>
    </div>
  );
}
