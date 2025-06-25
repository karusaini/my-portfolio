"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineTool } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      level: "Advanced",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl text-blue-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-500" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      level: "Advanced",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-500" />,
      url: "https://www.typescriptlang.org/",
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-4xl text-blue-400" />,
      url: "https://reactjs.org",
      level: "Advanced",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
      url: "https://nextjs.org",
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      url: "https://nodejs.org",
      level: "Intermediate",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-4xl text-green-500" />,
      url: "https://supabase.com",
      level: "Beginner",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-yellow-600" />,
      url: "https://firebase.google.com",
      level: "Beginner",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      url: "https://tailwindcss.com",
      level: "Advanced",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-4xl text-black dark:text-white" />,
      url: "https://github.com",
      level: "Advanced",
    },
    {
      name: "ShadCN UI",
      icon: <AiOutlineTool className="text-4xl text-purple-500" />,
      url: "https://ui.shadcn.com",
      level: "Intermediate",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Technologies I&apos;ve worked with
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.06 }}
          >
            <Card className="bg-white dark:bg-gray-800 transition-transform shadow-md hover:shadow-xl">
              <CardHeader className="flex flex-col items-center gap-2">
                {skill.icon}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
