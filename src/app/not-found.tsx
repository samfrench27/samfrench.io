"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  const { isDarkMode } = useTheme();

  return (
    <main className={`transition-colors duration-500 min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-slate-800 text-white' : 'bg-gradient-to-b from-white to-gray-50 text-gray-800'}`}>
      <Header />
      
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="/" className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md">
            Return to Home
          </Link>
          
          <Link href="/#contact" className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-medium rounded-md hover:bg-cyan-500 hover:text-white transition-colors">
            Contact Sam
          </Link>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Looking for something else?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/#about" className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <h3 className="text-lg font-semibold mb-2">About Sam French</h3>
              <p>Learn about Sam's background and expertise in fintech and Open Banking</p>
            </Link>
            <Link href="/#experience" className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
              <p>Explore Sam's professional journey as a Director of Product at Token.io</p>
            </Link>
            <Link href="/#projects" className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              <p>See the fintech and Open Banking projects Sam has worked on</p>
            </Link>
            <Link href="/#contact" className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p>Get in touch with Sam about fintech opportunities and collaborations</p>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 