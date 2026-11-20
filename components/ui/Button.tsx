import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-mint to-violet text-[#07111f] hover:from-amber hover:to-coral",
  secondary:
    "border border-mint/40 bg-transparent text-ink hover:border-mint hover:bg-mint/10",
  accent: "bg-coral text-white hover:bg-amber hover:text-[#07111f]",
};

export const Button = ({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) => (
  <a
    href={href}
    className={cn(
      "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 motion-reduce:transition-none",
      variantClass[variant],
      className,
    )}
    {...(external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {})}
  >
    {children}
    {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
  </a>
);
