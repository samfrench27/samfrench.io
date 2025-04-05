"use client";
import React from 'react';
import { useTheme } from './ThemeContext';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  const { isDarkMode } = useTheme();

  // Only render content based on the current theme
  if (!isDarkMode) {
    // Day mode content - Product Director
    return (
      <section className="py-16 bg-gray-50 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Product Leader</h1>
            
            <div className="max-w-3xl w-full">
              <p className="text-xl text-gray-700 mb-8">
                A mission driven product leader who thrives scaling businesses & high performing teams.
              </p>
              
              <p className="text-xl text-gray-700 mb-8">
                I am passionate about growing and developing high performing teams in fast paced engineering environments; 
                taking innovative digital products and solutions from ideation to market. I have a track record developing products used by 
                millions of customers, forming synergistic alliances with both Tier 1 Financial institutions and big Tech companies; 
                whilst maintaining a commercial focus on P&L and business development.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-medium rounded-md hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Night mode content - Full Stack Developer
  return (
    <section className="py-16 bg-gray-50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Full Stack Developer</h1>
          
          {/* Tech stack icons - visible only in night mode */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="text-react text-4xl animate-float"><FaReact className="text-blue-400" /></div>
            <div className="text-4xl animate-float float-delay-1"><SiNextdotjs className="text-white" /></div>
            <div className="text-4xl animate-float float-delay-2"><SiTypescript className="text-blue-500" /></div>
            <div className="text-4xl animate-float"><FaNodeJs className="text-green-500" /></div>
            <div className="text-4xl animate-float float-delay-1"><SiTailwindcss className="text-cyan-400" /></div>
            <div className="text-4xl animate-float float-delay-2"><FaDatabase className="text-purple-400" /></div>
          </div>
          
          <div className="max-w-3xl w-full">
            <p className="text-xl text-gray-700 mb-8">
              By night, I'm a passionate full stack developer building SaaS products and open-source projects.
            </p>
            
            <p className="text-xl text-gray-700 mb-8">
              I specialize in developing web applications using React, Next.js, Node.js, and TypeScript.
              My focus is on creating scalable, maintainable code with modern practices and tools.
            </p>
            
            <p className="text-xl text-gray-700 mb-8">
              My projects include a SaaS starter kit, custom API gateway solutions, and reusable
              component libraries that emphasize performance and user experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://github.com/samfrench27" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors shadow-md flex items-center"
            >
              <FaGithub className="mr-2" /> View My GitHub
            </a>
            <a 
              href="#dev-projects" 
              className="px-6 py-3 border-2 border-pink-500 text-pink-400 font-medium rounded-md hover:bg-pink-500/20 hover:text-pink-200 transition-colors"
            >
              See My Code Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}