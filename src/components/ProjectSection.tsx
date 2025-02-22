"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsTimelineSection() {
  const projects = [
    {
      title: "Talkbot AI",
      description:
        "This is a chatbot project built with Next.js, ShadCN UI, Supabase for authentication, and TailwindCSS for styling. It integrates a chatbot into websites using a custom JavaScript script.",
      liveDemo: "https://talkbot-ai-new.vercel.app/",
      github: "https://github.com/karusaini/my-chatbot-project",
      image: "/chatbot-clone.jpg",
    },
    {
      title: "Dropbox Clone",
      description:
        "A Dropbox clone built with Next.js, Tailwind CSS, React, Clerk, ShadCN, and Firebase, featuring Drag-and-Drop, CRUD operations, and a user-friendly file management system.",
      liveDemo: "https://dropbox-clone-youtube-wheat.vercel.app/",
      github: "https://github.com/karusaini/dropbox-clone-youtube",
      image: "/dropbox-clone.jpg",
    },
    {
      title: "Students Management ",
      description:
        "A full-featured e-commerce application developed using Next.js and Stripe API. Offers seamless product browsing and secure payments.",
      liveDemo: "https://student-management-gray-seven.vercel.app/",
      github: "https://github.com/karusaini/student-management/tree/main",
      image: "/student-clone.jpg",
    },
    {
      title: "Dashboard Manage ",
      description:
        "I&apos;ve developed an advanced dashboard leveraging the latest technologies like React.js and Tailwind CSS, seamlessly integrated with Firebase for real-time data management.",
      liveDemo: "https://dashboard-17cf6.web.app/",
      github: "https://github.com/karusaini/dashboard",
      image: "/dashboard-clone.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const group = [
    projects[currentIndex % total],
    projects[(currentIndex + 1) % total],
    projects[(currentIndex + 2) % total],
  ];

  const containerVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          A chronological journey through my projects
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative flex justify-center">
        <motion.div
          key={currentIndex}
          className="flex justify-center space-x-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          {group.map((project, index) => (
            <motion.div
              key={index}
              className="w-80 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 text-center"
              whileHover={{ scale: 1.02 }}
            >
              {project.image && (
                <div className="relative h-40 w-full mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 rounded text-white transition-all hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition-all hover:scale-105"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
