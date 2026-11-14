import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
if (basePath !== '' && basePath !== '/inscribi-website') {
  throw new Error('Unexpected GitHub Pages base path.');
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
