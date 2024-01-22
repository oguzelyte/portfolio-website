"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-2 max-w-[50rem] text-center
    sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="h-24 w-24 relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            alt="Olivija portrait"
            src="/olivija-portrait.jpeg"
            fill={true}
            quality="95"
            priority={true}
            className="rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5]
      text-2xl sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Olivija.</span> I'm a{" "}
        <span className="font-bold">
          full-stack (React & WordPress) developer
        </span>{" "}
        with <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center
      items-center text-lg font-medium gap-2 px-4 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3
        flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Olivija-Guzelyte-CV.pdf"
          className="bg-white px-7 py-3
        flex items-center gap-2 rounded-full outline-none focus:scale-110
        hover:scale-110 active:scale-105 transition group borderBlack"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/olivijaguzelyte/"
          target="_blank"
          className="bg-white px-4 text-gray-700
        flex items-center gap-2 rounded-full self-stretch
        outline-none focus:scale-[1.15]
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group borderBlack "
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/oguzelyte/"
          target="_blank"
          className="bg-white px-4 text-gray-700
        flex items-center gap-2 rounded-full self-stretch
        outline-none focus:scale-[1.15]
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group borderBlack"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
