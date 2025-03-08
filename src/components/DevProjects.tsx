"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiMongodb, SiPostgresql } from 'react-icons/si';

const DevProjects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  const projects = [
    {
      id: 'saas-starter',
      title: 'SaaS Starter Kit',
      description: 'A complete starter kit for building SaaS applications with Next.js, Tailwind CSS, and TypeScript.',
      longDescription: 'A production-ready SaaS starter kit featuring authentication, subscription billing with Stripe, a dashboard UI, and a serverless backend. Built with performance and developer experience in mind.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
      techIcons: [
        <SiNextdotjs key="next" className="text-white" />,
        <FaReact key="react" className="text-blue-400" />,
        <SiTypescript key="ts" className="text-blue-500" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />,
        <SiPostgresql key="postgres" className="text-blue-300" />
      ],
      githubUrl: 'https://github.com/samfrench27/saas-starter',
      demoUrl: 'https://saas-starter-demo.samfrench.io',
      imageUrl: '/projects/saas-starter.png',
      features: [
        'User authentication with NextAuth.js',
        'Subscription billing with Stripe',
        'Dashboard UI with charts and data visualization',
        'Responsive design with Tailwind CSS',
        'Dark/light mode support',
        'TypeScript for type safety'
      ]
    },
    {
      id: 'api-gateway',
      title: 'API Gateway',
      description: 'A custom API gateway for microservices architecture with rate limiting, caching, and logging.',
      longDescription: 'A high-performance API gateway built with Node.js that routes requests to appropriate microservices, handles authentication, implements rate limiting, and provides logging and monitoring capabilities.',
      techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS', 'TypeScript'],
      techIcons: [
        <FaNodeJs key="node" className="text-green-500" />,
        <SiTypescript key="ts" className="text-blue-500" />,
        <FaDatabase key="redis" className="text-red-500" />,
        <SiDocker key="docker" className="text-blue-400" />,
        
      ],
      githubUrl: 'https://github.com/samfrench27/api-gateway',
      demoUrl: 'https://api-gateway-docs.samfrench.io',
      imageUrl: '/projects/api-gateway.png',
      features: [
        'Request routing to microservices',
        'Authentication and authorization',
        'Rate limiting and throttling',
        'Response caching with Redis',
        'Logging and monitoring',
        'Containerized with Docker'
      ]
    },
    {
      id: 'component-library',
      title: 'React Component Library',
      description: 'A collection of reusable React components with TypeScript support and comprehensive documentation.',
      longDescription: 'A comprehensive library of React components built with TypeScript and styled with Tailwind CSS. Includes form elements, data visualization components, navigation, and more, all with accessibility baked in.',
      techStack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Jest', 'GitHub Actions'],
      techIcons: [
        <FaReact key="react" className="text-blue-400" />,
        <SiTypescript key="ts" className="text-blue-500" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />
      ],
      githubUrl: 'https://github.com/samfrench27/react-components',
      demoUrl: 'https://components.samfrench.io',
      imageUrl: '/projects/component-library.png',
      features: [
        'Accessible and responsive components',
        'Comprehensive documentation with Storybook',
        'Theme customization',
        'Form components with validation',
        'Data visualization components',
        'Unit and integration tests'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-pink-500 transition-all"
            whileHover={{ y: -10 }}
            layoutId={`card-container-${project.id}`}
            onClick={() => setExpandedProject(project.id)}
          >
            <div className="h-48 bg-gray-700 flex items-center justify-center p-6">
              <div className="grid grid-cols-3 gap-4">
                {project.techIcons.map((icon, index) => (
                  <div key={index} className="text-3xl flex items-center justify-center">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              
              <button
                className="w-full py-2 mt-2 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors"
              >
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Expanded project view */}
      {expandedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedProject(null)}
        >
          <motion.div
            layoutId={`card-container-${expandedProject}`}
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {projects
              .filter((p) => p.id === expandedProject)
              .map((project) => (
                <div key={project.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{project.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-pink-500 mr-2">•</div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DevProjects;