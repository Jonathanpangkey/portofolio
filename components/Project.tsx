"use client";
import {useRef} from "react";
import {useState} from "react";
import {ExternalLink, Github, Briefcase, ArrowRight, Lock} from "lucide-react";
import {motion, useInView} from "framer-motion";

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const freelanceRef = useRef(null);
  const freelanceInView = useInView(freelanceRef, {once: true, margin: "-60px"});

  const projects = [
    {
      id: 1,
      title: "FinLit LMS",
      category: "LMS",
      description:
        "PWA-based app designed for learning finance. It includes features to record progress, deliver materials, and provide evaluations base on the objectives.",
      image: "/img/projects/finlit.png",
      technologies: ["Java Springboot", "React ts", "PostgreSQL"],
      liveUrl: "https://github.com/Jonathanpangkey/Frontend_TA_FinLit",
      githubUrl: "https://github.com/Jonathanpangkey/Frontend_TA_FinLit",
      featured: true,
      hki: true,
    },
    {
      id: 2,
      title: "Job Application Evaluator",
      category: "LLM",
      description:
        "Used to automatically evaluate CVs and project reports with LLMs, including document upload, PDF text extraction, RAG-based context retrieval, and scoring with feedback.",
      image: "/img/projects/cv-evaluator.png",
      technologies: ["Node.js", "Sqlite", "Redis", "ChromaDB"],
      liveUrl: "https://github.com/Jonathanpangkey/Job_Application_Evaluator",
      githubUrl: "https://github.com/Jonathanpangkey/Job_Application_Evaluator",
      featured: true,
    },
    {
      id: 3,
      title: "Hiring Platform",
      category: "Hiring Platform",
      description: "A hiring management web (frontend only) designed for two user roles: Admin (Recruiter) and Applicant (Job Seeker).",
      image: "/img/projects/hiring-platform.png",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui", "Supabase"],
      liveUrl: "https://hiring-platform-jonathan.vercel.app/",
      githubUrl: "https://github.com/Jonathanpangkey/Hiring-Platform?tab=readme-ov-file",
      featured: true,
    },
    {
      id: 4,
      title: "Company Management API (Microservices)",
      category: "Microservices API",
      description:
        "This application is designed to manage employees, departments and tasks across various services. Utilize centralized configuration, service discovery, tracing logging and api gateway.",
      image: "/img/projects/microservices.png",
      technologies: ["Springboot", "Postgresql", "Eureka", "Zipkin"],
      liveUrl: "https://github.com/Jonathanpangkey/springboot_microservices",
      githubUrl: "https://github.com/Jonathanpangkey/springboot_microservices",
      featured: true,
    },
  ];

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id='projects' className='relative py-24 px-6 overflow-hidden bg-zinc-950'>
      <div className='absolute top-1/3 left-1/4 w-125 h-125 bg-primary/8 rounded-full blur-3xl' />
      <div className='absolute bottom-1/3 right-1/4 w-125 h-125 bg-accent/8 rounded-full blur-3xl' />

      <div className='relative max-w-7xl mx-auto'>
        {/* ── Header ── */}
        <div className='text-center mb-16'>
          <span className='text-accent text-sm font-semibold tracking-wider uppercase mb-4 block'>MY WORK</span>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-white'>Personal </span>
            <span className='bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105'>
              {/* Image */}
              <div className='relative h-48 overflow-hidden bg-zinc-900'>
                <div className='absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Badges — stacked top-right */}
                <div className='absolute top-4 right-4 z-10 flex flex-col items-end gap-1.5'>
                  {project.featured && <span className='bg-accent text-white text-xs font-bold px-3 py-1 rounded-full'>Featured</span>}
                  {(project as any).hki && (
                    <div className='relative group/hki'>
                      {/* Badge */}
                      <span
                        className='flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full cursor-default select-none'
                        style={{
                          background: "linear-gradient(135deg, #92400e, #78350f)",
                          border: "1px solid rgba(251,191,36,0.7)",
                          color: "rgb(253,224,71)",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 8px rgba(251,191,36,0.25)",
                        }}>
                        <span>©</span>
                        <span>HKI Registered</span>
                      </span>

                      {/* Tooltip */}
                      <div
                        className='absolute right-0 top-full mt-1 w-48 rounded-md p-2 opacity-0 group-hover/hki:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover/hki:translate-y-0'
                        style={{
                          background: "rgba(15, 10, 5, 0.97)",
                          border: "1px solid rgba(251,191,36,0.3)",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.5), 0 0 8px rgba(251,191,36,0.1)",
                          backdropFilter: "blur(8px)",
                          zIndex: 150,
                        }}>
                        {/* Header */}
                        <div className='flex items-center gap-1 mb-1 pb-1' style={{borderBottom: "1px solid rgba(251,191,36,0.2)"}}>
                          <span style={{fontSize: 12}}>🏛️</span>
                          <div>
                            <p className='text-[8px] font-bold' style={{color: "rgb(253,224,71)"}}>
                              HKI Registered
                            </p>
                            <p className='text-[8px]' style={{color: "rgba(255,255,255,0.45)"}}>
                              Ministry of Law RI
                            </p>
                          </div>
                        </div>

                        {/* Info rows */}
                        {[
                          {label: "Registration No.", value: "000873650"},
                          {label: "Date", value: "20 March 2025"},
                          {label: "Type", value: "Software"},
                        ].map(({label, value}) => (
                          <div key={label} className='flex justify-between items-start gap-1 mb-1'>
                            <span className='text-[8px]' style={{color: "rgba(255,255,255,0.45)"}}>
                              {label}
                            </span>
                            <span className='text-[8px] font-semibold text-right' style={{color: "rgba(255,255,255,0.9)"}}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/1a1a1a/666666?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='mb-2'>
                  <span className='text-accent text-xs font-semibold uppercase tracking-wider'>{project.category}</span>
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors'>{project.title}</h3>
                <p className='text-white/60 text-sm mb-4 leading-relaxed line-clamp-3'>{project.description}</p>

                {/* Tech badges */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-lg font-semibold transition-all text-sm'>
                    <ExternalLink className='w-4 h-4' />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent text-white rounded-lg transition-all text-sm'>
                    <Github className='w-4 h-4' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
