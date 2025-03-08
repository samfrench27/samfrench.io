"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  // Disabling the activeProject functionality temporarily
  // const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const projects = [
    {
      id: 'vrp',
      title: 'Variable Recurring Payments',
      shortDescription: 'Launched Token.io\'s VRP proposition partnering with Tier 1 Financial Institutions',
      fullDescription: 'Led the development and launch of Token.io\'s Variable Recurring Payments proposition in the UK, partnering with Tier 1 Financial Institutions to deliver sweeping and non-sweeping payment use cases.',
      achievements: [
        'Launched UK\'s first commercial VRP capability',
        'Delivered 9.4/10 CSAT score from partners',
        'Drove 85% time-to-market improvement',
        'Generated £980k in first-year revenue'
      ],
      tags: ['Open Banking', 'VRP', 'A2A Payments', 'API Platform'],
      color: 'bg-blue-600',
      icon: '💳'
    },
    {
      id: 'analytics',
      title: 'Payment Analytics Dashboard',
      shortDescription: 'Data-driven platform for tracking A2A payment performance metrics',
      fullDescription: 'Developed data-driven analytics platform for tracking A2A payment performance metrics including conversion rates, success rates, and processing times across different regions and banks.',
      achievements: [
        'Improved data visibility by 75%',
        'Identified optimization opportunities worth £320k annually',
        'Reduced payment failure rates by 18%',
        'Designed intuitive visualization for complex banking metrics'
      ],
      tags: ['Performance Metrics', 'Data Visualization', 'Payment Insights'],
      color: 'bg-purple-600',
      icon: '📊'
    },
    {
      id: 'connectivity',
      title: 'Open Banking Connectivity Network',
      shortDescription: 'Expanded Token.io\'s bank connectivity across 7+ European countries',
      fullDescription: 'Expanded Token.io\'s bank connectivity across 7+ European countries, establishing API connections to over 2500 financial institutions for payment and data retrieval services.',
      achievements: [
        'Connected to 2500+ financial institutions',
        'Expanded to 7 new European markets',
        'Achieved 92% bank coverage in core markets',
        'Reduced integration time by 40%'
      ],
      tags: ['Bank Connectivity', 'API Integration', 'PSD2', 'Scaling'],
      color: 'bg-teal-600',
      icon: '🔌'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Product Leadership Highlights
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border-t-4 ${project.color}`}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            // onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    +{project.tags.length - 2} more
                  </span>
                )}
              </div>
              
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors text-white ${project.color}`}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Temporarily commenting out expanded project details section
      {activeProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600"
        >
          {projects.filter(p => p.id === activeProject).map(project => (
            <div key={project.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-4xl">{project.icon}</span>
              </div>
              
              <p className="text-gray-700 mb-6">{project.fullDescription}</p>
              
              <h4 className="font-semibold text-blue-800 mb-3">Key Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {project.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${project.color} text-white mr-3 flex-shrink-0`}>
                      ✓
                    </div>
                    <p className="text-gray-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  onClick={() => setActiveProject(null)}
                >
                  Close Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
      */}
    </div>
  );
};

export default ProjectShowcase;