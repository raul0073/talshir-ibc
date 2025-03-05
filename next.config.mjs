import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
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
};
 
export default withNextIntl(nextConfig);