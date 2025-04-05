"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeContext';

export default function AboutPage() {
  const { isDarkMode } = useTheme();

  return (
    <main className={`transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <Header />
      
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <h1 id="about-heading" className="text-4xl font-bold text-center text-blue-900 mb-12 relative">
            About Sam French
            <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
          </h1>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-6 text-blue-800">Director of Product at Token.io</h2>
              
              <p className="mb-6 text-gray-700">
                Sam French is a mission-driven product leader who thrives on scaling businesses and high-performing teams. With a passion for growing and developing teams in fast-paced engineering environments, he specializes in taking innovative digital products from ideation to market.
              </p>
              
              <p className="mb-6 text-gray-700">
                Currently serving as the <strong>Director of Product at <a href="https://token.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Token.io</a></strong>, Sam leads product strategy for Account-to-Account payments and the Global Connectivity Network, expanding market presence across EMEA and driving payment performance improvements.
              </p>
              
              <h2 className="text-2xl font-semibold mb-6 text-blue-800 mt-8">Fintech & Open Banking Expertise</h2>
              
              <p className="mb-6 text-gray-700">
                Throughout his career, Sam has focused on building financial and payment products that leverage <strong>Open Banking capabilities</strong> to deliver better customer experiences and innovative payment solutions. His expertise spans:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Account-to-Account Payments</strong> - Developing and optimizing payment rails that connect directly to consumer bank accounts</li>
                <li className="mb-2"><strong>Open Banking API Integration</strong> - Implementing seamless connections to financial institutions</li>
                <li className="mb-2"><strong>Fintech Product Strategy</strong> - Creating roadmaps for financial technology products that solve real market needs</li>
                <li className="mb-2"><strong>Payment Technology Solutions</strong> - Delivering advanced payment systems for modern commerce</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-6 text-blue-800 mt-8">Background & Education</h2>
              
              <p className="mb-6 text-gray-700">
                Based in Manchester, UK, Sam holds a First Class BSc in Digital and Technology Solutions from Manchester Metropolitan University. He combines technical knowledge with business acumen to drive innovation in the fintech space.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#experience" className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md">
                  View Professional Experience
                </Link>
                <Link href="/#contact" className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-medium rounded-md hover:bg-cyan-500 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Areas of Expertise</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Fintech Solutions</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Account-to-Account Payments</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Open Banking</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Variable Recurring Payments</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Payment Gateways</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Product Leadership</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Product Strategy</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Roadmap Development</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Team Management</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Stakeholder Relations</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Industry Knowledge</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Financial Services</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Banking Technology</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">PSD2 Compliance</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">API Platforms</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-2">Connect with Sam</h4>
                  <a 
                    href="https://www.linkedin.com/in/sam-french-359b74a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section for SEO */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-blue-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">What does Sam French do at Token.io?</h3>
                <p className="text-gray-700">As Director of Product at Token.io, Sam leads the product strategy for Account-to-Account payments and the Global Connectivity Network. He focuses on expanding market presence across EMEA and driving payment performance improvements for Token.io's financial services clients.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">What is Sam French's expertise in fintech?</h3>
                <p className="text-gray-700">Sam French specializes in Open Banking technology, Account-to-Account payments, payment systems integration, and financial services innovation. He has deep knowledge of PSD2 compliance, API platforms, and developing payment solutions that leverage modern banking infrastructure.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Where is Sam French based?</h3>
                <p className="text-gray-700">Sam French is based in Manchester, UK, where he serves as the Director of Product at Token.io while contributing to the local fintech ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 