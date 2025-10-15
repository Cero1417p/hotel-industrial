"use client";

import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

interface SubmitButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode; // ✅ Ahora acepta children
  pendingText?: ReactNode; // Opcional: texto personalizado cuando está cargando
}

export default function SubmitButton({
  onClick,
  type = "submit",
  className = "",
  children,
  pendingText = "Loading...",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={pending}
      className={`px-16 py-3 text-white bg-gray-800 hover:bg-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed rounded font-semibold uppercase tracking-wider text-sm transition-colors ${className}`}
    >
      {pending ? pendingText : children}
    </button>
  );
}