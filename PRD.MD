# Product Requirements Document (PRD)
## Personal Portfolio Website — Abdullah Al Fayed Navin

**Version:** 1.0  
**Date:** April 30, 2026  
**Author:** Abdullah Al Fayed Navin  
**Status:** Draft

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Page & Section Specifications](#5-page--section-specifications)
   - 5.1 [Navigation Bar](#51-navigation-bar)
   - 5.2 [Hero Section](#52-hero-section)
   - 5.3 [About Me Section](#53-about-me-section)
   - 5.4 [Skills Section](#54-skills-section)
   - 5.5 [Education Section](#55-education-section)
   - 5.6 [Projects Section](#56-projects-section)
   - 5.7 [Project Detail Page](#57-project-detail-page)
   - 5.8 [Contact Section](#58-contact-section)
   - 5.9 [Footer](#59-footer)
6. [Animation & Interaction Specifications](#6-animation--interaction-specifications)
7. [Routing & Navigation](#7-routing--navigation)
8. [Responsiveness Requirements](#8-responsiveness-requirements)
9. [Performance Requirements](#9-performance-requirements)
10. [Accessibility Requirements](#10-accessibility-requirements)
11. [Deployment](#11-deployment)
12. [Future Improvements](#12-future-improvements)

---

## 1. Project Overview

### 1.1 Purpose

A modern, animated, dark-themed personal portfolio website for **Abdullah Al Fayed Navin**, a Full Stack Developer based in Chittagong, Bangladesh. The site will serve as a professional online presence to showcase skills, projects, education, and contact information to potential employers, clients, and collaborators.

### 1.2 Goals

- Establish a strong professional online identity
- Showcase technical skills and project work effectively
- Provide a smooth, high-quality user experience with modern animations
- Ensure full responsiveness across all devices
- Make it easy for visitors to get in touch or download a resume

### 1.3 Target Audience

- Hiring managers and recruiters
- Potential freelance clients
- Fellow developers and collaborators
- General professional network

### 1.4 Design Inspiration

- Reference: [https://athos-dark.framer.ai/](https://athos-dark.framer.ai/)
- Style: Dark, minimal, sophisticated, animation-heavy, high-end feel

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR/SSG, routing, performance |
| Language | TypeScript | Type safety throughout codebase |
| Styling | Tailwind CSS | Utility-first responsive styling |
| Animations | Framer Motion | Component-level animations & page transitions |
| Animations | GSAP (GreenSock) | Complex scroll-based and timeline animations |
| Smooth Scroll | Lenis | Smooth, buttery scroll experience |
| Icons | Lucide React / React Icons | UI icons and social media icons |
| Font | Geist / Inter (Google Fonts) | Clean, modern typography |
| Deployment | Vercel | Hosting and CI/CD |

### 2.1 Package Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "gsap": "^3.x",
    "@studio-freight/lenis": "^1.x",
    "lucide-react": "^0.x",
    "react-icons": "^5.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

---

## 3. Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx                  # Root layout with Lenis + global providers
│   ├── page.tsx                    # Main single-page (all sections)
│   ├── globals.css                 # Global styles + Tailwind base
│   └── projects/
│       └── [slug]/
│           └── page.tsx            # Dynamic project detail page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SocialLinks.tsx
│   │   └── AnimatedText.tsx
│   └── providers/
│       └── LenisProvider.tsx
│
├── data/
│   ├── projects.ts                 # All project data
│   ├── skills.ts                   # Skills data with categories
│   └── education.ts                # Education data
│
├── hooks/
│   ├── useScrollAnimation.ts       # Reusable GSAP scroll hook
│   └── useLenis.ts                 # Lenis scroll context hook
│
├── lib/
│   └── utils.ts                    # clsx + tw-merge utility
│
├── public/
│   ├── images/
│   │   ├── avatar-placeholder.png
│   │   └── projects/
│   │       ├── project-1.png
│   │       ├── project-2.png
│   │       └── project-3.png
│   └── resume.pdf                  # Resume (placeholder for now)
│
├── types/
│   └── index.ts                    # Global TypeScript interfaces
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 4. Design System

### 4.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0a0a0a` | Main page background |
| `--bg-secondary` | `#111111` | Cards, sections alternate |
| `--bg-card` | `#161616` | Card backgrounds |
| `--accent-primary` | `#e5e5e5` | Primary text, key highlights |
| `--accent-secondary` | `#888888` | Secondary text, subtitles |
| `--accent-glow` | `#ffffff` | Glow effects, hover states |
| `--border` | `#2a2a2a` | Borders, dividers |
| `--highlight` | `#c8f55a` | CTA buttons, active states (lime/chartreuse) |

> **Note:** The highlight color can be adjusted to preference — alternatives include electric blue `#5a9cf5` or amber `#f5c842`.

### 4.2 Typography

| Element | Font | Size | Weight |
|---|---|---|---|
| Name / Hero Title | Geist / Inter | `clamp(3rem, 8vw, 7rem)` | 800 |
| Section Headings | Geist / Inter | `clamp(2rem, 5vw, 4rem)` | 700 |
| Body Text | Geist / Inter | `1rem / 1.125rem` | 400 |
| Captions / Labels | Geist Mono | `0.75rem / 0.875rem` | 400 |

### 4.3 Spacing Scale

Follow Tailwind's default spacing scale. Key section paddings:
- Section vertical padding: `py-24 md:py-32`
- Container max-width: `max-w-6xl mx-auto px-6`

### 4.4 Border Radius

- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Skill badges: `rounded-lg`
- Images: `rounded-2xl`

### 4.5 Shadows & Glows

```css
/* Card hover glow */
box-shadow: 0 0 40px rgba(255, 255, 255, 0.04);

/* Accent button glow */
box-shadow: 0 0 20px rgba(200, 245, 90, 0.3);
```

---

## 5. Page & Section Specifications

### 5.1 Navigation Bar

**Component:** `components/layout/Navbar.tsx`

#### Layout
- Fixed to top of viewport (`position: fixed; top: 0; z-index: 50`)
- Full width with a frosted glass effect: `backdrop-blur-md bg-black/60 border-b border-white/5`
- Left: Logo / Name — **"Navin."** in styled text
- Right: Nav links + optional CTA button

#### Nav Links
- Home
- About
- Skills
- Education
- Projects
- Contact

#### Behavior
- **Desktop:** Horizontal link list with hover underline animation (Framer Motion `layoutId` underline)
- **Mobile:** Hamburger menu icon; slide-in side drawer from the right with staggered link animations
- **Scroll behavior:** Navbar background opacity increases on scroll (starts transparent, becomes opaque)
- Active section highlighted in navbar via Intersection Observer

#### Mobile Hamburger
- Icon: animated 3-line → X using Framer Motion
- Overlay: `fixed inset-0 bg-black/80 backdrop-blur-sm`
- Drawer: slides in from right, `w-3/4 max-w-xs`

---

### 5.2 Hero Section

**Component:** `components/sections/Hero.tsx`

#### Content Layout
```
[Left Column]                        [Right Column]
──────────────────────────────────────────────────
Full Stack Developer                 [Avatar / Photo]
──────────────────────────────────────────────────
Hi, I'm Abdullah
Al Fayed Navin.
──────────────────────────────────────────────────
Short tagline / description (1-2 lines)
──────────────────────────────────────────────────
[Download Resume ↓]   [View Projects →]
──────────────────────────────────────────────────
[GitHub] [LinkedIn] [Twitter] [Facebook]
```

#### Elements

**Designation Badge:**
- Small pill/badge above the name: `"Full Stack Developer"`
- Style: `border border-white/20 rounded-full px-4 py-1 text-sm text-gray-400`
- Optional: blinking green dot before text (like "available for work")

**Name:**
- **"Abdullah Al Fayed Navin"**
- Large, bold, animated — characters fly in or words reveal with a clip-path mask animation (GSAP or Framer Motion)

**Tagline:**
- *"I build fast, scalable, and beautiful web applications from frontend to backend."*
- Fade in with slight upward movement, delayed after name animation

**Avatar / Photo:**
- Professional placeholder image
- Styled with a subtle gradient border or glow ring
- On hover: slight scale up `scale(1.02)`
- Shape: slightly rounded square or circle — designer's choice

**Resume Button:**
- Label: `"Download Resume"`
- Style: Filled button with highlight color
- On click: triggers download of `/public/resume.pdf` (placeholder file)
- Animation: subtle shimmer effect on hover

**View Projects Button:**
- Label: `"View Projects"`
- Style: Ghost/outline button
- On click: smooth scroll to Projects section

**Social Links:**
- GitHub, LinkedIn, Twitter, Facebook
- Icon buttons (30×30) with subtle hover glow
- Positioned below the CTA buttons

#### Animations
- **GSAP Timeline** on mount:
  1. Badge fades + slides up (delay: 0s)
  2. Name characters stagger in (delay: 0.2s)
  3. Tagline slides up (delay: 0.6s)
  4. Buttons fade in (delay: 0.9s)
  5. Social icons stagger in (delay: 1.1s)
  6. Avatar scales in from 0.8 → 1 (delay: 0.3s)
- **Background:** Subtle animated gradient noise or grid pattern (CSS or canvas)
- **Scroll indicator:** Animated bouncing arrow at the bottom of the hero

---

### 5.3 About Me Section

**Component:** `components/sections/About.tsx`

#### Layout
Two-column layout on desktop; stacked on mobile.

```
[Left: Image / Visual]    [Right: Text Content]
```

#### Content

**Section Label:** `"— About Me"`  
**Heading:** `"Passionate developer, lifelong learner."`

**Body Text (Dummy — to be replaced):**
> "I'm Abdullah Al Fayed Navin, a Full Stack Developer from Chittagong, Bangladesh. My journey into programming started with curiosity and has evolved into a deep passion for building things that live on the internet. I love crafting elegant solutions to complex problems, whether it's designing a pixel-perfect UI or architecting a robust backend API.
>
> Beyond code, I'm a history enthusiast — currently pursuing a Bachelor's in History, which gives me a unique perspective on problem-solving and storytelling. When I'm not coding, you'll find me exploring new technologies, reading, or playing football with friends."

**Stats Row (3 items, animated counter):**
- `3+` — Projects Completed
- `2+` — Years of Learning
- `10+` — Technologies Mastered

#### Animations
- Section heading: text reveal with clip-path mask (Framer Motion)
- Body text: fade + slide up on scroll enter (GSAP ScrollTrigger)
- Stats counters: count up animation when scrolled into view

---

### 5.4 Skills Section

**Component:** `components/sections/Skills.tsx`

#### Layout
Categorized grid of skill badges/cards.

**Section Label:** `"— Skills"`  
**Heading:** `"My Technical Arsenal"`

#### Skill Categories

**Frontend:**
- React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3

**Backend:**
- Node.js, Express.js, PostgreSQL, MongoDB, Prisma, SQL

**Tools & Others:**
- Git, GitHub, VS Code, Figma, Postman, Vercel

#### Skill Card Design
Each skill displayed as a card/badge:
```
┌────────────────────┐
│   [Icon]           │
│   React            │
│   ████████░░ 85%   │  ← optional progress bar
└────────────────────┘
```
- Background: `bg-[#161616]`
- Border: `border border-white/10`
- Hover: border glow + slight scale up
- Icon: DevIcons or custom SVG icons

#### Animations
- Cards stagger in on scroll (Framer Motion `staggerChildren`)
- Progress bars animate from 0% → target width when in view

**Data file:** `data/skills.ts`
```typescript
export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number; // 0-100
}
```

---

### 5.5 Education Section

**Component:** `components/sections/Education.tsx`

#### Layout
Vertical timeline design.

**Section Label:** `"— Education"`  
**Heading:** `"Academic Background"`

#### Entries

**Entry 1:**
- Degree: HSC (Higher Secondary Certificate)
- Institution: Bakolia Government College, Chittagong
- Year: 2022
- Status: Completed ✓

**Entry 2:**
- Degree: Bachelor of Arts in History
- Institution: National University, Bangladesh
- Year: 2022 – Present
- Status: Ongoing 🎓

#### Timeline Card Design
```
  ●──────────────────────────────────────────────
  │   [Year Badge]
  │   Degree Title
  │   Institution Name
  │   Status Badge (Completed / Ongoing)
  │   Short description (optional)
  ●──────────────────────────────────────────────
```
- Vertical line connecting entries
- Circle dot at each entry with a glow pulse on the active/ongoing entry
- Card appears from left on scroll

#### Animations
- Timeline line draws down (GSAP `drawSVG` or height animation)
- Cards slide in from left/right alternately on scroll

---

### 5.6 Projects Section

**Component:** `components/sections/Projects.tsx`

#### Layout
**Section Label:** `"— Projects"`  
**Heading:** `"Things I've Built"`

Grid of project cards:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

#### Project Data Structure

**Data file:** `data/projects.ts`

```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;          // Short (2-3 lines)
  longDescription: string;      // Detailed paragraph
  image: string;                // Path to image
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futureImprovements: string[];
  featured: boolean;
}
```

#### Dummy Projects (3 entries — to be replaced)

**Project 1: DevLink**
- Description: A developer networking platform where developers can share their profiles, post code snippets, and connect with other devs.
- Tech: Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS
- Live: `#` | GitHub: `#`
- Challenges: Real-time notifications, complex relational DB schema
- Improvements: Add messaging feature, mobile app

**Project 2: ShopEase**
- Description: A full-stack e-commerce web app with product management, cart, and Stripe payment integration.
- Tech: React, Node.js, MongoDB, Express, Tailwind CSS
- Live: `#` | GitHub: `#`
- Challenges: Cart state management, Stripe webhook handling
- Improvements: Add product reviews, wishlist, admin dashboard

**Project 3: TaskFlow**
- Description: A beautiful Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features.
- Tech: Next.js, TypeScript, PostgreSQL, Prisma, Framer Motion
- Live: `#` | GitHub: `#`
- Challenges: Drag-and-drop UX, optimistic UI updates
- Improvements: Add Gantt chart view, calendar integration

#### Project Card Design
```
┌──────────────────────────────────┐
│   [Project Image / Screenshot]   │
│   ──────────────────────────── │
│   Project Name                   │
│   Short description...           │
│                                  │
│   [React] [Node] [MongoDB]       │
│                                  │
│   [View Details →]               │
└──────────────────────────────────┘
```
- Image with overlay on hover revealing quick-link icons
- Tech tags as small pill badges
- "View Details" button links to `/projects/[slug]`

#### Animations
- Cards stagger in on scroll (Framer Motion)
- Image zooms slightly on card hover
- "View Details" button has a sliding underline animation

---

### 5.7 Project Detail Page

**Route:** `/projects/[slug]`  
**Component:** `app/projects/[slug]/page.tsx`

#### Layout

```
[Back ← Projects]

Project Title
──────────────────────────────────────────────────

[Hero Image — Full Width]

──────────────────────────────────────────────────
[Live Demo ↗]        [GitHub →]
──────────────────────────────────────────────────

Overview
────────
[Long description paragraph]

Tech Stack
──────────
[React] [Node.js] [MongoDB] [TypeScript] ...

Challenges
──────────
• Challenge 1
• Challenge 2
• Challenge 3

Future Improvements
───────────────────
• Improvement 1
• Improvement 2
• Improvement 3
──────────────────────────────────────────────────

[← Previous Project]          [Next Project →]
```

#### Page Behavior
- Generated statically with `generateStaticParams()` using project slugs
- Metadata (title, description, og:image) auto-generated per project
- Smooth page transition with Framer Motion `AnimatePresence`

---

### 5.8 Contact Section

**Component:** `components/sections/Contact.tsx`

#### Layout
Two-column layout:
- Left: Contact info + social links
- Right: Contact form

**Section Label:** `"— Get In Touch"`  
**Heading:** `"Let's Work Together"`

#### Contact Info (Dummy — to be replaced)

| Type | Value |
|---|---|
| Email | navin@example.com |
| Phone | +880 1XXX-XXXXXX |
| WhatsApp | +880 1XXX-XXXXXX |
| Location | Chittagong, Bangladesh |

#### Contact Form Fields
- Name (required)
- Email (required)
- Subject
- Message (required)
- Submit button: `"Send Message →"`

> **Note:** Form submission can be wired to Formspree, Resend, or EmailJS in a later phase. For now, the form UI is functional with basic validation.

#### Form Validation
- Required field highlights in red on empty submit
- Email format validation
- Success state: animated checkmark + "Message Sent!" confirmation
- Error state: error message shown

#### Animations
- Contact cards slide in from left
- Form slides in from right (Framer Motion)
- Input fields have a glowing border on focus

---

### 5.9 Footer

**Component:** `components/layout/Footer.tsx`

#### Content
```
Navin.                    [GitHub] [LinkedIn] [Twitter]

Designed & Built by Abdullah Al Fayed Navin
© 2026 — All Rights Reserved
```

- Simple, minimal, single-row layout
- Divider line above footer
- Subtle fade-in animation on scroll

---

## 6. Animation & Interaction Specifications

### 6.1 Lenis (Smooth Scroll)

- Initialize Lenis in `LenisProvider.tsx` wrapped at the root layout
- Sync Lenis with GSAP's `ScrollTrigger` via `lenis.on('scroll', ScrollTrigger.update)`
- Options:
  ```javascript
  new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  ```

### 6.2 GSAP Usage

| Animation | Trigger | Details |
|---|---|---|
| Hero text reveal | Page load | `gsap.timeline()` stagger per word |
| Section heading reveal | ScrollTrigger | Clip-path from bottom to top |
| Timeline draw | ScrollTrigger | Height or SVG stroke animation |
| Skill bar fill | ScrollTrigger | Width animation 0% → target% |
| Parallax elements | ScrollTrigger | Y movement on background elements |
| Stats counter | ScrollTrigger | Number count-up animation |

### 6.3 Framer Motion Usage

| Animation | Component | Details |
|---|---|---|
| Page transitions | `AnimatePresence` | Fade + slide between pages |
| Card stagger | `Projects`, `Skills` | `staggerChildren: 0.1` |
| Navbar mobile drawer | `Navbar` | `x: "100%" → 0` slide |
| Hamburger icon | `Navbar` | Path morph animation |
| Hover effects | Buttons, Cards | `whileHover`, `whileTap` |
| Active nav underline | `Navbar` | `layoutId` shared element |
| Scroll progress bar | Top of page | `useScroll` + `scaleX` |

### 6.4 Cursor (Optional Enhancement)

Custom animated cursor (desktop only):
- Default: small white circle
- On hover over links/buttons: expands and blends with element
- Implemented with Framer Motion `useMotionValue` + `useSpring`

---

## 7. Routing & Navigation

| Route | Page | Type |
|---|---|---|
| `/` | Main portfolio (all sections) | Static |
| `/projects/[slug]` | Individual project detail | Static (SSG) |

### Scroll Navigation
- All navbar links use smooth scroll to section IDs on the main page
- Section IDs: `#hero`, `#about`, `#skills`, `#education`, `#projects`, `#contact`
- Lenis handles the smooth easing

---

## 8. Responsiveness Requirements

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | Single column, hamburger menu |
| Tablet | `640px – 1024px` | 2-column grids, condensed spacing |
| Desktop | `> 1024px` | Full layout as designed |
| Large | `> 1280px` | Max-width container, no stretching |

### Critical Responsive Behaviors
- Navbar collapses to hamburger at `< 768px`
- Hero section stacks vertically (photo above/below text) on mobile
- Project grid: 3-col → 2-col → 1-col
- Skills grid: 4-col → 3-col → 2-col → 1-col
- Typography scales down using `clamp()`
- Animations reduce on `prefers-reduced-motion` media query

---

## 9. Performance Requirements

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Strategies
- Use `next/image` for all images (auto WebP, lazy loading)
- Code-split GSAP and Framer Motion (they are tree-shakeable)
- Fonts via `next/font` (no layout shift)
- `loading="lazy"` on below-fold content
- `will-change: transform` only on actively animating elements, removed after

---

## 10. Accessibility Requirements

- All images have descriptive `alt` text
- All interactive elements are keyboard-focusable
- Sufficient color contrast ratio (≥ 4.5:1 for body text)
- `aria-label` on icon-only buttons (social links, hamburger)
- `aria-expanded` on mobile menu toggle
- `prefers-reduced-motion` respected — animations disabled/reduced
- Skip-to-content link for screen reader users
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## 11. Deployment

### Platform: Vercel

- Connect GitHub repository to Vercel
- Auto-deploy on push to `main` branch
- Environment variables (if needed for contact form): set in Vercel dashboard
- Custom domain: to be configured later

### Setup Commands

```bash
# Initialize project
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint

# Install dependencies
npm install framer-motion gsap @studio-freight/lenis lucide-react react-icons clsx tailwind-merge

# Dev server
npm run dev

# Build
npm run build

# Deploy
vercel --prod
```

---

## 12. Future Improvements

| Feature | Priority | Notes |
|---|---|---|
| Real resume PDF upload | High | Replace placeholder when ready |
| Contact form backend | High | Wire to Resend or Formspree |
| Blog section | Medium | MDX-based blog posts |
| Dark/Light mode toggle | Medium | Extend design system |
| Custom cursor | Low | Desktop-only polish |
| Project filter by tech | Low | Filter projects by stack tag |
| Analytics | Medium | Vercel Analytics or Plausible |
| CMS integration | Low | Contentful or Sanity for easy content updates |
| Internationalization | Low | Bengali + English toggle |
| PWA support | Low | Offline capability |

---

## Appendix A — Dummy Data Summary

All placeholder content marked below will be replaced by the owner:

| Section | Placeholder |
|---|---|
| Avatar photo | Generic professional silhouette |
| Resume | Empty PDF placeholder |
| About text | Generic developer backstory |
| Social links | `#` href |
| Project images | Abstract gradient placeholders |
| Project URLs | `#` href |
| Contact email | `navin@example.com` |
| Contact phone | `+880 1XXX-XXXXXX` |

---

## Appendix B — File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `ProjectCard.tsx`)
- Hooks: `camelCase.ts` prefixed with `use` (e.g., `useScrollAnimation.ts`)
- Data files: `camelCase.ts` (e.g., `projects.ts`)
- Styles: co-located or in `globals.css`
- Images: `kebab-case.png` (e.g., `project-devlink.png`)

---

*This PRD is a living document and will be updated as the project evolves.*