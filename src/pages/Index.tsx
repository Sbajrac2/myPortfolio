
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { staggerContainer, comicPanel, fadeUp, dialogueBubble } from '@/lib/animations';

const Index = () => {
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Main comic panel */}
          <motion.div 
            variants={comicPanel}
            className="manga-panel p-6 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f5e7d3 0%, #e8d3b9 100%)"
            }}
          >
            <h1 className="manga-text text-4xl mb-4 text-[#3d2914]">SHRISHTIKA</h1>
            <h2 className="text-xl mb-6 text-[#8a5d3b] font-semibold">Aspiring Software Engineer</h2>
            
            <p className="text-[#3d2914] mb-6 max-w-md">
              Computer Science undergrad at SUNY Oswego. Passionate about tech for building smarter and helpful systems. 
              I enjoy working full stack and solving problems that impact real users.
            </p>
            
            <motion.a
              href="/profile#top"
              variants={fadeUp}
              className="px-6 py-3 bg-[#8a5d3b] text-white rounded font-manga tracking-wide transform transition-transform hover:scale-105 hover:-rotate-1"
            >
              READ MY STORY
            </motion.a>
            
            {/* Comic speech bubble */}
            <motion.div
              variants={dialogueBubble}
              className="absolute top-4 right-4 comic-bubble comic-bubble-right px-4 py-2 bg-white border-2 border-[#3d2914] max-w-[150px]"
            >
              <p className="text-sm font-manga text-[#3d2914]">Welcome to my manga portfolio!</p>
            </motion.div>
          </motion.div>
          
          {/* Second comic panel with image */}
          <motion.div
            variants={comicPanel}
            className="manga-panel-alt aspect-square overflow-hidden relative"
          >
            <img 
              src="/lovable-uploads/6f7a2254-eae0-4c2e-aa69-4456daff9910.png" 
              alt="Shrishtika Coding" 
              className="w-full h-full object-cover"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#3d2914]/80 text-white p-2 font-manga text-center text-sm">
              CHAPTER 1: THE CODER'S JOURNEY BEGINS
            </div>
          </motion.div>
          
          {/* Third comic panel with peace sign photo */}
          <motion.div
            variants={comicPanel}
            className="manga-panel md:col-span-2 p-1 overflow-hidden relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-full">
              <div className="bg-[#e8d3b9] p-4 flex flex-col justify-center">
                <h2 className="manga-text text-2xl mb-2 text-[#3d2914]">THE ARCHITECT OF CODE</h2>
                <p className="text-[#3d2914] text-sm">Follow my journey through the digital realms as I craft solutions and build my developer universe!</p>
              </div>
              
              <div className="md:col-span-2 h-full">
                <img 
                  src="/lovable-uploads/9331f848-3d60-4c90-a001-3c60057bd422.png" 
                  alt="Shrishtika Peace Sign" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Comic style corner effect */}
            <div className="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-t-[#8a5d3b] border-r-transparent"></div>
          </motion.div>
        </motion.div>
        
        {/* Navigation choices in manga style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show" 
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.a
            key="PROFILE"
            href="/profile#top"
            variants={fadeUp}
            className="manga-panel p-4 text-center font-manga text-xl text-[#3d2914] dark:text-[#f5e7d3] hover:scale-105 transform transition-transform"
            style={{
              background: "linear-gradient(135deg, #e8d3b9 0%, #d9c5ac 100%)"
            }}
          >
            CHAPTER 1: PROFILE
          </motion.a>
          <motion.a
            key="PROJECTS"
            href="/projects"
            variants={fadeUp}
            className="manga-panel p-4 text-center font-manga text-xl text-[#3d2914] dark:text-[#f5e7d3] hover:scale-105 transform transition-transform"
            style={{
              background: "linear-gradient(135deg, #e8d3b9 0%, #d9c5ac 100%)"
            }}
          >
            CHAPTER 2: PROJECTS
          </motion.a>
          <motion.a
            key="CONTACT"
            href="mailto:shrishtika.vajra@gmail.com"
            variants={fadeUp}
            className="manga-panel p-4 text-center font-manga text-xl text-[#3d2914] dark:text-[#f5e7d3] hover:scale-105 transform transition-transform"
            style={{
              background: "linear-gradient(135deg, #e8d3b9 0%, #d9c5ac 100%)"
            }}
          >
            CHAPTER 3: CONTACT
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
