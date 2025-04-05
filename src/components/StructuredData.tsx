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
    "jobTitle": "Director of Product at Token.io",
    "worksFor": {
      "@type": "Organization",
      "name": "Token.io",
      "url": "https://token.io",
      "description": "Open Banking payments platform enabling Account-to-Account transfers",
      "sameAs": [
        "https://www.linkedin.com/company/token-io/",
        "https://twitter.com/token_io"
      ]
    },
    "description": "Sam French is the Director of Product at Token.io, specializing in Open Banking and Account-to-Account payment solutions. Based in Manchester, UK, Sam is a fintech leader with expertise in payment technology and financial services innovation.",
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
      "Fintech",
      "Token.io Platform",
      "PSD2 Compliance",
      "Financial Technology",
      "A2A Payments",
      "Open Banking API Integration"
    ],
    "hasSkill": [
      "Open Banking",
      "A2A Payments",
      "Product Strategy",
      "Payment Systems",
      "API Design",
      "Product Leadership",
      "Fintech Strategy",
      "Financial Services",
      "Token.io Platform"
    ],
    "award": [
      "First Class BSc in Digital and Technology Solutions"
    ]
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sam French - Open Banking & Fintech Expert",
    "description": "Product leader at Token.io with expertise in Open Banking technology, Account-to-Account payments, and fintech solutions for financial services.",
    "url": "https://www.samfrench.io",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "England",
      "addressCountry": "UK"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fintech & Open Banking Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Open Banking Solutions",
            "description": "Strategic guidance on implementing Open Banking payment and data solutions using Token.io and other platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Account-to-Account Payment Strategy",
            "description": "Implementation of A2A payment solutions for financial institutions and fintech companies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payment Technology Consulting",
            "description": "Expert advice on payment systems, Open Banking APIs, and fintech integration"
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

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Sam French?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam French is the Director of Product at Token.io, specializing in Open Banking and Account-to-Account payment solutions. Based in Manchester, UK, he has expertise in payment technology, fintech, and financial services."
        }
      },
      {
        "@type": "Question",
        "name": "What does Sam French do at Token.io?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Token.io, Sam French leads product strategy for Account-to-Account payments and the Global Connectivity Network, expanding market presence across EMEA and driving payment performance improvements."
        }
      },
      {
        "@type": "Question",
        "name": "What are Sam French's areas of expertise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam French specializes in Open Banking, Account-to-Account payments, payment technology, fintech solutions, product strategy, and financial services innovation."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Sam French based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam French is based in Manchester, UK, where he works as the Director of Product at Token.io."
        }
      },
      {
        "@type": "Question",
        "name": "What is Sam French's educational background?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam French holds a First Class BSc in Digital and Technology Solutions from Manchester Metropolitan University."
        }
      }
    ]
  };
  
  // Website Schema for technical SEO - new
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.samfrench.io/",
    "name": "Sam French | Token.io Product Director",
    "description": "Personal website for Sam French, Director of Product at Token.io specializing in Open Banking, Account-to-Account payments, and fintech solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.samfrench.io/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  // Web Page Schema for main page - new
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.samfrench.io/",
    "name": "Sam French | Token.io Product Director | Open Banking Expert",
    "description": "Professional profile of Sam French, Director of Product at Token.io specializing in Open Banking and Account-to-Account payment solutions.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.samfrench.io/"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#about-heading", ".container", "h1", "h2", "p"]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".container"
    },
    "datePublished": "2023-01-01T00:00:00+00:00",
    "dateModified": "2024-03-01T00:00:00+00:00"
  };
  
  // Organization schema for local Manchester presence - new
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.samfrench.io",
    "logo": "https://www.samfrench.io/profile-photo.png",
    "name": "Sam French - Fintech Professional",
    "sameAs": [
      "https://www.linkedin.com/in/sam-french-359b74a8/",
      "https://github.com/samfrench27"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "England",
      "addressCountry": "UK" 
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "professional information",
      "url": "https://www.samfrench.io/#contact"
    }
  };
  
  // JobPosting schema to highlight professional role - new
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Director of Product",
    "datePosted": "2022-01-01T00:00:00+00:00",
    "validThrough": "2025-12-31T00:00:00+00:00",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Token.io",
      "sameAs": "https://token.io",
      "logo": "https://token.io/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manchester",
        "addressRegion": "England",
        "addressCountry": "UK"
      }
    },
    "description": "Leading product strategy for Account-to-Account payments and the Global Connectivity Network at Token.io. Expanding market presence across EMEA and driving payment performance improvements.",
    "skills": "Open Banking, Account-to-Account Payments, Product Strategy, Payment Systems, API Design, Fintech",
    "industry": "Financial Technology, Open Banking, Payment Technology"
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
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="structured-data-jobposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </>
  );
}