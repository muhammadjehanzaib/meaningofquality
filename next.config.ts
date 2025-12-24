import type { NextConfig } from "next";

// Only use static export for production builds (keeps dev fully dynamic)
// const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  // output: isProd ? "export" : undefined,
  images: {
    // ensure next/image works with static export
    unoptimized: true,
  },
};

export default nextConfig;
