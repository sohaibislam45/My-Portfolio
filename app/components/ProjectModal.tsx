'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-dark border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full shadow-lg hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={20} className="text-white" />
          </button>

          {/* Project Image */}
          <div className="relative h-64 w-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-t-2xl"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          {/* Project Content */}
          <div className="p-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">
              {project.name}
            </h2>

            {/* Technology Stack */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Description</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <FaExternalLinkAlt />
                  Live Project
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  <FaGithub />
                  GitHub Repository
                </a>
              )}
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Challenges Faced</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Future Improvements</h3>
              <ul className="space-y-2">
                {project.futureImprovements.map((improvement, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

