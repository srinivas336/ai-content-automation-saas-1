import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: "/home/srinivasrathod336/saas-bootcamp",
  },
};

export default nextConfig;
