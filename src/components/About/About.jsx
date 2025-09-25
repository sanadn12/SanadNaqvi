"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative mt-20 md:mt-16 flex flex-col md:flex-row items-center justify-center h-auto min-h-screen px-4 md:px-8 lg:px-12 py-12 md:py-0 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute -top-20 -left-20 w-64 lg:w-96 h-64 lg:h-96 bg-cyan-500/20 blur-[100px] rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute -bottom-20 -right-20 w-64 lg:w-96 h-64 lg:h-96 bg-cyan-400/15 blur-[100px] rounded-full"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
        
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
          }}
          className="flex-1 max-w-md lg:max-w-lg group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          
          <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-6 md:p-8 shadow-2xl">
            {/* Icon Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🎓</span>
                </motion.div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            
            <div className="space-y-4 text-gray-200">
              <p className="text-lg leading-relaxed">
                I am a <span className="font-semibold text-cyan-300">4th-year Artificial Intelligence & Data Science</span> student at{" "}
                <span className="font-semibold text-cyan-300">Rizvi College of Engineering</span>.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border-l-4 border-cyan-400">
                <p className="text-md">
                  Focused on <span className="text-cyan-300 font-medium">Machine Learning, Deep Learning, NLP, and Big Data</span> technologies.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"
            />
          </div>
        </motion.div>

        {/* Work Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
          }}
          className="flex-1 max-w-md lg:max-w-lg group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          
          <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-6 md:p-8 shadow-2xl">
            {/* Icon Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💼</span>
                </motion.div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Work Experience
            </h2>
            
            <div className="space-y-6">
              {/* DigiRich Experience */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border-l-4 border-cyan-400">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-300">
                  Software Development Engineer – DigiRich
                </h3>
                <span className="text-cyan-200/80 text-sm">Jun 2025 – Sept 2025</span>
                
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Worked on scalable web applications, improving performance and optimizing backend APIs
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Contributed to frontend features in React/Next.js and backend systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Gained exposure to cloud deployment (AWS) and agile development
                  </li>
                </ul>
              </div>

              {/* Code4Bharat Experience */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border-l-4 border-blue-400">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-300">
                  Software Development Engineer – Code4Bharat
                </h3>
                <span className="text-cyan-200/80 text-sm">Aug 2024 – Feb 2025</span>
                
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Developed full-stack web development skills across multiple projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Gained experience in deployment and cross-functional collaboration
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Served as Team Leader for international project management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
          }}
          className="flex-1 max-w-md lg:max-w-lg group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          
          <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-6 md:p-8 shadow-2xl">
            {/* Icon Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Full Stack Developer
            </h2>
            
            <div className="space-y-4 text-gray-200">
              <p className="text-lg leading-relaxed">
                Specialized in <span className="font-semibold text-cyan-300">Next.js, React, Node.js, Express, PostgreSQL, MongoDB</span>
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  "Scalable Web Apps", "REST APIs", "WebSockets", "Authentication",
                  "Database Optimization", "AI Integration", "Cloud Computing", "DevOps"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-2 text-center transition-all"
                  >
                    <span className="text-cyan-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Animated Dots */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Connection Lines for Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            d="M25,50 Q37.5,45 37.5,50 Q37.5,55 50,50 Q62.5,45 62.5,50 Q62.5,55 75,50"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="0.1 0.5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default About;