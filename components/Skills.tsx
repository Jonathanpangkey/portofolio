"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const skills = [
  { name: "React", image: "/img/skills/react.webp" },
  { name: "Tailwind CSS", image: "/img/skills/tailwind.webp" },
  { name: "Sass", image: "/img/skills/sass.webp" },
  { name: "Bootstrap", image: "/img/skills/bootstrap.webp" },
  { name: "Java", image: "/img/skills/java.webp" },
  { name: "Spring Boot", image: "/img/skills/springboot.webp" },
  { name: "PHP", image: "/img/skills/Php.webp" },
  { name: "Laravel", image: "/img/skills/laravel.webp" },
  { name: "Node.js (Express)", image: "/img/skills/express.webp" },
  { name: "Flask", image: "/img/skills/flask.webp" },
  { name: "MySQL", image: "/img/skills/mysql.webp" },
  { name: "PostgreSQL", image: "/img/skills/postgres.webp" },
  { name: "MongoDB", image: "/img/skills/MongoDB.webp" },
  { name: "Docker", image: "/img/skills/docker.webp" },
  { name: "Git", image: "/img/skills/git.webp" },
  { name: "Apache Kafka", image: "/img/skills/kafka log.webp" },
  { name: "Figma", image: "/img/skills/Figma.webp" },
];

const categories = [
  {
    letter: "F",
    title: "Frontend",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    letter: "B",
    title: "Backend",
    desc: "Node.js, Laravel, SpringBoot, MySQL, PostgreSQL, MongoDB",
  },
  {
    letter: "D",
    title: "DevOps",
    desc: "Docker, AWS, Digital Ocean, Git, CI/CD Github Actions",
  },
];

// Individual skill card with its own useInView
const SkillCard = ({ skill, index }: { skill: (typeof skills)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 6) * 0.07, // stagger within each row
      }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/20 cursor-default"
    >
      <div className="aspect-square flex items-center justify-center mb-4">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <p className="text-white text-sm font-medium text-center group-hover:text-accent transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
};

// Individual category card with its own useInView
const CategoryCard = ({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) => {
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
        className="w-16 h-16 bg-linear-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <span className="text-white text-2xl font-bold">{cat.letter}</span>
      </motion.div>
      <h3 className="text-white font-bold text-lg mb-2">{cat.title}</h3>
      <p className="text-white/60 text-sm">{cat.desc}</p>
    </motion.div>
  );
};

export const Skills = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden bg-background-dark"
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 w-125 h-125 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -right-20 w-125 h-125 bg-accent/8 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
            className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block"
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
            <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Tools I Use
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Experienced with modern technologies and frameworks to build scalable applications
          </motion.p>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="shrink-0 w-40 snap-center"
            >
              <div className="bg-primary/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:bg-white/10">
                <div className="aspect-square flex items-center justify-center mb-3">
                  <img src={skill.image} alt={skill.name} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-white text-[14px] font-medium text-center">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop grid — each card animates independently */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Category cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard key={index} cat={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};