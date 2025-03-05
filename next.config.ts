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
    ],
  },
}

export default nextConfig;
