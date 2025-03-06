"use client";
import React, { useState } from 'react';

const SkillRadarChart = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'payment', name: 'Payment Technology' },
    { id: 'product', name: 'Product Leadership' },
    { id: 'tech', name: 'Technical Skills' }
  ];
  
  const skills = [
    { name: 'Open Banking', level: 95, category: 'payment' },
    { name: 'A2A Payments', level: 90, category: 'payment' },
    { name: 'Payment Gateways', level: 85, category: 'payment' },
    { name: 'SEPA', level: 80, category: 'payment' },
    { name: 'ISO20022', level: 75, category: 'payment' },
    
    { name: 'Product Strategy', level: 95, category: 'product' },
    { name: 'Roadmap Planning', level: 90, category: 'product' },
    { name: 'Team Leadership', level: 85, category: 'product' },
    { name: 'Stakeholder Management', level: 90, category: 'product' },
    { name: 'OKRs', level: 80, category: 'product' },
    
    { name: 'JavaScript', level: 85, category: 'tech' },
    { name: 'React', level: 80, category: 'tech' },
    { name: 'RESTful APIs', level: 90, category: 'tech' },
    { name: 'Node.js', level: 75, category: 'tech' },
    { name: 'API Design', level: 85, category: 'tech' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  // Sort skills by level in descending order
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        My Skills & Expertise
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
      </h2>
      
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {skillCategories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills bars */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Expertise Levels</h3>
          <div className="space-y-4">
            {sortedSkills.slice(0, 7).map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Radar/Spider Chart (Simplified version using CSS) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Background circles */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-100 opacity-60"></div>
            <div className="absolute inset-4 rounded-full border-2 border-gray-100 opacity-60"></div>
            <div className="absolute inset-8 rounded-full border-2 border-gray-100 opacity-60"></div>
            <div className="absolute inset-12 rounded-full border-2 border-gray-100 opacity-60"></div>
            <div className="absolute inset-16 rounded-full border-2 border-gray-100 opacity-60"></div>
            
            {/* Skill points */}
            {sortedSkills.slice(0, 5).map((skill, index) => {
              const angle = (index * (360 / 5)) * (Math.PI / 180);
              const radius = (skill.level / 100) * 120; // Max radius is 120px
              const x = Math.cos(angle) * radius + 128; // 128 is center
              const y = Math.sin(angle) * radius + 128;
              
              return (
                <div key={skill.name} className="absolute">
                  {/* Line from center */}
                  <div 
                    className="absolute bg-gray-200 w-1 origin-bottom"
                    style={{
                      height: '128px',
                      left: '128px',
                      top: '0',
                      transformOrigin: 'bottom center',
                      transform: `rotate(${index * (360 / 5)}deg)`
                    }}
                  ></div>
                  
                  {/* Skill point */}
                  <div 
                    className="absolute w-4 h-4 bg-blue-600 rounded-full -ml-2 -mt-2 z-10"
                    style={{ left: x, top: y }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-blue-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {skill.name}: {skill.level}%
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Skill polygon */}
            <svg className="absolute inset-0 w-full h-full">
              <polygon 
                points={sortedSkills.slice(0, 5).map((skill, index) => {
                  const angle = (index * (360 / 5)) * (Math.PI / 180);
                  const radius = (skill.level / 100) * 120;
                  const x = Math.cos(angle) * radius + 128;
                  const y = Math.sin(angle) * radius + 128;
                  return `${x},${y}`;
                }).join(' ')}
                className="fill-blue-100 stroke-blue-600 stroke-2 opacity-70"
              />
            </svg>
            
            {/* Center point */}
            <div className="absolute w-2 h-2 bg-blue-900 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-6">
          With over 8 years in payment technology and product leadership, I bring a unique blend of technical knowledge and strategic vision to drive successful digital products.
        </p>
      </div>
    </div>
  );
};

export default SkillRadarChart;