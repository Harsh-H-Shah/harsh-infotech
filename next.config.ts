import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/harsh-infotech"); empty for local dev and custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
