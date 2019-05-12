const path = require('path');

const nodeExternals = require('webpack-node-externals')
module.exports = {


    entry: {
        server: './src/server/index.js',
        "babel-polyfill":"babel-polyfill"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {

                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",

                },

            }
        ]
    },

};
