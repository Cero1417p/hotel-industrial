import dynamic from "next/dynamic";

// dynamic() devuelve un componente React listo para usar
const DynamicMap = dynamic(() => import("./Map"), {
  ssr: false, // importante: desactiva SSR para componentes con "use client" y APIs del navegador
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-200" />,
});

export default DynamicMap;