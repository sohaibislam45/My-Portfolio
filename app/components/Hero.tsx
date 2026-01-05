'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import { 
  SiTypescript as SiTS,
  SiNextdotjs as SiNext,
  SiMongodb as SiMongo,
  SiPostgresql as SiPostgres,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';
import { personalInfo, socialLinks, skills } from '@/data/portfolio';

// Typewriter texts to cycle through
const typewriterTexts = [
  'Full Stack Developer',
  'Problem Solver',
  'Code Enthusiast',
];
const typewriterDelay = 100;
const backspaceDelay = 50; // Faster backspace
const pauseAfterType = 2000; // Pause after typing completes
const pauseAfterDelete = 500; // Pause after deleting completes

// Rotating taglines
const taglines = [
  'Problem Solver',
  'Code Enthusiast',
  'UI/UX Lover',
  'Full Stack Developer',
  'Tech Innovator',
];

// Code snippets for terminal
const codeSnippets = [
  `const developer = {
  name: "${personalInfo.name}",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Building amazing web experiences"
};`,
  `async function buildProject() {
  const idea = await getInspiration();
  const code = await writeCode(idea);
  return deploy(code);
}`,
  `function solveProblem(problem) {
  const solution = think();
  return implement(solution);
}`,
];

// Tech stack icons mapping
const techIcons: { [key: string]: any } = {
  'React': FaReact,
  'Node.js': FaNode,
  'TypeScript': SiTS,
  'Next.js': SiNext,
  'JavaScript': SiJavascript,
  'Python': FaPython,
  'MongoDB': SiMongo,
  'PostgreSQL': SiPostgres,
  'Express.js': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  'AWS': FaAws,
  'Docker': FaDocker,
};

// Stats data
const stats = [
  { label: 'Projects', value: 50, suffix: '+' },
  { label: 'Years', value: 3, suffix: '+' },
  { label: 'Passion', value: 100, suffix: '%' },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [codeDisplay, setCodeDisplay] = useState('');
  const [codeCharIndex, setCodeCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use Framer Motion's optimized motion values for cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(0, { stiffness: 500, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 50 });

  // Enhanced Typewriter effect with backspace
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    
    if (isTyping && !isDeleting) {
      // Typing phase
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, typewriterDelay);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, pauseAfterType);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      // Deleting phase
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex - 1);
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
        }, backspaceDelay);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentCharIndex(0);
        }, pauseAfterDelete);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCharIndex, currentTextIndex, isTyping, isDeleting]);

  // Rotating taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Code terminal typing effect
  useEffect(() => {
    const currentCode = codeSnippets[currentCodeIndex];
    if (codeCharIndex < currentCode.length) {
      const timeout = setTimeout(() => {
        setCodeDisplay(currentCode.substring(0, codeCharIndex + 1));
        setCodeCharIndex(codeCharIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      // Wait 3 seconds then move to next code snippet
      const timeout = setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        setCodeDisplay('');
        setCodeCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [codeCharIndex, currentCodeIndex]);

  // Mouse tracking for 3D tilt and custom cursor - Optimized with requestAnimationFrame
  useEffect(() => {
    if (isMobile) return;
    
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous frame
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        // Update motion values (optimized, no re-renders)
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        // 3D tilt effect on image
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const rotateX = (e.clientY - centerY) / 25;
          const rotateY = (centerX - e.clientX) / 25;
          
          imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
          imageRef.current.style.willChange = 'transform';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, mouseX, mouseY, cursorX, cursorY]);

  // Parallax scroll effect - Optimized with requestAnimationFrame and throttling
  useEffect(() => {
    let rafId: number;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (sectionRef.current) {
            const scrolled = window.scrollY;
            const parallaxElements = sectionRef.current.querySelectorAll('[data-parallax]');
            parallaxElements.forEach((el, index) => {
              const speed = 0.5 + index * 0.1;
              (el as HTMLElement).style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
              (el as HTMLElement).style.willChange = 'transform';
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Social icon mapping
  const getSocialIcon = (name: string) => {
    if (name === 'GitHub') return FaGithub;
    if (name === 'LinkedIn') return FaLinkedin;
    return FaTwitter;
  };

  // Get top tech skills for floating icons
  const topTechSkills = skills
    .filter(skill => ['React', 'Node.js', 'TypeScript', 'Next.js', 'JavaScript', 'Python', 'MongoDB', 'PostgreSQL', 'Express.js'].includes(skill.name))
    .slice(0, 8);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Custom Cursor - Only on desktop - Optimized with motion values */}
      {!isMobile && (
        <>
          <motion.div
            className="fixed w-6 h-6 rounded-full bg-primary/30 pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
              left: -12,
              top: -12,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
            style={{
              x: mouseX,
              y: mouseY,
              left: -4,
              top: -4,
            }}
          />
        </>
      )}

      <section 
        ref={sectionRef}
        className="hero-section relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0a0a0a] to-dark" />
          
          {/* Animated gradient orbs - Optimized with will-change */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full filter blur-[100px]"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-purple/20 rounded-full filter blur-[80px]"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating particles - Reduced to 10 for better performance */}
          {[...Array(10)].map((_, i) => {
            const randomLeft = Math.random() * 100;
            const randomTop = Math.random() * 100;
            const randomDuration = 3 + Math.random() * 2;
            const randomDelay = Math.random() * 2;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full particle-optimized"
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                  willChange: 'transform, opacity',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </div>

        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[85vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 space-y-8 mt-10 md:mt-0"
              data-parallax
            >
              {/* Designation with Typewriter */}
              <div>
                <motion.h2 
                  className="text-xl md:text-2xl font-medium mb-2 text-gray-300"
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayText}
                  <span className="animate-cursor text-primary">|</span>
                </motion.h2>
                
                {/* Name Section with Gradient */}
                <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                    Hello, I'm
                  </span>
                  <br />
                  <motion.span 
                    className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,220,130,0.5)] inline-block"
                  >
                    {personalInfo.name}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{
                        x: ['-100%', '100%', '-100%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{
                        mixBlendMode: 'overlay',
                        willChange: 'transform',
                      }}
                    />
                  </motion.span>
                </h1>
              </div>

              {/* Introduction */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 max-w-lg text-lg leading-relaxed"
              >
                I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
              </motion.p>

              {/* Stats Counters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 flex-wrap"
              >
                {stats.map((stat, index) => (
                  <StatCounter key={index} label={stat.label} value={stat.value} suffix={stat.suffix} delay={0.6 + index * 0.1} />
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_0_20px_rgba(0,220,130,0.4)] overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="group relative bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-transparent overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">My Resume</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-colors overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Talk
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      💬
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 pt-4"
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.name);
                  
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors relative group"
                      aria-label={social.name}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <IconComponent size={24} />
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Side - Image and Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/2 flex flex-col justify-center items-center relative gap-8"
              data-parallax
            >
              {/* Floating Tech Icons */}
              {topTechSkills.map((skill, index) => {
                const IconComponent = techIcons[skill.name];
                if (!IconComponent) return null;
                
                const angle = (index / topTechSkills.length) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute z-20"
                    style={{
                      left: '50%',
                      top: '50%',
                      willChange: 'transform',
                      transform: 'translate3d(0, 0, 0)',
                    }}
                    animate={{
                      x: [x, x * 1.1, x],
                      y: [y, y * 1.1, y],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 10 + index * 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    whileHover={{ scale: 1.5, zIndex: 30 }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-xl transition-all" />
                      <div className="relative bg-dark/80 backdrop-blur-sm p-3 rounded-full border border-primary/30 group-hover:border-primary transition-all">
                        <IconComponent className="text-primary" size={28} />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {skill.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Glow effect behind image */}
              <div className="absolute w-64 h-64 bg-primary/30 rounded-full filter blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow z-0" />
              
              {/* Image container with 3D tilt */}
              <div 
                ref={imageRef}
                className="relative z-10 transition-transform duration-300 ease-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative w-80 md:w-[500px] h-auto">
                  <Image
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    }}
                    priority
                  />
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-primary/50"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0,220,130,0.3)',
                        '0 0 40px rgba(0,220,130,0.5)',
                        '0 0 20px rgba(0,220,130,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </div>

              {/* Code Terminal Window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative z-10 w-full max-w-md bg-dark/90 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden shadow-2xl"
                data-parallax
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-dark/50 border-b border-primary/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2">terminal</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm">
                  <div className="text-primary mb-2">
                    <span className="text-green-400">$</span> code
                  </div>
                  <div className="text-gray-300 whitespace-pre-wrap min-h-[80px]">
                    {codeDisplay}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Stat Counter Component
function StatCounter({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay, hasAnimated]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}
