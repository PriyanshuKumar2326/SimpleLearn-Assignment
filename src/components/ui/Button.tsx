import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4CAF4F] text-white shadow-sm shadow-green-900/10 hover:bg-[#439947]",
  secondary:
    "border border-[#4CAF4F]/30 bg-white text-[#4CAF4F] hover:border-[#4CAF4F] hover:bg-green-50",
  ghost: "text-[#4CAF4F] hover:bg-green-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
