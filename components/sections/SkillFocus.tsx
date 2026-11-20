"use client";

import { projects, projectsForSkill } from "@/data/site";
import { usePlatform } from "@/components/platform/PlatformProvider";

export const SkillFocus = () => {
  const { skill, clearSkill } = usePlatform();

  if (!skill) {
    return (
      <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
        Equip a skill and the projects that used it pick up a marker. The others stay
        visible.
      </p>
    );
  }

  const matches = projectsForSkill(skill);

  return (
    <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-mint/40 bg-mint/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-6 text-ink">
        <span className="font-medium text-mint">{skill}</span> shows up in{" "}
        {matches.length} of {projects.length} projects.
      </p>
      <button
        type="button"
        onClick={clearSkill}
        className="self-start text-sm text-ink underline-offset-4 hover:underline sm:self-auto"
      >
        Clear
      </button>
    </div>
  );
};
