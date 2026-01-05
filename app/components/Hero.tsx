'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo, socialLinks } from '@/data/portfolio';

const typewriterText = 'Full Stack Developer';
const typewriterDelay = 100;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(typewriterText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typewriterDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Social icon mapping
  const getSocialIcon = (name: string) => {
    if (name === 'GitHub') return FaGithub;
    if (name === 'LinkedIn') return FaLinkedin;
    return FaTwitter;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-8 mt-10 md:mt-0"
          >
            {/* Designation with Typewriter - Appears First */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-300">
                {displayText}
                <span className="animate-cursor text-primary">|</span>
              </h2>
              
              {/* Name Section */}
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">Hello, I'm</span>
                <br />
                <span className="text-white">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 max-w-lg text-lg leading-relaxed"
            >
              I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:shadow-[0_0_30px_rgba(0,220,130,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-transparent"
              >
                My Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = getSocialIcon(social.name);
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center items-center relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute w-64 h-64 bg-primary/30 rounded-full filter blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow z-0" />
            
            {/* Image container with float animation */}
            <div className="relative z-10 animate-float">
              <div className="relative w-80 md:w-[500px] h-auto">
                <Image
                  src="/images/profile.png"
                  alt={personalInfo.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                  priority
                />
                {/* Pink glow effects on eyes (optional decorative elements) */}
                <div className="absolute top-[40%] left-[38%] w-4 h-6 bg-accent-pink rounded-full blur-[8px] opacity-80 mix-blend-screen" />
                <div className="absolute top-[40%] right-[38%] w-4 h-6 bg-accent-pink rounded-full blur-[8px] opacity-80 mix-blend-screen" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
