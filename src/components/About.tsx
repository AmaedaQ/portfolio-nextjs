"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrain, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* Enhanced Background with Gradient and Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#1a1a2e] to-[#0a0a0c] z-0">
        <div
          className="absolute inset-0 opacity-10 animate-twinkle"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl top-[-20%] right-[-30%] animate-pulse-slow z-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 font-[Inter]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto font-[Poppins]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m <span className="text-cyan-400 font-semibold">Amaeda Qureshi</span>, a MERN stack developer who loves building clean, fast web apps with a touch of AI. I work with React, Node.js, and tools like Cursor to create user-friendly, scalable solutions.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray-400 italic mb-12 max-w-2xl mx-auto font-[Roboto]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Right now, I’m focused on crafting projects like job portals and AI chatbots, always aiming for solid code and great user experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />,
              title: "Full-Stack Development",
              desc: "Building web apps with React, Node.js, and MongoDB for smooth, scalable performance.",
            },
            {
              icon: <FaBrain className="text-blue-400 text-3xl mb-3" />,
              title: "AI & Machine Learning",
              desc: "Creating smart features with Python, Rasa, and CLIP for chatbots and more.",
            },
            {
              icon: <FaTools className="text-cyan-300 text-3xl mb-3" />,
              title: "Clean Code Practices",
              desc: "Writing maintainable code with tools like Git and Cursor for real projects.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-[#1a1a2e]/80 rounded-xl p-6 border border-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                {item.icon}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[Poppins]">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-[Roboto]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-transparent border-2 border-cyan-400 rounded-xl overflow-hidden transition-all duration-300 hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Let’s Connect</span>
          </a>
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