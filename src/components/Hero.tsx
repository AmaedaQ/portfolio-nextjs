"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="max-w-3xl text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-cyan-400">Amaeda</span> <br />
          A Full-Stack Web Developer
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I build AI-powered, fast, and scalable web apps that solve real problems.
        </motion.p>

        <motion.div
          className="mb-6 flex justify-center gap-6 text-2xl text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <a
            href="https://github.com/AmaedaQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // Replace with your real LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="#projects">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-md">
              🚀 View Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
