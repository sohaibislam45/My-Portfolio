'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { socialLinks } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaFacebook: FaFacebook,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2024 Shohaib Islam. All Rights Reserved.
            </p>
          </div>

          {/* Social Links */}
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
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors text-sm font-medium"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

