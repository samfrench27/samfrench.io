"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const InteractiveJourney = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const careerSteps = [
    {
      id: 'token',
      title: 'Token.io',
      logoSrc: '/logos/token-io.svg',
      logoAlt: 'Token.io logo',
      role: 'Director of Product',
      period: '2022 - Present',
      color: 'bg-blue-600',
      achievements: [
        'Designed and launched Variable Recurring Payments proposition in the UK',
        'Partnered with Tier 1 Financial Institution to launch first commercial VRP agreement',
        'Led market expansion across 7+ European countries',
        'Improved payment conversion to 80% and success rate to 95%',
        
      ]
    },
    {
      id: 'evelyn',
      title: 'Evelyn Partners',
      logoSrc: '/logos/bestinvest.svg',
      logoAlt: 'BestInvest logo',
      role: 'Product Lead, Shared Services',
      period: '2021 - 2022',
      color: 'bg-purple-600',
      achievements: [
        'Managed product development for corporate intranet and investment web apps',
        'Led API transformation program for BestInvest platform',
        'Implemented agile methodologies across development teams',
        'Improved time-to-market for new features by 35%'
      ]
    },
    {
      id: 'auden',
      title: 'Auden',
      logoSrc: '/logos/auden.svg',
      logoAlt: 'Auden logo',
      role: 'Product Delivery Manager',
      period: '2021',
      color: 'bg-teal-600',
      achievements: [
        'Oversaw product delivery for Customer Acquisition value stream',
        'Led company rebrand across website and mobile app',
        'Migrated payment gateway achieving 20% cost reduction',
        'Integrated Open Banking with Experian improving loan acceptance by 12%'
      ]
    },
    {
      id: 'barclays',
      title: 'Barclays',
      logoSrc: '/logos/barclays.svg',
      logoAlt: 'Barclays logo',
      role: 'Project Manager, Open Banking & Strategic Partnerships',
      period: '2017 - 2020',
      color: 'bg-indigo-600',
      achievements: [
        'Led technical delivery of CMA Open Banking PIS and AIS Products',
        'Delivered industry-first account aggregation in Barclays App',
        'Launched Premium API service with MoneySupermarket.com generating £18m revenue',
        'Managed cross-functional team of 12 developers and business analysts'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        My Professional Journey
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
      </h2>
      
      <div className="relative">
        {/* Background Track */}
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gray-200 transform -translate-x-1/2 rounded-full"></div>
        
        {/* Journey nodes with animation */}
        <div className="relative z-10">
          {careerSteps.map((step, index) => (
            <div key={step.id} className="mb-16 relative">
              {/* Timeline node */}
              <motion.div 
                className={`absolute left-1/2 top-0 w-6 h-6 rounded-full ${step.color} border-4 border-white shadow-lg transform -translate-x-1/2 cursor-pointer`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveCard(activeCard === step.id ? null : step.id)}
              />
              
              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <motion.div 
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${step.color} cursor-pointer relative`}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setActiveCard(activeCard === step.id ? null : step.id)}
                >
                  {/* Company Logo */}
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
                    <Image 
                      src={step.logoSrc}
                      alt={step.logoAlt}
                      width={48}
                      height={48}
                      className="object-contain max-h-full"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 pr-14">{step.title}</h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-1">{step.role}</h4>
                  <div className="text-sm text-gray-500 mb-2">{step.period}</div>
                  
                  {/* Achievements (expandable) */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeCard === step.id ? 'auto' : 0,
                      opacity: activeCard === step.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2">
                      {step.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 + idx * 0.1 }}
                        >
                          <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Click indicator */}
                  <div className="mt-2 text-sm text-blue-500">
                    {activeCard === step.id ? "Click to collapse" : "Click to expand"}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveJourney;