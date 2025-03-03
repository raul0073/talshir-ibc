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
    ],
  },
}

export default nextConfig;
