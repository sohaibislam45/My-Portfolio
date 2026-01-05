'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';
import { services } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaPalette: FaPalette,
};

export default function Services() {
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
          What I Offer
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  {IconComponent && (
                    <IconComponent className="text-white text-2xl" />
                  )}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

