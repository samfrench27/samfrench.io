import React from 'react';
import Script from 'next/script';

export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sam French",
    "url": "https://www.samfrench.io",
    "image": "https://www.samfrench.io/profile-photo.png",
    "sameAs": [
      "https://www.linkedin.com/in/sam-french-359b74a8/",
      "https://github.com/samfrench27"
    ],
    "jobTitle": ["Director of Product", "Full Stack Developer"],
    "worksFor": {
      "@type": "Organization",
      "name": "Token.io",
      "url": "https://token.io",
      "description": "Open Banking payments platform enabling Account-to-Account transfers"
    },
    "description": "Open Banking expert and full stack developer specializing in payment technology and fintech solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "England",
      "addressCountry": "UK"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Manchester Metropolitan University"
    },
    "knowsAbout": [
      "Account-to-Account Payments",
      "Open Banking",
      "Payment Technology",
      "Variable Recurring Payments",
      "Full Stack Development",
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Financial Technology"
    ],
    "hasSkill": [
      "Open Banking",
      "A2A Payments",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "NextJS",
      "Payment Systems",
      "API Design",
      "Product Leadership"
    ]
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sam French - Open Banking & Development",
    "description": "Expert in Open Banking technology, Account-to-Account payments and full stack development for financial services.",
    "url": "https://www.samfrench.io",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "England",
      "addressCountry": "UK"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Open Banking Consulting",
            "description": "Strategic guidance on implementing Open Banking payment and data solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Development",
            "description": "Development of fintech applications using React, Node.js, and modern web technologies"
          }
        }
      ]
    }
  };

     const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.samfrench.io"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.samfrench.io/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Experience",
          "item": "https://www.samfrench.io/#experience"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Projects",
          "item": "https://www.samfrench.io/#projects"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://www.samfrench.io/#contact"
        }
      ]
    };
  
    return (
      <>
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
        />
        <Script
          id="structured-data-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
        />
        <Script
          id="structured-data-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </>
    );
  }