"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Code, Cpu, Smartphone, Globe, Mail, MessageSquare } from "lucide-react";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "GSAP Animations"] },
    { category: "Backend & Databases", items: ["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Supabase"] },
    { category: "Mobile & AI", items: ["React Native", "Flutter", "LangChain", "OpenAI APIs", "Vector DBs", "LlamaIndex"] },
    { category: "Tools & DevOps", items: ["Git & GitHub", "Docker", "AWS", "Vercel", "Linux", "Postman"] }
  ];

  const milestones = [
    {
      year: "2026",
      title: "Grand Prize Winner — TIC 2K26",
      desc: "Secured 1st Prize (₹20,000) out of 200+ teams in the Technocrats Innovation Challenge with SHEild AI, an emergency response and analytics platform."
    },
    {
      year: "2026",
      title: "National Runner-Up — BGI Hackathon",
      desc: "Placed 2nd (₹12,000) among 600+ teams and 2,800+ participants nationwide, presenting proactive AI safety systems to industry leaders."
    },
    {
      year: "2024 - Present",
      title: "Freelance Software Developer",
      desc: "Building custom web applications, SaaS dashboards, automation tools, and mobile client integrations for startups and business clients."
    },
    {
      year: "Current",
      title: "Computer Science Undergraduate",
      desc: "Pursuing academic studies in Computer Science and Engineering, focusing on database architectures, algorithms, and cognitive computing."
    }
  ];

  const contactOptions = [
    { icon: <Mail size={20} color="var(--accent)" />, label: "Email Me", val: "mehrashiv8889@gmail.com", href: "mailto:mehrashiv8889@gmail.com" },
    { icon: <MessageSquare size={20} color="var(--teal)" />, label: "WhatsApp Chat", val: "+91 93031 64688", href: "https://wa.me/919303164688" }
  ];

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", position: "relative" }}>


      <div style={{ paddingTop: "140px", paddingBottom: "100px", position: "relative", zIndex: 1 }}>

        {/* Page Intro / Hero Header */}
        <div className="container" style={{ marginBottom: "80px" }}>
          <div style={{ maxWidth: "800px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px", display: "inline-block" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              About Shivansh Mehra
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                marginBottom: "24px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em"
              }}
            >
              Full Stack Engineer &amp; <br />
              <span style={{ color: "var(--foreground)" }}>Hackathon Competitor</span>
            </h1>
            <p style={{ color: "var(--foreground)", fontSize: "1.2rem", lineHeight: "1.7", marginBottom: "20px" }}>
              I construct clean, performant, and premium digital systems. Combining academic research in computer science with real-world freelance execution, I help founders and teams launch MVPs and scale products.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6" }}>
              I thrive under intense project timelines and complex logic environments. By designing smooth animations, robust backend architectures, and incorporating intelligent AI models, I create applications that are both structurally sound and aesthetically captivating.
            </p>
          </div>
        </div>

        {/* Dynamic Bento Cards Section */}
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>

          {/* Bento Card 1: Main Story */}
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "var(--card-shadow)",
            backdropFilter: "blur(12px)",
            gridColumn: "span 1"
          }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
              My Journey
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.65", marginBottom: "16px" }}>
              My interest in programming sparked when I wanted to understand how massive digital infrastructures operate seamlessly. Starting with algorithmic problem solving, I quickly scaled into building full-stack web platforms and cross-platform mobile apps.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.65" }}>
              Participating in national-level hackathons forced me to learn how to ship production-grade code, design intuitive UI, and deploy scalable APIs in less than 48 hours. I bring that same speed, pressure validation, and precision to my freelance contracts.
            </p>
          </div>

          {/* Bento Card 2: Personal Stats & Achievements */}
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "var(--card-shadow)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>
                Credentials &amp; Wins
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ background: "transparent", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "10px", color: "var(--foreground)" }}>
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, margin: "0 0 4px" }}>National Championship</h4>
                    <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: 0 }}>TIC 2K26 Grand Prize Winner (₹20,000)</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ background: "transparent", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "10px", color: "var(--foreground)" }}>
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, margin: "0 0 4px" }}>BGI Hackathon 2026</h4>
                    <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: 0 }}>National Runner-Up out of 600+ Teams (₹12,000)</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
              <div>
                <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent)", display: "block" }}>10+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Projects Deployed</span>
              </div>
              <div>
                <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--teal)", display: "block" }}>3+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Hackathon Wins</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Skills Matrix */}
        <div className="container" style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px", display: "inline-block" }}>Skills Inventory</span>
            <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff" }}>Technical Capabilities</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {skills.map((cat, cIdx) => (
              <div
                key={cIdx}
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "20px",
                  padding: "30px",
                  backdropFilter: "blur(10px)"
                }}
              >
                <h4 style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "20px"
                }}>{cat.category}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        padding: "8px 16px",
                        background: hoveredSkill === skill ? "rgba(255, 107, 44, 0.08)" : "rgba(255,255,255,0.02)",
                        border: `1px solid ${hoveredSkill === skill ? "var(--accent)" : "rgba(255,255,255,0.04)"}`,
                        borderRadius: "8px",
                        color: hoveredSkill === skill ? "#fff" : "rgba(255,255,255,0.8)",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                        cursor: "default"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="container" style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px", display: "inline-block" }}>Track Record</span>
            <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff" }}>Milestones &amp; Evolution</h2>
          </div>

          <div style={{ position: "relative", paddingLeft: "30px", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
            {milestones.map((mil, idx) => (
              <div key={idx} style={{ position: "relative", marginBottom: "40px" }}>
                {/* Timeline node */}
                <div style={{
                  position: "absolute",
                  left: "-36px",
                  top: "4px",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: "var(--foreground)",
                  border: "2px solid var(--background)"
                }} />

                <span style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  display: "block",
                  marginBottom: "4px"
                }}>{mil.year}</span>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px 0"
                }}>{mil.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0, maxWidth: "700px" }}>
                  {mil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Direct Channels */}
        <div className="container">
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "28px",
            padding: "60px 40px",
            textAlign: "center"
          }}>
            <h2 style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.1
            }}>Let&apos;s Craft Your Next System</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.02rem", maxWidth: "550px", margin: "0 auto 36px", lineHeight: "1.6" }}>
              Whether you need to discuss custom backend logic, a scalable web portal, or a cross-platform mobile client, get in touch today.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
              <Link
                href="/contact"
                className="btn-liquid-glass"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                Secure Project Slot <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "36px" }}>
              {contactOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                >
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px", display: "flex" }}>
                    {opt.icon}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--muted-2)", textTransform: "uppercase", display: "block", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>{opt.label}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>{opt.val}</span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
