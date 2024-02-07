import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olivija Guzelyte | Web Developer",
  description:
    "Olivija is a full-stack React and WordPress developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div
          className="bg-[#C491B1] absolute opacity-70 top-[-6rem] -z-10 right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        dark:bg-[#916b83]"
        ></div>
        <div
          className="bg-[#BCE7FC] absolute opacity-90 top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]
        2xl:left-[-5rem] dark:bg-[#9cbfd1]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
