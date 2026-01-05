'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaGamepad, FaFootballBall } from 'react-icons/fa';
import { aboutContent, education } from '@/data/portfolio';

export default function About() {
  // Split text for reveal animation
  const titleText = 'About Me';
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="flex justify-center gap-2">
            {titleText.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: wordIndex * 0.1 }}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: wordIndex * 0.1 + charIndex * 0.05,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
                {wordIndex < titleText.split(' ').length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </span>
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ margin: '1rem auto 0' }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                {aboutContent.introduction.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.02 }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="group"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  <FaCode className="text-primary" />
                </motion.div>
                My Programming Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.programmingJourney.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ x: 5 }}
              className="group"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  <FaCode className="text-primary" />
                </motion.div>
                The Type of Work I Enjoy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.workPreferences.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 5 }}
              className="group"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaGamepad className="text-primary" />
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <FaFootballBall className="text-primary" />
                  </motion.div>
                </motion.div>
                Hobbies & Interests
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {aboutContent.hobbies.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.02 }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                Personality & Goals
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.personality.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.02 }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Education with 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
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
            
            <motion.div 
              className="flex items-center gap-3 mb-6 relative z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                whileHover={{ rotate: 360, scale: 1.2 }}
              >
                <FaGraduationCap className="text-primary text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold text-white">
                Educational Qualification
              </h3>
            </motion.div>

            <div className="space-y-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-white mb-1">
                  {education.degree}
                </h4>
                <motion.p 
                  className="text-primary font-medium mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {education.institution}
                </motion.p>
                <motion.p 
                  className="text-gray-300 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {education.location}
                </motion.p>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Graduation Year: {education.graduationYear}
                </motion.p>
                {education.cgpa && (
                  <motion.p 
                    className="text-gray-300 mt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7, type: 'spring' }}
                  >
                    CGPA: {education.cgpa}
                  </motion.p>
                )}
              </motion.div>

              {education.coursework && education.coursework.length > 0 && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h5 className="font-semibold text-white mb-3">Relevant Coursework:</h5>
                  <ul className="grid grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-300 flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        whileHover={{ x: 5, color: '#00dc82' }}
                      >
                        <motion.span
                          className="w-2 h-2 bg-primary rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.05, type: 'spring' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        {course}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {education.achievements && education.achievements.length > 0 && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h5 className="font-semibold text-white mb-3">Achievements:</h5>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-300 flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5, color: '#00dc82' }}
                      >
                        <motion.span
                          className="w-2 h-2 bg-primary rounded-full mt-2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1, type: 'spring' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

