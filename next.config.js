/* eslint-disable */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.pravatar.cc',
      'images.unsplash.com',
      'https://raw.githubusercontent.com',
      'res.cloudinary.com',
    ],
  },
  experimental: { images: { allowFutureImage: true } },
  output: 'standalone',
};

module.exports = nextConfig;
