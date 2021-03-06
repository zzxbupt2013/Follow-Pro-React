var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
    devtool: 'eval-source-map',
    entry:  {
        bundle:__dirname + "/app/App.js",
        bundle1:__dirname+"/app/contactapp.jsx",
        bundle2:__dirname + "/app/AnimatedShoppingList.js",
        bundle3:__dirname + "/app/drag.js",
    },
    output: {
        path: __dirname + "/bundle",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015','react'],
                plugins: [                                             //
                    ["import", {libraryName: "antd", style: "css"}]   //需要配置的地方,按需加载组件
                ]                                                    //
            }
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        contentBase: "./src",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ];
};

module.exports = config;