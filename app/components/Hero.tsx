'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
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
  { label: 'Skills', value: 10, suffix: '+' },
  { label: 'Passion', value: 100, suffix: '%' },
];

// Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  onClick, 
  download, 
  className 
}: { 
  children: React.ReactNode; 
  href: string; 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  download?: boolean;
  className: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
    if (onClick) onClick(e);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          animate={{
            width: 200,
            height: 200,
            x: -100,
            y: -100,
            opacity: [0.5, 0],
          }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.a>
  );
}

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
                
                {/* Name Section with Gradient and Character Reveal */}
                <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hello, I&apos;m
                  </motion.span>
                  <br />
                  <motion.span 
                    className="relative inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="relative z-10 text-white drop-shadow-[0_0_30px_rgba(0,220,130,0.5)]">
                      {personalInfo.name.split('').map((char, index) => (
                        <motion.span
                          key={`${char}-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.5 + index * 0.04,
                            ease: [0.6, -0.05, 0.01, 0.99],
                          }}
                          className="inline-block"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </span>
                    {/* Gradient overlay effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent pointer-events-none"
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {personalInfo.name}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
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

              {/* Introduction with word-by-word reveal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-400 max-w-lg text-lg leading-relaxed"
              >
                {`I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.`.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.9 + index * 0.03,
                    }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
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

              {/* Buttons with Magnetic Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_0_20px_rgba(0,220,130,0.4)] overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </MagneticButton>
                <MagneticButton
                  href="/resume.pdf"
                  download
                  className="group relative bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-transparent overflow-hidden"
                >
                  <span className="relative z-10">My Resume</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-colors overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let&apos;s Talk
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      💬
                    </motion.span>
                  </span>
                </MagneticButton>
              </motion.div>

              {/* Social Icons with Enhanced Animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
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
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                      }}
                      transition={{ 
                        delay: 1.5 + index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      <IconComponent size={24} className="relative z-10" />
                      <motion.span 
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
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
              {/* Connecting Ring - Subtle arc behind image */}
              <motion.div
                className="absolute z-5"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '560px',
                  height: '560px',
                  marginLeft: '-280px',
                  marginTop: '-280px',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <svg className="w-full h-full" viewBox="0 0 560 560">
                  <circle
                    cx="280"
                    cy="280"
                    r="270"
                    fill="none"
                    stroke="rgba(0, 220, 130, 0.1)"
                    strokeWidth="1"
                    strokeDasharray="5, 10"
                  />
                </svg>
              </motion.div>

              {/* Tech Icons - Vertical Stack on Left Side */}
              <motion.div
                className="absolute -left-7 -top-7 z-8 flex flex-col gap-4 px-4 pt-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {topTechSkills.map((skill, index) => {
                  const IconComponent = techIcons[skill.name];
                  if (!IconComponent) return null;

                  return (
                    <motion.div
                      key={skill.name}
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, x: -50, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        // Floating effect - each icon has different timing
                        y: [
                          0,
                          -15 - index * 2,
                          0,
                          15 + index * 2,
                          0,
                        ],
                        // Subtle rotation
                        rotate: [
                          0,
                          -2 + (index % 3) * 2,
                          0,
                          2 - (index % 3) * 2,
                          0,
                        ],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                        ease: 'easeOut',
                        // Floating animation
                        y: {
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2,
                        },
                        rotate: {
                          duration: 4 + index * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.15,
                        },
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        x: 10,
                        y: 0,
                        rotate: 0,
                        zIndex: 20,
                      }}
                      style={{
                        willChange: 'transform, opacity',
                      }}
                    >
                      {/* Pulsing glow effect */}
                      <motion.div 
                        className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:blur-xl transition-all"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.1,
                        }}
                      />
                      {/* Icon container with border glow */}
                      <motion.div 
                        className="relative bg-dark/90 backdrop-blur-sm p-3 rounded-full border-2 border-primary/40 group-hover:border-primary transition-all overflow-hidden"
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(0,220,130,0.2)',
                            '0 0 20px rgba(0,220,130,0.4)',
                            '0 0 10px rgba(0,220,130,0.2)',
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.15,
                        }}
                        whileHover={{
                          boxShadow: '0 0 30px rgba(0,220,130,0.6)',
                        }}
                      >
                        {/* Shimmer effect on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 0.6 },
                          }}
                        />
                        <IconComponent className="text-primary relative z-10" size={24} />
                      </motion.div>
                      {/* Tooltip - appears on right side */}
                      <motion.div 
                        className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-dark/90 px-3 py-1.5 rounded border border-primary/30 z-30 pointer-events-none"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                        {/* Arrow pointing to icon */}
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-primary/30 border-b-4 border-b-transparent" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

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

// Stat Counter Component with Bounce Animation
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
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="text-3xl font-bold text-primary"
        key={count}
        initial={{ scale: 1.2, y: -10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      >
        {count}{suffix}
      </motion.div>
      <motion.div
        className="text-xs text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
