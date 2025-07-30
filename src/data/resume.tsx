import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "David Camick",
  initials: "DC",
  url: "https://davidcamick.com",
  location: "Alabama, USA",
  locationLink: "https://www.google.com/maps/place/alabama",
  description:
    "Software Developer & Entrepreneur. I build tools for students, creators, and diabetics — and shoot high‑energy sports videos. Very active on Instagram.",
  summary:
    "In 2025, I doubled down on building and shipping my own products while working as an AI Solutions Specialist. I'm a Type 1 diabetic, athlete (high jump), and maker who loves turning real‑world problems into clean, modern software. I'm currently developing StuTime (a time management app), CamStem (audio stem splitting for editors), SupplyBuddy (diabetic supply tracking), and ScheduleSPX (a fast scheduling microservice). I care about accuracy, performance, and polished UX.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Swift / SwiftUI",
    "Electron",
    "Tailwind CSS",
    "Framer Motion",
    "Stripe",
    "Clerk",
    "Google Calendar API",
    "Cloudflare Workers / KV",
    "Postgres",
    "SQLite",
    "Docker / Docker Compose",
    "FFmpeg",
    "Vite",
    "Git / GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@davidcamick.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/davidcamick",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/davidcamick",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/davidcamick",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/davidcamick",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PeakMade Real Estate",
      href: "https://peakmade.com",
      badges: [],
      location: "Remote",
      title: "AI Solutions Specialist",
      logoUrl: "/peakmade.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Designed and deployed internal automations across operations and reporting, integrating Google Workspace, APIs, and Python/Apps Script services. Streamlined multi‑team workflows, reduced manual processes, and delivered dashboards that refreshed automatically — estimated to save the company over $200k annually.",
    },
    {
      company: "StuTime",
      badges: [],
      href: "https://stutime.app",
      location: "Remote",
      title: "Founder & Lead Engineer",
      logoUrl: "/stutime.png",
      start: "June 2025",
      end: "Present",
      description:
        "Built a time management app (web + iOS) integrated with Google Calendar. Features include an Event Countdown page, AI Syllabus Scanner (extracts due dates from PDFs into Calendar), AI Schedule Importer, animated Apple‑style onboarding, themes, and subscriptions with Stripe. Implemented Clerk auth, robust cookie/state sync, and performance‑focused, highly animated UI.",
    },
    {
      company: "CamStem",
      href: "https://camstem.com",
      badges: [],
      location: "Remote",
      title: "Founder & Lead Engineer",
      logoUrl: "/camstem.png",
      start: "December 2024",
      end: "Present",
      description:
        "Created a desktop app for videographers that splits songs into stems for precise edits and transitions. Focused on fast, reliable source‑separation, a clean editor‑first UX, and streamlined export to common NLE workflows. Built the brand, marketing, and sales for creators.",
    },
    {
      company: "SupplyBuddy",
      href: "https://supplybuddy.app",
      badges: [],
      location: "Remote",
      title: "Founder & Builder",
      logoUrl: "/supplybuddy.png",
      start: "July 2025",
      end: "Present",
      description:
        "Developing a friendly inventory tracker for diabetics to monitor supplies (pods, sensors, insulin, strips, etc.), set smart reminders, and avoid stockouts. Shipped the brand and site, and designing a clear, approachable UI tailored to daily health routines.",
    },
    {
      company: "ScheduleSPX",
      href: "https://schedulespx.com",
      badges: [],
      location: "Remote",
      title: "Creator",
      logoUrl: "/schedulespx.png",
      start: "2025",
      end: "Present",
      description:
        "Built a lightweight, reliable scheduling service/microservice to trigger time‑sensitive tasks and notifications for my projects. Emphasis on predictable CRONs, easy APIs, and simple deployment.",
    },
  ],
  education: [
    {
      school: "University of Alabama",
      href: "https://ua.edu",
      degree: "Bachelor's studies (Business, exploring Pre‑Med/Endocrinology); building and shipping multiple products alongside coursework.",
      logoUrl: "/alabama.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Self‑Directed Learning",
      href: "#",
      degree: "Full‑stack web development, iOS development (Swift/SwiftUI), DevOps, AI/automation, and product design.",
      logoUrl: "/self-learning.png",
      start: "2019",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "ScheduleSPX",
      href: "https://schedulespx.com",
      dates: "2025 - Present",
      active: true,
      description:
        "A lightweight scheduling microservice for time‑sensitive tasks and notifications used across my apps. Simple CRONs, clean API, and reliable triggers.",
      technologies: [
        "Next.js",
        "Typescript",
        "Cloudflare Workers",
        "Cloudflare KV",
        "PostgreSQL",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://schedulespx.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/davidcamick/schedulespx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CamStem",
      href: "https://camstem.com",
      dates: "December 2024 - Present",
      active: true,
      description:
        "A desktop app that splits songs into audio stems so videographers can sync edits to vocals, drums, and melodies with surgical precision.",
      technologies: [
        "Electron",
        "Node.js",
        "Python",
        "FFmpeg",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://camstem.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/davidcamick/camstem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "StuTime",
      href: "https://stutime.app",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A modern time management app integrated with Google Calendar. Features Event Countdown, AI Syllabus Scanner (PDF → Calendar), AI Schedule Importer, animated onboarding, premium themes, and Stripe subscriptions.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Clerk",
        "Framer Motion",
        "Google Calendar API",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://stutime.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/davidcamick/stutime",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SupplyBuddy",
      href: "https://supplybuddy.app",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A friendly tracker for diabetic supplies. Monitor inventory, receive reminders before you run out, and keep everything organized in one place.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://supplybuddy.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/davidcamick/supplybuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
