"use client";
import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="text-3xl font-bold text-center text-blue-900 mb-12 relative">
          About Sam French - Product Leader in Manchester
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          <div className="w-full lg:w-1/2">
            <p className="mb-4 text-gray-700">
              I am a mission-driven product leader who thrives on scaling businesses and high-performing teams. With a passion for growing and developing teams in fast-paced engineering environments, I specialize in taking innovative digital products from ideation to market.
            </p>
            <p className="mb-4 text-gray-700">
              Currently serving as the Director of Product at <a href="https://token.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Token.io</a>, I lead product strategy for Account-to-Account payments and our Global Connectivity Network, expanding market presence across EMEA and driving payment performance improvements.
            </p>
            <p className="mb-4 text-gray-700">
              Throughout my career, I&apos;ve focused on building financial and payment products that leverage Open Banking capabilities to deliver better customer experiences and innovative payment solutions.
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
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Account-to-Account Payments</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Payment Gateways</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">SEPA</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">ISO20022</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Industry Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Financial Services</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Banking</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">FinTech</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">PSD2</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">API Platforms</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm transition-all hover:bg-cyan-500 hover:text-white hover:-translate-y-1">Regulatory Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}