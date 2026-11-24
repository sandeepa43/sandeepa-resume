"use client";

import { featuredSkills, site } from "@/data/site";
import { SkillButton } from "@/components/ui/SkillButton";

const stats = [
  { value: "5+", label: "Years" },
  { value: "React", label: "Next.js" },
  { value: "India", label: "Remote" },
] as const;

export const ProfileDeck = () => {
  const handleSkillChange = (next: string | null) => {
    if (!next) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("work")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <aside className="relative overflow-hidden rounded-3xl border border-violet/40 bg-paper-raised/80 p-6 shadow-[0_0_80px_-24px_rgba(139,108,255,0.85)]">
      <div
        className="pointer-events-none absolute -top-16 -right-10 size-44 rounded-full bg-violet/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-8 size-40 rounded-full bg-mint/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4">
        <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-mint via-violet to-coral font-serif text-3xl text-[#07111f]">
          S
        </div>
        <div>
          <p className="font-serif text-2xl tracking-tight text-ink">{site.name}</p>
          <p className="text-sm text-ink-soft">{site.title}</p>
        </div>
      </div>
      <p className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-medium tracking-[0.14em] text-mint uppercase">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full rounded-full bg-mint opacity-50 motion-safe:animate-ping" />
          <span className="relative size-2 rounded-full bg-mint" />
        </span>
        Open to full-time roles
      </p>
      <ul className="relative mt-6 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="rounded-2xl border border-line bg-[#0c1628] px-3 py-3"
          >
            <p className="font-serif text-xl text-ink">{stat.value}</p>
            <p className="mt-1 text-xs text-muted">{stat.label}</p>
          </li>
        ))}
      </ul>
      <p className="relative mt-6 font-mono text-xs tracking-[0.16em] text-amber uppercase">
        Equip a skill
      </p>
      <div className="relative mt-3 flex flex-wrap gap-2">
        {featuredSkills.map((skill) => (
          <SkillButton key={skill} name={skill} onChange={handleSkillChange} />
        ))}
      </div>
      <p className="relative mt-4 text-sm leading-6 text-muted">
        Selecting a skill highlights the projects that actually used it.
      </p>
    </aside>
  );
};
