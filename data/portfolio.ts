import { Project, Skill, Service, SocialLink, Education } from '@/types';

export const personalInfo = {
  name: 'Shohaib Islam',
  designation: 'Full Stack Developer',
  email: 'sohaibislam303@gmail.com',
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
  introduction: "Hello! I'm Shohaib Islam, an aspiring full stack developer who enjoys turning ideas into real and useful websites",
  
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
    cgpa: '3.69 (Current)',
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
    graduationYear: '2020',
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
    name: 'BookFlix - Online Library Management System',
    description: 'BookFlix is a modern, full-stack library management system that digitizes the traditional library experience.',
    briefDescription: 'It enables libraries to manage their collections, members, and operations entirely online while providing members with a seamless experience to browse, reserve, borrow books, and manage their accounts. The platform features role-based access control for members, librarians, and administrators, automated fine calculations, subscription management, and real-time notifications',
    image: '/images/projects/bookflix.png',
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://bookfiix.vercel.app/',
    githubLink: 'https://github.com/sohaibislam45/BookFlix',
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
    name: 'ClubSphere - community management platform',
    description: 'ClubSphere is a comprehensive community management platform that enables users to discover, join, and manage clubs and events.',
    briefDescription: 'The platform supports three distinct user roles—Administrators, Club Managers, and Members—each with tailored features and dashboards.',
    image: '/images/projects/clubsphere.png',
    techStack: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Sweetalert2', 'Stripe API'],
    liveLink: 'https://clubsphere-c7f59.web.app',
    githubLink: 'https://github.com/sohaibislam45/ClubSphere-frontend',
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
    name: 'VehicleHub - Vehicle Management and Rental Platform',
    description: 'VehicleHub is a comprehensive vehicle management and rental platform designed to streamline the experience of listing, exploring, and booking vehicles.',
    briefDescription: 'VehicleHub serves as a bridge between vehicle owners and users looking for premium transportation solutions, offering a seamless, secure, and visually stunning experience.',
    image: '/images/projects/vehiclehub.png',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'JWT'],
    liveLink: 'https://vehicle-hub-beta.vercel.app/',
    githubLink: 'https://github.com/sohaibislam45/VehicleHub',
    challenges: [
      'Hydration Errors in Next.js',
      'Complex Filtering Logic',
      'Vercel Deployment Issues',
      'Implementing secure authentication system',
    ],
    futureImprovements: [
      'Comprehensive Unit and Integration tests',
      'Implement Socket.io to allow direct communication between renters and owners',
      'Use ML to suggest vehicles based on user booking history and preferences',
      'Port the functionality to a React Native mobile app for on-the-go booking',
    ],
  },
];

