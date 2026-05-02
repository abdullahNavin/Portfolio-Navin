import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  name: "Abdullah Al Fayed Navin",
  shortName: "Navin.",
  title: [
    "Full Stack Developer",
    "Next.js Enthusiast",
    "Backend Engineer",
    "Open Source Contributor",
  ],
  bio: "I build fast, scalable, and beautiful web applications from frontend to backend.",
  availability: "👋 Available for Work",
  heroNote: "",
  profileImage: "/profile.png",
  resumePath: "/resume.pdf",
  navItems: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/abdullahNavin",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/navin-26-3-navin/",
      icon: "linkedin",
    },
    {
      label: "Twitter/X",
      href: "https://x.com/fayedHp",
      icon: "twitter",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/abdullah.fayed.940",
      icon: "facebook",
    },
  ],
  about: {
    title: "Passionate developer, lifelong learner.",
    paragraphs: [
      "I'm Abdullah Al Fayed Navin, a Full Stack Developer from Chittagong, Bangladesh. My journey into programming started with curiosity and has evolved into a deep passion for building things that live on the internet. I love crafting elegant solutions to complex problems, whether it's designing a pixel-perfect UI or architecting a robust backend API.",
      "Beyond code, I'm a history enthusiast — currently pursuing a Bachelor's in History, which gives me a unique perspective on problem-solving and storytelling. When I'm not coding, you'll find me exploring new technologies, reading, or playing football with friends.",
    ],
    stats: [
      { label: "Projects Completed", value: 3, suffix: "+" },
      { label: "Years of Learning", value: 2, suffix: "+" },
      { label: "Technologies Mastered", value: 10, suffix: "+" },
    ],
  },
  skillCategories: [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "react", level: 94 },
        { name: "Next.js", icon: "nextjs", level: 95 },
        { name: "TypeScript", icon: "typescript", level: 92 },
        { name: "Tailwind CSS", icon: "tailwind", level: 93 },
        { name: "HTML5", icon: "html5", level: 96 },
        { name: "CSS3", icon: "css3", level: 90 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "nodejs", level: 91 },
        { name: "Express", icon: "express", level: 88 },
        { name: "REST API", icon: "api", level: 90 },
        { name: "JWT", icon: "shield", level: 87 },
        { name: "Better Auth", icon: "lock", level: 82 },
        { name: "SQL", icon: "sql", level: 85 },
      ],
    },
    {
      title: "Database & ORM",
      items: [
        { name: "MongoDB", icon: "mongodb", level: 89 },
        { name: "PostgreSQL", icon: "postgresql", level: 86 },
        { name: "Prisma", icon: "prisma", level: 88 },
      ],
    },
    {
      title: "DevOps & Tools",
      items: [
        { name: "Git", icon: "git", level: 92 },
        { name: "Docker", icon: "docker", level: 84 },
        { name: "VS Code", icon: "vscode", level: 95 },
        { name: "Figma", icon: "figma", level: 80 },
        { name: "Postman", icon: "postman", level: 88 },
        { name: "Vercel", icon: "vercel", level: 90 },
      ],
    },
  ],
  education: [
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Bakolia Government College, Chittagong",
      duration: "2022",
      status: "completed",
      description: "Completed Higher Secondary Certificate with distinction.",
    },
    {
      degree: "Bachelor of Arts in History",
      institution: "National University, Bangladesh",
      duration: "2022 – Present",
      status: "ongoing",
      description:
        "Pursuing a BA in History, developing a unique analytical perspective that enriches my approach to problem-solving and storytelling in tech.",
    },
  ],
  projects: [
    {
      slug: "ecofy",
      name: "Ecofy",
      subtitle: "Ecofy is a community-driven platform to share, vote on, and fund green ideas that make a real difference in the world.",
      description:
        "Ecofy is a community-driven platform to share, vote on, and fund green ideas that make a real difference in the world.",
      overview: [
        "Ecofy is a comprehensive sustainability idea-sharing platform designed to foster community-driven innovation in environmental and social sustainability. The frontend application, built with Next.js 16 and modern web technologies, serves as the user interface for a platform where individuals can discover, share, and monetize sustainable ideas.",

        "The platform enables users to: Browse and search through a curated collection of sustainability ideas Contribute their own ideas through a structured submission workflow Engage with the community via comments and voting systems Access premium content through a Stripe-powered payment system Manage personal profiles and track idea performance Participate in moderation as administrators This frontend application communicates with the Ecofy backend API to handle authentication, data management, and payment processing, providing a seamless user experience across desktop and mobile devices.",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Better Auth",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Stripe",
        "shadcn/ui",
        "zod",
      ],
      liveUrl: "https://ecofy-pro.vercel.app/",
      githubUrl: "https://github.com/abdullahNavin/Ecofy_Frontend",
      backendGithubUrl: "https://github.com/abdullahNavin/Ecofy_Backend",
      challenges: [
        "Implementing filter system.",
        "Designing a complex relational DB schema that scales cleanly with growing user data.",
      ],
      futurePlans: [
        "Add real-time messaging.",
        "Add notification system.",
        "Build a mobile companion app.",
      ],
      image: "/project-ecofy.png",
      initials: "DL",
    },
    {
      slug: "skillBridge",
      name: "SkillBridge",
      subtitle: "Skill Bridge is a full-stack tutoring marketplace",
      description:
        "Skill Bridge is a full-stack tutoring marketplace.connecting students with tutors for bookings, reviews, and profile management through intuitive dashboards.",
      overview: [
        "Skill Bridge is a full-stack tutoring marketplace. It connects students with tutors for bookings, reviews, and profile management through intuitive dashboards.",
        "The frontend application is built with Next.js 16 and modern web technologies, serving as the user interface for the platform.",
        "Skill Bridge is a comprehensive tutoring platform that provides: Multi-role Authentication: Student, Tutor, and Admin roles with Better Auth, Tutor Discovery: Browse and filter tutors by category, price, and rating, Booking System: Students can book sessions with tutors, User Profiles: Students and tutors can manage their profiles, Reviews & Ratings: Rate tutors after sessions, Admin Dashboard: Manage users, bookings, and categories, Real-time Notifications: Toast notifications for user feedback"
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Better Auth",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "shadcn/ui",
        "zod",
      ],
      liveUrl: "https://skill-ridge-client.vercel.app/",
      githubUrl: "https://github.com/abdullahNavin/SkillBridge-client",
      backendGithubUrl: "https://github.com/abdullahNavin/SkillBridge",
      challenges: [
        "Booking slot and reschedule system implementation.",
        "Designing a complex relational DB schema that scales cleanly with growing user data.",
        "Managing booking state predictably across checkout and admin interfaces.",
      ],
      futurePlans: [
        "Add stripe payment gateway integration.",
        "Add real-time messaging.",
        "Add notification system.",
        "Expand with an AI-powered tutor and skill suggestion system.",
      ],
      image: "/project-skillBridge.png",
      initials: "SE",
    },
    {
      slug: "taskflow",
      name: "TaskFlow",
      subtitle: "Kanban-style project management with team visibility.",
      description:
        "A beautiful Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features.",
      overview: [
        "TaskFlow helps teams organize delivery with a board-based workflow, collaborative visibility, and analytics that make progress easier to track.",
        "It was shaped around fast interactions, clear team ownership, and infrastructure that supports evolving collaboration features over time.",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Framer Motion",
      ],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [
        "Optimizing drag-and-drop UX performance as boards become dense with cards.",
        "Building optimistic UI updates that stay consistent with server state.",
      ],
      futurePlans: [
        "Add a Gantt chart planning view.",
        "Introduce Slack and calendar integrations.",
        "Add a mobile app companion.",
      ],
      image: "/project-taskflow.png",
      initials: "TF",
    },
  ],
  contact: {
    heading: "Let's Work Together",
    intro:
      "Have an idea, role, or collaboration in mind? Let's talk about building something thoughtful and high-impact.",
    methods: [
      {
        label: "Email",
        value: "navinfayed26@gmail.com",
        href: "mailto:navinfayed26@gmail.com",
        icon: "mail",
      },
      {
        label: "Phone",
        value: "+880 1715175021",
        href: "tel:+8801715175021",
        icon: "phone",
      },
      {
        label: "WhatsApp",
        value: "+880 1715175021",
        href: "https://wa.me/8801715175021",
        icon: "message-circle",
      },
      {
        label: "Location",
        value: "Chittagong, Bangladesh",
        href: "https://maps.google.com/?q=Chittagong,Bangladesh",
        icon: "map-pin",
      },
    ],
  },
  footerTagline: "Building the web, one commit at a time.",
};

export const projectsBySlug = Object.fromEntries(
  portfolioData.projects.map((project) => [project.slug, project]),
);
