import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
};

export default nextConfig;
