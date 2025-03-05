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
            {/* Comment should be inside braces */}
            <div className="text-gray-400 mb-2">{`// Professional skills and expertise`}</div>
            <div className="text-green-300 mb-4">
              const professionalSkills = &#123;<br />
              &nbsp;&nbsp;paymentTech: [&apos;Open Banking&apos;, &apos;A2A Payments&apos;, &apos;SEPA&apos;, &apos;ISO20022&apos;, &apos;Payment Gateways&apos;],<br />
              &nbsp;&nbsp;productLeadership: [&apos;Strategy&apos;, &apos;Roadmapping&apos;, &apos;OKRs&apos;, &apos;Team Leadership&apos;, &apos;Developer Experience&apos;],<br />
              &nbsp;&nbsp;businessDevelopment: [&apos;Enterprise Sales&apos;, &apos;Partnerships&apos;, &apos;API Monetization&apos;, &apos;P&L Management&apos;],<br />
              &nbsp;&nbsp;regulation: [&apos;CMA Open Banking&apos;, &apos;PSD2&apos;, &apos;PSR&apos;, &apos;FCA&apos;, &apos;EPC&apos;],<br />
              &#125;
            </div>
            
            {/* Comment should be inside braces */}
            <div className="text-gray-400 mb-2">{`// Development skills`}</div>
            <div className="text-blue-300 mb-4">
              const techStack = &#123;<br />
              &nbsp;&nbsp;frontend: [&apos;HTML&apos;, &apos;CSS&apos;, &apos;JavaScript&apos;, &apos;React&apos;, &apos;Responsive Design&apos;],<br />
              &nbsp;&nbsp;backend: [&apos;Node.js&apos;, &apos;Express.js&apos;, &apos;RESTful APIs&apos;, &apos;OAuth&apos;],<br />
              &nbsp;&nbsp;database: [&apos;PostgreSQL&apos;, &apos;MongoDB&apos;, &apos;SQL&apos;],<br />
              &nbsp;&nbsp;devOps: [&apos;AWS&apos;, &apos;Cloudflare&apos;, &apos;NGINX&apos;, &apos;PM2&apos;, &apos;Git&apos;],<br />
              &nbsp;&nbsp;tools: [&apos;VS Code&apos;, &apos;Postman&apos;, &apos;Figma&apos;, &apos;GitHub&apos;, &apos;Terminal&apos;]<br />
              &#125;
            </div>
            
            {/* Comment should be inside braces */}
            <div className="text-gray-400 mb-2">{`// Data & analytics`}</div>
            <div className="text-purple-300 mb-2">
              const dataSkills = &#123;<br />
              &nbsp;&nbsp;visualization: [&apos;AWS Quicksight&apos;, &apos;PowerBI&apos;, &apos;D3.js&apos;, &apos;Charts.js&apos;],<br />
              &nbsp;&nbsp;analysis: [&apos;Payment Analytics&apos;, &apos;Conversion Optimization&apos;, &apos;Market Analysis&apos;]<br />
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
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Professional Focus</h3>
          <p className="text-gray-700 mb-6">My expertise in Account-to-Account payments and Open Banking data products helps Token.io deliver innovative payment solutions to financial institutions and businesses across Europe.</p>
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