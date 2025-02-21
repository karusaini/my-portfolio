"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { AiOutlineTool } from "react-icons/ai";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl text-blue-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-500" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-4xl text-blue-500" />,
      url: "https://reactjs.org",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
      url: "https://nextjs.org",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-4xl text-green-500" />,
      url: "https://supabase.com",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-yellow-600" />,
      url: "https://firebase.google.com",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      url: "https://tailwindcss.com",
    },
    {
      name: "ShadCN UI",
      icon: <AiOutlineTool className="text-4xl text-purple-500" />,
      url: "https://ui.shadcn.com",
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Technologies I&apos;ve worked with
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {skills.map((skill, index) => (
          <a
            href={skill.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <motion.div
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon}
              <p className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
