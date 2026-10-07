"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trophy, ArrowRight, Shield, Zap, Box } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
import { registryItems } from "@/lib/registryData";

interface WorksCardImageProps {
  item: {
    id: string;
    code: string;
    title: string;
    img: string;
    imgs?: string[];
    scrollingImages?: string[];
    video?: string;
  };
  hovered: boolean;
}

function WorksCardImage({ item, hovered }: WorksCardImageProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!item.imgs || item.imgs.length <= 1 || hovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % item.imgs!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hovered, item.imgs]);

  if (item.video) {
    return (
      <video
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
        suppressHydrationWarning
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "scale(1.2)" : "scale(1.15)",
        }}
      />
    );
  }

  if (item.scrollingImages && item.scrollingImages.length > 1) {
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollX-${item.id} {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 8px)); }
          }
        `}} />
        <div
          style={{
            display: "flex",
            gap: "16px",
            height: "100%",
            paddingTop: "40px",
            paddingLeft: "16px",
            width: "fit-content",
            animation: `scrollX-${item.id} 20s linear infinite`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05) translateY(-5px)" : "scale(1) translateY(0)",
          }}
        >
          {item.scrollingImages.concat(item.scrollingImages).map((img, i) => (
            <div key={i} style={{ position: "relative", width: "160px", height: "85%", flexShrink: 0, borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <Image
                src={img}
                alt={`${item.title} screen ${i}`}
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (!item.imgs || item.imgs.length <= 1) {
    return (
      <Image
        src={item.img}
        alt={item.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />
    );
  }

  return (
    <>
      {item.imgs.map((imgSrc, idx) => (
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={`${item.title} slide ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            opacity: currentIdx === idx ? 1 : 0,
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            zIndex: currentIdx === idx ? 2 : 1,
          }}
        />
      ))}
    </>
  );
}

export default function Works() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "project" | "championship">("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement && document.body) {
      if (activeProject !== null) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.stop();
        }
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.start();
        }
      }
    }

    return () => {
      if (typeof document !== "undefined" && document.documentElement && document.body) {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.start();
        }
      }
    };
  }, [activeProject]);



  const filteredItems = registryItems.filter((item) => item.type === "project");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const projectId = urlParams.get("project");
      if (projectId) {
        const idx = registryItems.findIndex((p) => p.id === projectId);
        if (idx !== -1) {
          setActiveProject(idx);
          // Optional: clear url to avoid reopening on refresh
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
    }
  }, []);

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", position: "relative" }}>
      <div style={{ paddingTop: "140px", paddingBottom: "100px" }}>

        {/* HEADER SECTION */}
        <div className="container" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px", display: "inline-block" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Registry
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Engineering <span className="font-serif-i" style={{ color: "var(--accent)" }}>Archives</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "650px", margin: "0 auto" }}>
            A curated index of my production systems and software deployments.
          </p>
        </div>

        {/* VISUAL BENTO GRID */}
        <div className="container works-bento-layout">
          {filteredItems.map((item) => {
            const originalIndex = registryItems.findIndex((r) => r.id === item.id);
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                className={`works-bento-card ${item.bentoSpan}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                }}
                onClick={() => setActiveProject(originalIndex)}
              >

                {/* Media Background */}
                <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                  <WorksCardImage item={item} hovered={isHovered} />

                  {/* Heavy Gradient for text readability */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                    zIndex: 3
                  }} />
                </div>

                {/* Top Badges */}
                <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", zIndex: 4 }}>
                  <div style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    color: item.color,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {item.code}
                  </div>

                  {item.badge && (
                    <div style={{
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid rgba(${item.colorRGB}, 0.3)`,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      color: item.color,
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-mono), monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      <Trophy size={12} /> {item.badge}
                    </div>
                  )}
                </div>

                {/* Bottom Info Glass */}
                <div style={{
                  marginTop: "auto",
                  position: "relative",
                  zIndex: 4,
                  padding: "30px 20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "4px" }}>
                    <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{item.type === "project" ? "System Deployment" : "National Championship"}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <span style={{ color: item.color, fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      View Specs <ArrowRight size={14} style={{ transform: isHovered ? "translateX(4px)" : "none", transition: "transform 0.3s ease" }} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PROFESSIONAL SPECIFICATION SHEET (MODAL) */}
      <ProjectModal activeProject={activeProject} setActiveProject={setActiveProject} />
    </div>
  );
}
