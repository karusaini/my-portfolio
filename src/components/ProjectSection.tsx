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
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Item Listing App",
    description:
      "Users can add items with images and details, view them in a list, and send enquiries via modal with image carousel and EmailJS form.",
    liveUrl: "https://my-intern-project-psi.vercel.app",
    codeUrl: "https://github.com/karusaini/my-intern-project",
    image: "/images/shopping.png",
    tech: ["Next.js", "Tailwind", "EmailJS"],
  },
  {
    title: "Real Estate App",
    description:
      "Responsive real estate app with dynamic listings, secure Firebase login, and smooth navigation.",
    liveUrl: "https://real-estate-app-aan7.vercel.app",
    codeUrl: "https://github.com/karusaini/real-estate-app",
    image: "/images/estate.png",
    tech: ["Next.js", "Firebase", "Tailwind"],
  },
  {
    title: "Artistly Project",
    description:
      "Sleek art platform built with Next.js, Tailwind CSS, ShadCN UI, and Framer Motion.",
    liveUrl: "https://artistly-rouge.vercel.app",
    codeUrl: "https://github.com/karusaini/artistly",
    image: "/images/artistly.png",
    tech: ["Next.js", "Framer Motion", "ShadCN"],
  },
  {
    title: "E-Commerce Product Listing App",
    description:
      "Responsive e-commerce frontend featuring product listing, filters, dynamic routing, and cart persistence.",
    liveUrl: "https://whatbytes-frontend-gamma.vercel.app",
    codeUrl: "https://github.com/karusaini/whatbytes-frontend",
    image: "/images/whatbytes-ecommerce.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "AI Web Experience Builder",
    description:
      "Modern AI-powered platform designed to help developers build clean, responsive web interfaces faster.",
    liveUrl: "https://my-ai-site-rust.vercel.app",
    codeUrl: "https://github.com/karusaini/my-ai-site",
    image: "/images/aero.png",
    tech: ["Next.js", "AI APIs", "Tailwind"],
  },
  {
    title: "Therapist Website",
    description:
      "Professional therapy website offering in-person and online sessions with clean responsive UI.",
    liveUrl: "https://therapist-website-ochre.vercel.app",
    codeUrl: "https://github.com/karusaini/therapist-website",
    image: "/images/therepist.png",
    tech: ["Next.js", "Tailwind", "Responsive UI"],
  },
  {
    title: "PollarBear App",
    description:
      "Create and share real-time polls easily with a clean and interactive UI.",
    liveUrl: "https://pollarbear-main.vercel.app/",
    codeUrl: "https://github.com/karusaini/pollarbear",
    image: "/images/pollarbear.png",
    tech: ["Next.js", "Realtime Data", "Tailwind"],
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time crypto tracking app using TailwindCSS and ShadCN UI with responsive design.",
    liveUrl: "https://crypto-tracker-liart-eight.vercel.app/",
    codeUrl: "https://github.com/karusaini/crypto-tracker",
    image: "/images/doge.svg",
    tech: ["Next.js", "API", "ShadCN"],
  },
  {
    title: "Skincare Products Website",
    description:
      "Responsive landing page built from Figma using Next.js, TailwindCSS, and ShadCN UI.",
    liveUrl: "https://skincare-landing-website-4xoi.vercel.app",
    codeUrl: "https://github.com/karusaini/skincare-landing-website",
    image: "/images/skincare.png",
    tech: ["Next.js", "Figma", "Tailwind"],
  },
  {
    title: "Car Finder Website",
    description:
      "Modern UI for filtering cars by brand, fuel type, and year using TypeScript.",
    liveUrl: "https://car-finder-ten.vercel.app/",
    codeUrl: "https://github.com/karusaini/car-finder",
    image: "/images/car.webp",
    tech: ["Next.js", "TypeScript", "ShadCN"],
  },
  {
    title: "GitHub Analyzer",
    description:
      "Visualizes GitHub stats like repository count and languages using clean UI.",
    liveUrl: "https://github-analyzer-woad.vercel.app/",
    codeUrl: "https://github.com/karusaini/github-analyzer",
    image: "/images/github.jpg",
    tech: ["Next.js", "GitHub API", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Luxury Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="w-28 mx-auto mb-6">
          <Lottie animationData={animationData} loop autoplay />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          A curated collection of my best frontend and full-stack apps.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col bg-white dark:bg-zinc-900">
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-6 flex flex-col justify-between flex-grow">
                <div className="text-center">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
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
                      className="bg-zinc-900 text-white hover:bg-black transition"
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
                      className="border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition"
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
