module.exports = {
  productionSourceMap: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            priority: 5,
          },
        },
      },
    },
    output: {
      // filename: '[name].js',
      // filename(f) {
      //   console.log(f);
      //   return 'app.js';
      // },
      chunkFilename: '[name][contenthash].js?t=[contenthash]',
      // filename(fileData) {
      //   return 'the-file-[name].js';
      // },
      // chunkLoadTimeout: 30000,
    },
  },
  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // port: 8085, // CHANGE YOUR PORT HERE!
    // https: true,
    // hotOnly: false,
  },
  pwa: {
    name: 'the site',
    serviceWorker: false,
  },
};
