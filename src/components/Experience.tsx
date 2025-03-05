"use client";
import React from 'react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Token.io',
      position: 'Director of Product, VRP & Connectivity',
      period: '2022 - Present',
      description: [
        'Designed and launched Variable Recurring Payments proposition in the UK',
        'Partnered with Tier 1 Financial Institution to launch first commercial VRP agreement',
        'Led market expansion across 7+ European countries',
        'Improved payment conversion to 80% and success rate to 95%',
        'Generated £1.2mn in Annual Recurring Revenue'
      ],
      side: 'left'
    },
    {
      id: 2,
      company: 'Evelyn Partners',
      position: 'Product Lead, Shared Services',
      period: '2021 - 2022',
      description: [
        'Managed product development for corporate intranet and investment web apps',
        'Led API transformation program for BestInvest platform'
      ],
      side: 'right'
    },
    {
      id: 3,
      company: 'Auden',
      position: 'Product Delivery Manager',
      period: '2021',
      description: [
        'Oversaw product delivery for Customer Acquisition value stream',
        'Led company rebrand across website and mobile app',
        'Migrated payment gateway achieving 20% cost reduction',
        'Integrated Open Banking with Experian improving loan acceptance by 12%'
      ],
      side: 'left'
    },
    {
      id: 4,
      company: 'Barclays',
      position: 'Project Manager, Open Banking & Strategic Partnerships',
      period: '2017 - 2020',
      description: [
        'Led technical delivery of CMA Open Banking PIS and AIS Products',
        'Delivered industry-first account aggregation in Barclays App',
        'Launched Premium API service with MoneySupermarket.com generating £18m revenue'
      ],
      side: 'right'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 relative">
          Professional Experience
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp) => (
              <div key={exp.id} className={`relative md:flex ${exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'} mb-12`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-5 w-5 h-5 rounded-full border-4 border-cyan-500 bg-white transform -translate-x-1/2 z-10"></div>
                
                {/* Content card */}
                <div className={`bg-white p-6 rounded-lg shadow-md md:w-5/12 relative ${exp.side === 'right' ? 'md:ml-auto' : ''}`}>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{exp.company}</h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-1">{exp.position}</h4>
                  <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                  <ul className="list-none space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="pl-5 relative text-gray-700">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-cyan-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}