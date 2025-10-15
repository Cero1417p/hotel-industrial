"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ label, children, className = "" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col gap-1.5 transition-all duration-300 ${className}`}>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center border-none outline-none cursor-pointer"
        >
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </button>
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium cursor-pointer select-none"
        >
          {label}
        </p>
      </div>
      {isOpen && (
        <div className="pl-14 text-gray-600">{children}</div>
      )}
    </div>
  );
}