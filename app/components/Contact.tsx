'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration or API call would go here
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FaEnvelope className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FaPhone className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </a>

                {personalInfo.whatsapp && (
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <FaWhatsapp className="text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-medium text-white">{personalInfo.whatsapp}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  if (!IconComponent) return null;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg text-gray-300 hover:bg-primary hover:text-white transition-all"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-white placeholder-gray-400"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Send Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

