"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import BlurText from "@/components/BlurText/BlurText";
import Squares from "@/components/Backgrounds/Squares/Squares";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Mobile App Developer",
  "Game Developer",
  "AI/ML Engineer"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative flex justify-center items-center h-[calc(100vh-60px)] overflow-hidden">
      {/* Background Elements */}
      <div className="z-0 absolute inset-0 opacity-20">
        {/* <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={32}
          borderColor="rgba(255,255,255,0.2)"
          hoverFillColor="rgba(255,255,255,0.1)"
        /> */}
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="top-1/4 left-1/4 absolute bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full w-72 h-72"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="right-1/4 bottom-1/4 absolute bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-full w-96 h-96"
        />
      </div>

      {/* Main Content */}
      <div className="z-10 relative flex flex-col items-center mx-auto px-6 max-w-5xl text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 rounded-full font-medium text-slate-300 text-sm">
            <span className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></span>
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="mb-6 sm:mb-8 font-extrabold text-3xl sm:text-4xl lg:text-5xl md:text-6xl xl:text-6xl leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 text-white"
          >
            <BlurText
              text="Hi, I'm Duong Van Manh"
              animateBy="words"
              delay={100}
              direction="top"
              className="block mb-4"
            />
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed"
        >
          I craft exceptional digital experiences using modern technologies like React, Next.js, and TypeScript.
          From web applications to mobile apps, games, and AI-powered solutions — I bring ideas to life with
          clean code and beautiful design.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-blue-600 hover:from-blue-500 to-purple-600 hover:to-purple-500 shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl overflow-hidden font-semibold text-white text-center transition-all duration-300"
          >
            <span className="z-10 relative flex justify-center items-center gap-2">
              View My Work
              <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-xl font-semibold text-white text-center transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bottom-2 left-1/2 absolute -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="font-medium text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
