"use client";

import { useEffect } from "react";

export default function ScrollProgressBar() {
  useEffect(() => {
    const progressBar = document.getElementById('nexus-progress-bar');
    const onScroll = () => {
      if (progressBar) {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(pct, 100)}%`;
      }
      // Scroll reveal
      document.querySelectorAll('.sr').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('in-view');
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      id="nexus-progress-bar" 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        height: "2.5px", 
        width: "0%", 
        background: "linear-gradient(90deg, #0ea5e9, #38bdf8, #0ea5e9)", 
        zIndex: 10001, 
        boxShadow: "0 0 12px rgba(14, 165, 233, 0.5)", 
        transition: "width 0.08s linear", 
        pointerEvents: "none" 
      }} 
    />
  );
}
