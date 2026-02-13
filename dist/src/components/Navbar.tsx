import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-3 group">
              <span className="text-white font-bold text-xl tracking-tight">
                IAM<span className="text-cyan-400">RNLDO</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isOpen
                      ? "rotate-180 opacity-0 scale-0"
                      : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isOpen
                      ? "rotate-0 opacity-100 scale-100"
                      : "-rotate-180 opacity-0 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div className="absolute top-0 right-0 h-full w-full sm:w-80 bg-gray-950 border-l border-white/5">
          <div className="px-6 py-20 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg text-lg font-medium transition-all hover:bg-white/5 transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${100 + index * 50}ms` : "0ms",
                  transitionDuration: "300ms",
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`block text-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 transform ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? "350ms" : "0ms",
                  transitionDuration: "300ms",
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
