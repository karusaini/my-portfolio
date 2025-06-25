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
      className="py-16 px-6 bg-gray-50 dark:bg-background"
    >
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-foreground dark:text-white">
          Certifications
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Professional certifications that validate my skills and expertise.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-card border border-border rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-foreground">
              {cert.title}
            </h3>
            <a
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg text-primary hover:underline"
            >
              {cert.provider}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>
            <div className="mt-4 text-center">
              <Button
                onClick={() => handleViewCertificate(cert)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Certificate
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Dialog */}
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
            <BaseDialogContent className="sm:max-w-[500px] w-full mx-auto text-center">
              <DialogHeader>
                <DialogTitle className="text-center">Certificate</DialogTitle>
                <DialogDescription className="text-center text-foreground">
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
