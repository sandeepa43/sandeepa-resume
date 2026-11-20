import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const ExternalLink = ({ href, children, className }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center gap-1 underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline motion-reduce:transition-none",
      className,
    )}
  >
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);
