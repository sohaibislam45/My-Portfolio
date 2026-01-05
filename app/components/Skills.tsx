'use client';

import { motion } from 'framer-motion';
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
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const skillCategories = [
    { skills: frontendSkills, category: 'frontend' as const },
    { skills: backendSkills, category: 'backend' as const },
    { skills: toolsSkills, category: 'tools' as const },
  ];

  const titleText = 'Skills & Technologies';

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="flex justify-center">
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '300px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ margin: '1rem auto 0' }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  category.category === 'frontend' ? 'bg-blue-500/10' :
                  category.category === 'backend' ? 'bg-emerald-500/10' :
                  'bg-purple-500/10'
                }`}
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 1 }}
              />
              
              <motion.h3
                className="text-xl font-heading font-semibold mb-6 text-white relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 + 0.2 }}
              >
                {categoryLabels[category.category].split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.15 + 0.3 + wordIndex * 0.1 
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.15 + 0.4 + index * 0.05,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, -5, 0],
                      y: -5,
                      z: 50,
                      transition: { duration: 0.5 }
                    }}
                    className={`px-4 py-2 rounded-lg border font-medium text-sm transition-all cursor-pointer relative overflow-hidden ${categoryColors[category.category]}`}
                  >
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{skill.name}</span>
                    
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-50 ${
                        category.category === 'frontend' ? 'bg-blue-500' :
                        category.category === 'backend' ? 'bg-emerald-500' :
                        'bg-purple-500'
                      }`}
                      whileHover={{ opacity: 0.7, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

