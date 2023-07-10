/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
        pathname: '/gcs/files/*',
      },
    ],
  },
};

module.exports = nextConfig;
