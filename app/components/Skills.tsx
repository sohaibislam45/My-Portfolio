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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-heading font-bold text-center mb-16 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-heading font-semibold mb-6 text-white">
                {categoryLabels[category.category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg border font-medium text-sm transition-all hover:shadow-md ${categoryColors[category.category]}`}
                  >
                    {skill.name}
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

