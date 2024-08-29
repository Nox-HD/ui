/** @type {import('next').NextConfig} */
const nextConfig = {
    siteUrl: process.env.SITE_URL || 'https://ui.noxhd.com',
    generateRobotsTxt: true,
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true
};

export default nextConfig;
