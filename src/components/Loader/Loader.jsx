import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "SOFTWARE ENGINEER",
  "FULL STACK DEVELOPER",
  "UI/UX DESIGNER",
  "DATABASE ARCHITECT",
  "DEVOPS SPECIALIST",
  "PROBLEM SOLVER",
  "TECHNICAL LEADER"
];

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [lightning, setLightning] = useState([]);

  // Create lightning bolts
  useEffect(() => {
    const boltCount = window.innerWidth < 768 ? 3 : 5;
    const newBolts = Array.from({ length: boltCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 30,
      rotation: Math.random() * 60 - 30,
      delay: i * 0.3,
      duration: 0.8 + Math.random() * 0.4
    }));
    setLightning(newBolts);
  }, []);

  // Skill rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
        setFade(true);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 overflow-hidden p-4">
      {/* Thunder car-style lightning bolts */}
      {lightning.map((bolt) => (
        <motion.div
          key={bolt.id}
          className="absolute pointer-events-none"
          style={{
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            rotate: `${bolt.rotation}deg`,
            width: "2px",
            height: "50px",
            background: "linear-gradient(to bottom, transparent, #3b82f6, transparent)",
            boxShadow: "0 0 15px #3b82f6"
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            height: [0, 50, 0],
          }}
          transition={{
            delay: bolt.delay,
            duration: bolt.duration,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Engine revving effect */}
      <motion.div 
        className="absolute inset-0 bg-blue-900/10"
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center w-full max-w-2xl"
      >
        {/* Title with electric crackle effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            animate={{
              textShadow: [
                "0 0 5px #3b82f6",
                "0 0 20px #3b82f6",
                "0 0 5px #3b82f6"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          >
            SANAD
          </motion.span>
          <span className="text-blue-400 mx-2 sm:mx-3"> </span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            animate={{
              textShadow: [
                "0 0 5px #3b82f6",
                "0 0 20px #3b82f6",
                "0 0 5px #3b82f6"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3
            }}
          >
            NAQVI
          </motion.span>
        </h1>

        {/* Skill text with electric pulse */}
        <motion.div
          className={`text-xl sm:text-2xl font-semibold uppercase tracking-wide mt-6 sm:mt-8 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
            animate={{
              textShadow: [
                "0 0 5px #3b82f6",
                "0 0 15px #3b82f6",
                "0 0 5px #3b82f6"
              ]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity
            }}
          >
            {skills[index]}
          </motion.span>
        </motion.div>

        {/* Speedometer-style indicator */}
        <motion.div 
          className="relative mt-8 sm:mt-12 mx-auto w-3/4 h-2 bg-gray-800 rounded-full overflow-hidden"
          initial={{ scaleX: 0.8 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 flex">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="h-full w-px bg-white/20"
                style={{ marginLeft: i === 0 ? 0 : "9%" }}
              />
            ))}
          </div>
        </motion.div>

   
      </motion.div>

      {/* Exhaust effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/20 to-transparent"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default Loader;