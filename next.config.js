/** @type {import('next').NextConfig} */
// const nextConfig = {
// experimental: {
//   appDir: true,}
// };

// module.exports = nextConfig;
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },

  // Add this section to ensure that the `media` folder is properly generated during the build process
  images: {
    loader: "imgix",
    path: "",
  },
};
