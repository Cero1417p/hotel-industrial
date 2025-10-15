import { ReactNode } from "react";

interface AlertProps {
  type?: "danger" | "warning" | "success";
  children: ReactNode;
}

export default function Alert({ type = "danger", children }: AlertProps) {
  const bgColor =
    type === "danger"
      ? "bg-red-400"
      : type === "warning"
      ? "bg-yellow-300 text-gray-900"
      : "bg-blue-400 text-gray-900";

  return (
    <div className={`flex items-center gap-3 rounded-md p-4 mb-4 font-sans ${bgColor}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{children}</span>
    </div>
  );
}