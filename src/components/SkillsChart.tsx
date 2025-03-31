
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Javascript', level: 90 },
  { name: 'Python', level: 90},
  { name: 'C', level: 70 },
  { name: 'C++', level: 80 },
  { name: 'Go', level: 90 },
  { name: 'Docker', level: 80 },
  { name: 'Supabase', level: 75},
  { name: 'AWS', level: 95 },
  { name: 'Google Cloud', level: 85 },
  { name: 'Postman', level: 80 },
  { name: 'MongoDB', level: 85 },
  { name: 'Microservices', level: 75 },
  { name: 'Figma', level: 70 },
  { name: 'Notion', level: 90 },
  { name: 'Framer', level: 85 },
];

// Split skills into two columns
const firstColumn = skills.slice(0, Math.ceil(skills.length / 2));
const secondColumn = skills.slice(Math.ceil(skills.length / 2));

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <motion.div 
      variants={fadeUp}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-code">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-manga-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillsChart = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="manga-panel p-6"
    >
      <h3 className="font-manga text-2xl mb-6 text-manga-primary dark:text-white">TECHNICAL BLUEPRINT</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {firstColumn.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div>
          {secondColumn.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsChart;
