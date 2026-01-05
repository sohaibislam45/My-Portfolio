import { Project, Skill, Service, SocialLink, Education } from '@/types';

export const personalInfo = {
  name: 'Shohaib Islam',
  designation: 'Full Stack Developer',
  email: 'sohaibislam45@gmail.com',
  phone: '01968017308',
  whatsapp: '01774667690',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sohaibislam45',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shohaib-islam',
    icon: 'FaLinkedin',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sohaibislam45',
    icon: 'FaFacebook',
  },
];

export const aboutContent = {
  introduction: "Hello! I'm Sohaib Islam, an aspiring full stack developer who enjoys turning ideas into real and useful websites",
  
  programmingJourney: "I started learning programming out of curiosity about how websites work. Over time, I practiced regularly, built real projects, and learned modern web technologies. This journey helped me improve my problem-solving skills and grow as a developer",
  
  workPreferences: "I enjoy working on projects where I can build clean, easy-to-use web applications. I like solving problems, learning new tools, and working on full-stack projects, especially where I can add smart or AI-based features",
  
  hobbies: "Outside of coding, I enjoy sports and gaming, which help me relax and stay focused",
  
  personality: "I believe in continuous self-improvement, consistency, and perseverance when facing challenges. I'm curious, hardworking, and I don't give up easily. I like learning new things and improving myself step by step",
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'IUBAT',
    location: 'Uttara sector 10, Dhaka',
    graduationYear: '2024',
    cgpa: '3.69',
    coursework: [
      'Web Development',
      'Data Structures',
      'Algorithms',
      'Database Systems',
      'Software Engineering',
      'Computer Networks',
    ],
    achievements: ['Participated in a hackathon at CUET, where I learned and used a new tech stack within a short time, improving my fast-learning and problem-solving skills. Actively practiced modern web development technologies like React, Next.js, and Node.js alongside academic studies.'],
  },
  {
    degree: 'HSC',
    institution: 'Sherwood International Public School and College',
    location: 'Sherpur, Bogura',
    graduationYear: '2019',
    gpa: '5.00',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Material-UI', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'JWT Authentication', category: 'backend' },
  
  // Tools & Others
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'Firebase', category: 'tools' },
];

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Creating responsive and interactive websites using modern technologies and best practices.',
    icon: 'FaCode',
  },
  {
    title: 'Full Stack Solutions',
    description: 'Building end-to-end applications with robust backend systems and intuitive frontend interfaces.',
    icon: 'FaServer',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing clean, user-friendly interfaces that provide exceptional user experiences.',
    icon: 'FaPalette',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'BookHub - Library Management System',
    description: 'A comprehensive full-stack web application for managing library books, user accounts, and book lending operations with an intuitive admin dashboard. The system provides seamless book inventory management, user authentication, and automated lending workflows.',
    briefDescription: 'A full-stack web application for managing library books, user accounts, and book lending operations with an intuitive admin dashboard.',
    image: '/images/projects/bookhub.jpg',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://bookhub-demo.com',
    githubLink: 'https://github.com/shohaibislam/bookhub',
    challenges: [
      'Managing complex state for book inventory',
      'Implementing secure user authentication',
      'Creating responsive design for all devices',
    ],
    futureImprovements: [
      'Add book recommendation system using AI',
      'Implement advanced search and filtering',
      'Add book reviews and ratings feature',
      'Export reports functionality',
    ],
  },
  {
    id: '2',
    name: 'EventFlow - Membership & Event Manager',
    description: 'A comprehensive platform for managing memberships, organizing events, and tracking attendance with real-time updates and notifications. The system enables organizations to efficiently handle member registrations, event planning, and communication.',
    briefDescription: 'A comprehensive platform for managing memberships, organizing events, and tracking attendance with real-time updates and notifications.',
    image: '/images/projects/eventflow.jpg',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Material-UI', 'Stripe API'],
    liveLink: 'https://eventflow-demo.com',
    githubLink: 'https://github.com/shohaibislam/eventflow',
    challenges: [
      'Real-time data synchronization',
      'Payment integration for membership fees',
      'Scalable event management system',
    ],
    futureImprovements: [
      'Add calendar integration',
      'Implement email notifications',
      'Create mobile app version',
      'Add analytics dashboard',
    ],
  },
  {
    id: '3',
    name: 'ConnectHub - Social Media Platform',
    description: 'A modern social media application with features like posts, likes, comments, user profiles, and real-time messaging for connecting people. Built with scalable architecture to handle large-scale user interactions and content sharing.',
    briefDescription: 'A modern social media application with features like posts, likes, comments, user profiles, and real-time messaging for connecting people.',
    image: '/images/projects/connecthub.jpg',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'JWT'],
    liveLink: 'https://connecthub-demo.com',
    githubLink: 'https://github.com/shohaibislam/connecthub',
    challenges: [
      'Real-time messaging with Socket.io',
      'Image upload and storage optimization',
      'Managing large-scale user interactions',
      'Implementing secure authentication system',
    ],
    futureImprovements: [
      'Add video sharing functionality',
      'Implement AI-powered content recommendations',
      'Add story feature like Instagram',
      'Create algorithm for personalized feed',
    ],
  },
];

