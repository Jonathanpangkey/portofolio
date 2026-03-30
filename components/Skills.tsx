"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

import { skills, rings, categories, type Skill, type Category } from "./skills.data";
import { OrbitIcon } from "./OrbitIcon";

// ─── Animation variant ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const CategoryCard = ({ cat, index }: { cat: Category; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ background: "linear-gradient(135deg,#63cab7,#2563eb)" }}
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <span className="text-white text-2xl font-bold">{cat.letter}</span>
      </motion.div>
      <h3 className="text-white font-bold text-lg mb-2">{cat.title}</h3>
      <p className="text-white/60 text-sm">{cat.desc}</p>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.07 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-teal-400/50 transition-all duration-300 cursor-default"
    >
      <div className="flex items-center justify-center mb-3">
        <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
      </div>
      <p className="text-white text-xs font-medium text-center group-hover:text-teal-400 transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const Skills = () => {
  const headerRef = useRef(null);
  const orbitRef  = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const orbitInView  = useInView(orbitRef,  { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#060c1a" }}
    >
      {/* Global keyframes — injected once here, used by OrbitIcon & core */}
      <style>{`
        @keyframes orbit-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: .5; }
          100% { transform: translate(-50%,-50%) scale(1.7); opacity: 0;  }
        }
        @keyframes core-breathe {
          0%,100% { box-shadow: 0 0 35px rgba(99,202,183,.35), 0 0 70px  rgba(99,202,183,.12), inset 0 0 28px rgba(99,202,183,.08); }
          50%      { box-shadow: 0 0 55px rgba(99,202,183,.55), 0 0 110px rgba(99,202,183,.2),  inset 0 0 40px rgba(99,202,183,.14); }
        }
      `}</style>

      {/* Ambient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[false, true].map((isRight, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.25, 1], opacity: [.35, .6, .35] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: i * 4.5 }}
            style={{
              position: "absolute",
              ...(isRight ? { right: "-8%", top: "15%" } : { left: "-8%", top: "15%" }),
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${isRight ? "rgba(99,202,183,.1)" : "rgba(37,99,235,.13)"} 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16" ref={headerRef}>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#63cab7",
              marginBottom: 16,
            }}
          >
            SKILLS & TECHNOLOGIES
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Tech Stack & </span>
            <span
              style={{
                background: "linear-gradient(90deg,#63cab7,#2563eb,#63cab7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tools I Use
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Orbiting my expertise — modern technologies powering scalable applications
          </motion.p>
        </div>

        {/* ── Orbit system (desktop) ── */}
        <motion.div
          ref={orbitRef}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={orbitInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
          style={{ position: "relative", width: "100%", height: 860 }}
        >
          {/* Single pivot point — all children position from this 0×0 center */}
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>

            {/* Dashed orbit rings */}
            {rings.map((ring, ri) => (
              <div
                key={ri}
                style={{
                  position: "absolute",
                  top: -ring.radius,
                  left: -ring.radius,
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                  borderRadius: "50%",
                  border: `1px dashed rgba(99,202,183,${0.28 - ri * 0.07})`,
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* Center core */}
            <div
              style={{
                position: "absolute",
                top: -44,
                left: -44,
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,202,183,.18) 0%, rgba(6,12,26,.97) 70%)",
                border: "2px solid rgba(99,202,183,.55)",
                animation: "core-breathe 3s ease-in-out infinite",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  border: "1px solid rgba(99,202,183,.4)",
                  animation: "pulse-ring 2.6s ease-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "rgba(99,202,183,.9)",
                }}
              >
                {"</>"}
              </span>
            </div>

            {/* Orbit icons */}
            {rings.map((ring, ri) =>
              ring.skills.map((skill, si) => (
                <OrbitIcon
                  key={`${ri}-${si}`}
                  skill={skill}
                  angleDeg={(360 / ring.skills.length) * si}
                  radius={ring.radius}
                  duration={ring.duration}
                  reverse={ring.reverse}
                />
              ))
            )}
          </div>
        </motion.div>

        {/* ── Mobile grid ── */}
        <div className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>

        {/* ── Category cards ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};