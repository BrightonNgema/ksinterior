import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.mp4": {
        type: "asset",
      },
      "*.mov": {
        type: "asset",
      },
      "*.MOV": {
        type: "asset",
      },
      "*.webm": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
