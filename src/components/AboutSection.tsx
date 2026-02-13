"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "2+ Years",
    description: "Learning & Growing in Web Development",
  },
  {
    title: "30+ Projects",
    description: "Real Estate, Artistly, Item Listing, and more",
  },
  {
    title: "Frontend Focused",
    description: "Specializing in React, Next.js & modern tools",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Section Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="mt-8 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          I’m a frontend developer with 2+ years of experience in React.js,
          Next.js, and TypeScript. I’ve built multiple real-world projects
          including a Real Estate platform, Artistly app, and Item Listing app.
          <br />
          <br />
          For me, coding isn’t just about features — it’s about creating smooth,
          meaningful digital experiences that people genuinely enjoy using.
        </p>
      </motion.div>

      {/* Premium CTA Card */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="relative rounded-2xl p-[1px] transition-all duration-500
  bg-transparent
  group-hover:bg-gradient-to-r
  group-hover:from-blue-600
  group-hover:via-purple-600
  group-hover:to-indigo-600
  group-hover:shadow-[0_0_40px_rgba(79,70,229,0.25)]"
        >
          <Card className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight text-black">
                Looking for a Creative Frontend Developer?
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                Let’s collaborate and build something meaningful together. I’m
                ready to contribute with clean code, fresh ideas, and a strong
                focus on design and performance.
              </p>

              <div className="text-center">
                <a href="#contact">
                  <Button className="rounded-lg px-6 py-2 bg-indigo-700 hover:bg-indigo-700 text-white transition-colors duration-200">
                    Hire Me
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="relative rounded-2xl p-[1px] transition-all duration-500
              bg-transparent
  group-hover:bg-gradient-to-r
  group-hover:from-blue-600
  group-hover:via-purple-600
  group-hover:to-indigo-600
  group-hover:shadow-[0_0_40px_rgba(79,70,229,0.25)]"
            >
              <Card className="rounded-2xl bg-white dark:bg-zinc-900 text-center py-8">
                <CardContent>
                  <h3 className="text-3xl font-bold bg-gradient-to-r bg-black bg-clip-text text-transparent">
                    {stat.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
