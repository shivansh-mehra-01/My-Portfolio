"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HackathonShowcase() {
  const [ticImageIdx, setTicImageIdx] = useState(0);
  const [ticHovered, setTicHovered] = useState(false);
  const [bgiImageIdx, setBgiImageIdx] = useState(0);
  const [bgiHovered, setBgiHovered] = useState(false);
  const [iitgImageIdx, setIitgImageIdx] = useState(0);
  const [iitgHovered, setIitgHovered] = useState(false);
  const [sistecHovered, setSistecHovered] = useState(false);

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(".hackathon-header-wrapper > *",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".hackathon-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate Cards
      gsap.fromTo(".pod-direction",
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: ".pod-direction",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".pod-product",
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: ".pod-product",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (ticHovered) return;
    const interval = setInterval(() => {
      setTicImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [ticHovered]);

  useEffect(() => {
    if (bgiHovered) return;
    const interval = setInterval(() => {
      setBgiImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [bgiHovered]);

  useEffect(() => {
    if (iitgHovered) return;
    const interval = setInterval(() => {
      setIitgImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [iitgHovered]);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="section-padding"
      style={{
        background: "transparent",
        position: "relative",
        zIndex: 2,
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container">
        <div className="hackathon-header-wrapper" style={{ marginBottom: "40px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Championship Credentials
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Achievements
          </h2>
          <p style={{ color: "#A0A0A0", fontSize: "0.95rem", marginTop: "8px" }}>
            I have competed nationally, building and scaling systems under intense time pressure.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gridTemplateRows: "1fr", gap: "40px" }}>
          {/* IIT Guwahati Card */}
          <div
            className="pod-direction"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(0, 229, 136, 0.2)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "100%", minWidth: 0 }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "linear-gradient(180deg, rgba(0, 229, 136, 0.08) 0%, rgba(0, 229, 136, 0.02) 100%)",
                  border: "1px solid rgba(0, 229, 136, 0.25)",
                  borderRadius: "999px",
                  color: "#00e588",
                  marginBottom: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <Trophy size={13} style={{ opacity: 0.9 }} /> 1ST PLACE WINNER
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "32px",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em"
                }}
              >
                WattsNext EnergyAgri Nexus<br />
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 400, fontFamily: "var(--font-sans), sans-serif", fontSize: "0.85em", letterSpacing: "normal" }}>Hackathon · IIT Guwahati</span>
              </h3>

              {/* Stats Row */}
              <div style={{ 
                display: "flex", 
                gap: "32px", 
                flexWrap: "wrap", 
                marginBottom: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px 0"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e588", lineHeight: "1" }}>#1</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Final Rank</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e588", lineHeight: "1" }}>₹30,000</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Prize</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e588", lineHeight: "1" }}>50+</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Competing Teams</span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: 500, 
                  color: "#ffffff", 
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  letterSpacing: "-0.01em"
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e588" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  Agri_PV_Navigator
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  Farmer-centric platform for Agri-PV site assessment, system design &amp; techno-economic evaluation.
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <span style={{ 
                  fontSize: "0.7rem", 
                  color: "rgba(255, 255, 255, 0.4)", 
                  fontFamily: "var(--font-mono)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "12px"
                }}>
                  Core Capabilities
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    { name: "Site Assessment", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg> },
                    { name: "System Design", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> },
                    { name: "Techno-Economic Insights", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> }
                  ].map((cap, i) => (
                    <span 
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em"
                      }}
                    >
                      <span style={{ opacity: 0.8, display: "flex", color: "#00e588" }}>{cap.icon}</span>
                      {cap.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - IITG */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid rgba(0, 229, 136, 0.15)",
              }}
              onMouseEnter={() => setIitgHovered(true)}
              onMouseLeave={() => setIitgHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/hackathon_iitg.jpeg"
                  alt="IIT Guwahati Hackathon presentation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: iitgImageIdx === 0 ? 1 : 0,
                    transform: iitgHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: iitgImageIdx === 0 ? 1 : 0,
                  }}
                />
                <Image
                  src="/images/hackathon_iitg.jpeg"
                  alt="IIT Guwahati Hackathon winning moment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: iitgImageIdx === 1 ? 1 : 0,
                    transform: iitgHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: iitgImageIdx === 1 ? 1 : 0,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(20,20,20,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: iitgHovered ? 1 : 0,
                  transform: iitgHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#00e588", filter: "drop-shadow(0 0 12px rgba(0,229,136,0.4))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>WattsNext EnergyAgri Nexus</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#00e588",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>1ST PLACE WINNER · ₹30,000</span>
              </div>
            </div>
          </div>

          {/* SIH Card */}
          <div
            className="pod-direction"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(255, 214, 0, 0.2)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "100%", minWidth: 0 }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "linear-gradient(180deg, rgba(255, 214, 0, 0.08) 0%, rgba(255, 214, 0, 0.02) 100%)",
                  border: "1px solid rgba(255, 214, 0, 0.25)",
                  borderRadius: "999px",
                  color: "#ffd600",
                  marginBottom: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <Trophy size={13} style={{ opacity: 0.9 }} /> 🏆 GRAND PRIZE WINNER
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "32px",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em"
                }}
              >
                Technocrats Innovation Challenge<br />
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 400, fontFamily: "var(--font-sans), sans-serif", fontSize: "0.85em", letterSpacing: "normal" }}>(TIC 2K26) · TIT&amp;S Bhopal</span>
              </h3>

              {/* Stats Row */}
              <div style={{ 
                display: "flex", 
                gap: "32px", 
                flexWrap: "wrap", 
                marginBottom: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px 0"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#ffd600", lineHeight: "1" }}>#1</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Final Rank</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#ffd600", lineHeight: "1" }}>₹20,000</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Prize</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#ffd600", lineHeight: "1" }}>200+</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Competing Teams</span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: 500, 
                  color: "#ffffff", 
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  letterSpacing: "-0.01em"
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffd600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  SHEild AI
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  AI-powered platform for Women Safety, Empowerment &amp; Social Impact.
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <span style={{ 
                  fontSize: "0.7rem", 
                  color: "rgba(255, 255, 255, 0.4)", 
                  fontFamily: "var(--font-mono)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "12px"
                }}>
                  Core Capabilities
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    { name: "AI Emergency Response", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> },
                    { name: "Safety Analytics", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> },
                    { name: "Real-Time Support", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> }
                  ].map((cap, i) => (
                    <span 
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em"
                      }}
                    >
                      <span style={{ opacity: 0.8, display: "flex", color: "#ffd600" }}>{cap.icon}</span>
                      {cap.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - SIH */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid rgba(255, 214, 0, 0.15)",
              }}
              onMouseEnter={() => setTicHovered(true)}
              onMouseLeave={() => setTicHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/hackathon_tic.jpg"
                  alt="Technocrats Innovation Challenge championship stage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: ticImageIdx === 0 ? 1 : 0,
                    transform: ticHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: ticImageIdx === 0 ? 1 : 0,
                  }}
                />
                <Image
                  src="/images/hackathon_tic.jpg"
                  alt="Technocrats Innovation Challenge 1st prize certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: ticImageIdx === 1 ? 1 : 0,
                    transform: ticHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: ticImageIdx === 1 ? 1 : 0,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(30,20,0,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: ticHovered ? 1 : 0,
                  transform: ticHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#ffd600", filter: "drop-shadow(0 0 12px rgba(255,214,0,0.6))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>Technocrats Innovation Challenge</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#ffd600",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>🏆 GRAND PRIZE WINNER · ₹20,000</span>
              </div>
            </div>
          </div>

          {/* AI Innovation Challenge Card */}
          <div
            className="pod-product"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "100%", minWidth: 0 }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "linear-gradient(180deg, rgba(0, 229, 255, 0.08) 0%, rgba(0, 229, 255, 0.02) 100%)",
                  border: "1px solid rgba(0, 229, 255, 0.25)",
                  borderRadius: "999px",
                  color: "#00e5ff",
                  marginBottom: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <Trophy size={13} style={{ opacity: 0.9 }} /> 🥈 NATIONAL RUNNER-UP
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "32px",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em"
                }}
              >
                BGI Hackathon 2026<br />
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 400, fontFamily: "var(--font-sans), sans-serif", fontSize: "0.85em", letterSpacing: "normal" }}>(Vision 2047 | Viksit Bharat) · MPSEDC</span>
              </h3>

              {/* Stats Row */}
              <div style={{ 
                display: "flex", 
                gap: "32px", 
                flexWrap: "wrap", 
                marginBottom: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px 0"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e5ff", lineHeight: "1" }}>#2</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Final Rank</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e5ff", lineHeight: "1" }}>₹12,000</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Prize</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#00e5ff", lineHeight: "1" }}>600+</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Competing Teams</span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: 500, 
                  color: "#ffffff", 
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  letterSpacing: "-0.01em"
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  SHEild AI
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  Intelligent safety platform for risk-aware navigation &amp; real-time assistance.
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <span style={{ 
                  fontSize: "0.7rem", 
                  color: "rgba(255, 255, 255, 0.4)", 
                  fontFamily: "var(--font-mono)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "12px"
                }}>
                  Core Capabilities
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    { name: "Risk-Aware Navigation", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg> },
                    { name: "Automated Emergency Response", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> },
                    { name: "Intelligent Alerts", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> }
                  ].map((cap, i) => (
                    <span 
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em"
                      }}
                    >
                      <span style={{ opacity: 0.8, display: "flex", color: "#00e5ff" }}>{cap.icon}</span>
                      {cap.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - AI Innovation Challenge */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid var(--card-border)",
              }}
              onMouseEnter={() => setBgiHovered(true)}
              onMouseLeave={() => setBgiHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/hackathon_bgi.jpg"
                  alt="BGI Hackathon 2026 championship stage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: bgiImageIdx === 0 ? 1 : 0,
                    transform: bgiHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: bgiImageIdx === 0 ? 1 : 0,
                  }}
                />
                <Image
                  src="/images/hackathon_bgi.jpg"
                  alt="BGI Hackathon 2026 runner-up certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: bgiImageIdx === 1 ? 1 : 0,
                    transform: bgiHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: bgiImageIdx === 1 ? 1 : 0,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,20,30,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: bgiHovered ? 1 : 0,
                  transform: bgiHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#00e5ff", filter: "drop-shadow(0 0 12px rgba(0,229,255,0.6))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>BGI Hackathon 2026</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#00e5ff",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>🥈 NATIONAL RUNNER-UP · ₹12,000</span>
              </div>
            </div>
          </div>

          {/* SISTec 3.O Card */}
          <div
            className="pod-direction"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "100%", minWidth: 0 }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.02) 100%)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  borderRadius: "999px",
                  color: "#a855f7",
                  marginBottom: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <Trophy size={13} style={{ opacity: 0.9 }} /> 🏆 EIM THEME WINNER
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "32px",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em"
                }}
              >
                SISTec Hackathon 3.O<br />
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 400, fontFamily: "var(--font-sans), sans-serif", fontSize: "0.85em", letterSpacing: "normal" }}>(2025) · 404 Found Us</span>
              </h3>

              {/* Stats Row */}
              <div style={{ 
                display: "flex", 
                gap: "32px", 
                flexWrap: "wrap", 
                marginBottom: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px 0"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#a855f7", lineHeight: "1" }}># 🏆</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Theme Trophy</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#a855f7", lineHeight: "1" }}>1st</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>EIM Category</span>
                </div>
                <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.08)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 500, color: "#a855f7", lineHeight: "1" }}>2025</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Year Edition</span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: 500, 
                  color: "#ffffff", 
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  letterSpacing: "-0.01em"
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  EIM Solution
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  With the dedication and support of our team &amp; mentors, we secured the top spot in the EIM Theme category.
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <span style={{ 
                  fontSize: "0.7rem", 
                  color: "rgba(255, 255, 255, 0.4)", 
                  fontFamily: "var(--font-mono)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "12px"
                }}>
                  Core Capabilities
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    { name: "Enterprise Information Management", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
                    { name: "Team 404 Found Us", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
                    { name: "Collaborative Innovation", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> }
                  ].map((cap, i) => (
                    <span 
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em"
                      }}
                    >
                      <span style={{ opacity: 0.8, display: "flex", color: "#a855f7" }}>{cap.icon}</span>
                      {cap.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - SISTec */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid rgba(168, 85, 247, 0.15)",
              }}
              onMouseEnter={() => setSistecHovered(true)}
              onMouseLeave={() => setSistecHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/sih_3.0.jpg"
                  alt="SISTec Hackathon 3.O 2025 EIM Theme Trophy"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: 1,
                    transform: sistecHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: 1,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(20,0,30,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: sistecHovered ? 1 : 0,
                  transform: sistecHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#a855f7", filter: "drop-shadow(0 0 12px rgba(168,85,247,0.6))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>SISTec Hackathon 3.O</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#a855f7",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>🏆 EIM THEME TROPHY WINNER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
