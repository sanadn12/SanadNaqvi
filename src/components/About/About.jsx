"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-auto min-h-screen px-6 py-12 md:py-0 overflow-hidden">
      {/* Floating Thunder Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        className="absolute w-48 lg:w-72 h-full bg-cyan-500/30 blur-3xl"
      />

      {/* Left Section: Education */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
        className="w-full max-w-xs md:max-w-lg md:h-72 text-white text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-cyan-400/70 transition-all 
        mb-6 md:mb-0 md:mr-12 md:relative md:left-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">🎓 Education</h2>
        <p className="mt-2 text-lg md:text-xl">
          I am a <span className="font-semibold text-cyan-300">3rd-year Artificial Intelligence & Data Science</span> student at  
          <span className="font-semibold text-cyan-300"> Rizvi College of Engineering</span>.
        </p>
        <p className="mt-3 text-md md:text-lg">
          My studies focus on <span className="text-cyan-300">Machine Learning, Deep Learning, NLP, and Big Data</span>.
        </p>
      </motion.div>

      {/* Right Section: Developer Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
        className="w-full max-w-xs md:max-w-lg text-white text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-cyan-400/70 transition-all 
        md:relative md:right-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">💻 Full Stack Developer</h2>
        <p className="mt-2 text-md md:text-lg">
          Specialized in <span className="font-semibold text-cyan-300">Next.js, React, Node.js, Express, PostgreSQL, MongoDB</span>.  
        </p>
        <p className="mt-3 text-sm md:text-md">
          Experienced in <span className="text-cyan-300">building scalable, high-performance web apps</span>.
        </p>
        <p className="mt-3 text-sm md:text-md">
          Passionate about REST APIs, WebSockets, authentication (OAuth, JWT), and database optimization.
        </p>
        <p className="mt-3 text-sm md:text-md">
          Also interested in AI-powered web apps, cloud computing, and DevOps (Docker, Kubernetes, AWS).
        </p>
      </motion.div>
    </div>
  );
};

export default About;
