"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"; // Adjust import path as needed

// Define an interface for a Certification
interface Certification {
  title: string;
  provider: string;
  date: string;
  image: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Udemy Next.js 14 & React - The Complete Guide",
      provider: "Udemy",
      date: "Jan 2024",
      image: "/certificates/next-certificate.jpg",
    },
    {
      title: "Advanced CSS and Sass",
      provider: "Udemy",
      date: "Feb 2024",
      image: "/certificates/css-certificate.jpg",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "Udemy",
      date: "Feb 2025",
      image: "/certificates/js-certificate.jpg",
    },
    {
      title: "Fiverr Freelancing 2024",
      provider: "Udemy",
      date: "Feb 2025",
      image: "/certificates/fiverr-certificate.jpg",
    },
    // Add more certifications as needed.
  ];

  // State to control the modal and the currently selected certificate.
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certification | null>(null);

  const handleViewCertificate = (certificate: Certification) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-800"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Certifications
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Professional certifications that validate my skills and expertise.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            {/* If provider is Udemy, make it a link */}
            {cert.provider === "Udemy" ? (
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-blue-500 hover:underline"
              >
                {cert.provider}
              </a>
            ) : (
              <p className="mt-2 text-lg text-blue-500">{cert.provider}</p>
            )}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {cert.date}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={() => handleViewCertificate(cert)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 rounded text-white transition-all hover:scale-105"
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] mx-auto text-center">
          <DialogHeader>
            <DialogTitle className="text-center">Certificate</DialogTitle>
            <DialogDescription className="text-center text-gray-900">
              Here is the certificate. You can view it in full size.
            </DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <div className="relative h-64 w-full my-4">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md"
              />
            </div>
          )}
          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-base hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
