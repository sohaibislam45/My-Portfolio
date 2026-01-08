'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { socialLinks } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaFacebook: FaFacebook,
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show footer when scrolled past 80% of page
      setIsVisible(scrollPosition > documentHeight * 0.8);

      // Show back to top button when scrolled down
      setShowBackToTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.footer-content',
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 95%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
          }
        );
      }, footerRef);
      return () => ctx.revert();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-primary-hover transition-colors"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp size={20} />
            </motion.div>
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <footer
        ref={footerRef}
        className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright with fade-in */}
            <div className="text-center md:text-left footer-content opacity-0">
              <p className="text-sm">
                © 2024 Shohaib Islam. All Rights Reserved.
              </p>
            </div>

            {/* Social Links with enhanced animations */}
            <div className="flex gap-4 footer-content opacity-0">
              {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                if (!IconComponent) return null;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors relative overflow-hidden group"
                    aria-label={social.name}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      y: -5,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-50 blur-md"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <IconComponent size={18} className="relative z-10" />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top Button (desktop only, mobile uses floating button) */}
            <motion.button
              onClick={scrollToTop}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors text-sm font-medium relative overflow-hidden group footer-content opacity-0"
              aria-label="Back to top"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Back to Top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative z-10"
              >
                <FaArrowUp size={14} />
              </motion.div>
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
}

