import { ReactNode } from "react";

interface BadgeProps {
  type?: "success" | "danger" | "warning";
  className?: string;
  children: ReactNode;
}

export default function Badge({ type = "success", className = "", children }: BadgeProps) {
  const baseClasses = "inline-block px-3 py-1.5 text-xs rounded-full";
  const colorClasses =
    type === "success"
      ? "bg-blue-500/80 text-white"
      : type === "danger"
      ? "bg-red-600/80 text-white"
      : "bg-yellow-400/90 text-black";

  return <span className={`${baseClasses} ${colorClasses} ${className}`}>{children}</span>;
}