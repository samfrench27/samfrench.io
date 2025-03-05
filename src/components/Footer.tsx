"use client";
import React from 'react';
import SocialLinks from './SocialLinks';

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
          {/* Social Links */}
          <SocialLinks className="mb-8" variant="dark" />
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sam French. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}