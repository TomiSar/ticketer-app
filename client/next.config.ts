import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'brave-impala-53.convex.cloud', protocol: 'https' },
    ],
  },
};

export default nextConfig;
