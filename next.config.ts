// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     // ensure next/image works with static export
//     unoptimized: true,
//   },
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep next/image compatible with unoptimized image delivery.
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
