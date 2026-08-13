"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChooseUs() {
  // null means video is playing. 0, 1, 2 means specific photo is showing.
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  // Ref to detect clicks outside the principles list
  const listRef = useRef<HTMLDivElement>(null);

  // Ref for the video element to enforce autoplay
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the user clicks anywhere outside the principles list, reset to video (null)
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setActivePrinciple(null);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Manifesto Card
      gsap.fromTo(".bento-manifesto-content > *",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".bento-manifesto-card",
            start: "top 80%",
          }
        }
      );
      
      gsap.fromTo(".bento-manifesto-asset",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: {
            trigger: ".bento-manifesto-card",
            start: "top 80%",
          }
        }
      );

      // Core grid
      gsap.fromTo(".bento-core-grid > .statement-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: ".bento-core-grid",
            start: "top 85%",
          }
        }
      );

    }, containerRef);

    return () => {
      // Cleanup
      document.removeEventListener("mousedown", handleClickOutside);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        <div className="bento-asymmetric-wrapper">
          {/* Top Row: Full Width Manifesto */}
          <div className="bento-manifesto-card">
            <div className="bento-manifesto-content">
              <span className="eyebrow-mono" style={{ color: "var(--muted)", marginBottom: "16px", display: "inline-block" }}>
                Why Hire Me
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: "24px",
                  lineHeight: 1.15
                }}
              >
                I build <span className="font-serif-i" style={{ color: "var(--accent)" }}>products</span>,<br />not just code.
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: "1.6", margin: 0, maxWidth: "600px" }}>
                As a solo developer, you get direct access to the person actually building your product — no middlemen, no miscommunication. I combine fast execution, technical depth, and a genuine commitment to your goals.
              </p>
            </div>
            <div className="bento-manifesto-asset" style={{ position: "relative", minHeight: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "220px",
                height: "220px",
                borderRadius: "4px",
                background: "var(--surface-2)",
                border: "1px solid var(--card-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
              }}>
                👨‍💻
              </div>
            </div>
          </div>

          {/* Bottom Row: Terminal + Core Principles */}
          <div className="bento-core-grid">
            {/* Left Column: Video or Principle Images Wrapped in a Card */}
            <div 
              className="statement-card premium-tilt-card"
              style={{ 
                height: "100%", 
                display: "flex", 
                alignItems: "center", 
                position: "relative", 
                zIndex: 5,
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "var(--card-shadow)",
                overflow: "hidden"
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px", overflow: "hidden" }}>

                {/* Default Ambient Video */}
                <video
                  ref={videoRef}
                  src="/images/commitment-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  suppressHydrationWarning
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: activePrinciple === null ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
                    transform: activePrinciple === null ? "scale(1)" : "scale(0.92)",
                    pointerEvents: activePrinciple === null ? "auto" : "none",
                  }}
                />

                {/* 3 Interactive Photos */}
                {[
                  "/images/principle-1.png",
                  "/images/principle-2.png",
                  "/images/principle-3.png"
                ].map((imgSrc, idx) => (
                  <Image
                    key={idx}
                    src={imgSrc}
                    alt={`Principle ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "contain",
                      opacity: activePrinciple === idx ? 1 : 0,
                      transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
                      transform: activePrinciple === idx ? "scale(1)" : "scale(0.92)",
                      pointerEvents: activePrinciple === idx ? "auto" : "none",
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Principles List Card */}
            <div
              className="statement-card bento-principles-card"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", height: "100%", background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "24px" }}
            >
              <div
                ref={listRef}
                className="bento-principles-list"
                style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {[
                  {
                    title: "Direct Communication",
                    desc: "You talk directly to the developer building your product. No account managers, no delays.",
                  },
                  {
                    title: "Fast Turnaround",
                    desc: "I deliver MVPs in 1-2 weeks. No bloated timelines or unnecessary meetings.",
                  },
                  {
                    title: "Proven Under Pressure",
                    desc: "3 hackathon wins prove I can think fast, build clean, and deliver on deadlines.",
                  },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    className={`bento-principle-item ${activePrinciple === idx ? "active" : ""}`}
                    onClick={() => setActivePrinciple(activePrinciple === idx ? null : idx)}
                    style={{
                      border: "1px solid",
                      borderColor: activePrinciple === idx ? "var(--foreground)" : "transparent",
                      background: activePrinciple === idx ? "var(--surface-2)" : "transparent",
                      cursor: "pointer",
                      padding: "16px",
                      borderRadius: "8px"
                    } as React.CSSProperties}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: activePrinciple === idx ? "var(--foreground)" : "var(--surface-2)",
                        border: `1px solid var(--card-border)`,
                        color: activePrinciple === idx ? "var(--background)" : "var(--foreground)",
                        flexShrink: 0,
                        fontSize: "0.85rem",
                        fontWeight: 900,
                        transition: "all 0.3s ease"
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--foreground)",
                          marginBottom: "4px",
                          transition: "color 0.3s ease"
                        }}
                      >
                        {p.title}
                      </h4>
                      <p style={{ color: activePrinciple === idx ? "var(--foreground)" : "var(--muted)", fontSize: "0.78rem", lineHeight: "1.4", margin: 0, transition: "color 0.3s ease" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
