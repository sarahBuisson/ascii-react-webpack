const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {


    entry: {
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
                    options: {

                "presets": ["@babel/preset-env",
                    "@babel/preset-react"
                ],
                "plugins": [
                    [
                        "@babel/transform-runtime"  //needed for the server
                    ],

                    [
                        "@babel/plugin-proposal-class-properties"   //needed to have propertie function in js class
                    ]


                ]



    }
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
            },       { test: /\.css$/, loader: "style-loader!css-loader" }]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/web/index.html",
            filename: "./index.html",
            chunks: ['web'],

        })
    ]
};
