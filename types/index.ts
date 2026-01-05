export interface Project {
  id: string;
  name: string;
  description: string;
  briefDescription: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  challenges: string[];
  futureImprovements: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  cgpa?: string;
  gpa?: string;
  coursework?: string[];
  achievements?: string[];
}

