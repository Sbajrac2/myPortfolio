
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showContent, setShowContent] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/lovable-uploads/48bf9ca2-84ee-4fd5-ba53-710c3f22d503.png",
    "/lovable-uploads/6f7a2254-eae0-4c2e-aa69-4456daff9910.png",
    "/lovable-uploads/9331f848-3d60-4c90-a001-3c60057bd422.png"
  ];

  useEffect(() => {
    // Show content after a slight delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Image rotation
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    // Complete after animation duration
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
      clearInterval(imageInterval);
    };
  }, [onComplete, images.length]);

  return (
    <div className="fixed inset-0 bg-[#e8d3b9] dark:bg-[#64462e] flex items-center justify-center z-50">
      <div className="w-full max-w-3xl px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="manga-panel p-8 border-4 border-[#3d2914] dark:border-[#e8d3b9] aspect-[3/4] flex flex-col items-center justify-center relative"
          style={{
            background: "linear-gradient(135deg, #e8d3b9 0%, #c9a889 100%)"
          }}
        >
          {/* Comic book style effects */}
          <div className="absolute inset-0 bg-manga-pattern opacity-10"></div>
          
          {/* Manga style dots pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
          
          {/* Header tag */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#8a5d3b] text-[#f5e7d3] px-6 py-2 font-manga transform -rotate-3 shadow-lg"
          >
            ISSUE #1
          </motion.div>

          {showContent && (
            <>
              {/* Profile image in manga style frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-56 h-56 border-4 border-[#8a5d3b] rounded-lg overflow-hidden mb-6 shadow-xl transform -rotate-3"
              >
                <img 
                  src={images[currentImage]} 
                  alt="Shrishtika Bajracharya" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="manga-text text-5xl sm:text-6xl mb-3 text-[#3d2914] dark:text-[#f5e7d3] manga-shadow"
              >
                SHRISHTIKA
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-xl sm:text-2xl font-semibold text-[#8a5d3b] mb-6"
              >
                Aspiring Software Engineer
              </motion.p>
              
              {/* Decorative action lines */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute top-1/4 right-4 w-20 h-20"
              >
                <img src="/action-lines.svg" alt="" className="w-full h-full" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.3 }}
                className="absolute bottom-1/4 left-4 w-16 h-16 transform rotate-45"
              >
                <img src="/action-dots.svg" alt="" className="w-full h-full" />
              </motion.div>
              
              {/* Comic style speech bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute top-10 right-10 comic-bubble comic-bubble-right px-3 py-2 bg-white dark:bg-[#f5e7d3] border-2 border-[#3d2914]"
              >
                <p className="text-sm font-manga text-[#3d2914]">Let's code!</p>
              </motion.div>
              
              {/* Loading indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-8 flex flex-col items-center"
              >
                <div className="h-1 w-48 bg-[#d9c5ac] rounded overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.3, duration: 2 }}
                    className="h-full bg-[#8a5d3b]"
                  ></motion.div>
                </div>
                <p className="text-sm mt-2 text-[#3d2914] dark:text-[#d9c5ac]">Loading portfolio...</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
