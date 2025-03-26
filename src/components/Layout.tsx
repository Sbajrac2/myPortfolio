
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.03] dark:opacity-[0.05]"></div>
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
