"use client";
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Bridging Product Leadership & Technical Innovation</h2>
          <p className="text-xl text-gray-700 max-w-3xl mb-8">
            I'm a product leader with a passion for payment technology, currently leading product strategy at Token.io. In my spare time, I enjoy building full-stack applications that solve real-world problems.
          </p>
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
          
          {/* Terminal-inspired element */}
          <div className="w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <div className="flex items-center px-4 py-2 bg-gray-800">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">sam@macbook-pro ~ %</div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">whoami</span>
              </div>
              <div className="text-gray-300 ml-6 mb-4">
                Product leader at Token.io, specializing in Variable Recurring Payments and Connectivity
              </div>
              
              <div className="flex mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">cat skills.txt</span>
              </div>
              <div className="text-gray-300 ml-6 mb-4">
                Payments Technology | API Development | Product Strategy | React | Node.js | AWS
              </div>
              
              <div className="flex mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">npm start dev-portfolio</span>
              </div>
              <div className="text-gray-300 ml-6 mb-4">
                Starting development server...<br />
                Server running at http://localhost:3000<br />
                Happy coding!
              </div>
              
              <div className="flex">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">_</span>
                <span className="w-2 h-5 bg-white animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}