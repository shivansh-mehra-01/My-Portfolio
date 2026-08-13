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
            border: "1px solid var(--card-border)",
            padding: "8px 16px",
            borderRadius: "4px",
            width: "fit-content",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--foreground)" }} />
            <span style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            }}>
              Available for Freelance Work
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <div className="hero-title-line">
              Hi, I&apos;m Shivansh.
            </div>
            <div className="hero-title-line" style={{ color: "var(--muted)" }}>
              I Build Digital
            </div>
            <div className="hero-title-line">
              Products.
            </div>
          </h1>

          {/* Subheading */}
          <p className="hero-subheading" style={{
            color: "var(--muted)",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: 0
          }}>
            Web & Mobile Developer specializing in React, Next.js, Node.js, React Native & AI integrations.
            I turn ideas into production-ready products — fast, clean, and focused on results.
          </p>

          {/* Stats Grid */}
          <div className="hero-stats-grid">
            {[
              { value: "3+", label: "HACKATHON WINS" },
              { value: "10+", label: "PROJECTS BUILT" },
              { value: "100%", label: "CLIENT SATISFACTION" },
            ].map((metric, i) => (
              <div key={i} className="hero-metric" style={{
                border: "1px solid var(--card-border)",
                borderRadius: "4px",
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "background 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}>
                <span style={{ color: "var(--foreground)", fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-space-grotesk)" }}>
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
        <div className="hero-visual-shell" style={{ position: "relative", display: "flex", justifySelf: "center", width: "100%" }}>
          {/* Main Card */}
          <div style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            border: "1px solid var(--card-border)",
            borderRadius: "4px",
            padding: "16px",
            position: "relative",
          }}>

            {/* Profile Image */}
            <div style={{ width: "100%", height: "400px", overflow: "hidden", position: "relative", marginBottom: "16px" }}>
              <img
                src="/images/team_member_2.jpg"
                alt="Shivansh Mehra"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%) contrast(1.1)",
                  transition: "filter 0.5s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) contrast(1)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%) contrast(1.1)"}
              />
              {/* Status overlay badge */}
              <div style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                background: "var(--background)",
                border: "1px solid var(--card-border)",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{ width: "6px", height: "6px", background: "var(--foreground)" }} />
                <span style={{ color: "var(--foreground)", fontSize: "0.68rem", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase" }}>Open to work</span>
              </div>
            </div>

            {/* Service Icons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { label: "Web Apps" },
                { label: "Mobile Apps" },
                { label: "AI Integration" },
                { label: "Full Stack" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  border: "1px solid var(--card-border)",
                }}>
                  <span style={{ color: "var(--muted)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
