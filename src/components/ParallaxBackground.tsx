"use client";

import { useState, useEffect } from 'react';

export const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
        style={{
          transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0)`,
          top: '10%',
          left: '10%',
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        style={{
          transform: `translate3d(${-scrollY * 0.15}px, ${scrollY * 0.08}px, 0)`,
          top: '50%',
          right: '10%',
        }}
      />
      <div 
        className="absolute w-72 h-72 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
        style={{
          transform: `translate3d(${scrollY * 0.12}px, ${scrollY * 0.06}px, 0)`,
          bottom: '20%',
          left: '20%',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate3d(0, ${scrollY * (0.02 + Math.random() * 0.02)}px, 0)`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
