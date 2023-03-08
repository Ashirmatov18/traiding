/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },

  // images: {
  //   unoptimized: "true",
  // },
};

module.exports = nextConfig;
