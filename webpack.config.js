const path = require('path');

const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const paths = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
};

const commonConfig = merge([
  {
    entry: {
      app: paths.app,
    },
    output: {
      path: paths.build,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
    },
  },
  parts.outputHTML(),
  parts.loadJS(),
  parts.loadHTML(),
  parts.loadCSS({
    use: [
      'style-loader',
      parts.css(),
      parts.post(),
      parts.sass({
        includePaths: [paths.node_modules],
      }),
    ],
  }),
  parts.loadFiles(),
]);

const productionConfig = merge([

]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
