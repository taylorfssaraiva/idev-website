export interface Service {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}