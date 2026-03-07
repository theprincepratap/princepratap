"use client";

import { useState } from "react";

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  image?: string;
  accentColor?: string;
  emptyRgba?: string;
  halfRgba?: string;
  fullRgba?: string;
}

const badge: React.CSSProperties = {
  display: "inline-block",
  fontSize: "9px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  fontWeight: 600,
  padding: "2px 10px",
  borderRadius: "999px",
  marginBottom: "8px",
};

export default function CardFlip({
  title = "AI Project",
  subtitle = "Machine Learning",
  description = "An AI-powered application.",
  features = ["Python", "PyTorch", "FastAPI"],
  image,
  accentColor = "#ef4444",
  emptyRgba = "rgba(239, 68, 68, 0.15)",
  halfRgba = "rgba(239, 68, 68, 0.45)",
}: CardFlipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: "300px",
        height: "340px",
        position: "relative",
        borderRadius: "1rem",
        overflow: "hidden",
        border: `1px solid ${halfRgba}`,
        cursor: "pointer",
        flexShrink: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* FRONT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 20%, ${halfRgba} 0%, #0c0c0c 65%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1.4rem",
          transition: "opacity 0.45s ease",
          opacity: hovered ? 0 : 1,
          pointerEvents: hovered ? "none" : "auto",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.18,
              zIndex: 0,
            }}
          />
        )}
        <span style={{ ...badge, color: accentColor, backgroundColor: emptyRgba, border: `1px solid ${halfRgba}`, zIndex: 1 }}>
          {subtitle}
        </span>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, zIndex: 1 }}>
          {title}
        </h3>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginTop: "6px", letterSpacing: "0.05em", zIndex: 1 }}>
          Hover to explore →
        </p>
      </div>

      {/* BACK */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0d0d0d",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1.4rem",
          transition: "opacity 0.45s ease",
          opacity: hovered ? 1 : 0,
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.13,
              zIndex: 0,
            }}
          />
        )}
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ ...badge, color: accentColor, backgroundColor: emptyRgba, border: `1px solid ${halfRgba}` }}>
            {subtitle}
          </span>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.35, letterSpacing: "-0.02em", margin: "0 0 6px" }}>
            {title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
            {description}
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "8px" }}>
            Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {features.map((feature, index) => (
              <span
                key={feature}
                style={{
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  border: `1px solid ${index % 2 === 0 ? halfRgba : "rgba(255,255,255,0.12)"}`,
                  backgroundColor: index % 2 === 0 ? emptyRgba : "transparent",
                  color: "rgba(255,255,255,0.75)",
                  transition: `transform 0.35s ease ${index * 55}ms, opacity 0.35s ease ${index * 55}ms`,
                  transform: hovered ? "translateY(0px)" : "translateY(8px)",
                  opacity: hovered ? 1 : 0,
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


