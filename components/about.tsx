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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb[8rem]
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-8">
        It was back in 2013 when I had my baby steps in development. Stubborn as
        I was, I insisted to attend programming classes at the SmartTech Academy
        in Vilnius, Lithuania. There I lucked out on having some of the greatest
        teachers who inspired me to push my limits and be proactive in life. And
        so - a dream was born.
      </p>
      <p className="mb-8">
        Fast-forward to today, and I've had the privilege to study Computer
        Science abroad in{" "}
        <a href="https://www.ncl.ac.uk/" className="underline" target="_blank">
          one of the greatest universities in the world
        </a>
        , intern for IBM, work as a WordPress technical support for an{" "}
        <a
          href="https://wpmudev.com/about/"
          className="underline"
          target="_blank"
        >
          award-winning company
        </a>,
        lead WordPress development for one of the
        <a href="https://kilo.health" className="underline" target="_blank">
          {" "}
          fastest growing European startups
        </a>.
        And now, I'm a full-stack developer at{" "}
        <a href="https://www.voodoochilli.com" className="underline" target="_blank">
          {" "}
          Voodoochilli
        </a>
        , where I continue to push my limits and grow professionally.
      </p>

      <p className="mb-8">
        In my free time, I dabble in various side projects, from building blog
        post generators and React stores to creating consistent AI personas
        using Stable Diffusion.
      </p>

      <p className="mb-8">
        When I'm not at the computer, you can usually find me at the weight rack
        at the gym, cuddling with my two dogs, grabbing a takeaway or watching
        some new show at Netflix (currently it's Squid Game).
      </p>

      <SectionHeading> Technical Proficiency</SectionHeading>
      <p className="mb-8">
        <strong>React & Next.js:</strong> Crafting dynamic user interfaces for
        startup websites, ensuring seamless user experiences.
      </p>
      <p className="mb-8">
        <strong> WordPress Development:</strong> Expert in developing and
        maintaining over 30+ WordPress sites, from blogs to e-commerce
        platforms. Proficient in custom theme and plugin development, data
        management via Gutenberg and REST API, and site migration.
      </p>
      <p className="mb-8">
        <strong>Cross-Technology Integration:</strong> Skilled in integrating a
        wide array of third-party services and APIs, enhancing website
        functionality and user engagement.
      </p>
      <p>
        <strong>DevOps and Testing:</strong> Utilizing Docker, Node.js, and
        Webpack for a streamlined development and testing process. Proficient in
        GitLab for version control and efficient deployment.
      </p>
    </motion.section>
  );
}
