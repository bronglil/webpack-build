// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point: Main file to be bundled
    entry: './src/index.js',

    // Output: Location where bundled files are generated
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Automatically clean the output directory before each build
    },

    // Development mode with source maps for easier debugging
    mode: 'development',

    // Module rules: Specify how to handle different file types
    module: {
        rules: [
            // Transpile ES6+ and JSX syntax using Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // Load CSS files and process them
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Load images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    // Plugins: Additional functionality for Webpack
    plugins: [
        // Generates an HTML file for the app entry point and injects the bundled JS
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Webpack React Project',
        }),
    ],

    // Dev Server: Local server for development with hot-reloading
    devServer: {
        static: './dist',
        port: 3000,
        open: true, // Opens the browser after the server has been started
        compress: true, // Enable gzip compression
    },
};
