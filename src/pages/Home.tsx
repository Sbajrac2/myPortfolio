
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Terminal from '@/components/Terminal';
import { staggerContainer, comicPanel, fadeUp } from '@/lib/animations';

const Home = () => {
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-12 text-center"
        >
          <h1 className="manga-text text-4xl md:text-6xl mb-4 text-[#3d2914] dark:text-[#f5e7d3]">
            SHRISHTIKA'S WORLD
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Navigate through the pages of my developer story
          </p>
        </motion.div>
        
        {/* Terminal Panel - Now First */}
        <motion.div 
          variants={comicPanel}
          initial="hidden"
          animate="show"
          className="manga-panel p-4 bg-[#e8d3b9] dark:bg-[#4a372a] mb-6"
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <div className="manga-panel-title mb-4">
            <h2 className="manga-text text-2xl">TERMINAL ACCESS</h2>
            <div className="text-sm opacity-80">Type 'help' to see available commands</div>
          </div>
          <Terminal />
        </motion.div>
        
        {/* Quick Profile Summary - Now Second */}
        <motion.div 
          variants={comicPanel}
          initial="hidden"
          animate="show"
          className="manga-panel p-6 bg-[#e8d3b9] dark:bg-[#4a372a] flex flex-col mb-10"
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <div className="manga-panel-title mb-4">
            <h2 className="manga-text text-2xl">MAIN CHARACTER</h2>
            <div className="text-sm opacity-80">CS Undergrad at SUNY</div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.img 
              src="/lovable-uploads/9331f848-3d60-4c90-a001-3c60057bd422.png" 
              alt="Shrishtika Profile" 
              className="w-32 h-32 object-cover rounded-full border-4 border-[#8a5d3b] mb-4"
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#ff6b6b", 
                transition: { duration: 0.2 } 
              }}
            />
            <h3 className="text-xl font-bold mb-2">Shrishtika Bajracharya</h3>
            <p className="mb-4">Building things that are cool</p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/profile#top" 
                className="px-5 py-2 bg-[#8a5d3b] text-white rounded font-manga hover:bg-[#73482a] transition-colors"
              >
                READ MY STORY
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Manga Navigation Dashboard - Now Last */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h2 className="manga-text text-3xl mb-6 text-center text-[#3d2914] dark:text-[#f5e7d3]">
            CHAPTER SELECT
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { 
                title: "PROFILE", 
                chapter: "01", 
                desc: "The origin story", 
                path: "/profile#top", 
                bgColor: "bg-gradient-to-br from-[#fec6a1] to-[#fd9b6d]" 
              },
              { 
                title: "PROJECTS", 
                chapter: "02", 
                desc: "The development adventures", 
                path: "/projects", 
                bgColor: "bg-gradient-to-br from-[#e5deff] to-[#c5b6ff]" 
              },
              { 
                title: "CONNECT", 
                chapter: "03", 
                desc: "Join the story", 
                path: "mailto:shrishtika.vajra@gmail.com", 
                bgColor: "bg-gradient-to-br from-[#ffdee2] to-[#ffb1bc]" 
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`manga-panel ${item.bgColor} p-5 text-[#3d2914] flex flex-col h-44 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: index % 2 === 0 ? 1 : -1,
                  zIndex: 10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Manga panel styling */}
                <div className="absolute top-0 right-0 p-1 bg-[#3d2914] text-white font-manga text-xs">
                  CH.{item.chapter}
                </div>
                
                <div className="manga-panel-content">
                  <h3 className="manga-text text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.desc}</p>
                  
                  {/* Action corner */}
                  <motion.div 
                    className="absolute bottom-3 right-3"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={item.path}
                      className="w-10 h-10 rounded-full bg-[#3d2914] text-white flex items-center justify-center transform rotate-3"
                    >
                      {index+1}
                    </Link>
                  </motion.div>
                  
                  {/* Manga corner effect */}
                  <div className="absolute bottom-0 left-0 border-b-[20px] border-l-[20px] border-b-[#3d2914] border-l-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Featured Quote */}
        <motion.div
          variants={comicPanel}
          initial="hidden"
          animate="show" 
          className="manga-panel p-6 bg-[#f5e7d3] dark:bg-[#4a372a] text-center mb-8"
          whileHover={{ 
            scale: 1.02, 
            rotate: -1,
            transition: { duration: 0.3 }
          }}
        >
          <blockquote className="text-xl italic mb-2">
            "The best way to predict the future is to create it."
          </blockquote>
          <cite className="text-sm">- Inspiration for my developer journey</cite>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
