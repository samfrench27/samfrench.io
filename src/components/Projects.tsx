"use client";
import React from 'react';
import { FaCreditCard, FaChartLine, FaCode } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Mock Payment Gateway',
      description: 'A custom payment gateway integration with Token and Truelayer Hosted Payment Pages to initiate Single Immediate Payments and Variable Recurring Payments.',
      tags: ['React', 'Express.js', 'AWS', 'Open Banking'],
      icon: <FaCreditCard className="text-5xl text-blue-600" />,
      demoLink: 'https://webapp.samfrench.io/',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Payment Analytics Dashboard',
      description: 'A data visualization tool for tracking payment performance metrics including conversion rates, success rates, and processing times across different payment methods.',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      icon: <FaChartLine className="text-5xl text-blue-600" />,
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Open Banking Developer Toolkit',
      description: 'A collection of tools and utilities for developers working with Open Banking APIs, including authentication helpers, request builders, and response parsers.',
      tags: ['JavaScript', 'API', 'OAuth', 'Documentation'],
      icon: <FaCode className="text-5xl text-blue-600" />,
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 relative">
          Personal Projects
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener" 
                    className="inline-block px-4 py-2 border-2 border-cyan-500 text-cyan-500 font-medium rounded hover:bg-cyan-500 hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener" 
                    className="inline-block px-4 py-2 bg-blue-900 text-white font-medium rounded hover:bg-blue-800 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}