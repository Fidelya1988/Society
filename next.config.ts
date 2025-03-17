import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/a/**',
      search: '',
    },
    {
      protocol: 'https',
      hostname: 'storage.googleapis.com',
      pathname: '/**',
    },
  ],
}
  /* config options here */
};

export default nextConfig;
