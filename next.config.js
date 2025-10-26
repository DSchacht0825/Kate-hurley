/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for Netlify static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.katehurley.com',
      },
    ],
  },
};

module.exports = nextConfig;
