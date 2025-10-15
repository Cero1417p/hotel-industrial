"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-gray-50 text-gray-800">
      <span className="text-6xl font-bold mb-5">404</span>
      <h2 className="text-3xl font-bold mb-2">Oops! Page Not Found</h2>
      <p className="text-xl mb-5 text-gray-600">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <button
        className="bg-red-600 text-white px-5 py-2.5 font-bold rounded transition-colors duration-300 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => router.push("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}