"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 max-w-[38rem] w-[100%]
    text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a href="mailto:hello@olivijaguzelyte.com" className="underline">
          hello@olivijaguzelyte.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log(formData);
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          maxLength={500}
          name="message"
          required
          placeholder="Your message"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 text-white
          rounded-full outline-none transition-all flex items-center justify-center gap-2
          group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
