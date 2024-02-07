"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { sitesLogosData } from "@/lib/data";
import { useThemeContext } from "@/context/theme-context";

export default function SitesLogos() {
  const { ref } = useSectionInView("Work");
  const { theme } = useThemeContext();

  return (
    <motion.section
      className="container mb-28 mx-auto md:px-6 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="work"
    >
      <div className="text-center">
        <SectionHeading> Some Sites I Built / Worked On </SectionHeading>
        <p className="mb-12">
          <strong>Note:</strong> I worked on the <code>/blog*</code>{" "}
          subdirectory part of the site for the examples that link specifically
          to the subdirectory.
        </p>
        <div className="flex flex-wrap max-w-4xl m-auto gap-4 sm:gap-7 justify-center items-center">
          {sitesLogosData.map((site, index) => (
            <motion.a
              key={site.projectTitle}
              href={site.url}
              target="_blank"
              className="hover:scale-[1.1] active:scale-[1.05] h-14 w-[10rem] sm:w-[15rem] relative block transition shadow-lg shadow-black/[0.03] bg-opacity-80 rounded-lg bg-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
            >
              <Image
                alt={`${site.projectTitle} logo`}
                src={theme === "light" ? site.imageUrl : site.imageUrlDark}
                style={{ objectFit: "contain" }}
                fill={true}
                className="py-4 px-5 sm:py-[0.875rem] sm:px-[2.5rem]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
