import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "image.tmdb.org",
      "avatars.githubusercontent.com",
      "www.themoviedb.org",
      "media.themoviedb.org",
    ],
  },
};

export default nextConfig;
