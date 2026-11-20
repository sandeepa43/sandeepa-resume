"use client";

import { usePlatform } from "@/components/platform/PlatformProvider";
import { cn } from "@/lib/cn";

type SkillButtonProps = {
  name: string;
  onChange?: (next: string | null) => void;
};

export const SkillButton = ({ name, onChange }: SkillButtonProps) => {
  const { skill, toggleSkill } = usePlatform();
  const selected = skill === name;

  const handleClick = () => {
    const next = selected ? null : name;
    toggleSkill(name);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={handleClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition duration-200 motion-reduce:transition-none",
        selected
          ? "border-transparent bg-gradient-to-r from-mint to-violet font-medium text-[#07111f] shadow-[0_0_24px_-6px_rgba(62,240,194,0.9)]"
          : "border-line bg-paper-raised/70 text-ink-soft hover:border-mint hover:text-ink",
      )}
    >
      {name}
    </button>
  );
};
