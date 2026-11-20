export const site = {
  name: "Sandeepa Singh",
  title: "Independent Frontend Engineer",
  email: "sandeepasingh686@gmail.com",
  phone: "+918287781483",
  phoneDisplay: "+91 82877 81483",
  linkedin: "https://www.linkedin.com/in/sandeepa04/",
  github: "https://github.com/Sandeepa04",
  location: "India · Working Worldwide",
  availability: "Available for contracts & collaborations",
  availabilityDetail:
    "Open to long-term contracts, freelance projects and startup collaborations.",
  description:
    "Independent frontend engineer with 5+ years of experience helping startups design, build and scale production-ready web applications with React, Next.js and TypeScript. Based in India, working worldwide.",
  /**
   * Set NEXT_PUBLIC_SITE_URL in production, for example https://your-domain.com.
   * Used for canonical links, Open Graph, the sitemap and robots.txt.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
} as const;

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`;

export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "tools", label: "Skills", href: "#tools" },
  { id: "work", label: "Work", href: "#work" },
  { id: "services", label: "Services", href: "#services" },
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
  "React & Next.js Specialist",
  "India Based · Working Worldwide",
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
    | "New SaaS or MVP"
    | "Existing product"
    | "Design system"
    | "Long-term contract"
    | "Not sure yet";
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Dedicated Frontend Engineering",
    description:
      "Build and scale frontend applications with React, Next.js and TypeScript.",
    value:
      "For teams that need an engineer who can own a product surface, work with the people already on it, and ship production UI.",
    technologies: ["React.js", "Next.js", "TypeScript", "React Native"],
    projectType: "Long-term contract",
  },
  {
    number: "02",
    title: "SaaS MVP Development",
    description:
      "Help founders transform product ideas and Figma designs into functional, production-ready applications.",
    value:
      "For early products that need a working application in front of users, with a codebase that can keep growing.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "REST APIs"],
    projectType: "New SaaS or MVP",
  },
  {
    number: "03",
    title: "Frontend Architecture & Design Systems",
    description:
      "Create reusable component libraries, improve existing codebases and establish scalable frontend architecture.",
    value:
      "For products whose interface is moving faster than the code, and teams that need components they can share.",
    technologies: ["Storybook", "TypeScript", "Material UI", "Redux", "GraphQL"],
    projectType: "Design system",
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
  "I'm a frontend engineer who enjoys solving complex product problems through thoughtful UI engineering.",
  "Over the past five years, I've worked with startups and product teams to build applications from the ground up, improve existing products and create reusable frontend architectures.",
  "I enjoy working at the intersection of product thinking, design and engineering — where good architecture meets great user experience.",
  "I'm comfortable taking ownership of features, collaborating with designers and backend engineers, reviewing code and contributing to technical decisions.",
] as const;

export const workingPrinciples = [
  {
    title: "Independent",
    description:
      "I can take a frontend problem from requirements through implementation, and work without a large team around me.",
  },
  {
    title: "Product-focused",
    description:
      "I start from the workflow and the person using it, then shape the interface and the code around that.",
  },
  {
    title: "Remote collaboration",
    description:
      "I'm used to working with founders, designers and engineers across distributed teams and time zones.",
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
  "New SaaS or MVP",
  "Existing product",
  "Design system",
  "Long-term contract",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Under $3,000",
  "$3,000 – $8,000",
  "$8,000 – $20,000",
  "$20,000+",
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
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};
