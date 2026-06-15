"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;

    // Stars
    interface Star {
      x: number;
      y: number;
      r: number;
      alpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }
    const stars: Star[] = [];

    // Organic Aurora Blobs
    interface GlowBlob {
      x: number;
      y: number;
      radius: number;
      color: string;
      baseXRatio: number;
      baseYRatio: number;
      driftRadiusX: number;
      driftRadiusY: number;
      speed: number;
      phaseX: number;
      phaseY: number;
    }

    const blobs: GlowBlob[] = [
      {
        x: 0,
        y: 0,
        radius: 550,
        color: "rgba(255, 107, 44, 0.06)", // Warm Coral Orange
        baseXRatio: 0.25,
        baseYRatio: 0.35,
        driftRadiusX: 0.15,
        driftRadiusY: 0.1,
        speed: 0.0004,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
      },
      {
        x: 0,
        y: 0,
        radius: 650,
        color: "rgba(255, 184, 0, 0.04)", // Golden glow
        baseXRatio: 0.75,
        baseYRatio: 0.55,
        driftRadiusX: 0.12,
        driftRadiusY: 0.15,
        speed: 0.0003,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
      },
      {
        x: 0,
        y: 0,
        radius: 750,
        color: "rgba(217, 119, 6, 0.035)", // Amber shadow
        baseXRatio: 0.5,
        baseYRatio: 0.45,
        driftRadiusX: 0.1,
        driftRadiusY: 0.12,
        speed: 0.0002,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
      },
    ];

    const mouse = { x: 0.5, y: 0.5, active: false };

    const initStars = () => {
      stars.length = 0;
      // Distribute stars across the entire screen
      const starCount = Math.floor((width * height) / 9000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.3 + 0.2,
          alpha: Math.random() * 0.6 + 0.15,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const drawBackground = () => {
      // Very deep luxury dark obsidian base
      ctx.fillStyle = "#040302";
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = (time: number) => {
      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.6;
        const alpha = star.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 240, ${alpha})`;
        ctx.fill();

        // Subtle orange bloom on main stars
        if (star.r > 1.0) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 107, 44, ${alpha * 0.06})`;
          ctx.fill();
        }
      });
    };

    const drawAuroraBlobs = (time: number) => {
      blobs.forEach((blob) => {
        // Organic organic drift using sine / cosine with customized speeds and phases
        const driftX = Math.sin(time * blob.speed + blob.phaseX) * (width * blob.driftRadiusX);
        const driftY = Math.cos(time * blob.speed + blob.phaseY) * (height * blob.driftRadiusY);

        const x = width * blob.baseXRatio + driftX;
        const y = height * blob.baseYRatio + driftY;

        // Draw radial glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);
        glow.addColorStop(0, blob.color);
        glow.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, "0.015)"));
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawMouseSpotlight = () => {
      if (mouse.active) {
        const spotX = mouse.x * width;
        const spotY = mouse.y * height;
        const spotlightRadius = Math.min(width, height) * 0.4;

        const spotGrad = ctx.createRadialGradient(
          spotX, spotY, 0,
          spotX, spotY, spotlightRadius
        );
        spotGrad.addColorStop(0, "rgba(255, 184, 0, 0.045)"); // Subtle gold core
        spotGrad.addColorStop(0.5, "rgba(255, 107, 44, 0.01)");  // Fading warm orange
        spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(spotX, spotY, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawVignette = () => {
      // Dark vignette overlay to frame the screen elements and ensure page contrast
      const vig = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.45,
        width / 2, height / 2, Math.max(width, height) * 0.9
      );
      vig.addColorStop(0, "rgba(4, 3, 2, 0)");
      vig.addColorStop(1, "rgba(4, 3, 2, 0.75)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);
    };

    const drawScene = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawBackground();
      drawStars(time);
      drawAuroraBlobs(time);
      drawMouseSpotlight();
      drawVignette();

      animationId = requestAnimationFrame(drawScene);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX / width;
      mouse.y = e.clientY / height;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    resizeCanvas();
    animationId = requestAnimationFrame(drawScene);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
