import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/github-pages-demo" : "",
  assetPrefix: isProd ? "/github-pages-demo/" : "",
  images: {
    domains: ["thivy.github.io"],
  },
};

export default nextConfig;
