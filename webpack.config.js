const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/, // This will match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add React preset
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Webpack React Project',
    }),
  ],

  resolve: {
    fallback: {
      os: false, // Disable os module
      fs: false, // Disable fs module
      http: false, // Disable http module
      https: false, // Disable https module
      path: require.resolve('path-browserify'), // Polyfill path module
      zlib: false, // Disable zlib module
    },
  },

  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    compress: true,
  },
};
