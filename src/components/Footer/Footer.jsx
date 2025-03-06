"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-white text-lg py-12 overflow-hidden">
      {/* Floating Thunder Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        className="absolute w-48 lg:w-72 h-full bg-cyan-500/30 blur-3xl"
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/flame.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Footer Content */}
      <div className="relative z-10 text-center space-y-8 w-full px-4">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-12">
          {/* Contact Box */}
          <motion.a
            href="tel:8779500564"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(255, 255, 0, 1)",
              filter: "drop-shadow(0px 0px 15px rgba(255, 255, 0, 1))",
            }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-xs md:w-80 h-44 rounded-xl shadow-xl flex flex-col items-center text-white overflow-hidden border-2 border-yellow-500 bg-black"
          >
            {/* Thunder Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-yellow-500 blur-xl opacity-40"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            <p className="font-bold mt-6 text-2xl md:text-3xl">Contact No</p>
            <p className="text-lg md:text-xl mt-2">+91 8779500564</p>
            <p className="text-lg md:text-xl">+91 9324078235</p>
          </motion.a>

          {/* Email Box */}
          <motion.a
            href="mailto:ni.sanad1333@gmail.com"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(0, 255, 255, 1)",
              filter: "drop-shadow(0px 0px 15px rgba(0, 255, 255, 1))",
            }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-xs md:w-80 h-44 rounded-xl shadow-xl flex flex-col items-center text-white overflow-hidden border-2 border-cyan-500 bg-black"
          >
            {/* Thunder Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 blur-xl opacity-40"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            <p className="font-bold text-2xl md:text-3xl mt-6">Email</p>
            <p className="text-lg md:text-xl mt-2">ni.sanad1233@gmail.com</p>
            <p className="text-lg md:text-xl">ni.sanad1333@gmail.com</p>
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-base md:text-lg mt-16 md:mt-24 tracking-wide font-bold drop-shadow-lg px-4 text-center">
        &copy; {new Date().getFullYear()} SANAD NAQVI All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
