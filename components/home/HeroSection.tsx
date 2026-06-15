"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Brain, Layers } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(".hero-badge",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
        )
        .fromTo(".hero-title-line",
          { y: 50, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.15, ease: "expo.out" },
          "-=0.4"
        )
        .fromTo(".hero-subheading",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(".hero-metric",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(".hero-btn",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="home-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "100px 0 60px",
        overflow: "hidden"
      }}
    >
      {/* Dynamic Background Glows */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(255, 107, 44, 0.08) 0%, transparent 60%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        right: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(255, 184, 0, 0.08) 0%, transparent 60%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Left Content Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Top Badge */}
          <div className="hero-badge" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 107, 44, 0.05)",
            border: "1px solid rgba(255, 107, 44, 0.25)",
            padding: "8px 16px",
            borderRadius: "100px",
            width: "fit-content",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(255, 107, 44, 0.1)"
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B2C", boxShadow: "0 0 8px #FF6B2C", animation: "pulse 2s infinite" }} />
            <span style={{
              color: "#FF6B2C",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              Available for Freelance Work
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              perspective: "1000px"
            }}
          >
            <div className="hero-title-line" style={{ transformOrigin: "bottom center" }}>
              Hi, I&apos;m{" "}
              <span style={{
                background: "linear-gradient(90deg, #FF6B2C, #FFB800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
                filter: "drop-shadow(0 0 30px rgba(255,107,44,0.4))"
              }}>Shivansh</span>
            </div>
            <div className="hero-title-line" style={{ transformOrigin: "bottom center" }}>
              I Build Digital
            </div>
            <div className="hero-title-line" style={{ transformOrigin: "bottom center" }}>
              Products That{" "}
              <span style={{
                background: "linear-gradient(90deg, #FFB800, #FF6B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(255,184,0,0.4))"
              }}>Work.</span>
            </div>
          </h1>

          {/* Subheading */}
          <p className="hero-subheading" style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: 0
          }}>
            Web & Mobile Developer specializing in React, Next.js, Node.js, React Native & AI integrations.
            I turn ideas into production-ready products — fast, clean, and focused on results.
          </p>

          {/* Stats Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "4px"
          }}>
            {[
              { value: "3+", label: "HACKATHON WINS" },
              { value: "10+", label: "PROJECTS BUILT" },
              { value: "100%", label: "CLIENT SATISFACTION" },
            ].map((metric, i) => (
              <div key={i} className="hero-metric" style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "16px",
                padding: "16px",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transition: "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(255, 107, 44, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 107, 44, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
              }}>
                <span style={{ color: "#FF6B2C", fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-space-grotesk)" }}>
                  {metric.value}
                </span>
                <span style={{ color: "var(--muted)", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}>
            <Link href="/contact" className="btn-liquid-glass hero-btn">
              Let&apos;s Work Together <ArrowRight size={16} />
            </Link>
            <Link href="/works" className="btn-liquid-glass hero-btn" data-hover="true">
              View My Work
            </Link>
          </div>
        </div>

        {/* Right Side — Visual Card */}
        <div className="hero-visual-shell" style={{ position: "relative", display: "flex", justifySelf: "center", minHeight: "460px", width: "100%" }}>
          {/* Main Card */}
          <div style={{
            width: "100%",
            maxWidth: "440px",
            margin: "0 auto",
            background: "rgba(15, 10, 5, 0.7)",
            border: "1px solid rgba(255, 107, 44, 0.2)",
            borderRadius: "28px",
            padding: "36px",
            backdropFilter: "blur(20px)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255, 107, 44, 0.06)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Card glow streak */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,107,44,0.6), transparent)"
            }} />

            {/* Profile Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #FF6B2C, #FFB800)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
                flexShrink: 0,
                boxShadow: "0 8px 24px rgba(255, 107, 44, 0.35)"
              }}>
                SM
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", fontFamily: "var(--font-space-grotesk)" }}>
                  Shivansh Mehra
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontFamily: "var(--font-mono)" }}>
                  Web & Mobile Developer
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                  <span style={{ color: "#4ade80", fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Open to work</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", marginBottom: "10px", textTransform: "uppercase" }}>
                Core Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["React", "Next.js", "Node.js", "TypeScript", "React Native", "Python", "MongoDB", "AWS"].map((tech) => (
                  <span key={tech} style={{
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: "rgba(255, 107, 44, 0.08)",
                    border: "1px solid rgba(255, 107, 44, 0.2)",
                    color: "#FF6B2C",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-mono)"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Icons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { icon: <Code2 size={18} color="#FF6B2C" />, label: "Web Apps" },
                { icon: <Smartphone size={18} color="#FFB800" />, label: "Mobile Apps" },
                { icon: <Brain size={18} color="#FF6B2C" />, label: "AI Integration" },
                { icon: <Layers size={18} color="#FFB800" />, label: "Full Stack" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px"
                }}>
                  {item.icon}
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontWeight: 600 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Pills */}
          <div style={{
            position: "absolute",
            top: "8%",
            left: "-5%",
            background: "rgba(20, 14, 5, 0.7)",
            border: "1px solid rgba(255, 107, 44, 0.3)",
            padding: "10px 18px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(255, 107, 44, 0.15)",
            zIndex: 2,
            animation: "manifesto-asset-float 5s ease-in-out infinite reverse"
          }}>
            <span style={{ fontSize: "1rem" }}>🏆</span>
            <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap" }}>3× Hackathon Winner</span>
          </div>

          <div style={{
            position: "absolute",
            bottom: "12%",
            right: "-4%",
            background: "rgba(20, 14, 5, 0.7)",
            border: "1px solid rgba(255, 184, 0, 0.3)",
            padding: "10px 18px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(255, 184, 0, 0.15)",
            zIndex: 2,
            animation: "manifesto-asset-float 7s ease-in-out infinite 1s"
          }}>
            <span style={{ fontSize: "1rem" }}>🎓</span>
            <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap" }}>CS Undergraduate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
