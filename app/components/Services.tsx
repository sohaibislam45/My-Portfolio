'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaPalette: FaPalette,
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleText = 'What I Offer';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title Animation
      gsap.to('.services-title', {
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Underline Animation
      gsap.to('.services-underline', {
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        },
        width: '250px',
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Service cards staggered animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50, rotateY: 90 },
        {
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden relative opacity-0 translate-y-10 services-title">
          <span className="flex justify-center">
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          {/* Animated underline that draws */}
          <div className="h-1 bg-primary mt-4 mx-auto w-0 services-underline" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg relative overflow-hidden group cursor-pointer service-card"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 1 }}
                />

                {/* Icon with spin animation */}
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.2,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  {IconComponent && (
                    <IconComponent className="text-white text-2xl relative z-10" />
                  )}
                </motion.div>

                {/* Title with line-by-line reveal */}
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white relative z-10">
                  {service.title}
                </h3>

                {/* Description with word-by-word reveal on hover */}
                <div className="relative z-10">
                  {isHovered ? (
                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description.split(' ').map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          className="inline-block mr-1"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: wordIndex * 0.02
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Bottom border animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

