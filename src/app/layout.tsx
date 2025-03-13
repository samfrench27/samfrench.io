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
  title: 'Sam French | Fintech Product Leader & SaaS Developer | Open Banking Specialist',
  description: 'Fintech specialist with expertise in Open Banking, Account-to-Account payments, SaaS development, and product leadership for financial technology solutions.',
  keywords: [
    'Open Banking', 'Fintech', 'Payment Technology', 'Full Stack Developer', 
    'React Developer', 'Node.js Developer', 'JavaScript', 'TypeScript',
    'Account-to-Account Payments', 'A2A Payments', 'Open Banking API', 
    'Payment Solutions', 'Financial Services Technology'
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
    title: 'Sam French | Open Banking Expert & Full Stack Developer',
    description: 'Fintech specialist with expertise in Open Banking and full stack development for financial services technology.',
    url: 'https://www.samfrench.io',
    siteName: 'Sam French - Tech & Finance Professional',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.samfrench.io/profile-photo.png', // Using existing profile photo
        width: 500, // Adjust based on your actual image dimensions
        height: 500, // Adjust based on your actual image dimensions
        alt: 'Sam French - Open Banking Expert & Developer'
      }
    ]
  },
  twitter: {
    card: 'summary', // Changed to summary since we're using a profile photo
    title: 'Sam French | Open Banking Expert & Full Stack Developer',
    description: 'Open Banking technology expert and full stack developer specializing in fintech applications and payment systems.',
    creator: '@samfrench',
    images: ['https://www.samfrench.io/profile-photo.png'], // Using existing profile photo
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
  category: 'technology',
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