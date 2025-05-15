/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://augmentworkforce.github.io',
    generateRobotsTxt: true,
    trailingSlash: true,
    generateIndexSitemap: false,
    outDir: './out',
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
  };