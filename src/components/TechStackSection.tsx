"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  SiTypescript,
  SiAntdesign,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiSlack,
  SiNotion,
  SiAsana,
  SiPrettier,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineTool } from "react-icons/ai";

// Wrap the ShadCN UI Card with Framer Motion for hover animations.
const MotionCard = motion(Card);

export default function TripleMarqueeTechStack() {
  // Define three separate lines of tech logos with URL for each tech.
  const line1 = [
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org",
    },
    {
      name: "React Query",
      icon: <FaReact />,
      url: "https://tanstack.com/query",
    },
    { name: "Ant Design", icon: <SiAntdesign />, url: "https://ant.design" },
    {
      name: "shadcn/ui",
      icon: <AiOutlineTool />,
      url: "https://ui.shadcn.com",
    },
    { name: "GitHub", icon: <SiGithub />, url: "https://github.com" },
  ];

  const line2 = [
    { name: "Vercel", icon: <SiVercel />, url: "https://vercel.com" },
    { name: "Netlify", icon: <SiNetlify />, url: "https://www.netlify.com" },
    { name: "Supabase", icon: <SiSupabase />, url: "https://supabase.com" },
    { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com" },
    { name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com" },
  ];

  const line3 = [
    { name: "Slack", icon: <SiSlack />, url: "https://slack.com" },
    { name: "Notion", icon: <SiNotion />, url: "https://www.notion.so" },
    { name: "Asana", icon: <SiAsana />, url: "https://asana.com" },
    { name: "Prettier", icon: <SiPrettier />, url: "https://prettier.io" },
  ];

  // Styles for larger cards, icons, and text.
  const cardStyles =
    "flex flex-shrink-0 items-center space-x-4 px-6 py-4 min-w-[240px] bg-gray-50 dark:bg-gray-800";
  const iconStyle = "text-5xl"; // Larger icons
  const textStyle = "text-xl font-medium text-gray-800 dark:text-gray-200"; // Larger text

  return (
    <section id="techstack" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Tools and technologies I work with
          </p>
        </div>

        {/* Triple Marquee */}
        <div className="space-y-10">
          {/* 1st Line (left-to-right) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex flex-nowrap space-x-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[...line1, ...line1].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MotionCard
                    className={cardStyles}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={iconStyle + " text-blue-600"}>
                      {tech.icon}
                    </div>
                    <p className={textStyle}>{tech.name}</p>
                  </MotionCard>
                </a>
              ))}
            </motion.div>
          </div>

          {/* 2nd Line (right-to-left) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex flex-nowrap space-x-8"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...line2, ...line2].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MotionCard
                    className={cardStyles}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={iconStyle + " text-green-600"}>
                      {tech.icon}
                    </div>
                    <p className={textStyle}>{tech.name}</p>
                  </MotionCard>
                </a>
              ))}
            </motion.div>
          </div>

          {/* 3rd Line (left-to-right, different speed) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex flex-nowrap space-x-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...line3, ...line3].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MotionCard
                    className={cardStyles}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={iconStyle + " text-pink-500"}>
                      {tech.icon}
                    </div>
                    <p className={textStyle}>{tech.name}</p>
                  </MotionCard>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
