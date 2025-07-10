"use client";

import { motion } from "motion/react";

function Home() {
  return (
    <>
      <motion.button
        className="text-3xl text-white p-4 bg-amber-400"
        animate={{
          backgroundColor: "#f214ea",
          color: "#000",
          y: "140%",
          x: "70%",
          scale: "1.5",
        }}>
        This is the Home Page
      </motion.button>
    </>
  );
}

export default Home;
