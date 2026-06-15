import React from "react";

interface LogoProps {
  size?: number;
  style?: React.CSSProperties;
}

export default function SMMonogram({ size = 34, style }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <linearGradient id="smGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B2C" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#smGrad)" opacity="0.15" />
      <rect width="40" height="40" rx="10" fill="none" stroke="url(#smGrad)" strokeWidth="1.2" opacity="0.6" />
      <text
        x="50%"
        y="56%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#smGrad)"
        fontSize="15"
        fontWeight="800"
        fontFamily="var(--font-space-grotesk-sans), sans-serif"
        letterSpacing="-0.5"
      >
        SM
      </text>
    </svg>
  );
}
