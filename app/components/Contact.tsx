'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaFacebook: FaFacebook,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // EmailJS integration or API call would go here
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
    
    // Simulate submission delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const titleText = 'Get In Touch';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
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
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '250px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ margin: '1rem auto 0' }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
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
              <h3 className="text-2xl font-heading font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-lg"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <FaEnvelope className="text-primary group-hover:text-white transition-colors relative z-10" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-lg"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                    />
                    <FaPhone className="text-primary group-hover:text-white transition-colors relative z-10" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                {personalInfo.whatsapp && (
                  <motion.a
                    href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors relative overflow-hidden"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-green-500/20 rounded-lg"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                      />
                      <FaWhatsapp className="text-green-400 group-hover:text-white transition-colors relative z-10" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-medium text-white">{personalInfo.whatsapp}</p>
                    </div>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Social Links with orbit animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  if (!IconComponent) return null;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg text-gray-300 hover:bg-primary hover:text-white transition-all relative overflow-hidden group"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + index * 0.1,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        y: -5,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {/* Orbit effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <IconComponent size={20} className="relative z-10" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-white placeholder-gray-400 relative"
                  placeholder="Your Name"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute h-0.5 bg-primary mt-1"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute h-0.5 bg-primary mt-1"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-white placeholder-gray-400"
                  placeholder="Your message here..."
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {focusedField === 'message' && (
                    <motion.div
                      className="absolute h-0.5 bg-primary mt-1"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Email
                    </motion.span>
                  )}
                </AnimatePresence>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

