import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/github-pages-demo",
  images: {
    domains: ["thivy.github.io"],
  },
};

export default nextConfig;
