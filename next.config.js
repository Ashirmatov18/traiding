/** @type {import('next').NextConfig} */
// const nextConfig = {
// experimental: {
//   appDir: true,
// },
// images: {
//   unoptimized: "true",
// },
// reactStrictMode: true,
// };

// module.exports = nextConfig;
// module.exports = {
//   webpack: (config, options) => {
//     config.output = {
//       path: "/",
//       filename: "bundle.js",
//       publicPath: "/public/",
//     };

//     return config;
//   },
// };
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "/_next/static/", // <-- Configure publicPath
          outputPath: "static/", // <-- Configure outputPath
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};
