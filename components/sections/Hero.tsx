import { ArrowRight } from "lucide-react";
import { heroFacts, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProfileDeck } from "@/components/ui/ProfileDeck";

export const Hero = () => (
  <section id="home" aria-labelledby="home-heading" className="relative overflow-hidden border-b border-line">
    <div
      className="pointer-events-none absolute -top-28 right-[-4rem] size-[28rem] rounded-full bg-violet/30 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute bottom-0 left-[-6rem] size-[22rem] rounded-full bg-coral/20 blur-3xl"
      aria-hidden="true"
    />
    <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-16 lg:py-24">
      <div className="lg:col-span-7">
        <p className="flex items-start gap-2.5 text-xs font-medium tracking-[0.14em] text-mint uppercase sm:items-center sm:tracking-[0.18em]">
          <span className="relative mt-1 flex size-2 sm:mt-0" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-mint opacity-40 motion-safe:animate-ping" />
            <span className="relative size-2 rounded-full bg-mint" />
          </span>
          <span>
            <span className="sm:hidden">
              Available for contracts
              <br />
              & collaborations
            </span>
            <span className="hidden sm:inline">{site.availability}</span>
          </span>
        </p>
        <h1
          id="home-heading"
          className="mt-6 max-w-[12em] font-serif text-[2.65rem] leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.35rem]"
        >
          Building thoughtful digital products with modern{" "}
          <em className="bg-gradient-to-r from-mint via-violet to-coral bg-clip-text text-transparent italic">
            frontend engineering.
          </em>
        </h1>
        <span
          className="mt-7 block h-1 w-16 rounded-full bg-gradient-to-r from-mint via-violet to-coral"
          aria-hidden="true"
        />
        <p className="mt-7 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
          I&apos;m Sandeepa, an independent frontend engineer with 5+ years of
          experience helping startups turn ideas into scalable, production-ready
          web applications.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" className="w-full sm:w-auto">
            Start a Project
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
          <Button href="#tools" variant="secondary" className="w-full sm:w-auto">
            Explore the skill board
          </Button>
        </div>
        <ul className="mt-12 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
          {heroFacts.map((fact) => (
            <li
              key={fact}
              className="border-l-2 border-violet pl-4 text-sm leading-6 font-medium text-ink"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <ProfileDeck />
      </div>
    </Container>
  </section>
);
