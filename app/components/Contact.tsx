'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handlePhoneCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title Animation
      gsap.to('.contact-title', {
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Underline Animation
      gsap.to('.contact-underline', {
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        },
        width: '250px',
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Contact info stagger
      gsap.fromTo('.contact-info-item',
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: '.contact-left',
            start: 'top 75%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );

      // Social links stagger
      gsap.fromTo('.social-link',
        { opacity: 0, scale: 0, rotate: -180 },
        {
          scrollTrigger: {
            trigger: '.social-links-container',
            start: 'top 85%',
          },
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );

      // Form inputs stagger
      gsap.fromTo('.form-item',
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white overflow-hidden opacity-0 translate-y-10 contact-title">
          Get In Touch
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mx-auto w-0 contact-underline" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 contact-left">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-white contact-info-item opacity-0">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2 contact-info-item opacity-0"
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

                <motion.div
                  onClick={handlePhoneCopy}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2 cursor-pointer contact-info-item opacity-0"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium text-white">{personalInfo.phone}</p>
                  </div>
                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="text-primary text-sm font-medium"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {personalInfo.whatsapp && (
                  <motion.a
                    href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group relative overflow-hidden rounded-lg p-2 contact-info-item opacity-0"
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
            </div>

            {/* Social Links with orbit animation */}
            <div className="social-links-container">
              <h3 className="text-xl font-heading font-semibold mb-4 text-white contact-info-item opacity-0">
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
                      className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg text-gray-300 hover:bg-primary hover:text-white transition-all relative overflow-hidden group social-link opacity-0"
                      aria-label={social.name}
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
            </div>
          </div>

          {/* Contact Form with enhanced animations */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 contact-form">
              <div className="form-item opacity-0">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
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
              </div>

              <div className="form-item opacity-0">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
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
              </div>

              <div className="form-item opacity-0">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
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
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed form-item opacity-0"
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
          </div>
        </div>
      </div>
    </section>
  );
}

