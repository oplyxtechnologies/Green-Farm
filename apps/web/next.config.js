/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@green-farm/ui", "@green-farm/db", "@green-farm/config"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
