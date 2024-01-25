"use client";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-9 last:mb-0 group"
    >
      <section
        className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden
   sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg 
   dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
     flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex align-center items-center gap-2 ">
            {liveUrl && (
              <a
                className="uppercase m-w-[4rem] text-gray-700 text-sm	bg-white/70 border border-black/[0.1]
                rounded-lg p-2 dark:bg-white/10 dark:text-white/80 my-3 sm:my-4"
                href={liveUrl}
                target="_blank"
              >
                demo
              </a>
            )}
            {githubUrl && (
              <a
                className="uppercase m-w-[4rem] text-gray-700 text-sm	bg-white/70 border border-black/[0.1]
                rounded-lg p-2 dark:bg-white/10 dark:text-white/80 my-3 sm:my-4"
                href={githubUrl}
                target="_blank"
              >
                source code
              </a>
            )}
          </div>
          <ul
            className="flex flex-wrap pt-4
     gap-2 sm:mt-auto"
          >
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
           rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt={`project ${title} thumbnail`}
          src={imageUrl}
          quality="95"
          priority={true}
          className="absolute hidden sm:block top-10 -right-40 -bottom-[100px] w-[29rem] rounded-t-lg shadow-2xl
       group-even:right-[initial] group-even:-left-40
       group-hover:-translate-x-3
       group-hover:translate-y-3
       group-hover:scale-[1.04]
       group-hover:-rotate-2
       group-even:group-hover:translate-x-3
       group-even:group-hover:translate-y-3
       group-even:group-hover:rotate-2
       transition"
        />
      </section>
    </motion.div>
  );
}
