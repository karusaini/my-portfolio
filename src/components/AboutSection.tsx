"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "2 Years",
    description: "Learning Experience",
  },
  {
    title: "6 Months",
    description: "Hands-on Experience",
  },
  {
    title: "20+ Projects",
    description: "Zoom & Netflix Clones etc",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      {/* Section Heading */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left md:text-center">
          I&apos;m a frontend developer with 2 years of learning experience and
          6 months of hands-on experience in HTML, CSS, JavaScript, React.js,
          Next.js, and Supabase. I&apos;ve built projects like a Zoom clone and
          Netflix Clone, focusing on smooth, user-friendly web experiences. I
          love building, solving, and learning every day.
        </p>
      </motion.div>

      {/* Hire Me CTA */}
      <motion.div
        className="mt-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="bg-gradient-to-r from-blue-600 to-purple-500 text-white border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Looking for a Creative Frontend Developer?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-sm md:text-base">
              Let&apos;s collaborate to build something exceptional. I&apos;m
              ready to contribute to your next big idea with clean code and
              great design.
            </p>
            <div className="text-center">
              <a href="#contact">
                <Button
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-gray-200"
                >
                  Hire Me
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Stats with animation */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <Card className="bg-gray-100 dark:bg-gray-800 shadow-md">
              <CardContent className="py-6 text-center">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.title}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
