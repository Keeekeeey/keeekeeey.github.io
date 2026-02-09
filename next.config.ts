import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath:'/keeekeeey.github.io',
  images:{
    unoptimized: true,
  },
};

module.exports = nextConfig

export default nextConfig;
