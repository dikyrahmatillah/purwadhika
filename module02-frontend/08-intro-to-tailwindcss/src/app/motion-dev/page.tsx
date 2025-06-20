"use client";

import { motion } from "motion/react";

export default function MotionDev() {
  return (
    <main>
      <h1>Headless UI</h1>
      <motion.div
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
        dragConstraints={{
          top: -150,
          left: -150,
          right: 150,
          bottom: 150,
        }}
        className="w-20 h-20 bg-zinc-700 rounded-3xl"
      ></motion.div>
      <a href="/">Home</a>
    </main>
  );
}
