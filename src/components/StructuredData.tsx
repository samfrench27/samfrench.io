import React from 'react';
import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sam French",
    "url": "https://www.samfrench.io",
    "image": "https://www.samfrench.io/profile-photo.png",
    "sameAs": [
      "https://www.linkedin.com/in/sam-french-359b74a8/",
      "https://twitter.com/",
      "https://medium.com/"
    ],
    "jobTitle": "Director of Product",
    "worksFor": {
      "@type": "Organization",
      "name": "Token.io",
      "url": "https://token.io"
    },
    "description": "Director of Product at Token.io specializing in Account-to-Account payments and Open Banking data products.",
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
      "Product Strategy",
      "Product Leadership",
      "FinTech",
      "Financial Services"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}