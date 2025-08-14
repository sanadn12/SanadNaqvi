"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <motion.a
              href="tel:8779500564"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 30px rgba(255, 215, 0, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="relative block w-full h-52 rounded-xl shadow-xl flex flex-col items-center justify-center text-white overflow-hidden border border-yellow-400/30 bg-gradient-to-br from-black to-gray-900/80 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
              <div className="relative z-10 p-6">
                <FiPhone className="text-3xl text-yellow-400 mx-auto mb-4" />
                <p className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  Contact No
                </p>
                <p className="text-lg md:text-xl mt-4 text-yellow-200">+91 8779500564</p>
                <p className="text-lg md:text-xl text-yellow-200">+91 9324078235</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Email Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <motion.a
              href="mailto:ni.sanad1333@gmail.com"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="relative block w-full h-52 rounded-xl shadow-xl flex flex-col items-center justify-center text-white overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-black to-gray-900/80 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
              <div className="relative z-10 p-6">
                <FiMail className="text-3xl text-cyan-400 mx-auto mb-4" />
                <p className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Email
                </p>
                <p className="text-lg md:text-xl mt-4 text-cyan-200">ni.sanad1233@gmail.com</p>
                <p className="text-lg md:text-xl text-cyan-200">ni.sanad1333@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Social Media Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative block w-full h-52 rounded-xl shadow-xl flex flex-col items-center justify-center text-white overflow-hidden border border-purple-400/30 bg-gradient-to-br from-black to-gray-900/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-purple-500/10 group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
              <div className="relative z-10 p-6 w-full">
                <p className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-6">
                  Connect With Me
                </p>
                <div className="flex justify-center space-x-6">
                  <motion.a 
                    href="https://github.com/sanadn12" 
                    whileHover={{ y: -5, scale: 1.2 }}
                    className="text-2xl text-white hover:text-black transition-colors"
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/sanad-naqvi-687703256/" 
                    whileHover={{ y: -5, scale: 1.2 }}
                    className="text-2xl text-white hover:text-blue-400 transition-colors"
                  >
                    <FiLinkedin />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/sanad_n12" 
                    whileHover={{ y: -5, scale: 1.2 }}
                    className="text-2xl text-white hover:text-purple-400 transition-colors"
                  >
                    <FiInstagram />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-base md:text-lg mt-16 md:mt-24 tracking-wide font-bold drop-shadow-lg px-4 text-center">
        &copy; {new Date().getFullYear()} SANAD NAQVI All Rights Reserved
      </p>

      {/* Floating Hire Me Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="mailto:ni.sanad1233@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2"
        >
          <FiMail className="text-xl" />
          <span>Hire Me</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Footer; 