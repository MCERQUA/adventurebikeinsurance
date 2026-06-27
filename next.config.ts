import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — REQUIRED for Netlify Forms to capture leads (plain HTML forms).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
