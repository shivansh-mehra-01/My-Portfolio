"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Code2, Sparkles } from "lucide-react";

export default function AboutTeaser() {
  const [hoveredVal, setHoveredVal] = useState<number | null>(null);

  const values = [
    {
      num: "01",
      title: "Clean & Scalable Code",
      desc: "Writing modular, type-safe, and self-documenting code using TypeScript, Next.js, and best practices.",
      icon: <Code2 size={18} color="var(--accent)" />
    },
    {
      num: "02",
      title: "Vibrant & Premium UI",
      desc: "Delivering modern user interfaces with smooth animations, high responsiveness, and polished ergonomics.",
      icon: <Sparkles size={18} color="var(--teal)" />
    },
    {
      num: "03",
      title: "Competitive Execution",
      desc: "Championship mindset forged in national hackathons — delivering functional MVPs under tight timelines.",
      icon: <Award size={18} color="var(--accent)" />
    },
    {
      num: "04",
      title: "CS Foundations",
      desc: "Deep understanding of algorithms, database scaling, APIs, and cloud services as a CS undergraduate.",
      icon: <GraduationCap size={18} color="var(--teal)" />
    }
  ];

  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--card-border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          
          {/* Left Side: About Intro */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Who is behind the code?
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Building with <span className="font-serif-i" style={{ color: "var(--accent)" }}>Purpose</span> &amp; Precision
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
              I am Shivansh Mehra, a software developer, freelancer, and computer science undergraduate. I specialize in turning complex logic into smooth, premium web and mobile experiences.
            </p>
            <p style={{ color: "var(--muted-2)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
              Whether it is a fast-loading SaaS dashboard, a cross-platform mobile client, or integrating intelligent AI workflows, I build products that are optimized for growth and user retention.
            </p>
            
            <div style={{ marginTop: "12px" }}>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--foreground)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  background: "var(--accent-muted)",
                  border: "1px solid rgba(255, 107, 44, 0.25)",
                  padding: "14px 28px",
                  borderRadius: "100px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(255, 107, 44, 0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(255, 107, 44, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 107, 44, 0.25)";
                  e.currentTarget.style.background = "var(--accent-muted)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                Read My Full Story <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Side: Bento Values list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {values.map((val, idx) => {
              const isHovered = hoveredVal === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredVal(idx)}
                  onMouseLeave={() => setHoveredVal(null)}
                  style={{
                    background: isHovered ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.01)",
                    border: `1px solid ${isHovered ? "var(--accent)" : "var(--card-border)"}`,
                    borderRadius: "20px",
                    padding: "24px 30px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    transition: "all 0.3s ease",
                    transform: isHovered ? "translateX(10px)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: isHovered ? "rgba(255, 107, 44, 0.1)" : "rgba(255, 255, 255, 0.02)",
                      border: isHovered ? "1px solid rgba(255, 107, 44, 0.2)" : "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease"
                    }}
                  >
                    {val.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                        margin: "0 0 6px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.8rem", color: "var(--accent-dark)", fontWeight: 600 }}>
                        {val.num}
                      </span>
                      {val.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
