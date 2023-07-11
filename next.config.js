//** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['cdn.discordapp.com', 'mooniemoo.io'],
    path: '/*',
  },
};

module.exports = nextConfig;
