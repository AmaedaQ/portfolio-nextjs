"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timelineItems = [
  {
    type: "experience",
    role: "Full-Stack Engineer (Freelance)",
    company: "Remote",
    duration: "Jan 2025 – Present",
    points: [
      "Designed and developed AI-powered chatbot solutions using Rasa for real-time customer engagement.",
      "Delivered full-stack MERN applications with scalable backend architecture and modular frontend components.",
      "Optimized MongoDB queries and REST API endpoints, improving data retrieval speed and overall system performance."
    ],
    
  },
  {
    type: "experience",
    role: "MERN Stack Developer Intern",
    company: "Web3gle — Lahore, Pakistan",
    duration: "Jun 2024 – Aug 2024",
    points: [
      "Enhanced React apps and integrated Redux and APIs.",
      "Improved modularity and maintainability across components.",
    ],
  },
  {
    type: "experience",
    role: "Web Developer Intern",
    company: "Encryptix — Remote",
    duration: "Mar 2024 – May 2024",
    points: [
      "Built real-time interfaces using React and WebSocket.",
      "Optimized backend queries for responsiveness.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Science in Computer Science",
    company: "Sukkur IBA University",
    duration: "2020 – 2024",
    points: [
      "Fully Funded Merit Scholarship recipient.",
      "Led technical & AI-based projects during final year.",
    ],
  },
];

export default function CareerJourney() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current as HTMLElement;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.min(1, Math.max(0, 1 - rect.top / (rect.height - windowHeight)));
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Enhanced Background with Gradient and Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#1a1a2e] to-[#0a0a0c] z-0">
        <div
          className="absolute inset-0 opacity-10 animate-twinkle"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl top-[-20%] left-[-30%] animate-pulse-slow z-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 font-[Inter]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Career Journey
        </motion.h2>

        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto my-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Timeline */}
        <div className="relative mt-16 pl-8 sm:pl-12" ref={containerRef}>
          {/* Progress Line */}
          <div className="absolute left-2.5 sm:left-3.5 top-0 h-full w-1.5 bg-gray-800/50 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-500 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Dot */}
                <span className="absolute left-[-0.75rem] sm:left-[-0.875rem] top-2 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-[#0a0a0c] z-10 shadow-lg animate-pulse-slow" />

                {/* Card */}
                <div className="ml-8 sm:ml-12 bg-[#1a1a2e]/80 backdrop-blur-lg border border-gray-800/50 rounded-xl p-6 shadow-md transition-all hover:shadow-cyan-500/20 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-3 font-[Poppins]">
                        {item.type === "education" ? (
                          <FaGraduationCap className="text-cyan-400 text-xl" />
                        ) : (
                          <FaBriefcase className="text-cyan-400 text-xl" />
                        )}
                        {item.role}
                      </h3>
                      <span className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-0 font-[Roboto]">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 italic mb-4 font-[Roboto]">{item.company}</p>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2 font-[Roboto]">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        .animate-twinkle {
          animation: twinkle 6s infinite;
        }
      `}</style>
    </section>
  );
}
