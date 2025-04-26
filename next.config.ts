import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'talshir-ibc.com',

      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',

      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',

      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',

      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',

      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',

      },
    ],
  },
}

export default nextConfig;
