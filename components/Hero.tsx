"use client";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const floatBlob: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark"
    >
      {/* Animated background blobs */}
      <motion.div
        variants={floatBlob}
        animate="animate"
        className="absolute -top-40 -left-20 w-125 h-125 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatBlob}
        animate="animate"
        style={{ animationDelay: "3s" }}
        className="absolute -right-20 w-125 h-125 bg-accent/8 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
            Jonathan Pangkey
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-xl md:text-2xl text-white/70 mb-4 max-w-2xl mx-auto"
        >
          Full Stack Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="text-base md:text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Building seamless, innovative, and impactful digital solutions with
          cutting-edge technologies and a passion for design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group bg-linear-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex gap-6 justify-center"
        >
          {[
            { href: "https://github.com", icon: <Github className="w-5 h-5" />, label: "GitHub" },
            { href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
            { href: "mailto:your.email@example.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15, backgroundColor: "var(--color-accent)" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-accent transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};