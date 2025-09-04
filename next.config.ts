import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // ensure next/image works with static export
    unoptimized: true,
  },
};

export default nextConfig;
