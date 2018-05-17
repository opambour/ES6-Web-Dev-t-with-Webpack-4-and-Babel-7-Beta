// const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// const serverSideConfig = {
//     target: 'node',
//     // target: "webworker", // WebWorker
//     // target: "node", // Node.js via require
//     // target: "async-node", // Node.js via fs and vm
//     // target: "node-webkit", // nw.js
//     // target: "electron-main", // electron, main process
//     // target: "electron-renderer", // electron, renderer process
//     mode: 'production',
//     devtool: 'source-map',
//     resolve: {
//         // Add `.ts` and `.tsx` as a resolvable extension.
//         extensions: ['.tsx', '.ts', '.js']
//     },
//     watch: true,
//     watchOptions: {
//         aggregateTimeout: 300,
//         poll: 1000, // refresh and watch every second
//         ignored: /node_modules/
//     },
//     entry: {

//     },
//     output: {
//         filename: '[name].build.js',
//         path: path.resolve(__dirname, '/dist')
//     },
//     module: {
//         rules: {
//             // es6 rules
//         }
//     }
// };

const clientSideseConfig = {
    target: 'web',
    // mode: 'production',
    devtool: 'source-map',
    resolve: {
        // Add `.ts`, `.tsx`, '.js' and '.es6' as a resolvable extension.
        extensions: ['.tsx', '.ts', '.js', '.es6']
    },
    watch: true, // Watch the filesystem for changes
    watchOptions: { // The polling interval for watching (also enable polling)
        aggregateTimeout: 300,
        poll: 1000, // refresh and watch every second
        ignored: /node_modules/
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     hot: true,
    //     port: 9000
    // },
    entry: {
        'client_side/test': './src/client_side/test.js'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // eslint
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader',
            },
            // es6 rules
            {
                test: /\.js$/,
                use: [
                    'cache-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                require('@babel/plugin-proposal-object-rest-spread')
                            ],
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [
        // A webpack plugin to remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist'], {
            // options
            verbose: true,
            dry: false
        }),
        // /**  HMR allows all kinds of modules to be updated at runtime without the need for a full refresh.
        //  * HMR is not intended for use in production.
        //  */
        // new webpack.HotModuleReplacementPlugin({
        //     // Options...
        //     title: 'Dev: Hot Module Replacement...'
        // })
    ]
};

module.exports = clientSideseConfig;

// multiple targets and configuration
// module.exports = [serverSideConfig, clientSideseConfig];