"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(".project-header-wrapper > *",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate List Items
      gsap.fromTo(".split-list-item",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".split-showcase-container",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        {/* Section Header */}
        <div className="project-header-wrapper" style={{ marginBottom: "60px", maxWidth: "600px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--muted)", marginBottom: "12px", display: "inline-block" }}>
            Case Studies
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Featured Systems <span className="font-serif-i" style={{ color: "var(--muted)" }}>Deployed</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6" }}>
            Explore how I translate business briefs into high-impact digital systems.
          </p>
        </div>

        {/* Split Screen Showcase */}
        <div className="split-showcase-container">
          {/* Left: Sticky List */}
          <div className="split-left">
            <div className="split-list-group">
              {[
                {
                  id: "nexus-room",
                  code: "PRJ-01",
                  title: "Real-Time Launch Dashboard",
                  category: "Launch Ops & Systems",
                  year: "2026",
                  img: "/images/custom-project-1.png"
                },
                {
                  id: "sheild-ai",
                  code: "PRJ-02",
                  title: "SHEild AI Platform",
                  category: "Machine Learning & Flutter",
                  year: "2026",
                  img: "/images/project2_img1.jpg"
                },
                {
                  id: "customer-agent",
                  code: "PRJ-03",
                  title: "Movie Social App",
                  category: "React Native App",
                  year: "2025",
                  img: "/images/project3_img1.jpg"
                },
                {
                  id: "restaurant-app",
                  code: "PRJ-04",
                  title: "Restaurant App Dispatcher",
                  category: "Offline-First Systems",
                  year: "2024",
                  img: "/images/restaurant_app_ui.png"
                }
              ].map((proj, idx) => {
                const isActive = hoveredCard === proj.id || (!hoveredCard && proj.id === "nexus-room");
                return (
                  <Link
                    href="/works"
                    key={proj.id}
                    className={`split-list-item ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setHoveredCard(proj.id)}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="item-number">0{idx + 1}</span>
                      <div>
                        <span className="item-title">{proj.title}</span>
                        <div className="item-meta" style={{ marginTop: "4px" }}>
                          {proj.year} — {proj.category}
                        </div>
                      </div>
                    </div>
                    <div className="view-case-pill">
                      View Case <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Image Viewer */}
          <div className="split-right">
            {[
              { id: "nexus-room", img: "/images/custom-project-1.png" },
              { id: "sheild-ai", img: "/images/project2_img1.jpg" },
              { id: "customer-agent", img: "/images/project3_img1.jpg" },
              { id: "restaurant-app", img: "/images/restaurant_app_ui.png" }
            ].map((proj) => {
              const isActive = hoveredCard === proj.id || (!hoveredCard && proj.id === "nexus-room");
              return (
                <div key={proj.id} className={`split-image-layer ${isActive ? "active" : "inactive"}`}>
                  <Image
                    src={proj.img}
                    alt={proj.id}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 992px) 100vw, 60vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)",
                    zIndex: 2
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
