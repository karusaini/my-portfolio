"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 overflow-hidden bg-gray-50">
      {/* Animated Background Shape */}
      <motion.div
        className="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 opacity-30 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

      {/* Right: Profile Image (Mobile: on top) */}
      <motion.div
        className="order-1 mb-8 md:mb-0 md:order-2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="rounded-full overflow-hidden shadow-2xl"
        >
          <Image
            src="/profile.png"
            alt="Karina's Profile"
            width={300}
            height={300}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Left: Text Content (Mobile: below image) */}
      <motion.div
        className="order-2 max-w-lg text-center md:text-left md:order-1"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Karina
          </span>{" "}
          👋
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A passionate FullStack Developer building modern and interactive web
          experiences.
        </motion.p>
        <motion.a
          href="/images/Karina_Saini_Resume.pdf"
          download="Karina_Saini_Resume.pdf"
          className="mt-8 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-base hover:from-blue-600 hover:to-purple-700 transition-all"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
