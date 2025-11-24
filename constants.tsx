import React from 'react';
import { Project, ExperienceItem, SkillCategory, NavLink } from './types';
import { Code, Server, Database, Layout, Smartphone, Cpu } from 'lucide-react';

export const PORTFOLIO_OWNER = "Alex Dev";
export const PORTFOLIO_ROLE = "Senior Full Stack Engineer";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Framer Motion"],
    icon: <Layout className="w-6 h-6 text-brand-400" />
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "GraphQL", "Redis"],
    icon: <Server className="w-6 h-6 text-brand-400" />
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Terraform"],
    icon: <Cpu className="w-6 h-6 text-brand-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Dashboard',
    description: 'A comprehensive analytics dashboard for visualizing real-time cloud infrastructure metrics. Built with D3.js for data visualization and a Go backend for high-throughput data processing.',
    tags: ['React', 'D3.js', 'Go', 'WebSocket'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Gemini Chat Client',
    description: 'An AI-powered chat application leveraging the latest Gemini 2.5 models for multimodal interactions. Features real-time streaming responses and syntax highlighting.',
    tags: ['Next.js', 'Gemini API', 'Tailwind'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'E-Commerce Microservices',
    description: 'A scalable e-commerce backend architecture using event-driven microservices. Handles high concurrency with reliability and fault tolerance.',
    tags: ['Node.js', 'Kafka', 'Docker', 'K8s'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'HealthTrack Mobile',
    description: 'Cross-platform mobile application for tracking fitness metrics and diet. Integrates with wearable APIs.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Software Engineer',
    company: 'TechFlow Solutions',
    period: '2021 - Present',
    description: [
      'Led the migration of a legacy monolith to a microservices architecture, improving deployment frequency by 40%.',
      'Mentored junior developers and established code quality standards across the frontend team.',
      'Architected a real-time collaboration tool used by over 50k daily active users.'
    ],
    skills: ['React', 'Node.js', 'AWS', 'System Design']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2019 - 2021',
    description: [
      'Developed and launched the MVP of the company flagship product within 3 months.',
      'Optimized database queries reducing API latency by 60%.',
      'Implemented automated testing pipelines using Jest and Cypress.'
    ],
    skills: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2017 - 2019',
    description: [
      'Built responsive and accessible user interfaces for various client projects.',
      'Collaborated closely with designers to implement pixel-perfect high-fidelity mockups.',
      'Improved SEO performance for client websites leading to 25% increase in organic traffic.'
    ],
    skills: ['JavaScript', 'HTML/CSS', 'React', 'SEO']
  }
];
