"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      {/* About Me Intro */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left md:text-center">
          I'm a frontend developer with 2 years of learning experience and 6
          months of hands-on experience in HTML, CSS, JavaScript, React.js,
          Next.js, and Supabase. I've built projects like a Zoom clone and
          Netflix Clone, focusing on smooth, user-friendly web experiences. I'm
          passionate about learning, growing, and contributing to innovative web
          solutions.
        </p>
      </motion.div>

      {/* Hire Me CTA Card */}
      <motion.div
        className="mt-12 max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-4">
          Looking for a Creative Frontend Developer?
        </h3>
        <p className="mb-6">
          Let's collaborate to create something amazing. I'm ready to take on
          new challenges and bring innovative ideas to life.
        </p>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 text-white font-medium text-base transition-all hover:from-blue-600 hover:to-purple-700"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* Key Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            2 Years
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Learning Experience
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            6 Months
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Hands-on Experience
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            20+ Projects
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Zoom & Netflix Clones etc
          </p>
        </div>
      </motion.div>
    </section>
  );
}
