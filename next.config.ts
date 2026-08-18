import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ignoreBuildErrors: true,
  },

  allowedDevOrigins: ["192.168.1.7", "192.168.1.12"],

  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zopsoftware-asset.b-cdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cardora.ca",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cardora.ca",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
  },

  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
