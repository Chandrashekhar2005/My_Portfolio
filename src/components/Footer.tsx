import React from 'react';
import { ArrowUp, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onToggleTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
            <span>© 2026 {PERSONAL_INFO.name}</span>
            <span aria-hidden="true" className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
            <span>Built with React + TypeScript</span>
          </div>

          {/* Social Links, Theme Toggle & Back To Top */}
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.actualLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                title={darkMode ? "Light mode" : "Dark mode"}
                aria-label={darkMode ? "Light mode" : "Dark mode"}
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-purple-600" />}
                <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
