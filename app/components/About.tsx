'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaGamepad, FaFootballBall, FaUser } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent, education } from '@/data/portfolio';

export default function About() {
  // Split text for reveal animation
  const titleText = 'About Me';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate title
      gsap.to('.about-title', {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        },
        opacity: 1,
        duration: 1,
      });

      // Animate underline
      gsap.to('.about-underline', {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        },
        width: '200px',
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animate content text
      gsap.to('.about-text', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
      });

      // Stagger animate list items
      gsap.fromTo('.about-item',
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden about-title opacity-0">
          About Me
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 w-0 mx-auto about-underline" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 about-content">
            <div className="text-gray-300 leading-relaxed mb-6 opacity-0 about-text">
              {aboutContent.introduction}
            </div>

            <div className="group opacity-0 about-item">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-primary" />
                My Programming Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.programmingJourney}
              </p>
            </div>

            <div className="group opacity-0 about-item">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-primary" />
                The Type of Work I Enjoy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.workPreferences}
              </p>
            </div>

            <div className="group opacity-0 about-item">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <div className="flex gap-2">
                  <FaGamepad className="text-primary" />
                  <FaFootballBall className="text-primary" />
                </div>
                Hobbies & Interests
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {aboutContent.hobbies}
              </p>
            </div>

            <div className="group opacity-0 about-item">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <FaUser className="text-primary" />
                Personality & Goals
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.personality}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            whileHover={{
              rotateY: 5,
              rotateX: 2,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ perspective: 1000 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg relative overflow-hidden group"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: '-100%', y: '-100%' }}
              whileHover={{ x: '100%', y: '100%' }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <FaGraduationCap className="text-primary text-3xl" />
              <h3 className="text-2xl font-heading font-semibold text-white">
                Educational Qualification
              </h3>
            </div>

            <div className="space-y-6 relative z-10">
              {education.map((edu, eduIndex) => (
                <div
                  key={eduIndex}
                  className={eduIndex > 0 ? "pt-6 border-t border-white/10" : ""}
                >
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 mb-1">
                    {edu.location}
                  </p>
                  <p className="text-gray-300">
                    Graduation Year: {edu.graduationYear}
                  </p>
                  {(edu.cgpa || edu.gpa) && (
                    <p className="text-gray-300 mt-2">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `GPA: ${edu.gpa}`}
                    </p>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-6">
                      <h5 className="font-semibold text-white mb-3">Relevant Coursework:</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {edu.coursework.map((course, index) => (
                          <li
                            key={index}
                            className="text-gray-300 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-6">
                      <h5 className="font-semibold text-white mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

