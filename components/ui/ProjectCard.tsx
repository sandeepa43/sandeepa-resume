"use client";

import type { Project } from "@/data/site";
import { usePlatform } from "@/components/platform/PlatformProvider";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { skill } = usePlatform();
  const reversed = index % 2 === 1;
  const indexLabel = String(index + 1).padStart(2, "0");
  const matched = skill ? project.technologies.includes(skill) : false;

  return (
    <article
      className={cn(
        "group grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20",
        matched && "rounded-3xl bg-mint/5 px-4 ring-1 ring-mint/60 sm:px-6",
      )}
    >
      <div className={cn("min-w-0 lg:col-span-5", reversed && "lg:col-start-8")}>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {indexLabel}
          <span className="mx-2 text-muted/70">/</span>
          {project.category}
        </p>
        <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
          {project.name}
        </h3>
        {matched && skill ? (
          <p className="mt-3 inline-flex rounded-full bg-gradient-to-r from-mint to-violet px-2.5 py-1 text-xs font-medium text-[#07111f]">
            Uses {skill}
          </p>
        ) : null}
        <p className="mt-4 text-base leading-7 text-ink-soft">{project.description}</p>
        {project.role ? (
          <p className="mt-4 text-sm font-medium text-ink">Role · {project.role}</p>
        ) : null}
        {project.contributions ? (
          <ul className="mt-6 space-y-3">
            {project.contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex gap-3 text-sm leading-6 text-ink-soft"
              >
                <span
                  className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-md bg-mint/15 text-[10px] font-bold text-mint"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-6 text-sm leading-6 text-muted">
          <span className="font-medium text-ink">Technology</span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          {project.technologies.join(", ")}
        </p>
      </div>
      <div
        className={cn(
          "min-w-0 transition-transform duration-500 ease-out motion-reduce:transition-none lg:col-span-7 lg:group-hover:-translate-y-1",
          reversed && "lg:col-start-1 lg:row-start-1",
        )}
      >
        <ProjectVisual variant={project.visual} label={project.name} />
      </div>
    </article>
  );
};
