"use client";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-4`}
    >
      <div className="z-10 relative flex justify-between items-center mx-auto max-w-6xl">
        <div className="flex justify-between items-center bg-black shadow-lg mx-auto px-6 py-3 border border-white/20 rounded-2xl">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-2 py-1 font-medium text-slate-300 hover:text-white text-sm transition-colors duration-300"
              >
                {link.label}
                <span className="bottom-0 absolute inset-x-0 bg-gradient-to-r from-sky-500 to-blue-600 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative flex flex-col justify-center items-center bg-white/10 hover:bg-white/20 rounded-lg w-8 h-8 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="space-y-4 py-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block hover:bg-white/5 px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
