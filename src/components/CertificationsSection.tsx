"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent as BaseDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  ];

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
      className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Glow Corners */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          Professional certifications that validate my skills and expertise.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            {/* Gradient Border Wrapper */}
            <div
              className="relative rounded-2xl p-[1px] transition-all duration-500
              bg-transparent
              group-hover:bg-gradient-to-r
              group-hover:from-purple-500
              group-hover:via-blue-500
              group-hover:to-indigo-500
              group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 text-center h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <a
                  href="https://www.udemy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-md font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {cert.provider}
                </a>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
                <div className="mt-6">
                  <Button
                    onClick={() => handleViewCertificate(cert)}
                    className="
    relative rounded-lg px-6 py-4 bg-white text-black font-medium
    transition-all duration-300
    before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent
    before:transition-all before:duration-300
    hover:before:border-gradient-to-r hover:before:from-indigo-500 hover:before:via-purple-500 hover:before:to-blue-500
    before:pointer-events-none
    hover:bg-gray-100 dark:hover:bg-gray-800
  "
                  >
                    View Certificate
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <BaseDialogContent className="sm:max-w-[500px] w-full mx-auto text-center rounded-2xl bg-white dark:bg-zinc-900 p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certificate
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-sm">
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

              <Button
                onClick={() => setOpen(false)}
                className="w-full rounded-xl px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              >
                Close
              </Button>
            </BaseDialogContent>
          </motion.div>
        </DialogPortal>
      </Dialog>
    </section>
  );
}
