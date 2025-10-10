"use client";
import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="text-3xl font-bold text-center text-blue-900 mb-12 relative">
          About
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          <div className="w-full lg:w-1/2">
            <p className="mb-4 text-gray-700">
              Mission‑driven product leader focused on Open Banking–powered payments and data products, from idea to launch to iterative growth. Currently Director of Product at Token.io, leading A2A payments and a connectivity network across EMEA; previously at Barclays, shipped in‑app account aggregation and permissions management. Passionate about market‑leading UX and building teams that deliver measurable outcomes. Manchester‑based; First‑Class BSc (Hons), Manchester Metropolitan University.
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