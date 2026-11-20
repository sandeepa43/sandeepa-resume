"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type PlatformContextValue = {
  skill: string | null;
  engagement: string | null;
  toggleSkill: (skill: string) => void;
  clearSkill: () => void;
  toggleEngagement: (title: string) => void;
};

const PlatformContext = createContext<PlatformContextValue | null>(null);

type PlatformProviderProps = {
  children: ReactNode;
};

export const PlatformProvider = ({ children }: PlatformProviderProps) => {
  const [skill, setSkill] = useState<string | null>(null);
  const [engagement, setEngagement] = useState<string | null>(null);

  const value = useMemo<PlatformContextValue>(
    () => ({
      skill,
      engagement,
      toggleSkill: (nextSkill) => {
        setSkill((current) => (current === nextSkill ? null : nextSkill));
      },
      clearSkill: () => setSkill(null),
      toggleEngagement: (title) => {
        setEngagement((current) => (current === title ? null : title));
      },
    }),
    [skill, engagement],
  );

  return (
    <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const value = useContext(PlatformContext);
  if (!value) {
    throw new Error("usePlatform must be used within PlatformProvider");
  }
  return value;
};
