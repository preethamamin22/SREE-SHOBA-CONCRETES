/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sreeshobaconcretes.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: [
      'https://sreeshobaconcretes.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
};
