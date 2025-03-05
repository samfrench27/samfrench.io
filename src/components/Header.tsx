"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adding a base transition class for all icons
  const baseTransition = "transform transition-all duration-300 ease-in-out";
  
  return (
    <header className={`relative bg-gradient-to-r from-blue-800 via-indigo-600 to-cyan-500 text-white py-16 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative shadow-xl">
            <Image 
              src="/profile-photo.png" 
              alt="Sam French"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2 mt-6 text-white drop-shadow-sm">Sam French</h1>
            <h2 className="text-2xl font-medium mb-4 text-cyan-100">Director of Product at Token.io</h2>
            <p className="mb-4 text-indigo-100">Building cutting-edge Account-to-Account payment solutions at Token.io</p>
            
            {/* Social Links - Directly embedded for troubleshooting */}
            <div className="flex justify-center space-x-5 mb-2 relative z-10">
              <a 
                href="mailto:sam@samfrench.io" 
                aria-label="Email Sam French" 
                className={`text-white hover:text-cyan-200 hover:scale-125 ${baseTransition}`}
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sam-french-359b74a8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Sam French LinkedIn profile" 
                className={`text-white hover:text-cyan-200 hover:scale-125 ${baseTransition}`}
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/samfrench27" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Sam French GitHub profile" 
                className={`text-white hover:text-cyan-200 hover:scale-125 ${baseTransition}`}
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/10 w-48 h-48 rounded-full bg-purple-500 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/5 w-64 h-64 rounded-full bg-cyan-400 filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-300 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-52 h-52 rounded-full bg-blue-400 filter blur-3xl animate-float-slow"></div>
      </div>
    </header>
  );
}