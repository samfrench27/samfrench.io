/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.samfrench.io',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.samfrench.io/sitemap.xml',
      ],
    },
    sitemapSize: 7000,
    exclude: ['/api/*'],
    generateIndexSitemap: false,
    outDir: 'public',
  }