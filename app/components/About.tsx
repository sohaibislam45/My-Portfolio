'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaGamepad, FaFootballBall } from 'react-icons/fa';
import { aboutContent, education } from '@/data/portfolio';

export default function About() {
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {aboutContent.introduction}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-primary" />
                My Programming Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.programmingJourney}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-primary" />
                The Type of Work I Enjoy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.workPreferences}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center gap-2">
                <div className="flex gap-2">
                  <FaGamepad className="text-primary" />
                  <FaFootballBall className="text-primary" />
                </div>
                Hobbies & Interests
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {aboutContent.hobbies}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                Personality & Goals
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutContent.personality}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-primary text-3xl" />
              <h3 className="text-2xl font-heading font-semibold text-white">
                Educational Qualification
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-300 mb-1">{education.location}</p>
                <p className="text-gray-300">Graduation Year: {education.graduationYear}</p>
                {education.cgpa && (
                  <p className="text-gray-300 mt-2">CGPA: {education.cgpa}</p>
                )}
              </div>

              {education.coursework && education.coursework.length > 0 && (
                <div className="mt-6">
                  <h5 className="font-semibold text-white mb-3">Relevant Coursework:</h5>
                  <ul className="grid grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {education.achievements && education.achievements.length > 0 && (
                <div className="mt-6">
                  <h5 className="font-semibold text-white mb-3">Achievements:</h5>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

