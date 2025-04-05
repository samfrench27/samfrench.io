// src/app/layout.tsx - Updated metadata
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from '@/components/ThemeContext';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.samfrench.io'),
  title: 'Sam French | Token.io Product Director | Fintech & Open Banking Expert',
  description: 'Sam French, Director of Product at Token.io specializing in Open Banking, Account-to-Account payments, and fintech solutions. Based in Manchester, UK with expertise in payment technology and financial services.',
  keywords: [
    'Sam French Token', 'Sam French Fintech', 'Sam French Token.io', 
    'Open Banking', 'Fintech', 'Payment Technology', 'Token.io Product Director',
    'Account-to-Account Payments', 'A2A Payments', 'Open Banking API', 
    'Payment Solutions', 'Financial Services Technology', 'Manchester Fintech',
    'Token.io', 'Sam French Manchester', 'VRP payments', 'Variable Recurring Payments'
  ],
  authors: [{ name: 'Sam French', url: 'https://www.samfrench.io' }],
  creator: 'Sam French',
  publisher: 'Sam French',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Sam French | Token.io Product Director | Fintech & Open Banking Expert',
    description: 'Sam French, Director of Product at Token.io. Leading Account-to-Account payment solutions and Open Banking connectivity across EMEA. Manchester-based fintech professional with expertise in payment technology.',
    url: 'https://www.samfrench.io',
    siteName: 'Sam French - Fintech & Open Banking Professional',
    locale: 'en_GB',
    type: 'profile',
    images: [
      {
        url: 'https://www.samfrench.io/profile-photo.png',
        width: 500,
        height: 500,
        alt: 'Sam French - Token.io Product Director'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Sam French | Token.io Product Director | Fintech Expert',
    description: 'Director of Product at Token.io, leading Account-to-Account payment solutions. Open Banking expert specializing in fintech and payment technology.',
    creator: '@samfrench',
    images: ['https://www.samfrench.io/profile-photo.png'],
  },
  alternates: {
    canonical: 'https://www.samfrench.io',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '64x64 32x32 24x24 16x16' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        rel: 'icon'
      },
      {
        url: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        rel: 'icon'
      },
      {
        url: '/site.webmanifest',
        rel: 'manifest'
      }
    ]
  },
  manifest: '/site.webmanifest',
  category: 'finance',
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'google-site-verification': 'your-google-verification-code'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preload" href="/profile-photo.png" as="image" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:site_name" content="Sam French | Token.io Product Director" />
        <meta property="profile:first_name" content="Sam" />
        <meta property="profile:last_name" content="French" />
        <meta property="profile:username" content="samfrench" />
        <meta property="profile:gender" content="male" />
        
        {/* Technical SEO enhancements */}
        <link rel="canonical" href="https://www.samfrench.io" />
        <meta name="geo.region" content="GB-MAN" />
        <meta name="geo.placename" content="Manchester" />
        <meta name="geo.position" content="53.4808;-2.2426" />
        <meta name="ICBM" content="53.4808, -2.2426" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Sam French" />
        <meta name="twitter:label2" content="Expertise" />
        <meta name="twitter:data2" content="Open Banking, Fintech, Account-to-Account Payments" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <StructuredData />
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}