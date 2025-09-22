"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../public/lotties/projects.json";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Item Listing App",
    description:
      "Users can add items with images and details, view them in a list, and send enquiries via modal with image carousel and EmailJS form.",
    liveUrl: "https://my-intern-project-psi.vercel.app",
    codeUrl: "https://github.com/karusaini/my-intern-project",
    image: "/images/shopping.png",
  },

  {
    title: "Real Estate App",
    description:
      "Responsive real estate app with dynamic listings, secure Firebase login, and smooth navigation.",
    liveUrl: "https://real-estate-app-aan7.vercel.app",
    codeUrl: "https://github.com/karusaini/real-estate-app",
    image: "/images/estate.png",
  },

  {
    title: "Artistly project",
    description:
      "Artistly is a sleek art platform built with Next.js, Tailwind CSS, ShadCN UI, and Framer Motion, featuring smooth animations and a modern, responsive design.",
    liveUrl: "https://artistly-rouge.vercel.app",
    codeUrl: "https://github.com/karusaini/artistly",
    image: "/images/artistly.png",
  },

  {
    title: "Therapist-Website",
    description:
      " Dr. Serena Blake offers compassionate, evidence-based therapy to help you manage anxiety, heal from trauma, and build emotional resilience. In-person and online sessions available.",
    liveUrl: "https://therapist-website-ochre.vercel.app",
    codeUrl: "https://github.com/karusaini/therapist-website",
    image: "/images/therepist.png",
  },

  {
    title: "Pollarbear App",
    description:
      "PollarBear helps users create and share real-time polls easily. Built with modern UI practices.",
    liveUrl: "https://pollarbear-main.vercel.app/",
    codeUrl: "https://github.com/karusaini/pollarbear",
    image: "/images/pollarbear.png",
  },

  {
    title: "Crypto-tracker",
    description:
      "A real-time crypto tracking app using TailwindCSS and ShadCN UI, with a clean, responsive design.",
    liveUrl: "https://crypto-tracker-liart-eight.vercel.app/",
    codeUrl: "https://github.com/karusaini/crypto-tracker",
    image: "/images/doge.svg",
  },
  {
    title: "Skincare Products Website",
    description:
      "A responsive landing page built from Figma using Next.js, TailwindCSS, and ShadCN UI.",
    liveUrl: "https://skincare-landing-website-4xoi.vercel.app",
    codeUrl: "https://github.com/karusaini/skincare-landing-website",
    image: "/images/skincare.png",
  },
  {
    title: "Car Finder Website",
    description:
      "A modern UI for filtering cars by brand, fuel type, and year using TypeScript, ShadCN UI, and TailwindCSS.",
    liveUrl: "https://car-finder-ten.vercel.app/",
    codeUrl: "https://github.com/karusaini/car-finder",
    image: "/images/car.webp",
  },
  {
    title: "Github Analyzer",
    description:
      "Visualizes GitHub stats like repo counts and languages in a clean UI using Next.js and TailwindCSS.",
    liveUrl: "https://github-analyzer-woad.vercel.app/",
    codeUrl: "https://github.com/karusaini/github-analyzer",
    image: "/images/github.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="w-28 mx-auto mb-6">
          <Lottie animationData={animationData} loop autoplay />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          A curated collection of my best frontend and full-stack apps, crafted
          with modern UI principles.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow hover:shadow-md transition h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-center gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-gray-800 transition"
                    >
                      Live
                    </Button>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className=" border border-black text-black hover:bg-black hover:text-white transition"
                    >
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
