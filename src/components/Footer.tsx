"use client";
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaTwitter, FaMedium } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:sam@samfrench.io" 
              aria-label="Email Sam French" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sam-french-359b74a8/" 
              target="_blank" 
              rel="noopener" 
              aria-label="Sam French LinkedIn profile" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener" 
              aria-label="Sam French GitHub profile" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="tel:+447874226876" 
              aria-label="Call Sam French" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaPhone className="text-xl" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener" 
              aria-label="Sam French Twitter profile" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="https://medium.com/" 
              target="_blank" 
              rel="noopener" 
              aria-label="Sam French Medium articles" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaMedium className="text-xl" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sam French. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}