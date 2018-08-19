let webpack = require('webpack')
let path = require('path');

module.exports = {
    entry : "./components/App/App.jsx",
    output : {
        filename : "bundle.js",
        path : __dirname + "/bundles"
    },
    mode : "development",
    module : {
        rules : [
            {
                test : /\.(scss|css)$/,
                use : [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'},
                    {loader : 'sass-loader'},
                ]
            },
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : 'babel-loader'
            }
        ]
    },
    plugins : [new webpack.ProgressPlugin()]
}