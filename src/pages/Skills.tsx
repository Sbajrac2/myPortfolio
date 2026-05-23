import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "React Native", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["REST APIs", "Node.js", "Express.js", "Flask", "Authentication", "OAuth"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS ECS", "Docker", "Git", "GitHub", "Postman", "Vercel"],
  },
  {
    title: "AI & Data",
    skills: ["LLM APIs", "Gemini AI", "OpenAI API", "MongoDB", "Supabase", "Data Pipelines"],
  },
  {
    title: "Other Strengths",
    skills: ["Debugging", "Testing", "Agile", "Leadership", "Event Planning", "Public Speaking"],
  },
];

const Skills = () => {
  return (
    <Layout>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="manga-text text-3xl md:text-5xl mb-4 text-manga-primary dark:text-white manga-shadow">
            SKILLS
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/90">
            Technologies, tools, and strengths I use to build full-stack, AI, and accessible software projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="manga-panel p-6 bg-[#f5e7d3] dark:bg-[#4a372a]"
            >
              <h3 className="manga-text text-2xl mb-4 text-[#3d2914] dark:text-[#f5e7d3]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#8a5d3b] text-white text-sm shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;