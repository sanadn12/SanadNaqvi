"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full border border-white bg-opacity-5 backdrop-blur-sm text-white py-6 px-6 flex justify-between items-center z-50">
      {/* Logo with Thunder Effect */}
      <div className="text-2xl font-bold font-Syne relative thunder-text">
        Sanad Naqvi
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Navigation Links with Opacity Transition */}
      <ul
        className={`absolute md:static top-16 left-0 right-0 w-full md:w-auto mt-2 
         bg-black bg-opacity-90 md:bg-transparent text-white
         md:flex md:space-x-8 text-lg transition-all duration-300 ease-in-out transform
         ${
           isOpen
             ? "opacity-100 scale-100 mt-8 md:mt-0 translate-y-0 visible py-4 flex flex-col items-center space-y-2 md:flex-row md:space-y-0"
             : "opacity-0 scale-95 -translate-y-2 hidden md:opacity-100 md:scale-100 md:translate-y-0 md:flex md:space-y-0"
         }`}
      >
        <li className="hover:text-gray-300 cursor-pointer py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer py-2">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer py-2">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer py-2">
          <Link href="/skills">Skills</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer py-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;