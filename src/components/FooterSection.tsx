import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-10 px-5 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
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
                  className="hover:text-blue-500 transition-colors"
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
          <div className="flex justify-center md:justify-start space-x-5">
            {/* GitHub */}
            <a
              href="https://github.com/karusaini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-blue-500 text-3xl transition"
            >
              <FaGithub className="group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karina-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-blue-500 text-3xl transition"
            >
              <FaLinkedin className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/karina_saini"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-green-500 text-3xl transition"
            >
              <TbBrandFiverr className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/images/Karina_Saini_Resume.pdf"
            download="Karina_Saini_Resume.pdf"
            className="inline-block mt-6"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-muted-foreground border-t border-border pt-4 text-sm">
        © {new Date().getFullYear()} Karina Saini. All Rights Reserved.
      </div>
    </footer>
  );
}
