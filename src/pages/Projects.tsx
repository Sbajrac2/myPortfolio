
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { staggerContainer } from '@/lib/animations';

const projects = [
  {
    title: "AI for Accessible Education",
    subtitle: "AI powered Adaptive Learning Platform",
    description: "An advanced adaptive learning platform that customizes courses based on the user’s personality using the RAISEC model. It delivers dynamic lessons, quizzes, and assessments that evolve with each learner, ensuring a personalized and engaging educational experience.",
    tools: ["React.js", "TailwindCSS", "GoLang", "MongoDB", "Google OAuth","Vercel"],
    githubUrl: "https://github.com/Sbajrac2/AI-for-Accessible-Education",
    demoUrl: "https://letsstudyai.vercel.app/",
  },
  {
    title: "Chhitto",
    subtitle: "AI Agentic Voice Assistant for Small Businesses.",
    description: "An AI-powered platform offering voice assistants for customer service and a dynamic inventory management system tailored to the specific needs of small businesses. This solution streamlines operations, enhances customer interactions, and provides real-time inventory tracking for optimal efficiency.",
    tools: ["Express.js","Supabase", "OpenAI Realtime API", "Twillio", "Vercel"],
    githubUrl: "https://github.com/Sbajrac2/Chhitto-Webapp",
    demoUrl: "https://chhitto.vercel.app/",
  },

  {
    title: "Machine Operation Data Interpretation Tool 2.0",
    subtitle: "MODIT 2.0",
    description: "A web-based tool developed to enhance efficiency on production lines by allowing engineers to monitor machine activity, interpret operational data, and reduce downtime.",
    tools: ["JavaScript", "Python", "CSS", "Git", "Dash", "Flask"],
    githubUrl: "https://github.com/nidhip26/MODIT2.0",
    demoUrl: undefined,
  },
  
  {
    title: "CapitalRewards",
    subtitle: "Maximizing CreditCard Benefits",
    description: "A mobile-optimized web application for centralizing all your credit cards in one digital wallet, track rewards, offers, and benefits, and find the best card for every purchase.",
    tools: ["React Native", "Express.js", "MongoDB", "PWA"],
    githubUrl: "https://github.com/Sbajrac2/capitalrewards",
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
