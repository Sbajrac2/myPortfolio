
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import { pageTransition } from '@/lib/animations';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f5e7d3] dark:bg-[#3d2914] text-[#3d2914] dark:text-[#f5e7d3]">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-manga-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.05] dark:opacity-[0.08]"></div>
        
        {/* Manga corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#8a5d3b] dark:border-[#c9a889] opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-[#8a5d3b] dark:border-[#c9a889] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-[#8a5d3b] dark:border-[#c9a889] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#8a5d3b] dark:border-[#c9a889] opacity-30"></div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <motion.main 
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen pt-20 pb-20"
      >
        {children}
      </motion.main>
      
      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Layout;
