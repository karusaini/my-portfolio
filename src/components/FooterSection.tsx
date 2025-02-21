import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-5 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Karina's Portfolio
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Passionate Web Developer | Creating modern & responsive web apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-600">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links & Resume */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            {/* GitHub */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-blue-500 text-3xl transition duration-300"
            >
              <FaGithub className="group-hover:scale-110 transform transition" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-blue-500 text-3xl transition duration-300"
            >
              <FaLinkedin className="group-hover:scale-110 transform transition" />
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/your-fiverr"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-green-500 text-3xl transition duration-300"
            >
              <TbBrandFiverr className="group-hover:scale-110 transform transition" />
            </a>
          </div>

          {/* Resume Download Button */}
          <a
            href="/images/Karina_Saini_Resume.pdf"
            download="Karina_Saini_Resume.pdf"
            className=" rounded-lg mt-6 inline-block px-3 py-2  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-base hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-300 pt-4 text-sm">
        © {new Date().getFullYear()} Karina Saini. All Rights Reserved.
      </div>
    </footer>
  );
}
