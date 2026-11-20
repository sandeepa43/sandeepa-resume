"use client";

import { useEffect, useState } from "react";

export const MobileCta = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry?.isIntersecting ?? false);
      },
      { threshold: 0.12 },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex justify-center border-transparent px-4 md:hidden">
      <a
        href="#contact"
        className="pointer-events-auto inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-mint to-violet px-5 text-sm font-medium text-[#07111f] shadow-[0_16px_40px_-12px_rgba(139,108,255,0.85)]"
      >
        Let&apos;s Discuss Your Project
      </a>
    </div>
  );
};
