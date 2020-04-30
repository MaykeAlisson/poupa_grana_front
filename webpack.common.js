const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src', 'infra', 'components'),
            Icons: path.resolve(__dirname, 'src', 'infra', 'icons'),
            Services: path.resolve(__dirname, 'src', 'services'),
            Util: path.resolve(__dirname, 'src', 'infra', 'util'),
            Repository: path.resolve(__dirname, 'src', 'repository'),
            Commons: path.resolve(__dirname, 'src', 'commons')
        },
        extensions: ['.js', '.jsx']
    },
};