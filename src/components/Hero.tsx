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
                Director of Product at Token.io, specializing in Account-to-Account Payments and Open Banking
              </div>
              
              <div className="flex mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">cat expertise.txt</span>
              </div>
              <div className="text-gray-300 ml-6 mb-4">
                Payment Technology | Open Banking | Product Strategy | Account-to-Account Payments | API Development
              </div>
              
              <div className="flex mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">npm start token-io-platform</span>
              </div>
              <div className="text-gray-300 ml-6 mb-4">
                Starting Token.io platform...<br />
                Open Banking connectivity established<br />
                A2A payment rails activated
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