"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nodes = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const next = [...visibility.entries()].sort((a, b) => b[1] - a[1])[0];
        if (next && next[1] > 0) {
          setActive(next[0]);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.75],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => {
    setOpen((current) => !current);
  };

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200 motion-reduce:transition-none",
        scrolled || open
          ? "border-line bg-[#07111f]/92 backdrop-blur-md"
          : "border-transparent bg-[#07111f]/55 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-4 px-6 md:px-10">
        <a href="#home" className="font-serif text-lg tracking-tight text-ink" onClick={handleNavigate}>
          <span className="sm:hidden">Sandeepa</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-4 lg:gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={cn(
                "text-sm transition-colors duration-200 motion-reduce:transition-none",
                active === link.id ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {active === link.id ? (
                <span
                  className="mr-1.5 inline-block size-1 translate-y-[-1px] rounded-full bg-accent align-middle"
                  aria-hidden="true"
                />
              ) : null}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-gradient-to-r from-mint to-violet px-3.5 text-sm font-medium text-[#07111f] transition duration-200 hover:from-amber hover:to-coral motion-reduce:transition-none sm:min-h-11 sm:px-4"
          >
            Let&apos;s Talk
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={handleToggleMenu}
          >
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>

    </header>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-paper px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block border-b border-line py-4 font-serif text-4xl tracking-tight text-ink"
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={handleNavigate}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};
