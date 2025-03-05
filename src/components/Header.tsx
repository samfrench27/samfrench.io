"use client";
import { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaTwitter, FaMedium } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-blue-900 text-4xl font-bold mb-6">
            <i className="fas fa-user"></i>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Sam French</h1>
            <h2 className="text-2xl font-medium mb-4">Product Leader & Full Stack Developer</h2>
            <p className="mb-4">Building cutting-edge payment solutions and scaling high-performing teams</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:sam@samfrench.io" aria-label="Email Sam French" className="hover:-translate-y-1 transition-transform">
                <FaEnvelope className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/sam-french-359b74a8/" target="_blank" rel="noopener" aria-label="Sam French LinkedIn profile" className="hover:-translate-y-1 transition-transform">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener" aria-label="Sam French GitHub profile" className="hover:-translate-y-1 transition-transform">
                <FaGithub className="text-xl" />
              </a>
              <a href="tel:+447874226876" aria-label="Call Sam French" className="hover:-translate-y-1 transition-transform">
                <FaPhone className="text-xl" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Sam French Twitter profile" className="hover:-translate-y-1 transition-transform">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://medium.com/" target="_blank" rel="noopener" aria-label="Sam French Medium articles" className="hover:-translate-y-1 transition-transform">
                <FaMedium className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-0 left-1/10 w-48 h-48 rounded-full bg-cyan-500 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/5 w-64 h-64 rounded-full bg-indigo-600 filter blur-3xl"></div>
      </div>
    </header>
  );
}