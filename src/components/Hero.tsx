"use client";
import React from 'react';
// Remove the unused Link import

export default function Hero() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Product Leader</h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-8">
          A mission driven product leader who thrives scaling businesses & high performing teams.

I am passionate about growing and developing high performing teams in fast paced engineering environments; taking innovative digital products and solutions from ideation to market. I have a track record developing products used by millions of customers, forming synergistic alliances with both Tier 1 Financial institutions and big Tech companies; whilst maintaining a commercial focus on P&L and business development. 
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
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