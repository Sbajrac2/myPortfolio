
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// Create action SVGs for manga effects
const createSvgs = () => {
  const createSvg = (id: string, content: string) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.innerHTML = content;
    svg.style.display = "none";
    document.body.appendChild(svg);
    
    const img = document.createElement("img");
    img.id = id;
    img.src = `data:image/svg+xml;base64,${btoa(new XMLSerializer().serializeToString(svg))}`;
    img.style.display = "none";
    document.body.appendChild(img);
    
    return img;
  };
  
  // Action lines SVG
  createSvg("action-lines", `
    <path d="M10,50 L90,50" stroke="#000" stroke-width="2" />
    <path d="M15,40 L85,40" stroke="#000" stroke-width="2" />
    <path d="M20,30 L80,30" stroke="#000" stroke-width="2" />
    <path d="M15,60 L85,60" stroke="#000" stroke-width="2" />
    <path d="M20,70 L80,70" stroke="#000" stroke-width="2" />
  `);
  
  // Action dots SVG
  createSvg("action-dots", `
    <circle cx="20" cy="20" r="3" fill="#000" />
    <circle cx="40" cy="20" r="3" fill="#000" />
    <circle cx="60" cy="20" r="3" fill="#000" />
    <circle cx="80" cy="20" r="3" fill="#000" />
    <circle cx="30" cy="40" r="3" fill="#000" />
    <circle cx="50" cy="40" r="3" fill="#000" />
    <circle cx="70" cy="40" r="3" fill="#000" />
    <circle cx="20" cy="60" r="3" fill="#000" />
    <circle cx="40" cy="60" r="3" fill="#000" />
    <circle cx="60" cy="60" r="3" fill="#000" />
    <circle cx="80" cy="60" r="3" fill="#000" />
    <circle cx="30" cy="80" r="3" fill="#000" />
    <circle cx="50" cy="80" r="3" fill="#000" />
    <circle cx="70" cy="80" r="3" fill="#000" />
  `);
};

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState({
    splash: true,
    terminal: true
  });

  // Create SVGs on initial load
  useEffect(() => {
    createSvgs();
  }, []);

  const handleSplashComplete = () => {
    setLoading(prev => ({ ...prev, splash: false }));
  };

  const handleTerminalComplete = () => {
    setLoading(prev => ({ ...prev, terminal: false }));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {loading.splash && <SplashScreen onComplete={handleSplashComplete} />}
          {!loading.splash && loading.terminal && <LoadingScreen onComplete={handleTerminalComplete} />}
          
          {!loading.splash && !loading.terminal && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
