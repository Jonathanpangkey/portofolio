"use client";
import {useState} from "react";
import {ExternalLink, Github, ChevronLeft, ChevronRight} from "lucide-react";

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
    },
    {
      id: 2,
      title: "Job Application Evaluator",
      category: "LLM",
      description:
        "Used to automatically evaluate CVs and project reports with LLMs, including document upload, PDF text extraction, RAG-based context retrieval, and scoring with feedback.",
      image: "/img/projects/cv-evaluator.png",
      technologies: ["Node.js ", "Sqlite", "Redis", "ChromaDB"],
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
      technologies: [" Next.js", "Tailwind CSS", "Shadcn/ui", "Supabase"],
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

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id='projects' className='relative py-24 px-6 overflow-hidden bg-zinc-950'>
      <div className='absolute top-1/3 left-1/4 w-125 h-125 bg-primary/8 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/3 right-1/4 w-125 h-125 bg-accent/8 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-accent text-sm font-semibold tracking-wider uppercase mb-4 block'>MY WORK</span>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-white'>Featured </span>
            <span className='bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105'>
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden bg-zinc-900'>
                <div className='absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                {project.featured && (
                  <div className='absolute top-4 right-4 z-10 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full'>Featured</div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/1a1a1a/666666?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <div className='mb-2'>
                  <span className='text-accent text-xs font-semibold uppercase tracking-wider'>{project.category}</span>
                </div>

                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors'>{project.title}</h3>

                <p className='text-white/60 text-sm mb-4 leading-relaxed line-clamp-3'>{project.description}</p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  {/* Live Demo Button */}
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-lg font-semibold transition-all text-sm'>
                    <ExternalLink className='w-4 h-4' />
                    Live Demo
                  </a>

                  {/* GitHub Button */}
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

        {/* View More Button */}
        {filteredProjects.length > 6 && (
          <div className='text-center mt-12'>
            <button className='bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105'>
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
