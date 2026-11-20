import { projects } from "@/data/site";
import { SkillFocus } from "@/components/sections/SkillFocus";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const SelectedWork = () => (
  <section id="work" aria-labelledby="work-heading">
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="02 — Work"
        title="Selected Work"
        headingId="work-heading"
        description="A few products and engineering experiences I've contributed to. The frames beside them are interface studies, not screenshots."
      />
      <SkillFocus />
      <div className="mt-6 border-t border-line">
        {projects.map((project, index) => (
          <div key={project.name} className="border-b border-line">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </Container>
  </section>
);
