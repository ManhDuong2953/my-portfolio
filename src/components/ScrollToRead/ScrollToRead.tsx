"use client";
import { motion } from "motion/react";
export default function ScrollToRead() {
  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="bottom-20 left-1/2 absolute mt-4 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="font-medium text-[10px]">Scroll to explore</span>
          <div className="scrolldown-wrapper">
            <div className="scrolldown">
              <svg height="50" width="50">
                <circle className="scrolldown-p1" cx="8" cy="15" r="2" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
