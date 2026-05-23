
// import { motion } from 'framer-motion';
// import Layout from '@/components/Layout';
// import ProjectCard from '@/components/ProjectCard';
// import { staggerContainer } from '@/lib/animations';

// const projects = [
//   {
//     title: "AI for Accessible Education",
//     subtitle: "AI Powered Adaptive Learning Platform",
//     description:
//       "An advanced adaptive learning platform that customizes courses based on the user’s personality using the RAISEC model. It delivers dynamic lessons, quizzes, and assessments that evolve with each learner for a more personalized educational experience.",
//     tools: [
//       "React.js",
//       "TailwindCSS",
//       "GoLang",
//       "MongoDB",
//       "Google OAuth",
//       "Vercel"
//     ],
//     githubUrl: "https://github.com/Sbajrac2/AI-for-Accessible-Education",
//     demoUrl: "https://letsstudyai.vercel.app/",
//   },

//   {
//     title: "Chhitto",
//     subtitle: "AI Agentic Voice Assistant for Small Businesses",
//     description:
//       "An AI-powered platform offering voice assistants for customer service and a dynamic inventory management system tailored for small businesses. The platform streamlines operations, improves customer interactions, and enables real-time inventory tracking.",
//     tools: [
//       "Express.js",
//       "Supabase",
//       "OpenAI Realtime API",
//       "Twilio",
//       "Vercel"
//     ],
//     githubUrl: "https://github.com/Sbajrac2/Chhitto-Webapp",
//     demoUrl: "https://chhitto.vercel.app/",
//   },

//   {
//     title: "AllyCo",
//     subtitle: "Voice-First Allyship Practice App",
//     description:
//       "A voice-powered web app for practicing allyship in realistic social situations. Users choose scenarios, respond verbally, and receive AI-generated coaching feedback focused on communication, empathy, and confidence.",
//     tools: [
//       "Next.js",
//       "Gemini AI",
//       "ElevenLabs",
//       "Vercel"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: "PASTE_DEMO_LINK_HERE",
//   },

//   {
//     title: "Chhaya",
//     subtitle: "Mental Health Check-In App",
//     description:
//       "A calming mental health reflection app designed around intentional emotional check-ins. Users can track mood, energy, and reflections while viewing personalized emotional insights through adaptive themes and guided experiences.",
//     tools: [
//       "React.js",
//       "JavaScript",
//       "UI/UX Design"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: "PASTE_DEMO_LINK_HERE",
//   },

//   {
//     title: "Satori Town",
//     subtitle: "Educational Game for Children with ASD",
//     description:
//       "A social learning game designed to help children with Autism Spectrum Disorder practice real-world social skills through interactive scenarios, rewards, and guided storytelling in a safe and engaging environment.",
//     tools: [
//       "Unity",
//       "Figma",
//       "Tiled",
//       "Game Design"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: "PASTE_DEMO_LINK_HERE",
//   },

//   {
//     title: "EmoSense",
//     subtitle: "Interactive Emotional Learning App",
//     description:
//       "An accessible application designed to support emotional recognition and learning for children with Autism Spectrum Disorder through interactive lessons, progress tracking, and customizable accessibility features.",
//     tools: [
//       "React.js",
//       "Frontend Development",
//       "Accessibility Design"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: "PASTE_DEMO_LINK_HERE",
//   },

//   {
//     title: "Be Native",
//     subtitle: "AI-Powered Language Learning Platform",
//     description:
//       "An immersive language learning platform for practicing conversations in virtual environments such as cafes, museums, and city streets through interactive roleplay experiences and AI-driven communication.",
//     tools: [
//       "Next.js",
//       "TailwindCSS",
//       "AI Integration",
//       "Responsive Design"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: "PASTE_DEMO_LINK_HERE",
//   },

//   {
//     title: "Quotable",
//     subtitle: "Quote & Reading Platform",
//     description:
//       "A modern web platform for discovering and interacting with curated quotes. Built in collaboration with IBM stakeholders, the project focused on responsive UI, API integration, backend services, and deployment workflows.",
//     tools: [
//       "React.js",
//       "REST APIs",
//       "Docker",
//       "Playwright"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: undefined,
//   },

//   {
//     title: "Machine Operation Data Interpretation Tool 2.0",
//     subtitle: "MODIT 2.0",
//     description:
//       "A production monitoring platform developed for Marquardt Switches Inc. to monitor machine activity, interpret operational data, predict downtime, and improve maintenance planning using real-time analytics.",
//     tools: [
//       "JavaScript",
//       "Python",
//       "Dash",
//       "Flask",
//       "CSS",
//       "Git"
//     ],
//     githubUrl: "https://github.com/nidhip26/MODIT2.0",
//     demoUrl: undefined,
//   },

//   {
//     title: "Weather API & Cloud Deployment",
//     subtitle: "Cloud-Based Weather Data Service",
//     description:
//       "A scalable Go-based REST API serving live weather data. The application was containerized with Docker, deployed on AWS ECS behind a load balancer, and automated through CI/CD pipelines using AWS services.",
//     tools: [
//       "GoLang",
//       "Docker",
//       "AWS ECS",
//       "CodeBuild",
//       "CodePipeline"
//     ],
//     githubUrl: "PASTE_GITHUB_LINK_HERE",
//     demoUrl: undefined,
//   },

//   {
//     title: "CapitalRewards",
//     subtitle: "Maximizing Credit Card Benefits",
//     description:
//       "A mobile-optimized web application that centralizes multiple credit cards into one digital wallet while helping users track rewards, offers, and determine the best card to use for purchases.",
//     tools: [
//       "React Native",
//       "Express.js",
//       "MongoDB",
//       "PWA"
//     ],
//     githubUrl: "https://github.com/Sbajrac2/capitalrewards",
//     demoUrl: undefined,
//   }
// ];

// const Projects = () => {
//   return (
//     <Layout>
//       <div className="page-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="manga-text text-3xl md:text-5xl lg:text-6xl mb-4 text-manga-primary dark:text-white manga-shadow">
//             MISSION ARCHIVE
//           </h2>
//           <p className="text-lg max-w-2xl mx-auto text-foreground/90">
//             Each project is a chapter in my developer journey. Browse through my key missions and the technologies I've mastered along the way.
//           </p>
//         </motion.div>
        
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
//         >
//           {projects.map((project, index) => (
//             <ProjectCard 
//               key={index}
//               title={project.title}
//               subtitle={project.subtitle}
//               description={project.description}
//               tools={project.tools}
//               githubUrl={project.githubUrl}
//               demoUrl={project.demoUrl}
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </Layout>
//   );
// };

// export default Projects;

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { staggerContainer } from "@/lib/animations";

export const projects = [
  {
    slug: "ai-accessible-education",
    category: "AI",
    title: "AI for Accessible Education",
    subtitle: "AI Powered Adaptive Learning Platform",
    description:
      "An advanced adaptive learning platform that customizes courses based on the user’s personality using the RAISEC model. It delivers dynamic lessons, quizzes, and assessments that evolve with each learner for a more personalized educational experience.",
    tools: ["React.js", "TailwindCSS", "GoLang", "MongoDB", "Google OAuth", "Vercel"],
    githubUrl: "https://github.com/Sbajrac2/AI-for-Accessible-Education",
    demoUrl: "https://letsstudyai.vercel.app/",
  },
  {
    slug: "chhitto",
    category: "AI",
    title: "Chhitto",
    subtitle: "AI Agentic Voice Assistant for Small Businesses",
    description:
      "An AI-powered platform offering voice assistants for customer service and a dynamic inventory management system tailored for small businesses. The platform streamlines operations, improves customer interactions, and enables real-time inventory tracking.",
    tools: ["Express.js", "Supabase", "OpenAI Realtime API", "Twilio", "Vercel"],
    githubUrl: "https://github.com/Sbajrac2/Chhitto-Webapp",
    demoUrl: "https://chhitto.vercel.app/",
  },
  {
    slug: "allyco",
    category: "AI",
    title: "AllyCo",
    subtitle: "Voice-First Allyship Practice App",
    description:
      "A voice-powered web app for practicing allyship in realistic social situations. Users choose scenarios, respond verbally, and receive AI-generated coaching feedback focused on communication, empathy, and confidence.",
    tools: ["Next.js", "Gemini AI", "ElevenLabs", "Vercel"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: "PASTE_DEMO_LINK_HERE",
  },
  {
    slug: "chhaya",
    category: "Web",
    title: "Chhaya",
    subtitle: "Mental Health Check-In App",
    description:
      "A calming mental health reflection app designed around intentional emotional check-ins. Users can track mood, energy, and reflections while viewing personalized emotional insights through adaptive themes and guided experiences.",
    tools: ["React.js", "JavaScript", "UI/UX Design"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: "PASTE_DEMO_LINK_HERE",
  },
  {
    slug: "satori-town",
    category: "Game",
    title: "Satori Town",
    subtitle: "Educational Game for Children with ASD",
    description:
      "A social learning game designed to help children with Autism Spectrum Disorder practice real-world social skills through interactive scenarios, rewards, and guided storytelling in a safe and engaging environment.",
    tools: ["Unity", "Figma", "Tiled", "Game Design"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: "PASTE_DEMO_LINK_HERE",
  },
  {
    slug: "emosense",
    category: "Accessibility",
    title: "EmoSense",
    subtitle: "Interactive Emotional Learning App",
    description:
      "An accessible application designed to support emotional recognition and learning for children with Autism Spectrum Disorder through interactive lessons, progress tracking, and customizable accessibility features.",
    tools: ["React.js", "Frontend Development", "Accessibility Design"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: "PASTE_DEMO_LINK_HERE",
  },
  {
    slug: "be-native",
    category: "AI",
    title: "Be Native",
    subtitle: "AI-Powered Language Learning Platform",
    description:
      "An immersive language learning platform for practicing conversations in virtual environments such as cafes, museums, and city streets through interactive roleplay experiences and AI-driven communication.",
    tools: ["Next.js", "TailwindCSS", "AI Integration", "Responsive Design"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: "PASTE_DEMO_LINK_HERE",
  },
  {
    slug: "quotable",
    category: "Web",
    title: "Quotable",
    subtitle: "Quote & Reading Platform",
    description:
      "A modern web platform for discovering and interacting with curated quotes. Built in collaboration with IBM stakeholders, the project focused on responsive UI, API integration, backend services, and deployment workflows.",
    tools: ["React.js", "REST APIs", "Docker", "Playwright"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: undefined,
  },
  {
    slug: "modit",
    category: "Web",
    title: "Machine Operation Data Interpretation Tool 2.0",
    subtitle: "MODIT 2.0",
    description:
      "A production monitoring platform developed for Marquardt Switches Inc. to monitor machine activity, interpret operational data, predict downtime, and improve maintenance planning using real-time analytics.",
    tools: ["JavaScript", "Python", "Dash", "Flask", "CSS", "Git"],
    githubUrl: "https://github.com/nidhip26/MODIT2.0",
    demoUrl: undefined,
  },
  {
    slug: "weather-api",
    category: "Cloud",
    title: "Weather API & Cloud Deployment",
    subtitle: "Cloud-Based Weather Data Service",
    description:
      "A scalable Go-based REST API serving live weather data. The application was containerized with Docker, deployed on AWS ECS behind a load balancer, and automated through CI/CD pipelines using AWS services.",
    tools: ["GoLang", "Docker", "AWS ECS", "CodeBuild", "CodePipeline"],
    githubUrl: "PASTE_GITHUB_LINK_HERE",
    demoUrl: undefined,
  },
  {
    slug: "capitalrewards",
    category: "Mobile",
    title: "CapitalRewards",
    subtitle: "Maximizing Credit Card Benefits",
    description:
      "A mobile-optimized web application that centralizes multiple credit cards into one digital wallet while helping users track rewards, offers, and determine the best card to use for purchases.",
    tools: ["React Native", "Express.js", "MongoDB", "PWA"],
    githubUrl: "https://github.com/Sbajrac2/capitalrewards",
    demoUrl: undefined,
  },
];

const categories = ["All", "AI", "Web", "Accessibility", "Cloud", "Mobile", "Game"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            Each project is a chapter in my developer journey. Filter through my missions by type.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border font-semibold transition ${
                activeCategory === category
                  ? "bg-manga-secondary text-white border-manga-secondary"
                  : "bg-secondary hover:bg-manga-secondary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
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