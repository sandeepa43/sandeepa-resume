import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-[1120px] px-6 md:px-10", className)}>
    {children}
  </div>
);
