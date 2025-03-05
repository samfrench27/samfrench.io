"use client";
import React from 'react';

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 relative">
          About Me
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          <div className="w-full lg:w-1/2">
            <p className="mb-4 text-gray-700">
              I am a mission-driven product leader who thrives on scaling businesses and high-performing teams. With a passion for growing and developing teams in fast-paced engineering environments, I specialize in taking innovative digital products from ideation to market.
            </p>
            <p className="mb-4 text-gray-700">
              Currently serving as the Director of Product at <a href="https://token.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Token.io</a>, I lead product strategy for Variable Recurring Payments and our Global Connectivity Network, expanding market presence across EMEA and driving payment performance improvements.
            </p>
            <p className="mb-4 text-gray-700">
              Beyond my professional role, I enjoy building web applications using modern tech stacks including React, Node.js, and AWS. This hands-on experience with development helps me create better products by understanding both the business and technical perspectives.
            </p>
            <p className="text-gray-700">
              Based in Manchester, UK, I hold a First Class BSc in Digital and Technology Solutions from Manchester Metropolitan University.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Product Leadership</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Product Strategy</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Roadmap Planning</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Team Leadership</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Stakeholder Management</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Business Development</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Payment Technology</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Open Banking</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Variable Recurring Payments</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Payment Gateways</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">SEPA</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">ISO20022</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">HTML/CSS</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">JavaScript</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">React</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Node.js</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Express.js</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">PostgreSQL</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}