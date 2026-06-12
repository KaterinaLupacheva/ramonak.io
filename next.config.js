/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Next 16 persists Turbopack's dev cache by default. Disable it because
    // restored cache sessions stall while compiling the first requested route.
    turbopackFileSystemCacheForDev: false,
  },
};

module.exports = nextConfig;
