import { site, emailHref } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/sections/InquiryForm";

const contactLinks = [
  { label: "Email", value: site.email, href: emailHref, external: false },
  { label: "LinkedIn", value: "linkedin.com/in/sandeepa04", href: site.linkedin, external: true },
  { label: "GitHub", value: "github.com/Sandeepa04", href: site.github, external: true },
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}`, external: false },
] as const;

export const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="border-t border-line bg-paper-deep">
    <Container className="py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="06 — Contact"
            title="Have a product in mind? Let's build it."
            headingId="contact-heading"
            description="Whether you're building a new SaaS product, scaling an existing application or looking for a dedicated frontend engineering partner, I'd love to hear about it."
          />
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            {site.availabilityDetail}
          </p>
          <ul className="mt-10 space-y-5">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {link.label}
                </p>
                {link.external ? (
                  <ExternalLink href={link.href} className="mt-1 text-base text-ink">
                    {link.value}
                  </ExternalLink>
                ) : (
                  <a
                    href={link.href}
                    className="mt-1 inline-flex text-base text-ink underline-offset-4 hover:underline"
                  >
                    {link.value}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{site.location}</p>
          <noscript>
            <p className="mt-6 text-sm leading-6 text-ink">
              This form uses JavaScript only to open your email app. You can write
              to {site.email} directly.
            </p>
          </noscript>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </Container>
  </section>
);
