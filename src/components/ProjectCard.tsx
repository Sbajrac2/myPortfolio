
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { comicPanel } from '@/lib/animations';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  tools, 
  githubUrl, 
  demoUrl,
  index 
}: ProjectCardProps) => {
  // Alternate card styles for visual interest
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={comicPanel}
      className={`manga-panel ${isEven ? '' : 'manga-panel-alt'} p-6 relative overflow-hidden`}
    >
      {/* Comic chapter label */}
      <div className={`absolute ${isEven ? '-top-3 -left-3' : '-top-3 -right-3'} bg-manga-secondary text-white px-3 py-1 transform ${isEven ? 'rotate-3' : '-rotate-3'} shadow-md`}>
        <span className="font-manga text-sm">CHAPTER {index + 1}</span>
      </div>
      
      <div className="mt-4">
        <h3 className="font-manga text-2xl text-manga-primary dark:text-white">
          {title}
        </h3>
        
        <p className="text-manga-secondary font-semibold mt-1">
          {subtitle}
        </p>
        
        <p className="mt-4 text-foreground/90 leading-relaxed">
          {description}
        </p>
        
        {/* Tools used */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <span 
              key={i} 
              className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="mt-6 flex items-center space-x-4">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-manga-secondary transition"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-manga-secondary transition"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
