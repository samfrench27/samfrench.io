/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Add HTTP headers for performance & security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(.*).(jpg|jpeg|png|svg|webp|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Add redirects to canonicalize your domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'samfrench.io',
          },
        ],
        destination: 'https://www.samfrench.io/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'samfrench.io',
          },
        ],
        destination: 'https://www.samfrench.io/:path*',
        permanent: true,
      }
    ];
  },
  
  // Optimize output
  output: 'standalone',
  
  // Add compression
  compress: true,
  
  // Experimental features for performance
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;