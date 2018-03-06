const Self = require('../../../src');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "main.css"
});

module.exports = {
    entry: {
        main: './index.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                    "css-loader",
                    "sass-loader"
                ],
                fallback: "style-loader"
            })
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'html-webpack-critical-plugin',
        }),
        
        extractSass,

        new Self({
            critical: {
                inline: true
            }
        })
    ],
};
