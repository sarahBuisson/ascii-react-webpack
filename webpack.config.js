const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {


    entry: {
        server: './src/server/index.js',
        web: './src/web/index.js',
        html: "./src/web/index.html",
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {

                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",

                },

            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/web/index.html",
            filename: "./index.html",
            chunks: ['web']

        })
    ]
};
