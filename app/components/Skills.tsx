'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/portfolio';

const categoryColors = {
  frontend: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  backend: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  tools: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

const categoryLabels = {
  frontend: 'Frontend Technologies',
  backend: 'Backend Technologies',
  tools: 'Tools & Others',
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title Animation
      gsap.to('.skills-title', {
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Underline Animation
      gsap.to('.skills-underline', {
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 80%',
        },
        width: '300px',
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Categories staggered animation
      gsap.fromTo('.skill-category',
        { opacity: 0, y: 50, rotateY: 90 },
        {
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'back.out(1.7)',
        }
      );

      // Skills stagger within categories
      const categories = gsap.utils.toArray('.skill-category');
      categories.forEach((cat: any) => {
        const skills = cat.querySelectorAll('.skill-tag');
        gsap.fromTo(skills,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            scrollTrigger: {
              trigger: cat,
              start: 'top 85%',
            },
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.5)',
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const skillCategories = [
    { skills: frontendSkills, category: 'frontend' as const },
    { skills: backendSkills, category: 'backend' as const },
    { skills: toolsSkills, category: 'tools' as const },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden relative opacity-0 translate-y-10 skills-title">
          Skills & Technologies
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mx-auto w-0 skills-underline" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg relative overflow-hidden group skill-category perspective-1000"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.category === 'frontend' ? 'bg-blue-500/10' :
                category.category === 'backend' ? 'bg-emerald-500/10' :
                  'bg-purple-500/10'
                }`} />

              <h3 className="text-xl font-heading font-semibold mb-6 text-white relative z-10">
                {categoryLabels[category.category]}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-tag px-4 py-2 rounded-lg border font-medium text-sm transition-all cursor-pointer relative overflow-hidden hover:scale-110 hover:-translate-y-1 hover:z-50 ${categoryColors[category.category]}`}
                  >
                    <span className="relative z-10">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

