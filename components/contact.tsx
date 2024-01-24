"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { myEmail } from "@/lib/data";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
        <a href={`mailto:${myEmail}`} className="underline">
          {myEmail}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
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
          maxLength={5000}
          name="message"
          required
          placeholder="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
