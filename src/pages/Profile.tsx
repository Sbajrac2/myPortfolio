
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SkillsChart from '@/components/SkillsChart';
import { staggerContainer, fadeUp, panelFlip } from '@/lib/animations';
import { Github, Linkedin, Mail, BookOpen, Globe, Award } from 'lucide-react';

const Profile = () => {
  return (
    <Layout>
      <div id="top" className="page-container">
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Profile Sidebar */}
          <motion.div variants={panelFlip} className="md:col-span-1">
            <div className="manga-panel p-6 sticky top-24">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 border-4 border-manga-secondary rounded-lg overflow-hidden mb-6 shadow-xl transform -rotate-2">
                  <img 
                    src="/lovable-uploads/48bf9ca2-84ee-4fd5-ba53-710c3f22d503.png" 
                    alt="Shrishtika Bajracharya" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="manga-text text-2xl text-center text-manga-primary dark:text-white mb-2">
                  SHRISHTIKA BAJRACHARYA
                </h2>
                
                <p className="text-manga-secondary text-center font-semibold mb-6">
                  Aspiring Software Engineer
                </p>
                
                <div className="w-full space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-manga-secondary flex-shrink-0" />
                    <span>SUNY Oswego</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-manga-secondary flex-shrink-0" />
                    <span>Computer Science Undergrad</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-manga-secondary flex-shrink-0" />
                    <span>Full Stack Developer</span>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center space-x-4 w-full">
                  <a 
                    href="https://github.com/Sbajrac2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-manga-secondary hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/shrishtika-bajracharya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-manga-secondary hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                  <a 
                    href="mailto:shrishtika.vajra@gmail.com"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-manga-secondary hover:text-white transition"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <motion.div variants={fadeUp} className="manga-panel p-6">
              <h2 className="font-manga text-2xl mb-4 text-manga-primary dark:text-white">ABOUT ME</h2>
              <div className="space-y-4 text-foreground/90">
                <p>
                  As a Computer Science undergrad at SUNY Oswego, I am passionate about creating technology that makes a positive impact. I enjoy the challenge of solving complex problems with elegant solutions.
                </p>
                <p>
                  My journey in software engineering began with a fascination for how digital tools could transform the way we work and live. This curiosity led me to dive into full-stack development, where I discovered my passion for building end-to-end applications.
                </p>
                <p>
                  I'm particularly interested in creating systems that are not just functional, but also intuitive and helpful for users. My experience ranges from web applications to data processing tools, with a focus on improving efficiency and user experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <SkillsChart />
            </motion.div>
            
            <motion.div variants={fadeUp} className="manga-panel p-6">
              <h2 className="font-manga text-2xl mb-4 text-manga-primary dark:text-white">EDUCATION</h2>
              <div className="relative border-l-2 border-manga-secondary pl-6 ml-3 space-y-8 py-2">
                <div className="relative">
                  <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-manga-secondary"></div>
                  <h3 className="text-lg font-bold">Computer Science, B.S.</h3>
                  <p className="text-manga-secondary">SUNY Oswego</p>
                  <p className="text-sm text-foreground/70">Expected Graduation: 2025</p>
                  <p className="mt-2">Focusing on software engineering and full-stack development. Participating in various hackathons and coding challenges.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Profile;
