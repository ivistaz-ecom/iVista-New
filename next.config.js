module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/blogs/from-chatgpt-to-jasper-exploring-the-best-ai-tools-for-digital-marketers",
        destination: "/blogs/the-10-best-ai-marketing-tools-in-2025",
        permanent: true, // 301 redirect (permanent)
      },
    ];
  },
};
