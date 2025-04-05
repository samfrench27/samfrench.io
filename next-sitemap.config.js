/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: 'https://www.samfrench.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.samfrench.io/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Main pages get higher priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('#about')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('#experience')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('#contact')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('#projects')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('#skills')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};