export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "facebook";
};

export type SkillItem = {
  name: string;
  icon: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  status: "completed" | "ongoing";
  description: string;
};

export type ProjectItem = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  overview: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  backendGithubUrl?: string;
  challenges: string[];
  futurePlans: string[];
  image: string;
  initials: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "message-circle" | "map-pin";
};

export type StatItem = {
  label: string;
  value: number;
  suffix: string;
};

export type PortfolioData = {
  name: string;
  shortName: string;
  title: string[];
  bio: string;
  availability: string;
  heroNote: string;
  profileImage: string;
  resumePath: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  about: {
    title: string;
    paragraphs: string[];
    stats: StatItem[];
  };
  skillCategories: SkillCategory[];
  education: EducationItem[];
  projects: ProjectItem[];
  contact: {
    heading: string;
    intro: string;
    methods: ContactMethod[];
  };
  footerTagline: string;
};
