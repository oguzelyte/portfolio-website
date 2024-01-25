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
      "Specialize in React and WordPress development, focusing on creating React components using Next.js and Chakra UI for startup sites, while managing over 30 WordPress blogs and e-commerce sites with custom themes and plugins in an Agile-Kanban environment, ensuring timely, high-quality deliverables.",
    icon: React.createElement(MdWorkOutline),
    date: "2022 - present",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Craft tailored WordPress solutions, collaborating closely with clients to meet their unique needs, integrating APIs with platforms like Klaviyo and Transistor, enhancing user experience with JavaScript libraries, and customizing WooCommerce and child themes.",
    icon: React.createElement(PiCoffee),
    date: "2022 - present",
  },
  {
    title: "WordPress First Line Technical Support",
    location: "Incsub, Remote",
    description:
      "Supported award-winning WPMU DEV plugins and WordPress hosting. Provided real-time technical support through multiple live chats, resolving issues with custom PHP, CSS, and JavaScript code, leading to nearly 100% positive feedback and significant customer satisfaction, evidenced by strong Trustpilot reviews and customer loyalty in subscription renewals.",
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
      "Script that creates SEO optimized 3000+ word blog posts (content, images, featured image) using GPT 3.5 and uploads them to a WordPress site. Demo site's posts are all AI generated.",
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
