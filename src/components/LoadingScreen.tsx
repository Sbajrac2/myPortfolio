
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [textLines, setTextLines] = useState<string[]>([]);
  const messages = [
    "> Initializing system protocols...",
    "> Establishing secure connection...",
    "> Booting up the GitHub mainframe...",
    "> Decrypting Shrishtika's dev timeline...",
    "> Loading project database...",
    "> Compiling MODIT protocols...",
    "> Scanning skill registry...",
    "> Constructing interface...",
    "> System ready. Welcome to Shrishtika's portfolio."
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setTextLines(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-terminal-bg flex items-center justify-center z-40">
      <div className="absolute inset-0 matrix-rain" id="matrix-canvas">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-terminal-text opacity-50 animate-matrix-rain"
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="text-sm">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="terminal-window w-full max-w-2xl mx-4 h-80 p-4 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-2 border-b border-terminal-accent/30 pb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="terminal-text text-xs">terminal@shrishtika:~</div>
          <div></div>
        </div>
        
        <div className="font-code text-terminal-text text-sm h-full overflow-y-auto">
          {textLines.map((line, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-2"
            >
              {line}
            </motion.div>
          ))}
          <div className="inline-block h-4 w-2 bg-terminal-text animate-blink"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
