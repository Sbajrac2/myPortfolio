
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

// Create a QueryClient
const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState({
    splash: true,
    terminal: true
  });

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
