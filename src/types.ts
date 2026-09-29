export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string | null;
  githubUrl: string;
  image: string;
  featured?: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools' | 'concepts';
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category?: string;
  verificationUrl?: string | null;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description: string;
  coursework: string[];
}

export interface InternshipItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}
