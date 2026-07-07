export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
  gpa?: string;
  scholarship?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skillsVerified: string[];
  courseImage?: string;
  verificationUrl?: string;
}

export interface AcademicProject {
  title: string;
  period: string;
  technologies: string[];
  description: string;
  contributions: string[];
  category: 'networking' | 'embedded' | 'software' | 'communications';
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Proficient' | 'Intermediate' | 'Foundational'; tags: string[] }[];
}
