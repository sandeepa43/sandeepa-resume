import type { NextConfig } from "next";

const portfolioOrigin = "https://sandeepaportfolio-sandeepasingh686.vercel.app";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/portfolio",
        destination: `${portfolioOrigin}/portfolio`,
      },
      {
        source: "/portfolio/:path*",
        destination: `${portfolioOrigin}/portfolio/:path*`,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
