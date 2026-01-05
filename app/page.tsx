'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  // Smooth scroll enhancement
  useEffect(() => {
    // Enhanced smooth scroll with easing
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // Navbar height
            const elementPosition = (element as HTMLElement).offsetTop;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated Stars Background Effect */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #ffffff, rgba(0,0,0,0))
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Animated Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.section>
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.section>
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.section>
        <motion.section
          id="services"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.section>
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>
        <Footer />
      </div>
    </main>
  );
}

