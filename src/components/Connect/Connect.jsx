"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Connect = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
        Let's Connect ⚡
      </h2>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {[
          { icon: FaGithub, link: "https://github.com/sanadn12" },
          { icon: FaLinkedin, link: "https://linkedin.com/in/sanad-naqvi-687703256/" },
          { icon: FaFacebook, link: "https://facebook.com/sanad.naqvi.1" },
          { icon: FaInstagram, link: "https://instagram.com/sanad_n12" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative thunder-icon"
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <item.icon
              size={70} // Default for mobile
              className="text-white thunder-glow md:size-[100px] lg:size-[110px]"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
