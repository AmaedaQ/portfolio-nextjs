"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccessModal(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && successModal) setSuccessModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [successModal]);

  return (
    <section id="contact" className="py-16 px-4 bg-[#0a0a0c] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#1a1a2e] to-[#0a0a0c] z-0">
        <div
          className="absolute inset-0 opacity-10 animate-twinkle"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "15px 15px" }}
        />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl top-[10%] right-[-20%] animate-pulse-slow z-0" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 font-[Inter]">
            Get in Touch 📬
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-[Roboto]">
            Drop a message or hit me up on socials for projects or collabs.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1a1a2e]/80 backdrop-blur-lg p-6 rounded-xl border border-cyan-500/30 min-h-[300px] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#2a2a3e]/50 text-white p-4 rounded-lg border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-[Roboto]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-[#2a2a3e]/50 text-white p-4 rounded-lg border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-[Roboto]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-[#2a2a3e]/50 text-white p-4 rounded-lg border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 mb-6 font-[Roboto]"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={sending}
            className="group relative w-full bg-transparent border-2 border-cyan-400 px-6 py-3 rounded-lg font-semibold text-white hover:bg-cyan-500/80 disabled:opacity-50 font-[Poppins]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <FaEnvelope size={16} />
              <span>{sending ? "Sending..." : "Send Message"}</span>
            </span>
          </button>
        </motion.form>

        {/* Social Links
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://github.com/AmaedaQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
            <FaLinkedin size={28} />
          </a>
        </motion.div> */}

        {/* Success Modal */}
        {successModal && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0c]/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSuccessModal(false)}
          >
            <motion.div
              className="bg-[#1a1a2e]/90 backdrop-blur-xl max-w-md rounded-xl border border-cyan-500/30 p-6 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSuccessModal(false)}
                className="absolute top-3 right-3 bg-red-500/30 hover:bg-red-500/50 text-red-300 p-1.5 rounded-full"
              >
                <FaTimes size={16} />
              </button>
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 font-[Poppins]">
                Message Sent! ✅
              </h3>
              <p className="text-sm text-gray-300 mb-6 font-[Roboto]">
                Thanks for reaching out. I’ll get back to you soon.
              </p>
              <button
                className="group relative bg-transparent border-2 border-cyan-400 px-6 py-2 rounded-lg font-semibold text-white hover:bg-cyan-500/80 font-[Poppins]"
                onClick={() => setSuccessModal(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <span className="relative z-10">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

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

export default Contact;