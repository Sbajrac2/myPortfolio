
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
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
    terminal: true,
    splash: true
  });

  const handleTerminalComplete = () => {
    setLoading(prev => ({ ...prev, terminal: false }));
  };

  const handleSplashComplete = () => {
    setLoading(prev => ({ ...prev, splash: false }));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {loading.terminal && <LoadingScreen onComplete={handleTerminalComplete} />}
          {!loading.terminal && loading.splash && <SplashScreen onComplete={handleSplashComplete} />}
          
          {!loading.terminal && !loading.splash && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
