"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Advanced Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Karina's Portfolio
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-6 text-gray-700 dark:text-gray-200">
          <li>
            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#techstack" className="hover:text-purple-600 transition">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-600 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className="hover:text-purple-600 transition"
            >
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button with Consistent Gradient */}
        <a
          href="/images/Karina_Saini_Resume.pdf"
          download="Karina_Saini_Resume.pdf"
          className="ml-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-base transition-all hover:scale-105"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
