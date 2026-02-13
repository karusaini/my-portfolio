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
    <section
      id="skills"
      className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Luxury Glow Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          Technologies I’ve worked with
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
            className="group"
          >
            {/* Gradient Border Wrapper */}
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="relative rounded-2xl p-[1px] transition-all duration-500
                bg-transparent
                group-hover:bg-gradient-to-r
                group-hover:from-purple-500
                group-hover:via-blue-500
                group-hover:to-pink-500
                group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              >
                <Card className="rounded-2xl bg-white dark:bg-zinc-900 h-full">
                  <CardHeader className="flex flex-col items-center gap-3 pt-6">
                    {skill.icon}
                  </CardHeader>

                  <CardContent className="text-center pb-6">
                    <CardTitle className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {skill.name}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {skill.level}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
