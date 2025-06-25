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
      role: "Frontend Developer Intern",
      company: "WebbyWolf",
      companyUrl: "https://www.webbywolf.com",
      duration: "Jul 2022 - Dec 2022",
      description:
        "Built dynamic and responsive web applications using React and Next.js. Collaborated with design and development teams to create clean, scalable, and user-friendly UI experiences.",
    },
    {
      role: "Freelance Web Developer",
      company: "Fiverr",
      companyUrl: "https://www.fiverr.com/karina_saini",
      duration: "Jan 2023 - Present",
      description:
        "Created real-world projects including a Zoom clone and Netflix clone. Focused on performance, code quality, and user experience. Available for freelance gigs via Fiverr.",
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
