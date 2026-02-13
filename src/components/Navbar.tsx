"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-sm"
          : "bg-white/80 dark:bg-gray-900/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left - Logo */}
          {/* Left - Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold tracking-tight
      bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500
      bg-clip-text text-transparent
      transition-all duration-300
      hover:brightness-110"
            >
              Karina
            </Link>
          </div>

          {/* Center - Links */}
          <ul className="flex justify-center items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right - Resume Button */}
          <div className="flex justify-end">
            <a
              href="/images/Karina_Saini_Resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="
    mt-4 block text-center rounded-lg px-6 py-2 
    bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800
    text-white font-medium 
    transition-transform duration-300 ease-in-out
    hover:-translate-y-1 hover:translate-x-0.5 hover:scale-105
  "
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            Karina
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 space-y-5 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-indigo-600"
                >
                  {label}
                </a>
              ))}

              <a
                href="/images/Karina_Saini_Resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="
    mt-4 block text-center rounded-lg px-6 py-2 
    bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800
    text-white font-medium 
    transition-transform duration-300 ease-in-out
    hover:-translate-y-1 hover:translate-x-0.5 hover:scale-105
  "
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
