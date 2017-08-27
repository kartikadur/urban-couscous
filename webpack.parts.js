const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

exports.devServer = ({ host, port, contentBase } = {}) => ({
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase,
    compress: true,
    historyApiFallback: true,
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    },
    stats: 'errors-only',
  },
});

exports.loadJS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: ['babel-loader'],
      },
    ],
  },
});

exports.loadHTML = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        include,
        exclude,
        use: ['html-loader'],
      },
    ],
  },
});

exports.post = ({ plugins } = { plugins: [autoprefixer] }) => ({
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: () => (plugins),
  },
});

exports.css = () => ({
  loader: 'css-loader',
  options: {
    sourceMap: true,
  },
});

exports.sass = ({ includePaths }) => ({
  loader: 'sass-loader',
  options: {
    includePaths,
    sourceMap: true,
  },
});

exports.loadCSS = ({ include, exclude, use } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        include,
        exclude,
        use,
      },
    ],
  },
});

exports.extractCSS = ({ include, exclude, use } = {}) => {
  const plugin = new ExtractPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.loadFiles = ({ testpattern, include, exclude } = {}) => ({
  module: {
    rules: [{
      include,
      exclude,
      test: testpattern || /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      }],
    }],
  },
});

exports.optimizeChunks = () => {
  const optimize = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: ({ resouce }) => /node_modules/.test(resouce),
  });
  return {
    plugins: [optimize],
  };
};

exports.loadLocalAssets = () => {
  const plugin = new CopyPlugin([
    { from: 'assets', to: 'assets' },
  ]);
  return {
    plugins: [plugin],
  };
};

exports.outputHTML = () => {
  const html = new HTMLPlugin({
    template: 'index.html',
  });
  return {
    plugins: [html],
  };
};

exports.loadD3 = () => ({
  plugins: [
    new webpack.ProvidePlugin({
      d3: 'd3',
      topojson: 'topojson',
    }),
  ],
});
