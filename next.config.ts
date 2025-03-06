/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This disables ESLint during production builds
    ignoreDuringBuilds: true,
  },
  
  // Common Next.js config options you might want
  reactStrictMode: true,
  
  // If you're using image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // For custom redirects if needed
  async redirects() {
    return [];
  },

  // For custom headers if needed
  async headers() {
    return [];
  },

  // Uncomment if using Next.js output standalone
  // output: 'standalone',
  
  // For experimental features
  experimental: {
    // Optional: Enable app directory features if using them
    // appDir: true,
  },
  
  // For webpack customization if needed
  webpack: (config: any, {  }) => {
    // Make any custom webpack configurations here
    return config;
  },
};

module.exports = nextConfig;