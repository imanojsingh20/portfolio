/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.manojsingh.tech',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
