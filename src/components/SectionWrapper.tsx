"use client";

import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionWrapper = ({ children, className = "", delay = 0 }: SectionWrapperProps) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};
