const path = require('path');

const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const paths = {
  app: path.join(__dirname, 'app'),
  assets: path.join(__dirname, 'app', 'assets'),
  build: path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
};

const commonConfig = merge([
  {
    context: paths.app,
    entry: {
      app: './index.js',
    },
    resolve: {
      extensions: ['.js', '.json', '.html', '.scss'],
    },
    output: {
      path: paths.build,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
    },
  },
  parts.outputHTML(),
  parts.loadHTML(),
  parts.loadCSS({
    use: [
      'style-loader',
      parts.css(),
      parts.post(),
      parts.sass({
        includePaths: [paths.node_modules, paths.assets],
      }),
    ],
  }),
  parts.loadFiles(),
]);

const prodConfig = merge([
  parts.loadJS({ include: paths.app, exclude: [paths.node_modules, /\.(spec|e2e)\.js$/] }),
]);

const devConfig = merge([
  parts.loadJS({ include: paths.app, exclude: [paths.node_modules, /\.(spec|e2e)\.js$/] }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

const testConfig = merge([
  parts.loadJS({ include: paths.app, exclude: [paths.node_modules] }),
]);

module.exports = (env) => {
  if (env === 'production' || env === 'prod') {
    return merge(commonConfig, prodConfig);
  }
  if (env === 'testing' || env === 'test') {
    return merge(commonConfig, testConfig);
  }
  return merge(commonConfig, devConfig);
};
