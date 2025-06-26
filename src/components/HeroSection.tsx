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
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 bg-gray-50 dark:bg-gray-900 overflow-hidden gap-12 md:gap-20 pt-[120px] pb-12">
        {/* Animated Background Blob */}
        <motion.div
          className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-blue-300 dark:bg-blue-900 opacity-20 blur-3xl -z-10"
          animate={{ x: 30, y: 30 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            ease: "easeInOut",
          }}
        />

        {/* Left Content */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">Karina</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium h-7">
            {roles[currentRole]}
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            I build responsive full-stack applications with modern tools like
            React, Next.js, TailwindCSS, and Node.js.
          </p>

          {/* Resume Button */}
          <a href="/images/Karina_Saini_Resume.pdf" download>
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
              📄 Download Resume
            </Button>
          </a>

          {/* Social Icons with Tooltips */}
          <div className="mt-6 flex justify-center md:justify-start gap-5 text-blue-600 dark:text-blue-400 text-xl">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/karina-saini"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-blue-800 transition" />
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
                >
                  <FaGithub className="hover:text-black dark:hover:text-white transition" />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:hello@karinasaini.me">
                  <FaEnvelope className="hover:text-red-500 transition" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          className="w-[260px] sm:w-[300px] md:w-[340px]"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="rounded-full overflow-hidden shadow-xl border-4 border-blue-100 dark:border-blue-800 ">
            <Image
              src="/profile.png"
              alt="Karina's Profile"
              width={400}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Desktop Scroll Indicator - Bottom center */}
        <motion.a
          href="#about"
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 text-sm flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
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
      <motion.a
        href="#about"
        className="block md:hidden text-gray-500 dark:text-gray-400 text-sm text-center mt-[-46px]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll down</span>
        <svg
          className="w-4 h-4 mt-1 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </TooltipProvider>
  );
}
