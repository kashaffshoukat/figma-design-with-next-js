/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dynamic-media-cdn.tripadvisor.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  