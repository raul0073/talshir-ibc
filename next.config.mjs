import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'talshir-ibc.com',
              pathname: '/**',
    
          },
          {
            protocol: 'https',
            hostname: 'files.talshir-ibc.com',
              pathname: '/**',
    
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
};
 
export default withNextIntl(nextConfig);