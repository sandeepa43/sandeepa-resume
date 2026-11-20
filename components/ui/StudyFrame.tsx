import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StudyFrameProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export const StudyFrame = ({ label, children, className }: StudyFrameProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border border-line bg-paper-raised",
      className,
    )}
  >
    <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
      <span className="truncate font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Study
      </span>
    </div>
    <div className="p-4 sm:p-5">{children}</div>
  </div>
);

type StudyBarProps = {
  className?: string;
};

export const StudyBar = ({ className }: StudyBarProps) => (
  <span className={cn("block h-2 rounded-full bg-ink/10", className)} />
);
