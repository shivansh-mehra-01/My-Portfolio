"use client";
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export default function SkillSection() {
  return (
    <section className="py-24 bg-background w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col">
        <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
          <h2 
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textAlign: "left"
            }}
          >
            My <span style={{ color: "var(--accent)", fontStyle: "italic", fontFamily: "var(--font-playfair), serif" }}>Skills</span>
          </h2>
        </div>
        <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mx-auto">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  )
}
