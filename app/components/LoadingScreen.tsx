'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const welcomeText = ['Welcome', 'to', 'my', 'portfolio'];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // Trigger completion after animation finishes
  const handleAnimationComplete = () => {
    // Wait a bit before starting fade out
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-dark z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={handleAnimationComplete}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0a0a0a] to-dark" />
        
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/10 rounded-full filter blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 px-4">
        {welcomeText.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            onAnimationComplete={index === welcomeText.length - 1 ? handleAnimationComplete : undefined}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

