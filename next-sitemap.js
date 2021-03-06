/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://eetueskelinen.com",
  generateRobotsTxt: true, // (optional)
  // ...other options

  transform: async (config, path) => {
    // If the current page is `pages/index.js`, set priority to 1
    if (path === "/") {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    if (path === "/about") {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Use defaults for all other cases
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
