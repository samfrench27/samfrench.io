"use client";
import React from 'react';

export default function Skills() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 relative">
          Technical Skills
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="flex items-center px-4 py-2 bg-gray-800">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm">skills.js</div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="text-gray-400 mb-2">// Professional skills and expertise</div>
            <div className="text-green-300 mb-4">
              const professionalSkills = &#123;<br />
              &nbsp;&nbsp;paymentTech: ['Open Banking', 'Variable Recurring Payments', 'SEPA', 'ISO20022', 'Payment Gateways'],<br />
              &nbsp;&nbsp;productLeadership: ['Strategy', 'Roadmapping', 'OKRs', 'Team Leadership', 'Developer Experience'],<br />
              &nbsp;&nbsp;businessDevelopment: ['Enterprise Sales', 'Partnerships', 'API Monetization', 'P&L Management'],<br />
              &nbsp;&nbsp;regulation: ['CMA Open Banking', 'PSD2', 'PSR', 'FCA', 'EPC'],<br />
              &#125;
            </div>
            
            <div className="text-gray-400 mb-2">// Development skills</div>
            <div className="text-blue-300 mb-4">
              const techStack = &#123;<br />
              &nbsp;&nbsp;frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],<br />
              &nbsp;&nbsp;backend: ['Node.js', 'Express.js', 'RESTful APIs', 'OAuth'],<br />
              &nbsp;&nbsp;database: ['PostgreSQL', 'MongoDB', 'SQL'],<br />
              &nbsp;&nbsp;devOps: ['AWS', 'Cloudflare', 'NGINX', 'PM2', 'Git'],<br />
              &nbsp;&nbsp;tools: ['VS Code', 'Postman', 'Figma', 'GitHub', 'Terminal']<br />
              &#125;
            </div>
            
            <div className="text-gray-400 mb-2">// Data & analytics</div>
            <div className="text-purple-300 mb-2">
              const dataSkills = &#123;<br />
              &nbsp;&nbsp;visualization: ['AWS Quicksight', 'PowerBI', 'D3.js', 'Charts.js'],<br />
              &nbsp;&nbsp;analysis: ['Payment Analytics', 'Conversion Optimization', 'Market Analysis']<br />
              &#125;
            </div>
            
            <div className="flex mt-4">
              <div className="text-cyan-400 mr-1">$</div>
              <div className="text-white mr-1">_</div>
              <div className="w-2 h-5 bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Interactive Demo</h3>
          <p className="text-gray-700 mb-6">Want to see these skills in action? Check out my interactive projects showcasing my full-stack development and product capabilities.</p>
          <a 
            href="#projects" 
            className="inline-block px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </div>
  );
}