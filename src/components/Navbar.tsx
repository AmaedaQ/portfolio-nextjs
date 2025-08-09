"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-lg shadow-lg border-b border-gray-800/50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-wide hover:scale-105 transition-all duration-300">
          Amaeda
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white text-base font-medium font-[Poppins]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              <span className="text-gray-300 group-hover:text-cyan-400 transition-all duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-[#0a0a0c]/95 backdrop-blur-lg overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}