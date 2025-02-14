import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptions} from "./types/config";

export const buildPlugins = (option: BuildOptions): webpack.WebpackPluginInstance[] => {
    const {isDev, paths} = option;

    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        })
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    return plugins;
};