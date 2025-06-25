"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl mx-auto px-4 py-3 rounded-xl backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md"
          : "bg-white/60 dark:bg-gray-800/50"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-blue-600 dark:text-white"
        >
          Karina&apos;s Portfolio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          {[
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Certifications", href: "#certifications" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-blue-600 transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/images/Karina_Saini_Resume.pdf"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 bg-white dark:bg-gray-900 rounded-lg p-4 text-sm font-medium text-gray-900 dark:text-white shadow-md"
          >
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Certifications", href: "#certifications" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  onClick={() => setIsOpen(false)}
                  href={href}
                  className="block hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="/images/Karina_Saini_Resume.pdf"
                download
                className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
