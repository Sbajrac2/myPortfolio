
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  autoType?: boolean;
}

const Terminal = ({ autoType = true }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const predefinedCommands = [
    { command: 'whoami', response: 'Shrishtika Bajracharya - Software Engineer' },
    { command: 'ls -projects', response: '📁 MODIT-2.0\n📁 AI-Accessible-Education\n📁 Personal-Portfolio' },
    { command: 'cat skills.txt', response: 'Java, Python, C, HTML, GitHub, Docker, VS Code, IntelliJ IDEA, Postman, API Integration, Dash, Figma, Notion, Microsoft Office' },
    { command: 'contact', response: 'Email: shrishtika.vajra@gmail.com\nGitHub: Sbajrac2\nLinkedIn: shrishtika-bajracharya' },
    { command: 'help', response: 'Available commands:\nwhoami - Display basic info\nls -projects - List projects\ncat skills.txt - Show skills\ncontact - Display contact info\nclear - Clear terminal\nhelp - Show this help message' },
    { command: 'fetching public logs from GitHub...', response: 'Successfully fetched repository data from GitHub.' },
    { command: 'rendering project timelines...', response: 'Project timeline visualization complete.' },
    { command: 'interfacing with sbajrac2/mainframe...', response: 'Connection established to mainframe database.' },
  ];

  // Auto-type effect for first load
  useEffect(() => {
    if (!autoType) return;
    
    const typingTimeline = [
      { command: 'echo "Welcome to Shrishtika\'s terminal"', delay: 300 },
      { command: 'fetching public logs from GitHub...', delay: 1200 },
      { command: 'rendering project timelines...', delay: 800 },
      { command: 'interfacing with sbajrac2/mainframe...', delay: 1000 },
      { command: 'help', delay: 800 },
    ];
    
    let totalDelay = 0;
    
    // Make sure we're not already typing
    if (!isTyping) {
      setIsTyping(true);
      
      typingTimeline.forEach(({ command, delay }) => {
        totalDelay += delay;
        setTimeout(() => {
          typeCommand(command);
        }, totalDelay);
      });
      
      // Reset typing state after all commands have run
      setTimeout(() => {
        setIsTyping(false);
      }, totalDelay + 500);
    }
  }, [autoType]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const typeCommand = async (text: string) => {
    setInput('');
    
    // Simulate typing character by character
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 35 + Math.random() * 15));
      setInput(prev => prev + text[i]);
    }
    
    // Process command after typing
    await new Promise(resolve => setTimeout(resolve, 500));
    processCommand(text);
  };

  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    
    // Add command to output
    setOutput(prev => [...prev, `> ${cmd}`]);
    
    // Handle commands
    if (command === 'clear') {
      setOutput([]);
      return;
    }
    
    // Check for predefined commands
    const foundCommand = predefinedCommands.find(c => 
      command === c.command.toLowerCase() || cmd === c.command
    );
    
    if (foundCommand) {
      setOutput(prev => [...prev, foundCommand.response]);
    } else if (command.startsWith('echo')) {
      // Handle echo command
      const message = cmd.substring(5).trim().replace(/^"|"$/g, '');
      setOutput(prev => [...prev, message]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}`]);
    }
    
    // Clear input
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      const currentInput = input.trim();
      if (currentInput) {
        processCommand(currentInput);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTyping) {
      setInput(e.target.value);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden manga-terminal"
      style={{
        boxShadow: "0 0 15px rgba(255, 107, 107, 0.3)",
        border: "2px solid #ff6b6b"
      }}
      whileHover={{ 
        boxShadow: "0 0 20px rgba(255, 107, 107, 0.5)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center justify-between p-2 bg-[#ff6b6b] border-b border-[#ff9e9e]">
        <div className="flex space-x-2">
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        </div>
        <div className="text-xs font-manga text-white">terminal@shrishtika:~</div>
        <div></div>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 font-code text-[#ffcb8c] text-sm h-[calc(100%-40px)] overflow-y-auto bg-[#3d2914]"
      >
        {output.map((line, index) => (
          <div key={index} className="mb-2 whitespace-pre-wrap">
            {line}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="mr-2 text-[#ff9e9e]">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-[#ffcb8c]"
            disabled={isTyping}
          />
          <span className={`inline-block h-4 w-2 bg-[#ff9e9e] ml-0.5 ${isTyping ? 'animate-blink' : ''}`}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
