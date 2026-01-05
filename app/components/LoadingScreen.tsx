'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const welcomeText = ['Welcome', 'to', 'my', 'portfolio'];
const wordDelay = 0.4; // Delay between words in seconds
const wordDuration = 0.5; // Duration of each word animation
const totalAnimationTime = welcomeText.length * wordDelay + wordDuration;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // Calculate when all words have finished animating
  useEffect(() => {
    const timer = setTimeout(() => {
      // Wait a bit after all words appear, then trigger completion
      setTimeout(() => {
        onComplete();
      }, 500);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-dark z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
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
              duration: wordDuration,
              delay: index * wordDelay,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

