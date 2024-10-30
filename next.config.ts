/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io/**'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', '__tests__', 'lib', 'context', 'styles']
  },
};

export default nextConfig;
