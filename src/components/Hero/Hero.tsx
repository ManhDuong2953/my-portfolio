"use client";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";
import TextType from "../TextAnimations/TextType/TextType";

const roles = [
  "Backend Developer",
  "Mobile App Developer",
  "Frontend Developer",
];

export default function Hero() {
  return (
    <header className="relative flex justify-center items-center h-[calc(100vh-60px)] overflow-hidden">
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
      <div className="z-10 relative flex flex-col items-start mx-auto px-6 max-w-5xl text-start">
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
            className="bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-600 text-[aqua]"
          >
            <BlurText
              text="Hi, I'm Duong Van Manh"
              animateBy="words"
              delay={100}
              direction="top"
              className="block mb-4 text-2xl"
            />
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TextType
              text={roles}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed"
        >
          I’m a Fullstack Developer experienced in Nuxt.js, Node.js, and various
          frameworks and libraries, also building cross-platform mobile apps
          with Flutter, with a focus on performance and user experience.
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
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1 duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
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
      </div>
    </header>
  );
}
