"use client";

import { useState } from "react";
import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export const Process = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="process" aria-labelledby="process-heading" className="border-t border-line">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="05 — Process"
          title="From idea to production"
          headingId="process-heading"
          description="Four steps. Open any of them."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => {
            const active = index === current;
            return (
              <li key={step.number}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "h-full w-full rounded-3xl border p-5 text-left transition duration-200 motion-reduce:transition-none",
                    active
                      ? "border-mint bg-gradient-to-br from-mint/15 via-violet/15 to-coral/10"
                      : "border-line bg-paper-raised/50 hover:border-violet",
                  )}
                >
                  <span
                    className={cn(
                      "font-serif text-4xl",
                      active ? "text-mint" : "text-ink",
                    )}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{step.description}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};
