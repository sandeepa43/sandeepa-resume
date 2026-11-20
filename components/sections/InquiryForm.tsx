"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { budgetRanges, projectTypes, services, site } from "@/data/site";
import { usePlatform } from "@/components/platform/PlatformProvider";
import { cn } from "@/lib/cn";

type FormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  description: "",
};

const fieldOrder: Array<keyof FormValues> = [
  "name",
  "email",
  "company",
  "projectType",
  "budget",
  "description",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (oneLine(values.name).length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (oneLine(values.company).length < 2) {
    errors.company = "Add a company, startup, or “Independent”.";
  }

  if (!values.projectType) {
    errors.projectType = "Select a project type.";
  }

  if (!values.budget) {
    errors.budget = "Select a budget range, or “Not sure yet”.";
  }

  if (values.description.trim().length === 0) {
    errors.description = "Tell me a little about the project.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Add a sentence or two about what you're building.";
  }

  return errors;
};

const buildMailto = (values: FormValues) => {
  const subject = `Project inquiry from ${oneLine(values.name)} (${oneLine(values.company)})`;
  const body = [
    `Name: ${oneLine(values.name)}`,
    `Email: ${values.email.trim()}`,
    `Company: ${oneLine(values.company)}`,
    `Project type: ${values.projectType}`,
    `Estimated budget: ${values.budget}`,
    "",
    values.description.trim(),
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const fieldClass =
  "w-full rounded-xl border border-line bg-[#0c1628] px-3.5 py-3 text-base text-ink placeholder:text-muted/80";

type FieldProps = {
  id: keyof FormValues;
  label: string;
  error?: string;
  children: ReactNode;
};

const Field = ({ id, label, error, children }: FieldProps) => (
  <div>
    <label htmlFor={id} className="text-sm font-medium text-ink">
      {label}
      <span className="text-danger" aria-hidden="true">
        {" "}
        *
      </span>
      <span className="sr-only"> required</span>
    </label>
    <div className="mt-2">{children}</div>
    {error ? (
      <p id={`${id}-error`} className="mt-2 text-sm text-danger">
        {error}
      </p>
    ) : null}
  </div>
);

export const InquiryForm = () => {
  const { engagement } = usePlatform();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [opened, setOpened] = useState(false);
  const [typeLock, setTypeLock] = useState<{
    engagement: string | null;
    value: string;
  } | null>(null);

  const engagementType =
    services.find((service) => service.title === engagement)?.projectType ?? "";
  const projectType =
    typeLock && typeLock.engagement === engagement ? typeLock.value : engagementType;

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setOpened(false);
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate({ ...values, projectType });
    setErrors(nextErrors);
    setOpened(false);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const mailto = buildMailto({ ...values, projectType });
    if (mailto.length > 1800) {
      setErrors({
        description:
          "This description is too long for an email link. Shorten it, or email me directly.",
      });
      document.getElementById("description")?.focus();
      return;
    }

    window.location.href = mailto;
    setOpened(true);
  };

  const describedBy = (field: keyof FormValues) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <form aria-label="Project inquiry" noValidate onSubmit={handleSubmit} className="space-y-5">
      {engagement ? (
        <p className="rounded-2xl border border-violet/40 bg-violet/10 px-4 py-3 text-sm leading-6 text-ink">
          Engagement selected: <span className="font-medium text-mint">{engagement}</span>.
          The project type is filled from that choice. Change it if you need to.
        </p>
      ) : null}

      {Object.entries(errors).some(
        ([key, message]) => message && !(key === "projectType" && projectType),
      ) ? (
        <p role="alert" className="text-sm text-danger">
          Please fix the highlighted fields. You can also email me directly.
        </p>
      ) : null}

      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          placeholder="Your name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name")}
          aria-required="true"
          onChange={(event) => handleChange("name", event.target.value)}
          className={cn(fieldClass, errors.name && "border-danger")}
        />
      </Field>

      <Field id="email" label="Work email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          placeholder="you@company.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email")}
          aria-required="true"
          onChange={(event) => handleChange("email", event.target.value)}
          className={cn(fieldClass, errors.email && "border-danger")}
        />
      </Field>

      <Field id="company" label="Company / Startup" error={errors.company}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          placeholder="Company, startup, or Independent"
          aria-invalid={errors.company ? true : undefined}
          aria-describedby={describedBy("company")}
          aria-required="true"
          onChange={(event) => handleChange("company", event.target.value)}
          className={cn(fieldClass, errors.company && "border-danger")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="projectType"
          label="Project type"
          error={projectType ? undefined : errors.projectType}
        >
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={projectType}
              aria-invalid={errors.projectType && !projectType ? true : undefined}
              aria-describedby={describedBy("projectType")}
              aria-required="true"
              onChange={(event) => {
                setTypeLock({ engagement, value: event.target.value });
                handleChange("projectType", event.target.value);
              }}
              className={cn(
                fieldClass,
                "appearance-none pr-10",
                errors.projectType && "border-danger",
              )}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              size={16}
              className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>

        <Field id="budget" label="Estimated budget" error={errors.budget}>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={values.budget}
              aria-invalid={errors.budget ? true : undefined}
              aria-describedby={describedBy("budget")}
              aria-required="true"
              onChange={(event) => handleChange("budget", event.target.value)}
              className={cn(
                fieldClass,
                "appearance-none pr-10",
                errors.budget && "border-danger",
              )}
            >
              <option value="">Select a range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              size={16}
              className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>
      </div>

      <Field id="description" label="Project description" error={errors.description}>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          placeholder="What are you building, and what do you need help with?"
          aria-invalid={errors.description ? true : undefined}
          aria-describedby={describedBy("description")}
          aria-required="true"
          onChange={(event) => handleChange("description", event.target.value)}
          className={cn(
            fieldClass,
            "resize-y",
            errors.description && "border-danger",
          )}
        />
      </Field>

      <p className="text-sm leading-6 text-muted">
        A rough budget is enough. This opens your email app with the details above.
        Nothing is sent or stored from this site.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-mint to-violet px-6 text-sm font-medium text-[#07111f] transition duration-200 hover:from-amber hover:to-coral motion-reduce:transition-none sm:w-auto"
      >
        Let&apos;s Discuss Your Project
      </button>

      {opened ? (
        <p role="status" className="text-sm leading-6 text-ink">
          Your email app should open with this inquiry. If it doesn&apos;t, send the
          same note to{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
};
