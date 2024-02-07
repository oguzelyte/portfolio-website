import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { PiCoffee } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import riftImg from "@/public/rift.png";
import aiImg from "@/public/ai-site.png";
import portfolioImg from "@/public/portfolio.png";
import myReadsImg from "@/public/myreads.png";
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Developer (React, WordPress)",
    location: "Kilo Health, Remote",
    description:
      "Focusing on React and WordPress development. Creating React components using Next.js and Chakra UI for startup sites. Managing over 30 WordPress blogs and e-commerce sites in an Agile-Kanban environment, ensuring timely, high-quality deliverables.",
    icon: React.createElement(MdWorkOutline),
    date: "2022 - present",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Crafting tailored WordPress solutions. Collaborating closely with clients to meet their unique needs. Integrating APIs with platforms like Klaviyo and Transistor. Enhancing user experience with JavaScript libraries, and customizing WooCommerce and child themes.",
    icon: React.createElement(PiCoffee),
    date: "2022 - present",
  },
  {
    title: "WordPress First Line Technical Support",
    location: "Incsub, Remote",
    description:
      "Supported award-winning WPMU DEV plugins and WordPress hosting. Provided real-time technical support through multiple live chats. Resolved issues with custom PHP, CSS, and JavaScript code. Earned nearly 100% positive feedback and significant customer satisfaction, evidenced by strong Trustpilot reviews and customer loyalty in subscription renewals.",
    icon: React.createElement(MdOutlineSupportAgent),
    date: "2021 - 2022",
  },
  {
    title: "Newcastle University",
    location: "Newcastle upon Tyne, UK",
    description:
      "Excelled in technical projects ranging from web development to server configuration. Achieved 87% for thesis project of a travel itinerary generator built using Ionic, Angular, and Typescript.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
] as const;

export const sitesLogosData = [
  {
    projectTitle: "kilo health b2b",
    url: "https://business.kilo.health/",
    imageUrl: "logos/kilo-health-b2b-logo.svg",
    imageUrlDark: "logos/kilo-health-b2b-logo-dark.svg",
  },
  {
    projectTitle: "joggo",
    url: "https://joggo.run/blog/",
    imageUrl: "logos/joggo-logo.svg",
    imageUrlDark: "logos/joggo-logo-dark.svg",
  },
  {
    projectTitle: "moerie",
    url: "https://moerie.com/",
    imageUrl: "logos/moerie-logo.svg",
    imageUrlDark: "logos/moerie-logo-dark.svg",
  },

  {
    projectTitle: "cardi health",
    url: "https://cardi.health/blog/",
    imageUrl: "logos/cardi-logo.svg",
    imageUrlDark: "logos/cardi-logo-dark.svg",
  },
  {
    projectTitle: "yocto agency",
    url: "https://yocto.agency/",
    imageUrl: "logos/yocto-logo.svg",
    imageUrlDark: "logos/yocto-logo-dark.svg",
  },
  {
    projectTitle: "sensa",
    url: "https://sensa.health/blog/",
    imageUrl: "logos/sensa-logo.svg",
    imageUrlDark: "logos/sensa-logo-dark.svg",
  },
  {
    projectTitle: "dofasting",
    url: "https://dofasting.com/blog/",
    imageUrl: "logos/dofasting-logo.svg",
    imageUrlDark: "logos/dofasting-logo-dark.svg",
  },

  {
    projectTitle: "kilo health",
    url: "https://kilo.health/",
    imageUrl: "logos/kilo-health-logo.svg",
    imageUrlDark: "logos/kilo-health-logo-dark.svg",
  },
  {
    projectTitle: "bioma health",
    url: "https://bioma.health/blog/",
    imageUrl: "logos/bioma-health-logo.svg",
    imageUrlDark: "logos/bioma-health-logo-dark.svg",
  },
  {
    projectTitle: "colonbroom",
    url: "https://colonbroom.com/blog/",
    imageUrl: "logos/colonbroom-logo.svg",
    imageUrlDark: "logos/colonbroom-logo-dark.svg",
  },
  {
    projectTitle: "klinio",
    url: "https://klinio.com/blog/",
    imageUrl: "logos/klinio-logo.svg",
    imageUrlDark: "logos/klinio-logo-dark.svg",
  },
] as const;
interface ProjectData {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ReadonlyArray<ProjectData> = [
  {
    title: "Rift Clothing Store",
    description:
      "Modern, performance-oriented e-commerce platform for fashion enthusiasts. Features Firebase for user authentication and Stripe API for payment processing.",
    tags: ["React", "Next.js", "Firebase", "Stripe API", "Tailwind"],
    imageUrl: riftImg,
    githubUrl: "https://github.com/oguzelyte/rift-clothing-store",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website built with Next.js and Tailwind. It's fully responsive and has a dark mode.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "React Email",
    ],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/oguzelyte/portfolio-website",
  },
  {
    title: "AI Post Generator",
    description:
      "Script that creates SEO optimized 3000+ word blog posts (content, images, featured image) using OpenAI's GPT-3.5 model and uploads them to a WordPress site. Demo is a blog site with fully AI generated posts.",
    tags: ["Node.js", "Open AI", "WP API", "Various Image APIS"],
    liveUrl: "https://horsebackhaven.com/",
    imageUrl: aiImg,
  },
  {
    title: "MyReads Project",
    description:
      "Application that reads books from a 3rd party API and allows you to pass them around between virtual shelves.",
    tags: ["React", "JavaScript", "Debounce", "Prop Types"],
    imageUrl: myReadsImg,
    githubUrl: "https://github.com/oguzelyte/nd0191-c1-myreads",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Chakra UI",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "PHP",
  "WordPress",
  "React",
  "Redux",
  "Next.js",
  "GitLab",
  "Docker",
  "Figma",
  "Framer Motion",
] as const;

export const myEmail = "hello@olivijaguzelyte.com";
