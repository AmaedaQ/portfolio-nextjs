"use client";
import { motion } from "framer-motion";
import SkillBook from "./SkillBook";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I’m a passionate Full Stack Web Developer with a knack for building clean, fast, and scalable apps.
          My specialty? Crafting smart interfaces and AI-powered solutions that not only look good —
          they *think* good. I blend logic, creativity, and performance into everything I build.
        </motion.p>

        <motion.p
          className="text-gray-400 italic text-base leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Click on a category below to open my SkillBook — and explore what I bring to the table.
        </motion.p>

        <SkillBook />
      </div>
    </section>
  );
};

export default About;
