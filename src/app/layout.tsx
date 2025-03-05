import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sam French | Director of Product at Token.io',
  description: 'Sam French - Director of Product at Token.io specializing in Account-to-Account payments, Open Banking, and payment technology. Based in Manchester, UK.',
  keywords: 'Sam French, Director of Product, Token.io, Payment Technology, Open Banking, Account-to-Account Payments, A2A Payments, Manchester, UK, Financial Technology, Product Leadership',
  authors: [{ name: 'Sam French' }],
  openGraph: {
    title: 'Sam French | Director of Product at Token.io',
    description: 'Manchester-based Director of Product specializing in Account-to-Account payments and Open Banking data products at Token.io.',
    url: 'https://www.samfrench.io',
    siteName: 'Sam French - Professional Profile',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sam French | Director of Product at Token.io',
    description: 'Manchester-based Director of Product specializing in Account-to-Account payments and Open Banking technology.',
  },
  alternates: {
    canonical: 'https://www.samfrench.io',
  },
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}