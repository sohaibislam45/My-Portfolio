import { Project, Skill, Service, SocialLink, Education } from '@/types';

export const personalInfo = {
  name: 'Shohaib Islam',
  designation: 'Full Stack Developer',
  email: 'shohaib@example.com',
  phone: '+1 (555) 123-4567',
  whatsapp: '+1 (555) 123-4567',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/shohaibislam',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shohaibislam',
    icon: 'FaLinkedin',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/shohaibislam',
    icon: 'FaFacebook',
  },
];

export const aboutContent = {
  introduction: "Hello! I'm Shohaib Islam, a passionate developer driven by curiosity about how websites work and how code solves real-world problems. My journey started with fundamentals and progressed to modern frameworks like React and Next.js. I've built several projects, including a Book Management System, a Membership & Event Management platform, and a Full Stack Social Media App. Participating in hackathons sharpened my problem-solving and quick-learning skills, helping me grow both technically and mentally as a developer.",
  
  programmingJourney: "My programming journey started with curiosity—curiosity about how websites work behind the scenes and how simple lines of code can solve real-world problems. Over time, that curiosity turned into a strong interest in web development, especially in building interactive and user-friendly applications. I began my journey by learning the fundamentals of programming and web technologies, and gradually moved into modern frameworks like React and Next.js. Along the way, I worked on several projects and challenged myself by participating in hackathons, where I learned new technologies under pressure and strengthened my problem-solving and quick-learning mindset.",
  
  workPreferences: "I enjoy building applications that combine clean design with logical problem-solving—creating simple, well-structured, and impactful solutions. I'm particularly interested in full-stack development and integrating AI-powered features to make applications smarter and more efficient.",
  
  hobbies: "Outside of programming, I enjoy sports and gaming, which keep me active and refreshed. Gaming also helps sharpen my strategic thinking and teamwork skills.",
  
  personality: "I believe in continuous self-improvement, consistency, and perseverance when facing challenges. I'm curious, hardworking, and always eager to learn something new, with the goal of becoming a strong full-stack developer who creates real value through technology.",
};

export const education: Education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Your University Name',
  location: 'City, Country',
  graduationYear: '2024',
  cgpa: 'To be filled',
  coursework: [
    'Web Development',
    'Data Structures',
    'Algorithms',
    'Database Systems',
    'Software Engineering',
    'Computer Networks',
  ],
  achievements: ['To be filled'],
};

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Material-UI', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'JWT Authentication', category: 'backend' },
  
  // Tools & Others
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'Firebase', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Socket.io', category: 'tools' },
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

