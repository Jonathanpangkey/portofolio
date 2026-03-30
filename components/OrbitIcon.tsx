"use client";
import { useState } from "react";
import type { Skill } from "./skills.data";

type OrbitIconProps = {
  skill: Skill;
  angleDeg: number;
  radius: number;
  duration: number;
  reverse: boolean;
};

export const OrbitIcon = ({ skill, angleDeg, radius, duration, reverse }: OrbitIconProps) => {
  const [hovered, setHovered] = useState(false);
  const dir = reverse ? "reverse" : "normal";
  const counterDir = reverse ? "normal" : "reverse";
  const delayS = `${-duration * (angleDeg / 360)}s`;

  return (
    // Rotating arm — 0×0 at orbit center, CSS keyframe handles the spin
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        animationName: "orbit-spin",
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDirection: dir,
        animationDelay: delayS,
      }}
    >
      {/* Push icon out to orbit radius */}
      <div
        style={{
          position: "absolute",
          top: -radius,
          left: 0,
          animationName: "orbit-spin",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: counterDir,
          animationDelay: delayS,
        }}
      >
        {/* Center the icon on the orbit point */}
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            zIndex: hovered ? 20 : 1,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Icon bubble */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: hovered
                ? "radial-gradient(circle, rgba(99,202,183,.22) 0%, rgba(6,12,26,.97) 100%)"
                : "rgba(18,30,58,.92)",
              border: `1.5px solid ${hovered ? "rgba(99,202,183,.75)" : "rgba(255,255,255,.18)"}`,
              boxShadow: hovered
                ? "0 0 22px rgba(99,202,183,.5), inset 0 0 14px rgba(99,202,183,.1)"
                : "0 4px 18px rgba(0,0,0,.55)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .25s ease",
              transform: hovered ? "scale(1.2)" : "scale(1)",
              position: "relative",
            }}
          >
            {/* Light disc — keeps dark logos visible on dark bg */}
            <div
              style={{
                position: "absolute",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,.15) 0%, rgba(255,255,255,.04) 70%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            <img
              src={skill.image}
              alt={skill.name}
              style={{
                position: "relative",
                width: 38,
                height: 38,
                objectFit: "contain",
              }}
            />
          </div>

          {/* Hover label */}
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              whiteSpace: "nowrap",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "rgba(99,202,183,1)",
              background: "rgba(6,12,26,.93)",
              padding: "3px 9px",
              borderRadius: 6,
              border: "1px solid rgba(99,202,183,.35)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(-4px)",
              transition: "opacity .2s, transform .2s",
              pointerEvents: "none",
            }}
          >
            {skill.name}
          </div>
        </div>
      </div>
    </div>
  );
};