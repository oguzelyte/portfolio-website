"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { myEmail } from "@/lib/data";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  // validate input on server
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }

  let data;

  try {
    const data = await resend.emails.send({
      from: myEmail,
      to: myEmail,
      reply_to: senderEmail as string,
      subject: `Portfolio Web Form - From ${senderEmail}`,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
