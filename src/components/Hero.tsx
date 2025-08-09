"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaBrain } from "react-icons/fa";
import Link from "next/link";

const titles = ["AI-Powered", "Full-Stack", "Scalable APIs", "UX-Focused", "React + Node.js"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Enhanced Background with Gradient and Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#1a1a2e] to-[#0a0a0c] z-0">
        <div className="absolute inset-0 opacity-10 animate-twinkle" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "15px 15px",
        }} />
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl top-[-40%] left-[-30%] animate-pulse-slow z-0" />
      </div>

      <div className="z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Inter]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Amaeda</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-gray-200 mb-4 h-[40px] font-medium font-[Poppins]"
          key={titles[titleIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titles[titleIndex]}
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-[Roboto]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Crafting intelligent, scalable web experiences with modern tech—blending AI, robust backend logic, and stunning UI.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mb-8 text-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="https://github.com/AmaedaQ" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">
            <FaLinkedin />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="#projects">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-cyan-400 rounded-xl overflow-hidden transition-all duration-300 hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Explore My Work</span>
            </button>
          </Link>
        </motion.div>

        {/* Stack Icons */}
        <motion.div
          className="flex justify-center gap-8 text-cyan-400 mt-12 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <FaReact title="React" className="hover:scale-110 transition-all duration-300" />
          <FaNodeJs title="Node.js" className="hover:scale-110 transition-all duration-300" />
          <FaBrain title="AI/ML" className="hover:scale-110 transition-all duration-300" />
        </motion.div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        .animate-twinkle {
          animation: twinkle 6s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}