"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const roles = [
  "Frontend Engineer",
  "Full Stack Developer",
  "React & Next.js Specialist",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <TooltipProvider>
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 overflow-hidden gap-12 md:gap-24 pt-[120px] pb-12">
        {/* Luxury Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        {/* LEFT CONTENT */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Karina
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium h-7 transition-all duration-300">
            {roles[currentRole]}
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            I build responsive full-stack applications with modern tools like
            React, Next.js, TailwindCSS, and Node.js.
          </p>

          {/* Clean Modern Resume Button */}
          {/* Luxury Indigo Button with subtle hover movement */}
          <a href="/images/Karina_Saini_Resume.pdf" download>
            <Button
              className="mt-8 rounded-lg px-6 py-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800
               text-white font-medium transition-transform duration-300 ease-in-out
               hover:-translate-y-1 hover:scale-105"
            >
              Download Resume
            </Button>
          </a>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-400 text-xl">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/karina-saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  <FaLinkedin />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/karusaini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  <FaGithub />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:hello@karinasaini.me"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  <FaEnvelope />
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
            <div className="rounded-full overflow-hidden border border-indigo-200 dark:border-indigo-400">
              <Image
                src="/profile.jpg"
                alt="Karina's Profile"
                width={420}
                height={420}
                className="object-cover w-[260px] h-[260px] md:w-[380px] md:h-[380px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 text-sm flex-col items-center cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll down</span>
          <svg
            className="w-4 h-4 mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </section>
    </TooltipProvider>
  );
}
