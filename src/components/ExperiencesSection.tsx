"use client";

import { motion } from "framer-motion";

export default function ExperiencesSection() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "WebbyWolf",
      companyUrl: "https://www.webbywolf.com", // WebbyWolf website link
      duration: "Jul 2022 - Dec 2022",
      description:
        "At WebbyWolf, I gained hands-on experience building dynamic, responsive web applications using React and Next.js. I collaborated closely with designers and developers to create user-friendly interfaces and contributed to scalable, high-performance projects.",
    },
    {
      role: "Freelance Web Developer",
      company: "Fiverr",
      companyUrl: "https://www.fiverr.com/karina_saini", // Replace with your Fiverr profile URL
      duration: "Jan 2023 - Present",
      description:
        "Developed projects like a Zoom clone and Netflix clone with a focus on smooth, user-friendly web experiences and clean, maintainable code. Available for freelance projects on Fiverr.",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Professional journey and work experiences
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="mt-12 max-w-5xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="mt-1 text-xl text-blue-500">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {exp.duration}
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
