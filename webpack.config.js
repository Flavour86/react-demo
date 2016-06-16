var webpack = require('webpack');
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: path.resolve(),
    port: 33
  },
  entry:[
    path.resolve('src/entry.js')
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[id].[hash].js'
  },
  module: {
    preLoaders:[
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/")],
        exclude: ["node_modules"]
      },
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css!postcss-loader' },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1&plugins[]=transform-decorators-legacy'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=images/[hash].[ext]'
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  },
  eslint: {
    configFile: '.eslintrc' //Rules for eslint
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBrowserPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'a demo by react',
      filename: './index.html',
      hash: true
    })
  ],
  resolve: {
    root: path.resolve(),
    modulesDirectories: ['src','node_modules'],
    extensions: ['', '.js', '.jsx', '.html', '.css', '.scss']
  }
};
