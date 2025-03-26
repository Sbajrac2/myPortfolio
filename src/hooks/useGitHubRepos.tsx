
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string | null;
  topics: string[];
}

export const useGitHubRepos = (username: string, limit: number = 3) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&per_page=${limit}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        
      } catch (err) {
        setError('Could not load GitHub repositories');
        console.error('Error fetching GitHub repos:', err);
        toast({
          title: "GitHub Error",
          description: "Failed to fetch repositories. Using fallback data instead.",
          variant: "destructive",
        });
        
        // Fallback data
        setRepos([
          {
            id: 1,
            name: "MODIT-2.0",
            description: "Machine Operation Data Interpretation Tool - A web-based tool for production line efficiency",
            html_url: "https://github.com/Sbajrac2/MODIT-2.0",
            created_at: "2023-05-15T12:00:00Z",
            updated_at: "2023-06-20T15:30:00Z",
            language: "JavaScript",
            topics: ["javascript", "python", "css", "git", "dash", "flask"]
          },
          {
            id: 2,
            name: "AI-Accessible-Education",
            description: "An adaptive learning platform that personalizes courses based on the user's personality (RAISEC model)",
            html_url: "https://github.com/Sbajrac2/AI-Accessible-Education",
            created_at: "2023-08-10T09:15:00Z",
            updated_at: "2023-09-05T14:20:00Z",
            language: "TypeScript",
            topics: ["react", "tailwindcss", "golang", "mongodb", "oauth", "vercel"]
          },
          {
            id: 3,
            name: "Personal-Portfolio",
            description: "My personal portfolio website with manga-inspired design",
            html_url: "https://github.com/Sbajrac2/Personal-Portfolio",
            created_at: "2023-10-01T10:00:00Z",
            updated_at: "2023-10-15T16:45:00Z",
            language: "TypeScript",
            topics: ["react", "tailwindcss", "framer-motion", "portfolio"]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, limit]);

  return { repos, loading, error };
};
