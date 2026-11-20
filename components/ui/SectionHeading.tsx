type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  headingId: string;
  description?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  headingId,
  description,
}: SectionHeadingProps) => (
  <div className="max-w-2xl">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {eyebrow}
    </p>
    <h2
      id={headingId}
      className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl"
    >
      {title}
    </h2>
    {description ? (
      <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
        {description}
      </p>
    ) : null}
  </div>
);
