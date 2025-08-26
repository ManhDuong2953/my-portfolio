"use client";
import { motion } from "motion/react";

const footerLinks = {
  navigation: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Duong Van Manhbig",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/Duong Van Manhpreet-singh-9a1929211",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:Duong Van Manhpreetsinghjhiwant7@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm mt-32 border-white/10 border-t">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
      </div>

      <div className="z-10 relative mx-auto px-6 py-16 max-w-6xl">
        {/* Main Footer Content */}
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="bg-clip-text bg-gradient-to-r from-white to-blue-400 font-bold text-transparent text-2xl">
                Duong Van Manh
              </h3>
              <p className="mt-2 max-w-md text-slate-400">
                Full-stack developer passionate about creating exceptional digital experiences
                with modern technologies and clean code.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="gap-4 grid grid-cols-3 max-w-sm">
              <div className="text-center">
                <div className="font-bold text-white text-xl">50+</div>
                <div className="text-slate-400 text-xs">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-xl">1+</div>
                <div className="text-slate-400 text-xs">Years</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-xl">60+</div>
                <div className="text-slate-400 text-xs">Repos</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 font-semibold text-white text-lg">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 font-semibold text-white text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-slate-400 text-sm">
                <div className="mb-1 font-medium text-white">Email</div>
                <a
                  href="mailto:Duong Van Manhpreetsinghjhiwant7@gmail.com"
                  className="hover:text-white break-all transition-colors duration-300"
                >
                  Duong Van Manhpreetsinghjhiwant7@gmail.com
                </a>
              </div>
              <div className="text-slate-400 text-sm">
                <div className="mb-1 font-medium text-white">Location</div>
                <div>Punjab, India</div>
              </div>
              <div className="text-slate-400 text-sm">
                <div className="mb-1 font-medium text-white">Status</div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></div>
                  Available for projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex sm:flex-row flex-col justify-between items-center pt-8 border-white/10 border-t"
        >
          <div className="flex items-center gap-6 mb-4 sm:mb-0">
            {footerLinks.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex justify-center items-center bg-white/10 hover:bg-blue-500/20 rounded-full w-10 h-10 text-slate-400 hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center sm:text-right">
            <div className="mb-1 text-slate-400 text-sm">
              © {currentYear} Duong Van Manh. All rights reserved.
            </div>
            <div className="text-slate-500 text-xs">
              Built with Next.js, TypeScript & Tailwind CSS
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="top-8 right-8 absolute flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
