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
      role: "Frontend Developer (Learning & Projects)",
      company: "Self-Learning & Udemy Courses",
      companyUrl: "https://www.udemy.com/",
      duration: "Jul 2024 - Present",
      description:
        "Completed hands-on projects using React.js, Next.js, TypeScript, and Supabase. Built responsive web applications and practiced integrating designs into real-world projects, improving UI/UX skills.",
    },
    {
      role: "Freelance Web Developer",
      company: "Fiverr",
      companyUrl: "https://www.fiverr.com/karina_saini",
      duration: "Jan 2023 - Present",
      description:
        "Built responsive and user-friendly web apps using React.js, Next.js, TypeScript, and Supabase. Collaborated with clients to deliver clean, scalable, and efficient solutions.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Section Heading */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          My professional journey so far
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="mt-12 max-w-5xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.015 }}
          >
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                  {exp.role}
                </CardTitle>
                <CardDescription className="text-md text-gray-600 dark:text-gray-300">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                  >
                    {exp.company}
                  </a>{" "}
                  • <span className="text-sm">{exp.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
