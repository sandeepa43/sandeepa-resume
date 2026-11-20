"use client";

import { useState } from "react";
import { projectsForSkill, techGroups } from "@/data/site";
import { usePlatform } from "@/components/platform/PlatformProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillButton } from "@/components/ui/SkillButton";
import { cn } from "@/lib/cn";

const allLabel = "All";

export const TechStack = () => {
  const { skill, clearSkill } = usePlatform();
  const [group, setGroup] = useState<string>(allLabel);
  const groups = [allLabel, ...techGroups.map((item) => item.label)];
  const visible =
    group === allLabel
      ? techGroups.flatMap((item) => item.items)
      : (techGroups.find((item) => item.label === group)?.items ?? []);
  const matches = skill ? projectsForSkill(skill) : [];
  const skillGroup = techGroups.find((item) =>
    (item.items as readonly string[]).includes(skill ?? ""),
  );
  const skillIsInView = skill ? visible.includes(skill) : false;

  return (
    <section id="tools" aria-labelledby="tools-heading" className="border-b border-line">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="01 — Skills"
          title="Tools I work with"
          headingId="tools-heading"
          description="Equip a skill. The board shows where that tool actually shows up in the work."
        />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Skill groups">
          {groups.map((label) => {
            const selected = group === label;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setGroup(label)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm transition duration-200 motion-reduce:transition-none",
                  selected
                    ? "bg-violet text-[#07111f]"
                    : "border border-line text-ink-soft hover:border-violet hover:text-ink",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-wrap gap-2 lg:col-span-7" role="tabpanel">
            {visible.map((item) => (
              <SkillButton key={item} name={item} />
            ))}
          </div>
          <div
            className="rounded-3xl border border-line bg-paper-raised/80 p-6 lg:col-span-5"
            aria-live="polite"
          >
            {skill ? (
              <>
                <p className="font-mono text-xs tracking-[0.16em] text-amber uppercase">
                  {skillGroup?.label ?? "Skill"}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-ink">{skill}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  {matches.length > 0
                    ? `Used on ${matches.length} of the projects below.`
                    : "Part of the toolkit. It is not called out on a specific project below."}
                </p>
                {skill && !skillIsInView && skillGroup ? (
                  <div className="mt-4 text-sm leading-6 text-ink-soft">
                    <p>{skill} is in {skillGroup.label}, so it is hidden on this board.</p>
                    <button
                      type="button"
                      onClick={() => setGroup(skillGroup.label)}
                      className="mt-2 text-mint underline-offset-4 hover:underline"
                    >
                      Show {skillGroup.label}
                    </button>
                  </div>
                ) : null}
                {matches.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {matches.map((project) => (
                      <li key={project.name}>
                        <a
                          href="#work"
                          className="text-sm text-mint underline-offset-4 hover:underline"
                        >
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <button
                  type="button"
                  onClick={clearSkill}
                  className="mt-5 text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                >
                  Clear skill
                </button>
              </>
            ) : (
              <>
                <p className="font-mono text-xs tracking-[0.16em] text-coral uppercase">
                  Skill board
                </p>
                <h3 className="mt-3 font-serif text-3xl text-ink">Pick one to focus the work.</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Nothing here is a score. It is a map of the tools I use, tied to the
                  projects I contributed to.
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
