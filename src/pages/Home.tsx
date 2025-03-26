
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Terminal from '@/components/Terminal';
import TweetPanel from '@/components/TweetPanel';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { ArrowDownCircle } from 'lucide-react';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { repos, loading } = useGitHubRepos('Sbajrac2', 3);

  // Hide scroll indicator when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className="page-container">
        <section className="min-h-[80vh] flex flex-col justify-center items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="manga-text text-3xl md:text-5xl lg:text-6xl mb-4 text-manga-primary dark:text-white manga-shadow">
              THE ARCHITECT OF CODE
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/90">
              Computer Science undergrad at SUNY Oswego. Passionate about tech for building smarter and helpful systems. I enjoy working full stack and solving problems that impact real users.
            </p>
          </motion.div>
          
          <Terminal />
          
          {/* Scroll indicator */}
          {showScrollIndicator && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center opacity-70 animate-bounce"
            >
              <ArrowDownCircle className="w-10 h-10 text-manga-secondary" />
              <span className="block mt-2">Scroll for more</span>
            </motion.div>
          )}
        </section>
        
        {/* Latest GitHub Projects */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2 
            variants={fadeUp}
            className="font-manga text-3xl md:text-4xl mb-8 text-center text-manga-primary dark:text-white manga-shadow"
          >
            LATEST MISSIONS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading skeletons
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="manga-panel p-6 animate-pulse">
                  <div className="h-6 bg-secondary rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-secondary rounded w-1/2 mb-6"></div>
                  <div className="h-20 bg-secondary rounded mb-6"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-secondary rounded w-16"></div>
                    <div className="h-6 bg-secondary rounded w-16"></div>
                  </div>
                </div>
              ))
            ) : (
              repos.map((repo, i) => (
                <motion.div 
                  key={repo.id}
                  variants={fadeUp}
                  className="manga-panel p-6"
                >
                  <h3 className="font-manga text-xl text-manga-primary dark:text-white">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  <p className="text-sm text-manga-secondary mt-1">
                    {new Date(repo.created_at).toLocaleDateString()}
                  </p>
                  <p className="mt-4 text-foreground/90 line-clamp-3 h-[4.5rem]">
                    {repo.description || 'No description available.'}
                  </p>
                  <div className="mt-4">
                    {repo.language && (
                      <span className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-medium mr-2">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics && repo.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-medium mr-2 mt-2"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-manga-secondary text-white rounded hover:bg-manga-secondary/90 transition"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.section>
        
        {/* Tweet Panel */}
        <section className="mb-16">
          <h2 className="font-manga text-3xl md:text-4xl mb-8 text-center text-manga-primary dark:text-white manga-shadow">
            DEV COMMUNITY
          </h2>
          <TweetPanel />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
