const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack")
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const setEnv = (argv) => {
    let setEnvMode
    if (argv.mode === "development") {
        setEnvMode = require("dotenv").config({ path: "./.env.development" })
    } else if (argv.mode === "production") {
        setEnvMode = require("dotenv").config({ path: "./.env.production" })
    }
    require("dotenv")
    return setEnvMode
}

module.exports = (env, argv) => {
    const envBundleAnalyser = setEnv(argv)
    return {
        entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
        output: {
            path: path.resolve(__dirname, "api"),
            filename: "server.js"
            // filename: "[name].[chunkhash:8].js",
            // sourceMapFilename: "[name].[chunkhash:8].map",
            // chunkFilename: "[id].[chunkhash:8].js"
        },
        resolve: {
            modules: [path.join(__dirname, "src"), "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".json"],
            symlinks: false,
            cacheWithContext: false,
            alias: {
                react: path.join(__dirname, "node_modules", "react")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource"
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".sass", ".css"]
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: "all",
        //         minSize: 20000,
        //         minRemainingSize: 0,
        //         minChunks: 1,
        //         maxAsyncRequests: 30,
        //         maxInitialRequests: 30,
        //         enforceSizeThreshold: 50000,
        //         cacheGroups: {
        //             defaultVendors: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 priority: -10,
        //                 reuseExistingChunk: true
        //             },
        //             default: {
        //                 minChunks: 2,
        //                 priority: -20,
        //                 reuseExistingChunk: true
        //             },
        //             common: {
        //                 name: "common",
        //                 minChunks: 2,
        //                 chunks: "async",
        //                 priority: 10,
        //                 reuseExistingChunk: true,
        //                 enforce: true
        //             }
        //         }
        //     }
        // },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./api/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env)
            }),
            new webpack.NoEmitOnErrorsPlugin()
            // envBundleAnalyser.mode !== 'production' ? new BundleAnalyzerPlugin() : process.exit(0)
        ]
    }
}
