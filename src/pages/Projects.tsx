
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { staggerContainer } from '@/lib/animations';

const projects = [
  {
    title: "Machine Operation Data Interpretation Tool 2.0",
    subtitle: "MODIT 2.0",
    description: "A web-based tool developed to enhance efficiency on production lines by allowing engineers to monitor machine activity, interpret operational data, and reduce downtime.",
    tools: ["JavaScript", "Python", "CSS", "Git", "Dash", "Flask"],
    githubUrl: "https://github.com/Sbajrac2/MODIT-2.0",
    demoUrl: undefined,
  },
  {
    title: "AI for Accessible Education",
    subtitle: "Adaptive Learning Platform",
    description: "An adaptive learning platform that personalizes courses based on the user's personality (RAISEC model). Dynamic lessons, quizzes, and assessments tailored to each learner.",
    tools: ["React.js", "TailwindCSS", "GoLang", "MongoDB", "Google OAuth", "GitHub", "Vercel"],
    githubUrl: "https://github.com/Sbajrac2/AI-for-Accessible-Education",
    demoUrl: "https://lets-study-eight.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Manga Developer Showcase",
    description: "My personal portfolio website with a manga-inspired design. Features interactive elements, comic-style layouts, and seamless animations to showcase my projects and skills.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
    githubUrl: "https://github.com/Sbajrac2/Personal-Portfolio",
    demoUrl: undefined,
  },
  {
    title: "Smart Campus Navigator",
    subtitle: "University Wayfinding App",
    description: "A mobile-optimized web application for helping new students navigate university campuses. Features interactive maps, class schedule integration, and optimal route planning.",
    tools: ["React Native", "Express.js", "MongoDB", "Google Maps API", "PWA"],
    githubUrl: "https://github.com/Sbajrac2/campus-navigator",
    demoUrl: undefined,
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="manga-text text-3xl md:text-5xl lg:text-6xl mb-4 text-manga-primary dark:text-white manga-shadow">
            MISSION ARCHIVE
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/90">
            Each project is a chapter in my developer journey. Browse through my key missions and the technologies I've mastered along the way.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tools={project.tools}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Projects;
