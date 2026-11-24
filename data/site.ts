export const site = {
  name: "Sandeepa Singh",
  title: "Frontend Engineer",
  email: "sandeepasingh686@gmail.com",
  phone: "+918287781483",
  phoneDisplay: "+91 82877 81483",
  linkedin: "https://www.linkedin.com/in/sandeepa04/",
  github: "https://github.com/Sandeepa04",
  location: "India · Open to remote roles",
  availability: "Open to full-time roles",
  availabilityDetail:
    "Looking for a frontend engineering role on a product team. Open to remote work and teams hiring in India.",
  description:
    "Frontend engineer with 5+ years of experience building production web applications with React, Next.js and TypeScript. Based in India and open to full-time roles.",
  /**
   * Set NEXT_PUBLIC_SITE_URL in production, for example https://your-domain.com.
   * Used for canonical links, Open Graph, the sitemap and robots.txt.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
} as const;

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent("Opportunity for Sandeepa Singh")}`;

export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "tools", label: "Skills", href: "#tools" },
  { id: "work", label: "Work", href: "#work" },
  { id: "services", label: "Focus", href: "#services" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const featuredSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "GraphQL",
] as const;

export const heroFacts = [
  "5+ Years Experience",
  "React & Next.js",
  "Open to full-time roles",
] as const;

export type ProjectVisual = "educator" | "crm" | "procurement" | "trading";

export type Project = {
  name: string;
  category: string;
  description: string;
  contributions?: readonly string[];
  technologies: readonly string[];
  role?: string;
  visual: ProjectVisual;
};

export const projects: readonly Project[] = [
  {
    name: "Classplus DIY",
    category: "EdTech / SaaS Platform",
    description:
      "Worked on an educator platform that enabled teachers and content creators to launch their own digital learning experiences.",
    contributions: [
      "Developed frontend experiences for educator onboarding and platform workflows.",
      "Built interfaces supporting courses, webinars and student management.",
      "Collaborated on product improvements and feature development.",
    ],
    technologies: ["React.js", "JavaScript", "TypeScript", "Redux"],
    visual: "educator",
  },
  {
    name: "Multiverse",
    category: "Internal CRM / Business Operations",
    description:
      "Contributed to a collection of internal CRM and operational dashboards used across different business functions.",
    contributions: [
      "Developed dashboards for customer onboarding, HR, sales, marketing and operations.",
      "Built responsive interfaces and reusable components.",
      "Worked on React web and React Native applications.",
      "Helped improve frontend maintainability and user experience.",
    ],
    technologies: ["React.js", "React Native", "TypeScript", "Redux"],
    visual: "crm",
  },
  {
    name: "Capgrid",
    category: "B2B SaaS / Procurement Technology",
    description:
      "Worked on sourcing and operations platforms supporting supplier and procurement workflows.",
    contributions: [
      "Developed reusable frontend components for complex business workflows.",
      "Worked on sourcing, RFQ, purchase order and supplier operations interfaces.",
      "Contributed to a shared component library and Storybook design system.",
      "Worked with GraphQL and frontend state management.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Redux",
      "Material UI",
      "Storybook",
    ],
    visual: "procurement",
  },
  {
    name: "Algotest",
    category: "Fintech / Trading Technology",
    role: "Frontend Engineer",
    description:
      "Contributing to frontend engineering for a fintech product, focusing on building responsive interfaces and reliable user experiences.",
    technologies: ["React.js", "TypeScript", "Modern frontend tooling"],
    visual: "trading",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  value: string;
  technologies: readonly string[];
  projectType:
    | "Product team"
    | "Startup"
    | "Design system team"
    | "Full-time role"
    | "Not sure yet";
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Product Frontend",
    description:
      "Own product surfaces in React, Next.js and TypeScript.",
    value:
      "I like joining a team that already has a product and needs someone who can ship UI, review code, and stay close to the people using it.",
    technologies: ["React.js", "Next.js", "TypeScript", "React Native"],
    projectType: "Product team",
  },
  {
    number: "02",
    title: "SaaS Interfaces",
    description:
      "Turn product ideas and designs into working application screens.",
    value:
      "I've built onboarding, dashboards and workflows for startups that needed a reliable frontend in production.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "REST APIs"],
    projectType: "Startup",
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Build shared components and keep a growing interface consistent.",
    value:
      "I'm comfortable in a codebase that needs a component library, Storybook, and clearer frontend structure.",
    technologies: ["Storybook", "TypeScript", "Material UI", "Redux", "GraphQL"],
    projectType: "Design system team",
  },
];

export const projectsForSkill = (skill: string) =>
  projects.filter((project) => project.technologies.includes(skill));

export type TechGroup = {
  label: string;
  items: readonly string[];
};

export const techGroups: readonly TechGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "UI & Design Systems",
    items: ["Material UI", "SCSS", "Storybook", "Responsive Design"],
  },
  {
    label: "State Management",
    items: ["Redux", "Redux Toolkit", "Apollo Client"],
  },
  {
    label: "Backend Integration",
    items: ["REST APIs", "GraphQL", "Firebase"],
  },
  {
    label: "Development",
    items: ["Git", "GitHub", "Vite", "Webpack", "Jest", "React Testing Library"],
  },
];

export const aboutParagraphs = [
  "I'm a frontend engineer who enjoys solving product problems through careful UI engineering.",
  "Over the past five years I've worked with startups and product teams, building applications, improving existing products, and creating reusable frontend architecture.",
  "I like the place where product, design and engineering meet.",
  "I'm looking for a full-time role where I can own features, work with designers and backend engineers, and contribute to technical decisions.",
] as const;

export const workingPrinciples = [
  {
    title: "Ownership",
    description:
      "I take a feature from the requirement through implementation and stay with it after it ships.",
  },
  {
    title: "Product-focused",
    description:
      "I start from the workflow and the person using it, then shape the interface and the code around that.",
  },
  {
    title: "Team collaboration",
    description:
      "I'm used to working with designers and engineers on distributed product teams.",
  },
  {
    title: "Built to maintain",
    description:
      "I favor clear structure, reusable components and code the next person on the project can change.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, requirements and product goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define scope, technical approach and implementation milestones.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop, test and refine the frontend experience.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Deploy, document and support the product.",
  },
] as const;

export const projectTypes = [
  "Product team",
  "Startup",
  "Design system team",
  "Full-time role",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Remote",
  "Hybrid",
  "On-site in India",
  "Open to relocation",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "Frontend architecture",
    "Design systems",
  ],
};
