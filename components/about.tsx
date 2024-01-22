"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> 🌟 About Me </SectionHeading>
      <p className="mb-8">
        Hello! I’m a seasoned Fullstack Developer specializing in both WordPress
        and React, with a passion for creating robust, scalable web solutions.
        With hands-on experience in a dynamic Agile-Kanban environment, I have
        honed my skills in balancing dual project backlogs, adapting priorities
        to meet evolving needs. My primary focus has been on React-based
        development, leveraging the power of Next.js and Chakra UI to build
        intuitive components for startup websites.
      </p>
      <SectionHeading> 💡 Technical Proficiency</SectionHeading>
      <p className="mb-8">
        React & Next.js: Crafting dynamic user interfaces for startup websites,
        ensuring seamless user experiences. WordPress Development: Expert in
        developing and maintaining over 30+ WordPress sites, from blogs to
        e-commerce platforms. Proficient in custom theme and plugin development,
        data management via Gutenberg and REST API, and site migration.
        Cross-Technology Integration: Skilled in integrating a wide array of
        third-party services and APIs, enhancing website functionality and user
        engagement. DevOps and Testing: Utilizing Docker, Node.js, and Webpack
        for a streamlined development and testing process. Proficient in GitLab
        for version control and efficient deployment.
      </p>
      <SectionHeading> 🎯 Career Aspiration</SectionHeading>
      <p className="mb-8">
        I am on a quest to continuously challenge myself, striving to become a
        more proficient coder and problem solver. My goal is to contribute to
        high-quality, scalable, and innovative web solutions. I am eager to
        leverage my experience in React and Next.js development to create
        functional, clean, and efficient code. Joining a team that values
        creativity, excellence, and continuous learning is where I see my skills
        and passion aligning.
      </p>
      <SectionHeading> 🔍 Looking Forward</SectionHeading>
      <p className="mb-3">
        I'm excited to explore opportunities where I can contribute my expertise
        in React and WordPress development while growing as a developer. I am
        particularly interested in projects that push the limits of what's
        possible on the web, allowing me to grow my skills further and make
        significant contributions to the tech community.
      </p>
    </motion.section>
  );
}
