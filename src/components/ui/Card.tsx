import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-100 bg-white shadow-sm shadow-gray-800/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
