"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Trophy, Activity } from "lucide-react";
import { registryItems } from "@/lib/registryData";

interface ProjectModalProps {
  activeProject: number | null;
  setActiveProject: (idx: number | null) => void;
}

export default function ProjectModal({ activeProject, setActiveProject }: ProjectModalProps) {
  if (activeProject === null) return null;

  return (
    <div
      className={`project-detail-overlay ${activeProject !== null ? "active" : ""}`}
      onClick={() => setActiveProject(null)}
      data-lenis-prevent="true"
    >
      <div
        className="detail-panel"
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
      >
        {/* Close Trigger */}
        <button
          className="detail-close-btn"
          onClick={() => setActiveProject(null)}
          aria-label="Close specifications sheet"
        >
          <X size={20} />
        </button>

        <div style={{ flex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: registryItems[activeProject].color,
              display: "block",
              marginBottom: "12px",
              marginTop: "10px",
            }}
          >
            {registryItems[activeProject].type === "project" ? "Deployment Registry" : "Championship Credential"}
          </span>

          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.1
            }}
          >
            {registryItems[activeProject].title}
          </h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: "30px",
              lineHeight: 1.5
            }}
          >
            {registryItems[activeProject].subtitle}
          </p>

          {/* Clean Image Viewport in Modal */}
          <div
            style={{
              height: "260px",
              borderRadius: "14px",
              overflow: "hidden",
              marginBottom: "32px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "#09090d",
              position: "relative",
            }}
          >
            {(registryItems[activeProject] as any).video ? (
              <video
                src={(registryItems[activeProject] as any).video}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Image
                src={registryItems[activeProject].img}
                alt={registryItems[activeProject].title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(8px)",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: registryItems[activeProject].color,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "var(--font-mono), monospace"
              }}
            >
              {registryItems[activeProject].code}
            </div>
          </div>

          {/* System Parameters Metrics */}
          <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Activity size={16} style={{ color: registryItems[activeProject].color }} /> System Metrics
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            {registryItems[activeProject].metricsList.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "10px",
                  padding: "16px",
                  flex: "1 1 calc(33.333% - 12px)",
                  minWidth: "120px"
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: registryItems[activeProject].color,
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  {m.val}
                </span>
                <span
                  style={{
                    color: "var(--muted-2)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-mono), monospace"
                  }}
                >
                  {m.name}
                </span>
              </div>
            ))}
          </div>

          {/* Description Chronicle */}
          <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
            Overview & Execution
          </h4>
          <div style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "32px", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
            <p style={{ margin: "0 0 16px" }}>{registryItems[activeProject].desc}</p>
            <p style={{ margin: 0 }}>{registryItems[activeProject].details}</p>
          </div>

          {/* Hackathon scope details */}
          {registryItems[activeProject].type === "championship" && (
            <>
              <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                Core Tested Scope
              </h4>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "32px", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px dashed rgba(255,255,255,0.1)" }}>
                {(registryItems[activeProject] as any).scope}
              </p>
            </>
          )}

          {/* Stack Badges */}
          <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
            Technology Stack
          </h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
            {registryItems[activeProject].tags.map((t, i) => (
              <span
                key={i}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "6px",
                  padding: "8px 14px",
                  color: "var(--foreground)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono), monospace"
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Championship Highlight */}
          {registryItems[activeProject].achievement && (
            <div
              style={{
                background: `rgba(${registryItems[activeProject].colorRGB}, 0.05)`,
                border: `1px solid rgba(${registryItems[activeProject].colorRGB}, 0.2)`,
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Trophy size={24} style={{ color: registryItems[activeProject].color }} />
              <p style={{ color: registryItems[activeProject].color, fontSize: "0.9rem", fontWeight: 600, lineHeight: "1.5", margin: 0 }}>
                {registryItems[activeProject].achievement}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            marginTop: "30px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 0",
              width: "100%",
              background: "var(--foreground)",
              borderRadius: "8px",
              color: "var(--background)",
              fontSize: "0.95rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}
            className="btn-inverted"
            onClick={() => setActiveProject(null)}
          >
            {registryItems[activeProject].type === "project" ? "Deploy Similar AI System" : "Let's Work Together"}
          </Link>
        </div>
      </div>
    </div>
  );
}
