"use client";

import { services } from "@/data/site";
import { usePlatform } from "@/components/platform/PlatformProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export const Services = () => {
  const { engagement, toggleEngagement } = usePlatform();

  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-line">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="03 — Services"
          title="How I can help your team"
          headingId="services-heading"
          description="Choose an engagement. It carries into the inquiry so we start from the same brief."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service) => {
            const selected = engagement === service.title;
            return (
              <div
                key={service.title}
                className={cn(
                  "rounded-3xl p-px",
                  selected
                    ? "bg-gradient-to-br from-mint via-violet to-coral shadow-[0_0_40px_-16px_rgba(139,108,255,0.9)]"
                    : "bg-line",
                )}
              >
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleEngagement(service.title)}
                  className="flex h-full w-full flex-col rounded-[23px] bg-paper-raised p-7 text-left sm:p-8"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-[0.18em] text-amber">
                      {service.number}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase",
                        selected ? "bg-mint text-[#07111f]" : "text-muted",
                      )}
                    >
                      {selected ? "Selected" : "Select"}
                    </span>
                  </span>
                  <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.03em] text-ink md:min-h-[6.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-ink-soft">{service.description}</p>
                  <p className="mt-4 text-sm leading-6 text-ink">{service.value}</p>
                  <p className="mt-auto pt-8 text-sm leading-6 text-muted">
                    {service.technologies.join(" · ")}
                  </p>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            {engagement
              ? `${engagement} is selected. Tell me about the product and the timeline.`
              : "Tell me about the product, the timeline and how you prefer to work."}
          </p>
          <Button href="#contact">Discuss Your Project</Button>
        </div>
      </Container>
    </section>
  );
};
