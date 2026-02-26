"use client";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const cardVariants: Variants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Maritim Muda Nusantara",
    location: "Jakarta, Indonesia",
    period: "Nov 2024 - Present",
    type: "Internship - Kemnaker",
    description:
      "Building and maintaining fullstack web platforms with focus on backend optimization, database handling, and deployment automation.",
    responsibilities: [
      "Built and maintained fullstack web platforms using Laravel, Next.js, Supabase, and MySQL",
      "Implemented new features and improved performance through backend optimization and database handling",
      "Enhanced UI/UX through refactoring for better user experience",
      "Handled deployment, server configuration, and environment setup on VM and cPanel",
      "Implemented CI/CD workflows for build and release automation",
    ],
    technologies: ["Laravel", "Next.js", "Supabase", "MySQL", "CI/CD", "cPanel"],
    current: true,
  },
  {
    id: 2,
    role: "Web Developer",
    company: "BlueBridge",
    location: "Remote",
    period: "Sep 2024 - Present",
    type: "Freelance",
    description:
      "Developing scalable dashboards, landing pages, and business web applications with modern tech stack and clean architecture principles.",
    responsibilities: [
      "Developed scalable dashboards, landing pages, and business web applications using Next.js, Tailwind CSS, and shadcn/ui",
      "Translated client requirements into functional features with reusable UI components",
      "Integrated frontend components with backend services and application logic",
      "Handled feature development, bug fixes, and refactoring to improve performance and maintainability",
    ],
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "REST API"],
    current: true,
  },
  {
    id: 3,
    role: "Frontend Software Developer",
    company: "UPTNER",
    location: "Tangerang, Indonesia",
    period: "Jun 2024 - Nov 2024",
    type: "Contract",
    description:
      "Developed responsive web applications and cybersecurity dashboards with advanced data visualization and state management solutions.",
    responsibilities: [
      "Built responsive landing pages using React and Tailwind CSS, integrated with Sanity CMS",
      "Developed cybersecurity dashboard using React and Material UI with multi-feature and multi-domain capabilities",
      "Implemented data visualization dashboards by mapping backend data into interactive charts",
      "Applied state management with Context API and implemented data caching using SWR",
      "Deployed application on AWS Amplify and integrated REST APIs",
    ],
    technologies: ["React", "Material UI", "Tailwind CSS", "Sanity CMS", "SWR", "AWS Amplify", "Context API"],
    current: false,
  },
  {
    id: 4,
    role: "Web Developer",
    company: "AssistX Enterprise",
    location: "Remote",
    period: "Jan 2024 - Jun 2024",
    type: "Internship",
    description:
      "Built and maintained internal dashboards with focus on performance optimization, state management, and full-stack development using modern frameworks.",
    responsibilities: [
      "Built and maintained client internal dashboards using Next.js and Material-UI",
      "Implemented data caching with React Query and SWR for optimal performance",
      "Managed global state with Zustand for efficient state management",
      "Built and enhanced full-stack dashboard features using Laravel (Blade templating, routing, database management, and DataTables)",
      "Connected Laravel backend to MongoDB for dynamic data handling",
      "Resolved bugs and performance issues during QA",
    ],
    technologies: ["Next.js", "Material-UI", "React Query", "SWR", "Zustand", "Laravel", "MongoDB"],
    current: false,
  },
  {
    id: 5,
    role: "Technical Risk",
    company: "DANA Indonesia",
    location: "Jakarta, Indonesia",
    period: "Sep 2023 - Dec 2023",
    type: "Internship",
    description:
      "Analyzed technical risks and contributed to system reliability improvements in fintech environment, focusing on incident management and CI/CD optimization.",
    responsibilities: [
      "Analyzed and mitigated technical risks across the software lifecycle, including code review and system reliability",
      "Collaborated with SRE and Tech Ops teams to handle production incidents and system recovery",
      "Contributed to improving release processes and CI/CD practices",
      "Created clear and structured Root Cause Analysis (RCA) documentation for incident response workflows",
    ],
    technologies: ["CI/CD", "Incident Management", "SRE", "Code Review", "RCA Documentation"],
    current: false,
  },
];

// Each card has its own useInView so it animates independently on scroll
const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline Dot */}
      <motion.div
        variants={dotVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-br from-accent to-primary shadow-lg shadow-accent/50 z-10"
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-accent to-primary animate-ping opacity-20" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        custom={isEven}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`flex-1 ${isEven ? "md:text-right" : ""}`}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors duration-300 hover:bg-white/10 hover:border-accent/50 ${
            exp.current ? "ring-2 ring-accent/30" : ""
          }`}
        >
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <div className={`flex items-center gap-2 text-white/60 mb-2 ${isEven ? "md:justify-end" : ""}`}>
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold text-white/90">{exp.company}</span>
                  {exp.current && (
                    <span className="ml-2 text-xs bg-accent text-white px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={`flex flex-wrap gap-4 text-sm text-white/60 ${isEven ? "md:justify-end" : ""}`}>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                {exp.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 leading-relaxed mb-6">{exp.description}</p>

          {/* Responsibilities */}
          <div className="mb-6">
            <h4 className={`text-white font-semibold mb-3 flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}>
              <ArrowRight className={`w-4 h-4 text-accent ${isEven ? "md:order-2" : ""}`} />
              <span>Key Responsibilities</span>
            </h4>
            <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
              {exp.responsibilities.map((resp, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.07, duration: 0.4 }}
                  className="text-white/60 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 ${isEven ? "md:order-2" : ""}`} />
                  <span className="flex-1">{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
            <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
              {exp.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + idx * 0.05, duration: 0.35 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

export const Experience = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden bg-background-dark"
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-125 h-125 bg-accent/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        className="absolute bottom-1/4 right-1/3 w-125 h-125 bg-primary/8 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
            className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            CAREER JOURNEY
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Professional </span>
            <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            My journey through fintech, cybersecurity, and software development,
            delivering scalable and performant web applications.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={lineInView ? "visible" : "hidden"}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-20"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" ref={ctaRef}>
          <motion.a
            href="/resume.pdf"
            download
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            custom={0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
          >
            Download Full Resume
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};