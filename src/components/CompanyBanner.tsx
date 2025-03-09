"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CompanyBanner() {
  const companies = [
    {
      name: 'Token.io',
      logo: '/logos/token-io.svg',
      alt: 'Token.io logo',
      url: 'https://token.io'
    },
    {
      name: 'BestInvest',
      logo: '/logos/bestinvest.svg',
      alt: 'BestInvest logo',
      url: 'https://www.bestinvest.co.uk'
    },
    {
      name: 'Auden',
      logo: '/logos/auden.svg',
      alt: 'Auden logo',
      url: 'https://www.linkedin.com/company/auden/'
    },
    {
      name: 'Barclays',
      logo: '/logos/barclays.svg',
      alt: 'Barclays logo',
      url: 'https://www.barclays.co.uk'
    }
  ];

  // Function to get custom style for each logo
  const getLogoStyle = (name: string) => {
    if (name === 'Barclays') {
      return {
        height: '30px',
        width: 'auto',
        transform: 'scale(2)',
        marginLeft: '10px',
        marginRight: '10px'
      };
    }
    return {
      height: '30px',
      width: 'auto'
    };
  };

  return (
    <section className="bg-white py-6 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {companies.map((company, index) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ position: 'relative', ...getLogoStyle(company.name) }}>
                <img
                  src={company.logo}
                  alt={company.alt}
                  style={{ height: '100%', width: 'auto' }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}