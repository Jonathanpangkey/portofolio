"use client";
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

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='about' className='relative py-24 px-6 overflow-hidden bg-zinc-950' ref={ref}>
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className='absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl'
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl'
      />

      <div className='relative max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.span
            variants={fadeUp}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className='text-accent text-sm font-semibold tracking-wider uppercase mb-4 block'>
            ABOUT ME
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-white'>Passionate About </span>
            <span className='bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent'>Building Great Things</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className='text-white/70 text-lg max-w-2xl mx-auto leading-relaxed'>
            I&apos;m a full-stack developer with a passion for creating elegant solutions to complex problems. With expertise in modern web
            technologies, I bring ideas to life through code and design.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
          <motion.div
            variants={fadeLeft}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            className='relative flex items-center justify-center'>
            <div className='relative w-100 h-100'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 rounded-full bg-linear-to-br from-accent via-primary to-accent opacity-50 blur-md'
              />
              <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-zinc-900'>
                <img src='/img/profile.jpg' alt='Profile' className='w-full h-full object-cover' />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            className='flex items-center'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>Let me introduce myself</h3>
              <p className='text-white/70 leading-relaxed mb-2'>
                I am a dedicated software developer with a strong foundation in building modern, scalable, and user-friendly web applications. With
                experience working in both collaborative team environments and as a freelancer, I specialize in turning client requirements into
                sleek, functional, and innovative websites.
              </p>
              <p className='text-white/70 leading-relaxed'>
                My passion lies in leveraging the latest technologies to deliver tailored solutions that meet unique needs. Whether it&apos;s creating
                a dynamic web presence for businesses or contributing to large-scale development projects, I thrive on solving challenges and bringing
                ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};