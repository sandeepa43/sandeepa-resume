import type { ReactNode } from "react";
import type { ProjectVisual as ProjectVisualName } from "@/data/site";
import { StudyBar, StudyFrame } from "@/components/ui/StudyFrame";

type ProjectVisualProps = {
  variant: ProjectVisualName;
  label: string;
};

const EducatorStudy = () => (
  <div className="grid grid-cols-5 gap-3">
    <div className="col-span-2 space-y-2">
      {["Onboarding", "Courses", "Webinars", "Learners"].map((item, index) => (
        <div
          key={item}
          className={
            index === 1
              ? "rounded-lg bg-ink px-3 py-2 text-xs text-paper"
              : "rounded-lg border border-line px-3 py-2 text-xs text-ink-soft"
          }
        >
          {item}
        </div>
      ))}
    </div>
    <div className="col-span-3 space-y-2">
      {["Course module", "Live session", "Learner list"].map((item) => (
        <div
          key={item}
          className="rounded-xl border border-line bg-[#101a2e] px-3 py-3"
        >
          <p className="text-xs font-medium text-ink">{item}</p>
          <StudyBar className="mt-3 w-4/5" />
          <StudyBar className="mt-2 w-1/2" />
        </div>
      ))}
    </div>
  </div>
);

const panels = ["Onboarding", "People", "Sales", "Operations"] as const;

const CrmStudy = () => (
  <div className="grid grid-cols-2 gap-2">
    {panels.map((panel, index) => (
      <div key={panel} className="rounded-xl border border-line bg-[#101a2e] p-3">
        <p className="text-xs font-medium text-ink">{panel}</p>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[40, 70, 55, 85].map((height, barIndex) => (
            <span
              key={`${panel}-${height}`}
              className={
                index === barIndex
                  ? "w-full rounded-sm bg-accent/80"
                  : "w-full rounded-sm bg-ink/10"
              }
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const requests = [
  { name: "RFQ", stage: "Open" },
  { name: "Purchase order", stage: "Review" },
  { name: "Supplier record", stage: "Draft" },
] as const;

const ProcurementStudy = () => (
  <div className="overflow-hidden rounded-xl border border-line bg-[#101a2e]">
    <div className="grid grid-cols-2 border-b border-line px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-muted">
      <span>Request</span>
      <span>Stage</span>
    </div>
    {requests.map((request) => (
      <div
        key={request.name}
        className="grid grid-cols-2 items-center border-b border-line px-3 py-3 last:border-b-0"
      >
        <span className="text-sm text-ink">{request.name}</span>
        <span className="w-fit rounded-full border border-line px-2 py-0.5 text-xs text-ink-soft">
          {request.stage}
        </span>
      </div>
    ))}
  </div>
);

const TradingStudy = () => (
  <div className="grid gap-3 sm:grid-cols-5">
    <div className="rounded-xl border border-line bg-[#101a2e] p-3 sm:col-span-3">
      <p className="text-xs font-medium text-ink">Chart</p>
      <svg viewBox="0 0 320 120" className="mt-3 h-28 w-full" fill="none" aria-hidden="true">
        <path
          d="M0 86C40 86 52 42 92 50s52 48 92 22 48-62 136-42"
          stroke="#3EF0C2"
          strokeWidth="2.5"
        />
        <path
          d="M0 98C40 98 52 62 92 70s52 40 92 18 48-48 136-30"
          stroke="#8B6CFF"
          strokeOpacity="0.2"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div className="space-y-2 sm:col-span-2">
      {["Watch", "Order", "Position"].map((item) => (
        <div key={item} className="rounded-xl border border-line bg-[#101a2e] px-3 py-3">
          <p className="text-xs font-medium text-ink">{item}</p>
          <StudyBar className="mt-2 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);

const studies: Record<ProjectVisualName, () => ReactNode> = {
  educator: EducatorStudy,
  crm: CrmStudy,
  procurement: ProcurementStudy,
  trading: TradingStudy,
};

export const ProjectVisual = ({ variant, label }: ProjectVisualProps) => {
  const Study = studies[variant];

  return (
    <div className="min-w-0" aria-hidden="true">
      <StudyFrame label={label}>
        <Study />
      </StudyFrame>
    </div>
  );
};
