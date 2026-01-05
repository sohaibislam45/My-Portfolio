'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const titleText = 'Featured Projects';

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="flex justify-center">
              {titleText.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: wordIndex * 0.15,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                >
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial={{ opacity: 0, rotateX: -90 }}
                      whileInView={{ opacity: 1, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: wordIndex * 0.15 + charIndex * 0.03,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </span>
            {/* Gradient underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '300px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ margin: '1rem auto 0' }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    rotateX: 2,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Image with parallax and zoom effect */}
                  <motion.div 
                    className="relative h-48 w-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    {/* Overlay fade on hover */}
                    <motion.div
                      className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                  
                  <div className="p-6 relative z-10">
                    <motion.h3
                      className="text-xl font-heading font-semibold mb-2 text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {project.name}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-sm mb-4 line-clamp-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {project.briefDescription}
                    </motion.p>
                    
                    {/* Tech stack with cascade animation */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + 0.5 + techIndex * 0.05,
                            type: 'spring',
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Button with slide-in underline */}
                    <motion.button
                      onClick={() => openModal(project.id)}
                      className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium relative overflow-hidden group/btn"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">View Details</span>
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Underline animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-white"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={projects.find(p => p.id === selectedProject)!}
          onClose={closeModal}
        />
      )}
    </>
  );
}

