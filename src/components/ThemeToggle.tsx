"use client";
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  onModeChange: (isDarkMode: boolean) => void;
}

export default function ThemeToggle({ onModeChange }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between day and night mode
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onModeChange(newMode);
    
    // Update body class for global styling
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Initialize based on time of day (optional)
  useEffect(() => {
    const hour = new Date().getHours();
    const initialDarkMode = hour < 7 || hour > 19; // Night mode between 7pm and 7am
    setIsDarkMode(initialDarkMode);
    onModeChange(initialDarkMode);
    
    if (initialDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, [onModeChange]);

  return (
    <button 
      onClick={toggleMode}
      className={`fixed top-5 right-5 z-50 p-2 rounded-full transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      aria-label={isDarkMode ? 'Switch to day mode' : 'Switch to night mode'}
    >
      <div className="relative w-16 h-8 flex items-center justify-between px-2 rounded-full">
        <FaSun className={`transition-opacity ${isDarkMode ? 'opacity-30' : 'opacity-100'}`} />
        <FaMoon className={`transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-30'}`} />
        
        <div 
          className={`absolute w-6 h-6 rounded-full bg-white transition-all duration-300 ${
            isDarkMode ? 'right-2' : 'left-2'
          }`}
        ></div>
      </div>
      
      <span className="sr-only">{isDarkMode ? 'Switch to Day Mode: Product Director' : 'Switch to Night Mode: Full Stack Developer'}</span>
    </button>
  );
}