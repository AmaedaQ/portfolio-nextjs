"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaLayerGroup, FaBolt, FaCode, FaTrophy, FaPlay, FaEye } from 'react-icons/fa';

interface Project {
  title: string;
  tagline: string;
  description: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: string[];
  achievements: string[];
  image: string;
  screenshots: string[];
  video?: string;
  github?: string;
  live?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "ElevateSAP",
    tagline: "Smart Admission Platform for Sukkur IBA University",
    description: "An innovative admission management system that modernizes Sukkur IBA University’s student onboarding experience with features like AI-powered support, 360° campus tours, and an intuitive admin panel.",
    architecture: [
      "Modular MVC architecture with RESTful APIs",
      "JWT-secured user authentication",
      "Admin-side content management system (CMS)",
      "MongoDB for scalable data storage"
    ],
    keyFeatures: [
      "360° virtual campus tour using Kuula integration",
      "Dynamic AI chatbot for instant student support",
      "Interactive event timeline with real-time updates",
      "Tuition and fee calculator for cost transparency",
      "Admin dashboard for managing announcements and data"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Kuula", "JWT", "Tailwind CSS"],
    achievements: [
      "Developed a full-stack admission platform as my capstone project",
      "Integrated AI chatbot to handle 50+ common student queries",
      "Built responsive UI tested on 5+ device types for accessibility",
      "Received positive feedback during university demo presentation"
    ],
    image: "/assets/images/ElevateSAP/elevatesap-thumbnail.webp",
    screenshots: [
      "/assets/images/ElevateSAP/screen-1.png",
      "/assets/images/ElevateSAP/screen-2.png",
      "/assets/images/ElevateSAP/screen-3.png",
      "/assets/images/ElevateSAP/screen-4.png",
      "/assets/images/ElevateSAP/screen-5.png",
      "/assets/images/ElevateSAP/screen-6.png",
      "/assets/images/ElevateSAP/screen-7.png",
      "/assets/images/ElevateSAP/screen-8.png",
      "/assets/images/ElevateSAP/screen-9.png",
      "/assets/images/ElevateSAP/screen-10.png",
      "/assets/images/ElevateSAP/screen-11.png",
      "/assets/images/ElevateSAP/screen-12.png",
      "/assets/images/ElevateSAP/screen-13.png",
      "/assets/images/ElevateSAP/screen-14.png",


    ],
    video: "https://www.veed.io/view/69719be7-e3b6-4327-8c27-cb6b9079ac1d?panel=share",
    github: "https://github.com/AmaedaQ/Elevat-SAP",
    live: "",
    category: "Full-Stack Web App"
  },
  {
    title: "VisualShop-AI",
    tagline: "AI-Powered Multi-Vendor E-Commerce Platform",
    description: "An advanced e-commerce platform combining AI visual search, personalized recommendations, and smart inventory systems — built with a scalable microservices architecture for production-level performance.",
    architecture: [
      "Microservices architecture with REST APIs and Redis caching",
      "JWT-secured authentication and session management",
      "Modular AI services for visual search and recommendations",
      "MySQL database with optimized queries and indexing"
    ],
    keyFeatures: [
      "AI visual search using CLIP + FAISS for image-based product discovery",
      "Hybrid recommendation engine (collaborative, content-based, trending)",
      "Event-driven email system with delivery tracking and retry logic",
      "Smart inventory forecasting and priority scoring system",
      "Multi-role dashboards (Customer, Seller, Admin) with analytics"
    ],
    techStack: [
      "React 18", 
      "Node.js", 
      "Express.js", 
      "MySQL", 
      "Python", 
      "CLIP", 
      "FAISS", 
      "Gorse", 
      "Material-UI", 
      "Redis", 
      "SMTP"
    ],
    achievements: [
      "Built AI-powered visual search with CLIP and FAISS for 100+ sample products",
      "Developed recommendation engine tested with mock user data",
      "Implemented microservices backend with Redis caching for scalability",
      "Created role-based dashboards for customers, sellers, and admins"
    ],
    image: "/assets/images/VisualShop-AI/visualshop-ai-thumbnail.webp",
    screenshots: [
      "/assets/images/VisualShop-AI/screen-1.png",
      "/assets/images/VisualShop-AI/screen-2.png",
      "/assets/images/VisualShop-AI/screen-3.png",
      "/assets/images/VisualShop-AI/screen-4.png",
      "/assets/images/VisualShop-AI/screen-5.png",
      "/assets/images/VisualShop-AI/screen-6.png",
      "/assets/images/VisualShop-AI/screen-7.png",
      "/assets/images/VisualShop-AI/screen-8.png",
      "/assets/images/VisualShop-AI/screen-9.png",
      "/assets/images/VisualShop-AI/screen-10.png",
      "/assets/images/VisualShop-AI/screen-11.png",
      "/assets/images/VisualShop-AI/screen-12.png",
      "/assets/images/VisualShop-AI/screen-13.png",
      "/assets/images/VisualShop-AI/screen-14.png",
      "/assets/images/VisualShop-AI/screen-15.png",
      "/assets/images/VisualShop-AI/screen-16.png",
      "/assets/images/VisualShop-AI/screen-17.png"
    ],
    video: "https://www.veed.io/view/1f8282fd-8f78-4912-b1c3-985fb55aa3f7?panel=share",
    github: "https://github.com/AmaedaQ/VisualShop-AI",
    live: "",
    category: "AI + Full-Stack Web App"
  },    
  {
    title: "JobConnect Pro",
    tagline: "Enterprise Job Portal Platform",
    description:
      "A full-featured MERN-based recruitment platform enabling job seekers to search and apply for jobs, while employers can post listings, manage applications, and hire efficiently. Features include secure authentication, resume uploads, smart job matching, and real-time chat for seamless communication.",
    architecture: [
      "MERN stack with MVC pattern",
      "RESTful API with Express.js",
      "JWT-based authentication with refresh token mechanism",
      "Cloudinary for secure media upload and management",
      "Socket.io for real-time chat integration"
    ],
    keyFeatures: [
      "Advanced job search with dynamic filters",
      "Secure role-based authentication (job seeker/employer)",
      "Job application tracking system with dashboard",
      "Real-time messaging between employers and candidates",
      "Resume upload and parsing with skill matching",
      "Cloudinary integration for document/media handling"
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "Socket.io",
      "Tailwind CSS"
    ],
    achievements: [
      "Developed a MERN job portal with real-time Socket.io chat",
      "Integrated secure resume uploads via Cloudinary API",
      "Built job-matching algorithm tested with 50+ mock listings",
      "Demoed to peers and mentors with strong feedback"
    ],
    image: "/assets/images/JobConnect-Pro/jobconnect-pro-thumbnail.webp",
    screenshots: [
      "/assets/images/JobConnect-Pro/screen-1.png",
      "/assets/images/JobConnect-Pro/screen-2.png",
      "/assets/images/JobConnect-Pro/screen-3.png",
      "/assets/images/JobConnect-Pro/screen-4.png",
      "/assets/images/JobConnect-Pro/screen-5.png",
      "/assets/images/JobConnect-Pro/screen-6.png",
      "/assets/images/JobConnect-Pro/screen-7.png",
      "/assets/images/JobConnect-Pro/screen-8.png",
      "/assets/images/JobConnect-Pro/screen-9.png",
      "/assets/images/JobConnect-Pro/screen-10.png",
      "/assets/images/JobConnect-Pro/screen-11.png",
      "/assets/images/JobConnect-Pro/screen-12.png",
      


    ],
    video: "https://www.veed.io/view/f607d9fa-0ec9-4909-b621-1bd3195dfabc?panel=share",
    github: "https://github.com/AmaedaQ/JobConnect-Pro/tree/main",
    live: "",
    category: "MERN Stack Application"
  },
  {
    title: "Rasa E-Commerce Assistant",
    tagline: "AI Chatbot for Intelligent Customer Support",
    description: "A smart Rasa-based chatbot built for e-commerce platforms to streamline order management, product inquiries, and customer service through natural, conversational interactions.",
    architecture: [
      "Modular NLP pipeline using Rasa Open Source 3.x",
      "Intent recognition and entity extraction with spaCy",
      "Custom action server for business logic",
      "React-based frontend with real-time API communication"
    ],
    keyFeatures: [
      "Order tracking with ID validation and return policy handling",
      "Product search, availability checks, and spec responses",
      "Natural language understanding with contextual memory",
      "Shipping, payment, and customer support assistance",
      "Mood-aware fallback and escalation handling"
    ],
    techStack: [
      "Rasa 3.x", 
      "Python 3.8+", 
      "spaCy", 
      "React.js", 
      "Node.js", 
      "Express"
    ],
    achievements: [
      "Trained Rasa chatbot with 60+ intents for e-commerce tasks",
      "Integrated with React frontend for real-time user queries",
      "Tested with 100+ mock conversations for order and product support",
      "Enhanced NLP skills through Rasa and spaCy development"
    ],
    image: "/assets/images/Rasa-E-Commerce-Assistant/rasa-ecommerce-assistant-thumbnail.webp",
    screenshots: [
      "/assets/images/Rasa-E-Commerce-Assistant/screen-1.png",  
      "/assets/images/Rasa-E-Commerce-Assistant/screen-2.png",  
      "/assets/images/Rasa-E-Commerce-Assistant/screen-3.png",  
      "/assets/images/Rasa-E-Commerce-Assistant/screen-4.png",  
      "/assets/images/Rasa-E-Commerce-Assistant/screen-5.png",  
      "/assets/images/Rasa-E-Commerce-Assistant/screen-6.png",  
    ],
    video: "https://www.veed.io/view/234b237c-ce78-4298-9424-eccc3f525583?panel=share",
    github: "https://github.com/AmaedaQ/rasa-ecommerce-bot",
    live: "",
    category: "AI Chatbot / NLP"
  },
  {
    title: "Student Dropout Prediction System",
    tagline: "ML-Powered Platform to Predict and Prevent Student Dropouts",
    description: "A machine learning-driven system that predicts student dropout likelihood using demographic, academic, and financial data — helping institutions proactively improve retention and student success.",
    architecture: [
      "Flask-based web application for user interaction",
      "Preprocessing pipeline with feature engineering and PCA",
      "Multiple ML models for multi-class classification",
      "Scikit-learn-based model training and evaluation"
    ],
    keyFeatures: [
      "Trained with 4,400+ real-world student records and 35 features",
      "Supports classification into Dropout, Graduated, or Enrolled",
      "Includes Logistic Regression, Decision Trees, SVM, Random Forest, KNN, Naive Bayes",
      "Interactive frontend with live prediction and result visualization",
      "Detailed evaluation via Accuracy, Precision, Recall, F1-Score, and Confusion Matrix"
    ],
    techStack: [
      "Python", 
      "Flask", 
      "Scikit-learn", 
      "Pandas", 
      "NumPy", 
      "Matplotlib"
    ],
    achievements: [
      "Trained ML models achieving 80%+ accuracy on 4,400 student records",
      "Built Flask-based UI for real-time dropout predictions",
      "Identified key dropout factors through feature analysis",
      "Presented as a side project to showcase ML expertise"
    ],
    image: "/assets/images/Student-Dropout-Prediction-System/student-dropout-prediction-thumbnail.webp",
    screenshots: [
      "/assets/images/Student-Dropout-Prediction-System/screen-1.png",
      "/assets/images/Student-Dropout-Prediction-System/screen-2.png",
      "/assets/images/Student-Dropout-Prediction-System/screen-3.png"



    ],
    video: "",
    github: "https://github.com/AmaedaQ/Student-Dropout-Prediction-System",
    live: "",
    category: "Machine Learning / Data Science"
  },
  {
    title: "SalesAgent AI",
    tagline: "AI-Powered CLI Agent for Sales Lead Engagement",
    description: "A multi-threaded Python agent designed to autonomously engage with sales leads via CLI. It simulates real-world sales workflows such as lead qualification, personalized follow-ups, and response classification using AI-enhanced modules.",
    architecture: [
      "Modular Python system using classes and task handlers",
      "Multi-threaded execution with state-based lead management",
      "CLI-based interaction with conversational responses",
      "Custom lead simulation and retry logic"
    ],
    keyFeatures: [
      "AI-generated lead conversations with randomization for realism",
      "Lead qualification and scoring logic based on simulated responses",
      "Dynamic retry system for unresponsive leads",
      "CLI dashboard with lead progression tracking",
      "Clean modular design for agent logic, prompts, and simulation"
    ],
    techStack: [
      "Python 3.11", 
      "Rich (for terminal UI)", 
      "threading", 
      "random", 
      "OpenAI API (optional)",
      "modular OOP architecture"
    ],
    achievements: [
      "Built a CLI-based sales agent with multi-threaded logic",
      "Simulated 50+ lead interactions with dynamic responses",
      "Designed modular system for future CRM integration",
      "Tested with mock data to validate qualification logic"
    ],
    image: "/assets/images/SalesAgent-AI/salesagent-ai-thumbnail.webp",
    screenshots: [
      "/assets/images/SalesAgent-AI/screen-1.png",
      "/assets/images/SalesAgent-AI/screen2.png",
      "/assets/images/SalesAgent-AI/screen-3.png",
      "/assets/images/SalesAgent-AI/screen-04.png",
      "/assets/images/SalesAgent-AI/screen-06.png"
    ],
    video: "https://www.veed.io/view/e979f341-f51b-4f86-9f2e-472aa941dfb8?panel=share",
    github: "https://github.com/AmaedaQ/sales-agent",
    live: "",
    category: "AI Automation / CLI Agent"
  }
];

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'tech'>('overview');

  const nextImage = () => {
    const screenshots = selectedProject?.screenshots;
    if (screenshots && screenshots.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const screenshots = selectedProject?.screenshots;
    if (screenshots && screenshots.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? screenshots.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      } else if (e.key === 'ArrowRight' && selectedProject?.screenshots.length && selectedProject.screenshots.length > 1) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && selectedProject?.screenshots.length && selectedProject.screenshots.length > 1) {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Background */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 font-[Inter]">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-[Roboto]">
            Showcasing innovative solutions with clean architecture and cutting-edge tech
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
              className="group relative bg-[#1a1a2e]/80 backdrop-blur-lg border border-gray-800/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 font-[Poppins]">
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/button relative bg-transparent border-2 border-cyan-400 px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 font-[Poppins]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded-full"></span>
                    <span className="relative z-10 flex items-center space-x-2">
                      <FaEye size={16} />
                      <span>View Details</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors font-[Poppins]">
                  {project.title}
                </h3>
                <p className="text-cyan-300 text-sm mb-3 font-[Roboto]">{project.tagline}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 font-[Roboto]">{project.description}</p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-[#2a2a3e]/50 text-cyan-300 rounded-full border border-cyan-700/30 font-[Roboto]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-3 py-1 bg-[#2a2a3e]/30 text-gray-400 rounded-full font-[Roboto]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-[Roboto]"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-[Roboto]"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-[#0a0a0c]/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative bg-[#1a1a2e]/90 backdrop-blur-xl max-w-4xl w-full rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/10"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-red-500/30 hover:bg-red-500/50 text-red-300 hover:text-red-200 p-2 rounded-full transition-all duration-300"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Header */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 font-[Poppins]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 mb-2 font-[Inter]">
                  {selectedProject.title}
                </h3>
                <p className="text-base sm:text-lg text-cyan-300 mb-3 font-[Poppins]">{selectedProject.tagline}</p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-[Roboto]">{selectedProject.description}</p>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 mb-6 border-b border-gray-700/50">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2 px-4 text-sm font-semibold font-[Poppins] ${
                    activeTab === 'overview'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-400 hover:text-cyan-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`pb-2 px-4 text-sm font-semibold font-[Poppins] ${
                    activeTab === 'tech'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-400 hover:text-cyan-300'
                  }`}
                >
                  Technical Details
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Screenshots */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center space-x-2 font-[Poppins]">
                        <FaEye size={16} />
                        <span>Screenshots</span>
                      </h4>
                      <div className="relative bg-[#2a2a3e]/50 rounded-xl overflow-hidden max-w-full aspect-[16/9]">
                        <img
                          src={selectedProject.screenshots[currentImageIndex]}
                          alt={`${selectedProject.title} screenshot`}
                          className="w-full h-full object-contain"
                        />
                        {selectedProject.screenshots.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#0a0a0c]/70 hover:bg-[#0a0a0c]/90 text-white p-2 rounded-full transition-all duration-300"
                            >
                              <FaChevronLeft size={16} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0a0a0c]/70 hover:bg-[#0a0a0c]/90 text-white p-2 rounded-full transition-all duration-300"
                            >
                              <FaChevronRight size={16} />
                            </button>
                            <div className="absolute bottom-2 right-2 bg-[#0a0a0c]/70 text-white px-2 py-1 rounded-full text-xs font-[Roboto]">
                              {currentImageIndex + 1} / {selectedProject.screenshots.length}
                            </div>
                          </>
                        )}
                      </div>
                      {selectedProject.screenshots.length > 1 && (
                        <div className="flex space-x-2 mt-4 overflow-x-auto">
                          {selectedProject.screenshots.map((screenshot, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`flex-shrink-0 w-16 h-9 rounded-md overflow-hidden transition-all duration-300 ${
                                idx === currentImageIndex ? 'ring-2 ring-cyan-400' : 'opacity-70 hover:opacity-100'
                              }`}
                            >
                              <img
                                src={screenshot}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Video */}
                  {selectedProject.video && (
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center space-x-2 font-[Poppins]">
                        <FaPlay size={16} />
                        <span>Demo Video</span>
                      </h4>
                      <div className="bg-[#2a2a3e]/50 rounded-xl overflow-hidden max-w-full aspect-[16/9]">
                        <iframe
                          src={selectedProject.video}
                          title={`${selectedProject.title} Demo`}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'tech' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {/* Architecture */}
                  <div className="bg-[#2a2a3e]/50 border border-cyan-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaLayerGroup className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-cyan-400 font-[Poppins]">Architecture</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-[Roboto]">
                      {selectedProject.architecture.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="bg-[#2a2a3e]/50 border border-cyan-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaBolt className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-cyan-400 font-[Poppins]">Key Features</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-[Roboto]">
                      {selectedProject.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-[#2a2a3e]/50 border border-cyan-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaCode className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-cyan-400 font-[Poppins]">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#3a3a4e]/50 text-cyan-300 rounded-md text-xs font-[Roboto]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-[#2a2a3e]/50 border border-cyan-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaTrophy className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-cyan-400 font-[Poppins]">Achievements</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-[Roboto]">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-transparent border-2 border-cyan-400 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 font-[Poppins]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                    <span className="relative z-10 flex items-center space-x-2">
                      <FaGithub size={16} />
                      <span>View Code</span>
                    </span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-2 bg-transparent border-2 border-cyan-400 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 font-[Poppins]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                    <span className="relative z-10 flex items-center space-x-2">
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
