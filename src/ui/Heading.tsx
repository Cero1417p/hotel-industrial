import { ReactNode } from "react";

interface HeadingProps {
  className?: string;
  textClassName?: string;
  children: ReactNode;
}

export default function Heading({ className = "", textClassName = "", children }: HeadingProps) {
  return (
    <h1 className={`mb-5 ${className}`}>
      <span
        className={`inline-block uppercase font-extrabold tracking-wider text-3xl relative ${textClassName}`}
      >
        {children}
        <span className="absolute top-[-4px] left-[1px] h-4 w-0.5 bg-red-600 rotate-45"></span>
        <span className="absolute bottom-[4px] right-[-10px] h-4 w-0.5 bg-red-600 rotate-45"></span>
      </span>
    </h1>
  );
}