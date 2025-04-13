"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Book } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "GitHub Actions", "Vercel", "Railway", "Netlify"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "LangChain", "TensorFlow", "Python", "HuggingFace"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "Git CLI"],
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
];

const SkillBook = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  const getCardHeight = (skillsCount: number) => {
    if (skillsCount > 6) {
      return "h-[320px]"; // Larger cards for more skills
    }
    return "h-[240px]"; // Smaller cards for fewer skills
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {skillCategories.map((cat, i) => {
        const isOpen = openCategory === cat.title;
        const cardHeight = getCardHeight(cat.skills.length); // Dynamically adjust card height

        return (
          <motion.div
            key={i}
            className="perspective-1000 relative transition-transform duration-500"
          >
            <motion.div
              onClick={() => toggleCategory(cat.title)}
              className={`cursor-pointer bg-gray-800 text-cyan-300 border border-cyan-600 rounded-2xl shadow-lg transform transition-transform duration-500 p-6 select-none ${cardHeight} ${
                isOpen ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                minHeight: "200px",
              }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-between text-lg font-bold px-6"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span>{cat.title}</span>
                <Book />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gray-900 border border-cyan-600 p-6 grid grid-cols-2 gap-3 rounded-2xl text-cyan-200 text-sm font-medium transform rotate-y-180"
                style={{ backfaceVisibility: "hidden" }}
              >
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-800 px-3 py-2 rounded-md text-center shadow hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillBook;
