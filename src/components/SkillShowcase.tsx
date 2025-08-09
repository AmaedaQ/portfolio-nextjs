"use client";
import { motion } from "framer-motion";
import {
  FaReact, FaNode, FaGitAlt, FaFigma, FaPython, FaGithub, FaCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb,
  SiExpress, SiScikitlearn, SiTensorflow, SiNumpy,
  SiPandas, SiOpencv, SiVercel,
} from "react-icons/si";

// Grouped skills
const categorizedSkills = {
  "Frontend": [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  ],
  "AI / Machine Learning": [
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Pandas", icon: <SiPandas className="text-blue-400" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "OpenCV", icon: <SiOpencv className="text-blue-400" /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ],
  "Workspace & AI Tools": [
    { name: "Cursor", icon: <FaCode className="text-blue-400" /> },
    { name: "Claude", icon: <FaCode className="text-cyan-400" /> },
    { name: "GitHub Desktop", icon: <FaGithub className="text-white" /> },
  ],
};

// Motion variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillShowcase = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0c] text-white overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 font-[Inter]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tech Stack & Skills
        </motion.h2>

        {/* Animated Divider */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto my-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1a1a2e]/80 backdrop-blur-lg border border-gray-800/50 rounded-xl p-6 shadow-md transition-all hover:shadow-cyan-500/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 font-[Poppins]">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={item}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="flex items-center gap-2 bg-[#2a2a3e]/50 backdrop-blur-sm border border-gray-700/50 px-3 py-1.5 rounded-full text-sm sm:text-base text-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      <span className="text-lg sm:text-xl">{skill.icon}</span>
                      <span className="font-[Roboto]">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
};

export default SkillShowcase;