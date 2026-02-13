import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-10 px-5 border-t border-border relative overflow-hidden">
      {/* Glow background corners */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Karina&apos;s Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Passionate Web Developer | Creating modern & responsive web apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-muted-foreground">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links & Resume */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-3xl">
            <a
              href="https://github.com/karusaini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-indigo-500 transition-transform duration-300"
            >
              <FaGithub className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/karina-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-indigo-500 transition-transform duration-300"
            >
              <FaLinkedin className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.fiverr.com/karina_saini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-green-500 transition-transform duration-300"
            >
              <TbBrandFiverr className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Luxury Gradient Button */}
          <div className="mt-6 text-center md:text-left">
            <a
              href="/images/Karina_Saini_Resume.pdf"
              download="Karina_Saini_Resume.pdf"
            >
              <Button
                className="mt-8 rounded-lg px-6 py-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800
               text-white font-medium transition-transform duration-300 ease-in-out
               hover:-translate-y-1 hover:scale-105"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-muted-foreground border-t border-border pt-4 text-sm">
        © {new Date().getFullYear()} Karina Saini. All Rights Reserved.
      </div>
    </footer>
  );
}
