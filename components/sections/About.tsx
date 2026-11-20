import { aboutParagraphs, workingPrinciples } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="border-t border-line">
    <Container className="py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="04 — About"
            title="A little about how I work"
            headingId="about-heading"
          />
        </div>
        <div className="space-y-5 lg:col-span-7">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-ink-soft sm:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="text-base leading-8 text-ink sm:text-lg">
            If this way of working fits,{" "}
            <a href="#contact" className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent">
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </div>
      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workingPrinciples.map((principle, index) => (
          <li
            key={principle.title}
            className={cn(
              "rounded-3xl border border-line bg-paper-raised/70 p-5",
              index === 0 && "border-t-2 border-t-mint",
              index === 1 && "border-t-2 border-t-violet",
              index === 2 && "border-t-2 border-t-coral",
              index === 3 && "border-t-2 border-t-amber",
            )}
          >
            <h3 className="font-serif text-2xl tracking-tight text-ink">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-soft">{principle.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
