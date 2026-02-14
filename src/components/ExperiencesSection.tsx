"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ExperiencesSection() {
  const experiences = [
    {
      role: "Full-Stack Developer & Software Engineer",
      company: "Self-Learning & Udemy Projects",
      companyUrl: "https://www.udemy.com/",
      duration: "Jul 2024 - Present",
      description:
        "Built responsive web applications using React.js, Next.js, Node.js, TypeScript, and Supabase. Focused on both frontend and backend integration, creating full-stack solutions and improving UI/UX design skills.",
    },
    {
      role: "Freelance Web Developer",
      company: "Fiverr",
      companyUrl: "https://www.fiverr.com/karina_saini",
      duration: "Jan 2023 - Present",
      description:
        "Delivered full-stack web apps for clients using React, Next.js, Node.js, and Supabase. Balanced frontend design with backend functionality to provide clean, scalable, and performant solutions.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Luxury Glow Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          My professional journey so far
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card className="rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 bg-white dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {exp.role}
                </CardTitle>

                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {exp.company}
                  </a>{" "}
                  <span className="mx-2">•</span>
                  <span className="text-sm">{exp.duration}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
