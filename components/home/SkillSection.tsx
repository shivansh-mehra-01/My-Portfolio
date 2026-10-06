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
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  )
}
