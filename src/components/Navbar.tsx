
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, IdCard, Code, User, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
  { name: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
  { name: 'Projects', path: '/projects', icon: <Code className="w-5 h-5" /> },
  { name: 'Skills', path: '/skills', icon: <Code className="w-5 h-5" /> },
  { name: 'Articles', path: '/articles', icon: <IdCard className="w-5 h-5" /> }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Sbajrac2', icon: <Github className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/shrishtika-bajracharya', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Email', url: 'mailto:shrishtika.vajra@gmail.com', icon: <Mail className="w-5 h-5" /> },
  { name: 'Resume', url:'Resume', icon:<IdCard className='w-5 h-5'/>},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <nav className="relative flex justify-between items-center px-4 sm:px-6 py-4 bg-[#3d2914]/70 backdrop-blur-md border-b border-[#8a5d3b] shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 bg-manga-secondary flex items-center justify-center rounded-md transform -rotate-3 shadow-lg mr-3">
            <span className="font-manga text-white text-xl">S</span>
          </div>
          <span className="font-manga text-xl sm:text-2xl hidden sm:inline">SHRISHTIKA</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map(item => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`flex items-center space-x-2 relative group transition duration-200 ${
                pathname === item.path ? 'text-manga-secondary' : 'text-foreground hover:text-manga-secondary'
              }`}
            >
              <span className="opacity-75 group-hover:opacity-100">{item.icon}</span>
              <span>{item.name}</span>
              {pathname === item.path && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-manga-secondary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        
        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map(link => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-manga-secondary transition"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-foreground hover:text-manga-secondary focus:outline-none"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-background dark:bg-panel shadow-lg z-30 border-t border-panel-border"
          >
            <div className="flex flex-col p-4">
              {/* Mobile Nav Links */}
              <div className="space-y-4 border-b border-panel-border pb-4 mb-4">
                {navItems.map(item => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className={`flex items-center space-x-3 px-2 py-2 rounded-md transition ${
                      pathname === item.path 
                        ? 'bg-secondary text-manga-secondary' 
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex justify-around">
                {socialLinks.map(link => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 p-2"
                    aria-label={link.name}
                  >
                    <span className="text-foreground hover:text-manga-secondary transition">
                      {link.icon}
                    </span>
                    <span className="text-xs">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
