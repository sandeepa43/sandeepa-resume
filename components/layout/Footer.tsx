import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { emailHref, site } from "@/data/site";

const footerLinks = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
  { label: "Email", href: emailHref, external: false },
] as const;

export const Footer = () => (
  <footer className="border-t border-line bg-paper-deep">
    <Container className="py-12 pb-28 md:pb-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-tight text-ink">{site.name}</p>
          <p className="mt-2 text-sm text-ink-soft">{site.title}</p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {footerLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              ) : (
                <a href={link.href} className="underline-offset-4 hover:text-ink hover:underline">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-sm text-muted">
        © <CopyrightYear /> {site.name}. All rights reserved.
      </p>
    </Container>
  </footer>
);
